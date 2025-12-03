"use client";

import { useState } from "react";
import { RiMailFill, RiPhoneFill, RiMapPinFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
   <section className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
  <div className="max-w-5xl mx-auto">
    {/* Title */}
    <div className="text-center mb-12 flex flex-col items-center">
       <div className=" w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-white rounded-full relative overflow-hidden mb-5">
          <Image src="/hero/ahmed.png" alt="Ahmed" fill className="object-cover"/>
        </div>
      <h1 className="text-4xl font-bold mb-3">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        Have a project or want to say hello? I’d love to hear from you.
      </p>
      
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
     
      {/* Contact Info */}
      <div className="space-y-8 flex flex-col items-start">
        

        <div className="flex items-center gap-4">
          <RiMailFill size={34} className="text-primary" />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ahmedabdelelah909493@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RiPhoneFill size={34} className="text-primary" />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+20 1090949310</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RiMapPinFill size={34} className="text-primary" />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Mansura, Egypt</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-gray-600 hover:text-black text-2xl">
            <i className="ri-github-fill"></i>
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700 text-2xl">
            <i className="ri-linkedin-box-fill"></i>
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-gray-600 hover:text-pink-500 text-2xl">
            <i className="ri-instagram-fill"></i>
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-medium">Your Name</label>
          <input
            name="name"
            type="text"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Your Email</label>
          <input
            name="email"
            type="email"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="example@mail.com"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            loading ? "bg-gray-400" : "bg-primary hover:bg-primary/80 text-white"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-600 dark:text-green-400 font-medium" role="status" aria-live="polite">
            Message sent successfully! Check your Telegram.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 dark:text-red-400 font-medium" role="alert">
            Error sending message. Please try again.
          </p>
        )}
      </form>
    </div>
  </div>
</section>

  );
}
