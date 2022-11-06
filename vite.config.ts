import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Unocss({
			presets: [presetWind({})],
			theme: {
				colors: {
					"primary": "var(--primary)",
					"primary-light": "var(--primary-light)",
					"primary-dark": "var(--primary-dark)",
					"secondary": "var(--secondary)",
					"secondary-light": "var(--secondary-light)",
					"secondary-dark": "var(--secondary-dark)",
					"tertiary": "var(--tertiary)",
					"tertiary-light": "var(--tertiary-light)",
					"tertiary-dark": "var(--tertiary-dark)",
					"neutral": "var(--neutral)",
					"neutral-light": "var(--neutral-light)",
					"neutral-dark": "var(--neutral-dark)",
					"success": "var(--success)",
					"success-light": "var(--success-light)",
					"success-dark": "var(--success-dark)",
					"warning": "var(--warning)",
					"warning-light": "var(--warning-light)",
					"warning-dark": "var(--warning-dark)",
					"error": "var(--error)",
					"error-light": "var(--error-light)",
					"error-dark": "var(--error-dark)",
					"info": "var(--info)",
					"info-light": "var(--info-light)",
					"info-dark": "var(--info-dark)",
					"link": "var(--link)",
					base: {
						100: "var(--base-100)",
						200: "var(--base-200)",
						300: "var(--base-300)",
						400: "var(--base-400)",
						500: "var(--base-500)",
					},
					"foreground": "var(--foreground)",
					"subtext": "var(--subtext)",
					"subtle": "var(--subtle)",
				}
			}
		}),
	],
});
