// components/CursorHoverWrapper.tsx
"use client";

import React, { ReactNode } from 'react';

interface CursorHoverWrapperProps {
  children: ReactNode;
}

export default function CursorHoverWrapper({ children }: CursorHoverWrapperProps) {
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    
    // Check if the hovered element is a link, button, or any other interactive element
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('interactive')) {
      e.currentTarget.style.cursor = 'url("/my_face_pointer_point.png"), auto';
    } else {
      e.currentTarget.style.cursor = 'url("/my_face_pointer_norm.png"), auto';
    }
  };

  return (
    <div
      style={{ cursor: 'inherit' }} // Inherit from parent
      onMouseOver={handleMouseOver}
    >
      {children}
    </div>
  );
}
