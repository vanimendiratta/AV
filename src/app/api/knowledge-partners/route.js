// app/api/knowledge-partners/route.js
import { NextResponse } from 'next/server';

const partners = [
  {
    name: "Srishti Bhatt",
    description: "Certified perinatal counselor...",
    logo: "https://example.com/images/srishti_bhatt.png"
  },
  // ... more data
];

export async function GET() {
  return NextResponse.json(partners);
}