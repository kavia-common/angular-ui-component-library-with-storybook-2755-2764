import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'Components/AppComponent',
  component: AppComponent,
  render: (args: Partial<AppComponent>) => ({
    props: args,
  }),
  args: {
    // default args
  },
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'Ocean Background' },
    docs: {
      description: {
        component:
          'The root application shell component, showcased here as a placeholder. Replace or extend with real library components as they are added.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AppComponent>;

export const Default: Story = {
  name: 'Default Title',
  args: {},
};

export const BrandedCard: Story = {
  name: 'Branded Card',
  render: () => ({
    template: `
      <div class="ocean-card" style="min-width: 360px; text-align: center;">
        <h3 style="margin-bottom: 8px; color: var(--color-primary)">Ocean Professional</h3>
        <p style="margin-bottom: 16px; color: #334155">
          Storybook theme with blue and amber accents.
        </p>
        <button class="ocean-button" style="margin-right: 8px;">Primary</button>
        <button class="ocean-button secondary">Secondary</button>
      </div>
    `,
  }),
};
