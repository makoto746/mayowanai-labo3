"use client";

import { useState } from "react";
import { FAQS } from "@/constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="font-bold text-gray-800 pr-4 text-sm sm:text-base">
          Q. {question}
        </span>
        <span className="flex-shrink-0 text-amber-500 text-lg sm:text-xl font-bold">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-white">
          <div className="border-t border-gray-100 pt-3 sm:pt-4">
            <p className="text-gray-600 leading-relaxed text-sm">
              A. {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            FAQ
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">
            {FAQS.title}
          </h2>
        </div>

        {/* Q&Aリスト */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
