"use client";

import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  // Nomor WA kamu (format internasional tanpa +, spasi, atau strip)
  const phoneNumber = "6281246927112";
  // Pesan default saat user klik (bisa dikosongkan)
  const defaultMessage = "Halo MUGNI Consulting, saya ingin konsultasi mengenai layanan pajak/legal.";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    // Tampilkan button setelah user scroll 300px (agar tidak langsung muncul)
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    // Tampilkan juga setelah 3 detik meskipun belum scroll
    const timer = setTimeout(() => setVisible(true), 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366] hover:bg-[#1ebe5b]
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}
      `}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.825.737 5.58 2.137 8.012L.057 32l8.19-2.147A15.908 15.908 0 0 0 16.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0zm0 29.12a13.08 13.08 0 0 1-6.672-1.828l-.478-.284-4.96 1.3 1.325-4.84-.312-.496A13.063 13.063 0 0 1 2.882 16c0-7.238 5.89-13.12 13.122-13.12S29.118 8.762 29.118 16s-5.883 13.12-13.114 13.12zm7.19-9.83c-.394-.197-2.332-1.15-2.694-1.282-.362-.132-.625-.197-.889.197-.263.394-1.02 1.283-1.25 1.546-.23.263-.46.296-.855.099-.394-.198-1.664-.614-3.17-1.957-1.172-1.044-1.963-2.334-2.193-2.728-.23-.394-.025-.607.172-.803.178-.177.394-.46.591-.691.197-.23.263-.394.394-.657.132-.263.066-.493-.033-.691-.099-.197-.889-2.143-1.218-2.935-.321-.77-.648-.666-.889-.678l-.757-.013c-.263 0-.691.099-1.053.493-.362.394-1.382 1.35-1.382 3.293s1.415 3.822 1.612 4.085c.197.263 2.784 4.25 6.745 5.96.942.407 1.678.65 2.252.832.946.3 1.808.258 2.49.157.759-.114 2.332-.954 2.662-1.875.33-.921.33-1.71.23-1.875-.098-.165-.362-.263-.756-.46z" />
      </svg>

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
}
