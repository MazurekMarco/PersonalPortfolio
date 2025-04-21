import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function observeElements(
  selector: string,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const observer = new IntersectionObserver(callback, options);
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
  
  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}
