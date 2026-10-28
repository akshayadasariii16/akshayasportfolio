import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offset: number = 100): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'hero');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${offset}px 0px -40% 0px`,
      threshold: [0, 0.25, 0.5, 0.75]
    };

    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      // Find the entry that has the highest intersection ratio
      const intersecting = entries.filter(e => e.isIntersecting);
      if (intersecting.length > 0) {
        // Sort by highest intersection ratio
        intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(intersecting[0].target.id);
      }
    }, observerOptions);

    sectionElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
}

