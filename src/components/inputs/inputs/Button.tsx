import widths, { WidthsType } from "@INPUTS/styles2/widths";
import { useLongPress } from "@SERVICES/utility/useLongPress";
import { type VariantProps, cva } from "class-variance-authority";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const color = {
  orderly: `bg-orderly hover:bg-orderly-light dark:bg-orderly-light dark:hover:bg-orderly `,
  proclaimer: `bg-proclaimer hover:bg-proclaimer-light dark:bg-proclaimer-light dark:hover:bg-proclaimer `,
  slate: `bg-slate-500 hover:bg-slate-400 dark:bg-slate-400 dark:hover:bg-slate-500 `,
  gray: `bg-gray-500 hover:bg-gray-400 dark:bg-gray-300 dark:hover:bg-gray-500 `,
  zinc: `bg-zinc-500 hover:bg-zinc-400 dark:bg-zinc-300 dark:hover:bg-zinc-500 `,
  neutral: `bg-neutral-500 hover:bg-neutral-400 dark:bg-neutral-300 dark:hover:bg-neutral-500 `,
  stone: `bg-stone-500 hover:bg-stone-400 dark:bg-stone-300 dark:hover:bg-stone-500 `,
  red: `bg-red-500 hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-500 `,
  orange: `bg-orange-500 hover:bg-orange-400 dark:bg-orange-300 dark:hover:bg-orange-500 `,
  amber: `bg-amber-500 hover:bg-amber-400 dark:bg-amber-300 dark:hover:bg-amber-500 `,
  yellow: `bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-500 `,
  lime: `bg-lime-500 hover:bg-lime-400 dark:bg-lime-300 dark:hover:bg-lime-500 `,
  green: `bg-green-500 hover:bg-green-400 dark:bg-green-300 dark:hover:bg-green-500 `,
  emerald: `bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-300 dark:hover:bg-emerald-500 `,
  teal: `bg-teal-500 hover:bg-teal-400 dark:bg-teal-300 dark:hover:bg-teal-500 `,
  cyan: `bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-300 dark:hover:bg-cyan-500 `,
  sky: `bg-sky-500 hover:bg-sky-400 dark:bg-sky-300 dark:hover:bg-sky-500 `,
  blue: `bg-blue-500 hover:bg-blue-400 dark:bg-blue-300 dark:hover:bg-blue-500 `,
  darkblue: `bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 `,
  indigo: `bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-300 dark:hover:bg-indigo-500 `,
  violet: `bg-violet-500 hover:bg-violet-400 dark:bg-violet-300 dark:hover:bg-violet-500 `,
  purple: `bg-purple-500 hover:bg-purple-400 dark:bg-purple-300 dark:hover:bg-purple-500 `,
  fuchsia: `bg-fuchsia-500 hover:bg-fuchsia-400 dark:bg-fuchsia-300 dark:hover:bg-fuchsia-500 `,
  pink: `bg-pink-500 hover:bg-pink-400 dark:bg-pink-300 dark:hover:bg-pink-500 `,
  rose: `bg-rose-500 hover:bg-rose-400 dark:bg-rose-300 dark:hover:bg-rose-500 `,
};
const size = {
  xxs: "text-xxs py-1 px-4",
  xs: "text-xs py-1 px-4",
  sm: "text-sm py-1 px-6",
  md: "text-base py-1 px-7",
  lg: "text-lg py-1 px-8",
  xl: "text-xl py-1 px-10",
  "2xl": "text-2xl py-1 px-12",
  "3xl": "text-3xl py-1 px-14",
};
const width = {
  auto: "w-auto",
  full: "w-full",
  xxs: "w-16",
  xs: "w-24",
  sm: "w-32",
  md: "w-48",
  lg: "w-64",
  xl: "w-96",
};
export const colorOptions = Object.keys(color);
export const widthOptions = Object.keys(width);

const button = cva(
  `font-medium focus:outline-none rounded text-white dark:text-black`,
  {
    variants: {
      color,
      size,
      width,
    },
    compoundVariants: [{}],
    defaultVariants: {
      color: "proclaimer",
      size: "md",
      width: "auto",
    },
  }
);

type ButtonType = {
  children: any;
  clickAction?: () => void;
  longPressAction?: () => void;
  delay?: number;
  submit?: boolean;
  circle?: boolean;
  className?: string;
};

export interface ButtonProps extends ButtonType, VariantProps<typeof button> {}

const Button = ({
  clickAction,
  longPressAction,
  children,
  color,
  width,
  delay,
  submit,
  size,
  circle,
  className,
}: ButtonProps) => {
  const ref = useRef(document.createElement("button"));
  const onLongPress = () => {
    if (longPressAction) {
      longPressAction();
    }
    submit && ref.current.click();
  };

  const onClick = () => {
    if (clickAction) {
      clickAction();
    }
    submit && ref.current.click();
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: delay,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <>
      <button
        {...longPressEvent}
        type={`${submit ? "submit" : "button"}`}
        className={twMerge(
          `${button({
            color,
            size,
            width,
            className: "",
          })} ${circle && "h-12 w-12 rounded-full p-0"} ${className}`
        )}
        ref={ref}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
