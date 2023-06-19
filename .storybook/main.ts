import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';
// import customViteConfig from './vite.config';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
              alias: [
                {
                  find: "@INPUTS",
                  replacement: path.resolve(__dirname, "../src/components/inputs"),
                },
                {
                  find: "@assets",
                  replacement: path.resolve(__dirname, "./src/assets"),
                },
                {
                  find: "@components",
                  replacement: path.resolve(__dirname, "./src/components"),
                },
              ],
            },
      // Add dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['storybook-dark-mode'],
      // },
    });
  },
  // async viteFinal(config, { configType }) {
  //   return {
  //     ...config,
  //     resolve: {
  //       alias: [
  //         {
  //           find: "@INPUTS",
  //           replacement: path.resolve(__dirname, "./src/components/inputs"),
  //         },
  //         {
  //           find: "@assets",
  //           replacement: path.resolve(__dirname, "./src/assets"),
  //         },
  //         {
  //           find: "@components",
  //           replacement: path.resolve(__dirname, "./src/components"),
  //         },
  //       ],
  //     },
  //   };
  // },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
