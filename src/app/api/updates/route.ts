import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Update from '@/models/Update';

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    let query: any = { isActive: true };
    if (type) {
      query.type = type;
    }
    
    // Sort by newest first
    const updates = await Update.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: updates });
  } catch (error) {
    console.error('Failed to fetch updates in college app:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch updates' }, { status: 500 });
  }
}
