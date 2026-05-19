'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      offset: 60,
    });
  }, []);
  return null;
}
