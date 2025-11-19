'use client'

import { useState } from 'react';
import MemberzoneBase from './MemberzoneBase';

export default function MemberzoneSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Masuk / Daftar
      </button>

      <MemberzoneBase isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Member Zone</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Masuk untuk mengakses konten eksklusif dan fitur khusus member.
            </p>
            
            <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Masuk dengan Email
            </button>
            
            <div className="text-center text-sm text-gray-600">
              Belum punya akun? <a href="/daftar" className="text-blue-600 hover:underline">Daftar di sini</a>
            </div>
          </div>
        </div>
      </MemberzoneBase>
    </>
  );
}
