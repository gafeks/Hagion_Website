"use client";

import { Location } from "@carbon/icons-react";

export default function ContactMap() {
  return (
    <section className="w-full bg-[#F0F2F5] dark:bg-[#0F1629] relative">
      {/* Map pin icon */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[100px] z-10">
        <div className="w-16 h-16 flex items-center justify-center">
          <Location size={64} className="text-[#ED1C24]" />
        </div>
      </div>

      {/* Map embed */}
      <div className="w-full h-[400px] lg:h-[572px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d6.9!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDfCsDA1JzI0LjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        />
      </div>
    </section>
  );
}
