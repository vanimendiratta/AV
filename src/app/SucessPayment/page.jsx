import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PaymentSuccess = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center relative">
        {/* Payment Success Image */}
        <Image
          src="/logo.png" // Make sure this image exists in your public folder
          alt="Payment Success"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment! Your transaction was successful. You will receive a confirmation email shortly.
        </p>

        {/* Return to Home Button */}
        <Link href="/" passHref>
          <button className="bg-[#FFB74D] text-[#3E2723] font-bold py-2 px-6 rounded-lg hover:bg-[#FFA726] transition-colors">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
