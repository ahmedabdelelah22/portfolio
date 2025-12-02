/** @type {import("postcss").Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            card: "hsl(var(--card))",
            "card-foreground": "hsl(var(--card-foreground))",
            primary: "hsl(var(--primary))",
            "primary-foreground": "hsl(var(--primary-foreground))",
            secondary: "hsl(var(--secondary))",
            "secondary-foreground": "hsl(var(--secondary-foreground))",
            tertiary: "hsl(var(--tertiary))",
            accent: "hsl(var(--accent))",
            "accent-foreground": "hsl(var(--accent-foreground))",
            muted: "hsl(var(--muted))",
            "muted-foreground": "hsl(var(--muted-foreground))",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
          },
      //     backgroundImage: {
      //   hero: "url('/hero/hero-bg.png')",
      //   hero_shape: "url('/hero/shape-1.svg')",
      //   hero_shape2_light: "url('/hero/shape-2-light.svg')",
      //   hero_shape2_dark: "url('/hero/shape-2-dark.svg')",
      //   about_shape_light : "url('/about/shape-light.svg')",
      //   about_shape_dark : "url('/about/shape-dark.svg')",
      //   dots_light: "url('/dots-light.svg')",
      //   dots_dark: "url('/dots-dark.svg')",
      // },
        }
      }
    },
    autoprefixer: {},
  },
};

export default config;
