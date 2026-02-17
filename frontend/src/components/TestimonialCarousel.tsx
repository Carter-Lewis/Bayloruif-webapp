"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Douglas Henry, Ph.D.",
    title: "Dean, Honors College",
    quote:
      "Baylor UIF gathers exemplary students whose intelligence, problem-solving skills, and commitment to our shared good are united in service to the university. With its own convictions grounded in Baylor's Christian mission, the Honors College proudly celebrates and supports UIF's achievements.",
    boldSection: "the Honors College proudly celebrates and supports UIF's achievements.",
    image: "Henry.png", // replace with actual image path
  },
  {
    name: "Peter Grannick",
    title: "Associate Vice President of Business Services & Chief Procurement Officer",
    quote:
      "The Baylor UIF team is smart, approachable, and deeply committed to making a positive impact. Their focus on sustainable dining initiatives has made a real difference at Baylor, and their dedication, creativity, and collaborative spirit make them a pleasure to work with.",
    boldSection: "",
    image: "Peter.jpg",
  },
  {
    name: "Andy Hogue, Ph.D.",
    title: "Associate Dean for Engaged Learning",
    quote:
      "The University Innovation Fellows at Baylor embody what we say we are about here at Baylor—a commitment to leadership and service that is decidedly Pro Mundo, for the world. Their commitment to positive change is inspiring, and our campus is better for it.",
    boldSection: "",
    image: "hogue.png",
  },
//   {
//     name: "Sarah Johnson",
//     title: "Dean, Hankamer School of Business",
//     quote:
//       "The Innovation Fellows program exemplifies what Baylor does best — combining academic excellence with purposeful action. These students are building the future of business and society.",
//     boldSection: "building the future of business and society.",
//     image: "Henry.png",
//   },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const t = testimonials[current];

  // Render quote with bold section
  const renderQuote = () => {
    if (!t.boldSection) return <span>"{t.quote}"</span>;
    const parts = t.quote.split(t.boldSection);
    return (
      <span>
        "{parts[0]}
        <strong className="font-bold">{t.boldSection}</strong>
        {parts[1]}"
      </span>
    );
  };

  return (
    <div className="w-full flex flex-col items-start px-16 gap-8">
      {/* Card */}
      <div
        className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-10 flex flex-row gap-12 items-center transition-opacity duration-300"
        style={{ opacity: animating ? 0 : 1 }}
      >
        {/* Text content */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-white text-3xl font-bold">{t.name}</h2>
          <p className="text-white font-bold text-sm uppercase tracking-wide">{t.title}</p>
          <p className="text-white/90 text-lg leading-relaxed mt-2">{renderQuote()}</p>
        </div>

        {/* Photo */}
        <div className="w-64 h-72 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Controls row */}
      <div className="w-full flex flex-row items-center justify-center gap-6">
        {/* Prev button */}
        <button
          onClick={prev}
          className="text-white/70 hover:text-white text-2xl transition-colors px-2"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex flex-row gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="text-white/70 hover:text-white text-2xl transition-colors px-2"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}