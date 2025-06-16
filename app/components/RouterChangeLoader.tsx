'use client';

import { useState, useEffect } from 'react';

export default function RouteChangeLoader() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const handleComplete = () => setLoading(false);

    // next/navigation router doesn't have events, so listen on window popstate
    window.addEventListener('popstate', handleComplete);

    // A hack: listen for clicks on links and trigger loading
    const clickListener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a')) {
        setLoading(true);
      }
    };
    document.addEventListener('click', clickListener);

    // Remove listeners on cleanup
    return () => {
      window.removeEventListener('popstate', handleComplete);
      document.removeEventListener('click', clickListener);
    };
  }, []);

  // Auto-hide loader after a short timeout (optional)
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex p-10">
      <div className="loader slide-right">
        <img
          loading="lazy"
          src="/images/loading.gif"
          alt="Loading Page"
          width={80}
        />
      </div>
    </div>
  );
}