import { useEffect } from 'react';

export default function useClickOutside(ref: any, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
