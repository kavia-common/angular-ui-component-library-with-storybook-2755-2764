import type { Preview } from '@storybook/angular';
import { themes } from '@storybook/theming';

// Define Ocean Professional theme tokens
export const OceanThemeTokens = {
  primary: '#2563EB',
  secondary: '#F59E0B',
  error: '#EF4444',
  background: '#f9fafb',
  surface: '#ffffff',
  text: '#111827',
};

const preview: Preview = {
  parameters: {
    // Backgrounds to match the app style guide
    backgrounds: {
      default: 'Ocean Background',
      values: [
        { name: 'Ocean Background', value: OceanThemeTokens.background },
        { name: 'Surface', value: OceanThemeTokens.surface },
        { name: 'Dark (contrast)', value: '#0f172a' },
      ],
    },
    docs: {
      theme: {
        ...themes.light,
        appBg: OceanThemeTokens.background,
        appContentBg: OceanThemeTokens.surface,
        appBorderColor: '#e5e7eb',
        barBg: OceanThemeTokens.surface,
        colorPrimary: OceanThemeTokens.primary,
        colorSecondary: OceanThemeTokens.secondary,
        textColor: OceanThemeTokens.text,
        inputBg: '#ffffff',
        inputBorder: '#e5e7eb',
        inputTextColor: OceanThemeTokens.text,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundation', 'Components', 'Patterns'],
      },
    },
    controls: { expanded: true },
    layout: 'centered',
  },
  decorators: [
    (story) => {
      // Apply global CSS variables and base styling to the preview iframe
      const styleId = 'ocean-professional-theme';

      // Guard against non-browser environments (SSR/lint)
      // Use globalThis to safely probe for document without causing linter no-undef
      const maybeDoc: any = (typeof globalThis !== 'undefined' && (globalThis as any).document) ? (globalThis as any).document : undefined;
      const hasDocument = !!(maybeDoc && maybeDoc.head);
      if (hasDocument && !maybeDoc.getElementById(styleId)) {
        const style = maybeDoc.createElement('style');
        style.id = styleId;
        style.innerHTML = `
          :root {
            --color-primary: ${OceanThemeTokens.primary};
            --color-secondary: ${OceanThemeTokens.secondary};
            --color-error: ${OceanThemeTokens.error};
            --color-bg: ${OceanThemeTokens.background};
            --color-surface: ${OceanThemeTokens.surface};
            --color-text: ${OceanThemeTokens.text};
            --radius-md: 12px;
            --shadow-md: 0 8px 24px rgba(0,0,0,0.08);
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
          }
          body {
            background: var(--color-bg);
            color: var(--color-text);
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }
          .ocean-card {
            background: var(--color-surface);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-md);
            padding: 16px 20px;
          }
          .ocean-button {
            appearance: none;
            border: none;
            border-radius: 10px;
            padding: 10px 16px;
            font-weight: 600;
            color: white;
            background: var(--color-primary);
            transition: transform 0.12s ease, box-shadow 0.2s ease, background 0.2s ease;
            box-shadow: var(--shadow-sm);
          }
          .ocean-button.secondary { background: var(--color-secondary); color: #111827; }
          .ocean-button:focus { outline: 2px solid #93c5fd; outline-offset: 2px; }
          .ocean-button:hover { transform: translateY(-1px); }
        `;
        (maybeDoc as any).head.appendChild(style);
      }
      return story();
    },
  ],
};

export default preview;
