'use client'

import { ReactNode } from 'react';

interface MemberzoneBaseProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function MemberzoneBase({ children, isOpen = false, onClose }: MemberzoneBaseProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
