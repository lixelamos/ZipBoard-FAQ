import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 dark:border-gray-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-base font-medium text-gray-900 dark:text-white">
          {question}
        </span>

        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <MinusIcon className="w-5 h-5 text-gray-900 dark:text-white" />
          ) : (
            <PlusIcon className="w-5 h-5 text-gray-900 dark:text-white" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="pb-4 pr-4 text-sm text-gray-600 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}
