import { useState } from "react";
import { Switch as SwitchImport } from "@headlessui/react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const defaultSize = "md";
const defaultColor: any = "green";
const defaultLabelColor: any =
  `${import.meta.env.VITE_APP_NAME.toLowerCase()}` || "proclaimer";

const sizes = {
  xs: "h-[1rem] w-[1.75rem]",
  sm: "h-[1.125rem] w-[2rem]",
  md: "h-[1.25rem] w-[2.125rem]",
  lg: "h-[1.5rem] w-[2.625rem]",
  xl: "h-[1.875rem] w-[3.25rem]",
  xxl: "h-[2.25rem] w-[4rem]",
  xxxl: "h-[3rem] w-[5.25rem]",
};

const knobSizesEnabled: any = {
  xs: "h-[1rem] w-[1rem] translate-x-[0.75rem]",
  sm: "h-[1.125rem] w-[1.125rem] translate-x-[0.875rem]",
  md: "h-[1.25rem] w-[1.25rem] translate-x-[0.875rem]",
  lg: "h-[1.5rem] w-[1.5rem] translate-x-[1.125rem]",
  xl: "h-[1.875rem] w-[1.875rem] translate-x-[1.375rem]",
  xxl: "h-[2.25rem] w-[2.25rem] translate-x-[1.75rem]",
  xxxl: "h-[3rem] w-[3rem] translate-x-[2.25rem]",
};

const knobSizesDisabled: any = {
  xs: "h-[1rem] w-[1rem] -translate-x-0",
  sm: "h-[1.125rem] w-[1.125rem] -translate-x-0",
  md: "h-[1.25rem] w-[1.25rem] -translate-x-0",
  lg: "h-[1.5rem] w-[1.5rem] -translate-x-0",
  xl: "h-[1.875rem] w-[1.875rem] -translate-x-0",
  xxl: "h-[2.25rem] w-[2.25rem] -translate-x-0",
  xxxl: "h-[3rem] w-[3rem] -translate-x-0",
};

const labelSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
  xxxl: "text-3xl",
};
const labelColors: any = {
  orderly: `peer-focus:text-orderly-500 peer-focus:dark:text-orderly-400 `,
  proclaimer: `peer-focus:text-proclaimer-500 peer-focus:dark:text-proclaimer-400 `,
  slate: `peer-focus:text-slate-500 peer-focus:dark:text-slate-400 `,
  gray: `peer-focus:text-gray-500 peer-focus:dark:text-gray-400 `,
  zinc: `peer-focus:text-zinc-500 peer-focus:dark:text-zinc-400 `,
  neutral: `peer-focus:text-neutral-500 peer-focus:dark:text-neutral-400 `,
  stone: `peer-focus:text-stone-500 peer-focus:dark:text-stone-400 `,
  red: `peer-focus:text-red-500 peer-focus:dark:text-red-400 `,
  orange: `peer-focus:text-orange-500 peer-focus:dark:text-orange-400 `,
  amber: `peer-focus:text-amber-500 peer-focus:dark:text-amber-400 `,
  yellow: `peer-focus:text-yellow-500 peer-focus:dark:text-yellow-400 `,
  lime: `peer-focus:text-lime-500 peer-focus:dark:text-lime-400 `,
  green: `peer-focus:text-green-500 peer-focus:dark:text-green-400 `,
  emerald: `peer-focus:text-emerald-500 peer-focus:dark:text-emerald-400 `,
  teal: `peer-focus:text-teal-500 peer-focus:dark:text-teal-400 `,
  cyan: `peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 `,
  sky: `peer-focus:text-sky-500 peer-focus:dark:text-sky-400 `,
  blue: `peer-focus:text-blue-500 peer-focus:dark:text-blue-400 `,
  darkblue: `peer-focus:text-darkblue-500 peer-focus:dark:text-darkblue-400 `,
  indigo: `peer-focus:text-indigo-500 peer-focus:dark:text-indigo-400 `,
  violet: `peer-focus:text-violet-500 peer-focus:dark:text-violet-400 `,
  purple: `peer-focus:text-purple-500 peer-focus:dark:text-purple-400 `,
  fuchsia: `peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-400 `,
  pink: `peer-focus:text-pink-500 peer-focus:dark:text-pink-400 `,
  rose: `peer-focus:text-rose-500 peer-focus:dark:text-rose-400 `,
};

const container = cva(``, {
  variants: {
    width: {
      auto: "w-auto",
      full: "w-full",
      xs: "w-24",
      sm: "w-32",
      md: "w-48",
      lg: "w-64",
      xl: "w-96",
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    width: defaultSize,
  },
});

const enabledStyle = cva(``, {
  variants: {
    color: {
      orderly: `bg-orderly-500 dark:bg-orderly-500`,
      proclaimer: `bg-proclaimer-500 dark:bg-proclaimer-500`,
      slate: `bg-slate-500 dark:bg-slate-500`,
      gray: `bg-gray-500 dark:bg-gray-500`,
      zinc: `bg-zinc-500 dark:bg-zinc-500`,
      neutral: `bg-neutral-500 dark:bg-neutral-500`,
      stone: `bg-stone-500 dark:bg-stone-500`,
      red: `bg-red-500 dark:bg-red-500`,
      orange: `bg-orange-500 dark:bg-orange-500`,
      amber: `bg-amber-500 dark:bg-amber-500`,
      yellow: `bg-yellow-500 dark:bg-yellow-500`,
      lime: `bg-lime-500 dark:bg-lime-500`,
      green: `bg-green-500 dark:bg-green-500`,
      emerald: `bg-emerald-500 dark:bg-emerald-500`,
      teal: `bg-teal-500 dark:bg-teal-500`,
      cyan: `bg-cyan-500 dark:bg-cyan-500`,
      sky: `bg-sky-500 dark:bg-sky-500`,
      blue: `bg-blue-500 dark:bg-blue-500`,
      darkblue: `bg-darkblue-500 dark:bg-darkblue-500`,
      indigo: `bg-indigo-500 dark:bg-indigo-500`,
      violet: `bg-violet-500 dark:bg-violet-500`,
      purple: `bg-purple-500 dark:bg-purple-500`,
      fuchsia: `bg-fuchsia-500 dark:bg-fuchsia-500`,
      pink: `bg-pink-500 dark:bg-pink-500`,
      rose: `bg-rose-500 dark:bg-rose-500`,
    },
    size: sizes,
  },
  compoundVariants: [{}],
  defaultVariants: {
    color: defaultColor,
    size: defaultSize,
  },
});
const disabledStyle = cva(``, {
  variants: {
    color: {
      orderly: `dark:bg-orderly-800 bg-orderly-200`,
      proclaimer: `dark:bg-proclaimer-800 bg-proclaimer-200`,
      slate: `dark:bg-slate-800 bg-slate-200`,
      gray: `dark:bg-gray-800 bg-gray-200`,
      zinc: `dark:bg-zinc-800 bg-zinc-200`,
      neutral: `dark:bg-neutral-800 bg-neutral-200`,
      stone: `dark:bg-stone-800 bg-stone-200`,
      red: `dark:bg-red-800 bg-red-200`,
      orange: `dark:bg-orange-800 bg-orange-200`,
      amber: `dark:bg-amber-800 bg-amber-200`,
      yellow: `dark:bg-yellow-800 bg-yellow-200`,
      lime: `dark:bg-lime-800 bg-lime-200`,
      green: `dark:bg-green-800 bg-green-200`,
      emerald: `dark:bg-emerald-800 bg-emerald-200`,
      teal: `dark:bg-teal-800 bg-teal-200`,
      cyan: `dark:bg-cyan-800 bg-cyan-200`,
      sky: `dark:bg-sky-800 bg-sky-200`,
      blue: `dark:bg-blue-800 bg-blue-200`,
      darkblue: `dark:bg-darkblue-800 bg-darkblue-200`,
      indigo: `dark:bg-indigo-800 bg-indigo-200`,
      violet: `dark:bg-violet-800 bg-violet-200`,
      purple: `dark:bg-purple-800 bg-purple-200`,
      fuchsia: `dark:bg-fuchsia-800 bg-fuchsia-200`,
      pink: `dark:bg-pink-800 bg-pink-200`,
      rose: `dark:bg-rose-800 bg-rose-200`,
    },
    size: sizes,
  },
  compoundVariants: [{}],
  defaultVariants: {
    color: defaultColor,
    size: defaultSize,
  },
});

type SwitchType = {
  value?: string;
  onChange?: any;
  children?: string;
  inputStyleOverride?: string;
  labelStyleOverride?: string;
  initialValue?: boolean;
};

interface WidthType extends SwitchType, VariantProps<typeof container> {}
interface InputType extends WidthType, VariantProps<typeof enabledStyle> {}

export default function Switch({
  color,
  size,
  width,
  children,
  onChange,
  initialValue,
}: InputType) {
  const [enabled, setEnabled] = useState(initialValue || false);

  return (
    <SwitchImport.Group>
      <div
        className={`${container({ width })} flex justify-between gap-2 center`}
      >
        <SwitchImport
          checked={enabled}
          onChange={(v: any) => {
            setEnabled(!enabled);
            onChange({ payload: v, type: children });
          }}
          className={`${twMerge(
            `${
              enabled
                ? enabledStyle({
                    color,
                    size,
                  })
                : disabledStyle({
                    color,
                    size,
                  })
            }`
          )}
        peer order-last relative inline-flex items-center rounded-full`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${
              enabled
                ? knobSizesEnabled[size || "md"]
                : knobSizesDisabled[size || "md"]
            } scale-90 inline-block transform rounded-full bg-white transition`}
          />
        </SwitchImport>
        <SwitchImport.Label
          className={`${null} text-grey-400 dark:text-grey-325 scale-75 origin-left pl-3 ${
            labelSizes[size || "md"]
          } ${labelColors[color || defaultLabelColor]}
          flex justify-normal
          `}
        >
          {children}
        </SwitchImport.Label>
      </div>
    </SwitchImport.Group>
  );
}
