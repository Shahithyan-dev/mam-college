"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition shadow-sm mb-6"
    >
      <ArrowLeft size={18} />
      <span>Go Back</span>
    </button>
  );
}
