/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset", {
        "lele": {
          "primary": "#0070f3",  // Warna biru terang untuk elemen utama seperti tombol dan link
          "secondary": "#000000", // Warna hitam untuk latar belakang form (div utama)
          "accent": "#f9fafb",    // Warna terang untuk kontras pada teks dan elemen lain
          "neutral": "#1f2937",   // Warna abu gelap untuk elemen seperti shadow atau elemen teks sekunder
          "base-100": "#ffffff",  // Warna putih untuk latar belakang input atau elemen dasar
          "base-200": "#e5e7eb",  // Warna abu terang untuk latar belakang halaman atau container utama

          "--rounded-box": "1rem", // Radius yang halus untuk box form
          "--rounded-btn": "0.375rem", // Border radius untuk tombol sesuai dengan desain
          "--rounded-badge": "1.25rem", // Badge styling, tetap halus
          "--animation-btn": "0.2s", // Kecepatan animasi untuk tombol
          "--animation-input": "0.2s", // Kecepatan animasi untuk input fields
          "--btn-focus-scale": "0.98", // Efek scale ketika tombol difokuskan
          "--border-btn": "1px", // Border tombol yang halus dan minimalis
          "--tab-border": "1px", // Border pada tab
          "--tab-radius": "0.5rem", // Radius pada tab agar sesuai dengan tampilan form
        },
        "lele-dark": {
          "primary": "#0070f3",  // Warna biru terang untuk elemen utama seperti tombol dan link
          "secondary": "#ffffff", // Warna putih untuk teks dan elemen sekunder di dark mode
          "accent": "#22d3ee",    // Aksen cyan terang untuk menambah sedikit variasi pada elemen penting
          "neutral": "#111827",   // Warna abu-abu sangat gelap untuk latar belakang form dan elemen container
          "base-100": "#1f2937",  // Warna dasar untuk latar belakang utama (gelap)
          "base-200": "#0f172a",  // Latar belakang halaman yang lebih gelap
          "base-content": "#f3f4f6", // Warna teks utama dalam mode gelap

          "--rounded-box": "1rem", // Radius halus untuk box form
          "--rounded-btn": "0.375rem", // Border radius untuk tombol sesuai dengan desain
          "--rounded-badge": "1.25rem", // Badge styling, tetap halus
          "--animation-btn": "0.2s", // Kecepatan animasi untuk tombol
          "--animation-input": "0.2s", // Kecepatan animasi untuk input fields
          "--btn-focus-scale": "0.98", // Efek scale ketika tombol difokuskan
          "--border-btn": "1px", // Border tombol yang halus dan minimalis
          "--tab-border": "1px", // Border pada tab
          "--tab-radius": "0.5rem", // Radius pada tab agar sesuai dengan tampilan form
        }
      }
    ],
  },
}

