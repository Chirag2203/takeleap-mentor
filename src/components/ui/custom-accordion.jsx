import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn is a utility function for conditional classNames

const CustomAccordion = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

const CustomAccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="w-full border-b border-gray-500">
      <div
        className="flex w-full  gap-2 items-center justify-between py-4 font-medium transition-all cursor-pointer"
        onClick={onClick}
      >
        {title}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="w-full overflow-hidden text-sm transition-all animate-accordion-down">
          <div className="pb-4 pt-0">{children}</div>
        </div>
      )}
    </div>
  );
};

export { CustomAccordion, CustomAccordionItem };
