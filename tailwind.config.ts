import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-image-main': 'linear-gradient(rgba(0, 0, 0, .57),#222), url("https://daks2k3a4ib2z.cloudfront.net/560f27977849849d0e1fee5c/5614b716f91f1b0b7cb92ed4_fe4a5cbf.jpg")',
        'gradient-image-about': 'linear-gradient(rgba(0, 0, 0, .57),#222), url("https://daks2k3a4ib2z.cloudfront.net/560f27977849849d0e1fee5c/5614b769e3d14ab63aa7a827_photo-1441716844725-09cedc13a4e7.jpg")',

      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
