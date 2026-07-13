import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';
import rateLimit from '@/lib/rateLimit';

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    
    // Rate limit: Max 5 requests per minute per IP
    try {
      await limiter.check(5, ip);
    } catch {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, mobile, email, programme, message } = body;

    // Basic validation
    if (!name || !mobile || !programme) {
      return NextResponse.json(
        { error: 'Name, Mobile Number, and Programme are required fields.' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newEnquiry = await Enquiry.create({
      name,
      mobile,
      email,
      programme,
      message,
    });

    return NextResponse.json(
      { message: 'Enquiry submitted successfully', enquiry: newEnquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your enquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
