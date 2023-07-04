import { ReactComponent as GoogleIconImport } from "@ICONS/googleIcon.svg";
import { ReactComponent as UpDownArrowImport } from "@ICONS/upDownArrow.svg";
import { ReactComponent as BackArrowImport } from "@ICONS/backArrow.svg";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const defaultColor: any =
  `${import.meta.env.VITE_APP_NAME.toLowerCase()}` || "proclaimer";

const style = cva(``, {
  variants: {
    color: {
      orderly: `stroke-orderly-500 dark:stroke-orderly-400`,
      proclaimer: `stroke-proclaimer-500 dark:stroke-proclaimer-400`,
      slate: `stroke-slate-500 dark:stroke-slate-400`,
      gray: `stroke-gray-500 dark:stroke-gray-400`,
      zinc: `stroke-zinc-500 dark:stroke-zinc-400`,
      neutral: `stroke-neutral-500 dark:stroke-neutral-400`,
      stone: `stroke-stone-500 dark:stroke-stone-400`,
      red: `stroke-red-500 dark:stroke-red-400`,
      orange: `stroke-orange-500 dark:stroke-orange-400`,
      amber: `stroke-amber-500 dark:stroke-amber-400`,
      yellow: `stroke-yellow-500 dark:stroke-yellow-400`,
      lime: `stroke-lime-500 dark:stroke-lime-400`,
      green: `stroke-green-500 dark:stroke-green-400`,
      emerald: `stroke-emerald-500 dark:stroke-emerald-400`,
      teal: `stroke-teal-500 dark:stroke-teal-400`,
      cyan: `stroke-cyan-500 dark:stroke-cyan-400`,
      sky: `stroke-sky-500 dark:stroke-sky-400`,
      blue: `stroke-blue-500 dark:stroke-blue-400`,
      darkblue: `stroke-darkblue-500 dark:stroke-darkblue-400`,
      indigo: `stroke-indigo-500 dark:stroke-indigo-400`,
      violet: `stroke-violet-500 dark:stroke-violet-400`,
      purple: `stroke-purple-500 dark:stroke-purple-400`,
      fuchsia: `stroke-fuchsia-500 dark:stroke-fuchsia-400`,
      pink: `stroke-pink-500 dark:stroke-pink-400`,
      rose: `stroke-rose-500 dark:stroke-rose-400`,
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
      xxxl: "text-3xl",
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    color: defaultColor,
    size: "md",
  },
});

export const GoogleIcon = () => {
  return (
    <div className={`${null} text-[2rem] m-auto`}>
      <GoogleIconImport></GoogleIconImport>
    </div>
  );
};

//ARROWS
export const UpDownArrow = ({ color, size }: any) => {
  return (
    <div
      className={twMerge(
        `${style({
          color,
          size,
        })} grid place-items-center m-auto fill-none stroke-[2]`
      )}
    >
      <UpDownArrowImport></UpDownArrowImport>
    </div>
  );
};

export const BackArrow = ({
  color,
  size = "xxxl",
}: VariantProps<typeof style>) => {
  return (
    <div
      className={twMerge(
        `${style({
          color,
          size,
        })} grid place-items-center m-auto fill-none stroke-[2]`
      )}
    >
      <BackArrowImport></BackArrowImport>
    </div>
  );
};
