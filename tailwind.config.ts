import mobileConfig from './mobile.config'

const config: {
  plugins: any[];
  theme: {
    extend: {
      minHeight: {
        "footer-min-size": string;
        "footer-max-size": string;
        "header-min-size": string;
        "header-max-size": string
      };
      padding: {
        "footer-min-size": string;
        "footer-max-size": string;
        "header-size": string;
        "footer-size": string;
        "header-min-size": string;
        "header-max-size": string
      };
      screens: { sm: string };
      maxHeight: {
        "footer-min-size": string;
        "footer-max-size": string;
        "header-min-size": string;
        "header-max-size": string
      };
      colors: { background: string; foreground: string };
      height: { "header-size": string; "content-size": string; "footer-size": string; "content-size-sm": string }
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
      },
      minHeight: {
        'footer-min-size': mobileConfig.footerMinSize,
        'header-min-size': mobileConfig.headerMinSize,
        'footer-max-size': mobileConfig.footerMaxSize,
        'header-max-size': mobileConfig.headerMaxSize,
      },
      maxHeight: {
        'footer-max-size': mobileConfig.footerMaxSize,
        'header-max-size': mobileConfig.headerMaxSize,
        'footer-min-size': mobileConfig.footerMinSize,
        'header-min-size': mobileConfig.headerMinSize,
      },
      height: {
        'footer-size': mobileConfig.headerSize,
        'header-size': mobileConfig.footerSize,
        'content-size': `calc(100dvh - (${mobileConfig.headerMinSize} + ${mobileConfig.footerMinSize}))`,
        'content-size-sm': `calc(100dvh - (${mobileConfig.headerMaxSize} + ${mobileConfig.footerMaxSize}))`,
      },
      padding: {
        'footer-size': mobileConfig.footerMinSize,
        'footer-min-size': mobileConfig.footerMinSize,
        'footer-max-size': mobileConfig.footerMaxSize,
        'header-size': mobileConfig.headerMinSize,
        'header-max-size': mobileConfig.headerMaxSize,
        'header-min-size': mobileConfig.headerMinSize,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
