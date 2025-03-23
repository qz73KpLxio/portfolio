"use client";

import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed]);

  return (
    <>
      <section className="mb-5">
        <Image
          src="/_static/me.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer mb-5 transition-transform duration-300"
          onClick={toggleZoom}
          priority
        />

        {isZoomed && (
          <div
            onClick={toggleZoom}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-zoom-out p-4"
          >
            <div className="relative w-full max-w-[90%] max-h-[90vh] aspect-square">
              <Image
                src="/_static/me.jpg"
                alt="avatar zoomed"
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        )}

        <h1 className="text-2xl font-bold">Samuel</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I’m a Java developer at{" "}
            <a
              href="https://tegeria.com"
              style={{ textDecoration: "underline" }}
            >
              Tegeria ↗
            </a>{" "}
            . From a young age, I loved breaking down gadgets to understand how
            they work, which led me to problem-solving through code. Today, I
            build scalable backend solutions and sharpen my critical thinking
            daily. Outside of work, I enjoy basketball, coding, movies, and time
            with friends.
          </p>
          <br />
          <p className="mb-4">
            If you’d like to collaborate or connect, feel free to reach out
            on&nbsp;
            <a
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b inline-block"
            >
              LinkedIn
            </a>
            &nbsp;or through any of my other social handles.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
      </section>

      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />
    </>
  );
}