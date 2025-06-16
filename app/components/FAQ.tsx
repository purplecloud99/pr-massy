'use client';
import {
  activeGroup
} from "@/app/utils/globals";
import { useEffect } from "react";
export default function FAQ() {
  useEffect(() => {
    activeGroup('.faq');
  }, [])
  return (
    <div className="faq-section hue-gradient flex-1">
      {[...Array(4)].map((_, i) => (
        <div className={`faq ${i === 0 ? 'active' : ''}`} key={i}>
          <div className="faq-summary gradient-target"
            style={{ '--i': `${i * 2}` } as React.CSSProperties}
          >
            <span>What is the delivery area?</span>
          </div>
          <div className="faq-content">
            <div className="bg-[var(--orange)] rounded-xl p-4 ms-5 slide-left">
              We proudly deliver to all of Orange County and most cities across Los
              Angeles, San Bernardino, and Riverside County, bringing the party
              straight to your doorstep!
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}