import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Center from "@CONTAINERS/Center";
import { GoogleIcon, UpDownArrow } from "@ICONS/IconIndex";

const defaultSize = "md";
const defaultColor: any =
  `${import.meta.env.VITE_APP_NAME.toLowerCase()}` || "proclaimer";

const topMargin: any = {
  xs: "mt-6",
  sm: "mt-7",
  md: "mt-7",
  lg: "mt-8",
  xl: "mt-8",
  xxl: "mt-8",
  xxxl: "mt-9",
};

const color = {
  orderly: `dark:focus:border-orderly-400 focus:border-orderly-500`,
  proclaimer: `dark:focus:border-proclaimer-400 focus:border-proclaimer-500`,
  slate: `dark:focus:border-slate-400 focus:border-slate-500`,
  gray: `dark:focus:border-gray-400 focus:border-gray-500`,
  zinc: `dark:focus:border-zinc-400 focus:border-zinc-500`,
  neutral: `dark:focus:border-neutral-400 focus:border-neutral-500`,
  stone: `dark:focus:border-stone-400 focus:border-stone-500`,
  red: `dark:focus:border-red-400 focus:border-red-500`,
  orange: `dark:focus:border-orange-400 focus:border-orange-500`,
  amber: `dark:focus:border-amber-400 focus:border-amber-500`,
  yellow: `dark:focus:border-yellow-400 focus:border-yellow-500`,
  lime: `dark:focus:border-lime-400 focus:border-lime-500`,
  green: `dark:focus:border-green-400 focus:border-green-500`,
  emerald: `dark:focus:border-emerald-400 focus:border-emerald-500`,
  teal: `dark:focus:border-teal-400 focus:border-teal-500`,
  cyan: `dark:focus:border-cyan-400 focus:border-cyan-500`,
  sky: `dark:focus:border-sky-400 focus:border-sky-500`,
  blue: `dark:focus:border-blue-400 focus:border-blue-500`,
  darkblue: `dark:focus:border-darkblue-400 focus:border-darkblue-500`,
  indigo: `dark:focus:border-indigo-400 focus:border-indigo-500`,
  violet: `dark:focus:border-violet-400 focus:border-violet-500`,
  purple: `dark:focus:border-purple-400 focus:border-purple-500`,
  fuchsia: `dark:focus:border-fuchsia-400 focus:border-fuchsia-500`,
  pink: `dark:focus:border-pink-400 focus:border-pink-500`,
  rose: `dark:focus:border-rose-400 focus:border-rose-500`,
};
const size = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
  xxxl: "text-3xl",
};
const width = {
  auto: "w-auto",
  full: "w-full",
  xs: "w-24",
  sm: "w-32",
  md: "w-48",
  lg: "w-64",
  xl: "w-96",
};
export const colorOptions = Object.keys(color);
export const widthOptions = Object.keys(width);
//INPUT
const input = cva(
  `block text-left bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer border py-1 px-2`,
  {
    variants: {
      color,
      size,
      width,
    },
    compoundVariants: [{}],
    defaultVariants: {
      color: defaultColor,
      size: defaultSize,
      width: "md",
    },
  }
);
// LABEL
const labelClasses = cva(
  `absolute text-grey-400 dark:text-grey-325 duration-300 transform peer-focus:scale-75 top-0 z-10 origin-[0] dark:bg-transparent left-0 bg-transparent scale-100 py-1 px-3.5`,
  {
    variants: {
      color: {
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
      },
      size: {
        xs: "text-xs peer-focus:-translate-y-[1.35rem] ",
        sm: "text-sm peer-focus:-translate-y-[1.57rem] ",
        md: "text-base peer-focus:-translate-y-[1.8rem]",
        lg: "text-lg peer-focus:-translate-y-8 ",
        xl: "text-xl peer-focus:-translate-y-8 ",
        xxl: "text-2xl peer-focus:-translate-y-9 ",
        xxxl: "text-3xl peer-focus:-translate-y-10 ",
      },
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
      color: defaultColor,
      size: defaultSize,
      width: "md",
    },
  }
);
//OPTIONS
const optionsClasses = cva(``, {
  variants: {
    color: {
      orderly: "dark:focus:border-orderly-400 focus:border-orderly-500",
      proclaimer:
        "dark:focus:border-proclaimer-400 focus:border-proclaimer-500",
      slate: "dark:focus:border-slate-400 focus:border-slate-500",
      gray: "dark:focus:border-gray-400 focus:border-gray-500",
      zinc: "dark:focus:border-zinc-400 focus:border-zinc-500",
      neutral: "dark:focus:border-neutral-400 focus:border-neutral-500",
      stone: "dark:focus:border-stone-400 focus:border-stone-500",
      red: "dark:focus:border-red-400 focus:border-red-500",
      orange: "dark:focus:border-orange-400 focus:border-orange-500",
      amber: "dark:focus:border-amber-400 focus:border-amber-500",
      yellow: "dark:focus:border-yellow-400 focus:border-yellow-500",
      lime: "dark:focus:border-lime-400 focus:border-lime-500",
      green: "dark:focus:border-green-400 focus:border-green-500",
      emerald: "dark:focus:border-emerald-400 focus:border-emerald-500",
      teal: "dark:focus:border-teal-400 focus:border-teal-500",
      cyan: "dark:focus:border-cyan-400 focus:border-cyan-500",
      sky: "dark:focus:border-sky-400 focus:border-sky-500",
      blue: "dark:focus:border-blue-400 focus:border-blue-500",
      darkblue: "dark:focus:border-darkblue-400 focus:border-darkblue-500",
      indigo: "dark:focus:border-indigo-400 focus:border-indigo-500",
      violet: "dark:focus:border-violet-400 focus:border-violet-500",
      purple: "dark:focus:border-purple-400 focus:border-purple-500",
      fuchsia: "dark:focus:border-fuchsia-400 focus:border-fuchsia-500",
      pink: "dark:focus:border-pink-400 focus:border-pink-500",
      rose: "dark:focus:border-rose-400 focus:border-rose-500",
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    color: defaultColor,
  },
});
//OPTION
const optionClasses = cva(``, {
  variants: {
    color: {
      orderly: "dark:bg-orderly-900 bg-orderly-200",
      proclaimer: "dark:bg-proclaimer-900 bg-proclaimer-200",
      slate: "dark:bg-slate-900 bg-slate-200",
      gray: "dark:bg-gray-900 bg-gray-200",
      zinc: "dark:bg-zinc-900 bg-zinc-200",
      neutral: "dark:bg-neutral-900 bg-neutral-200",
      stone: "dark:bg-stone-900 bg-stone-200",
      red: "dark:bg-red-900 bg-red-200",
      orange: "dark:bg-orange-900 bg-orange-200",
      amber: "dark:bg-amber-900 bg-amber-200",
      yellow: "dark:bg-yellow-900 bg-yellow-200",
      lime: "dark:bg-lime-900 bg-lime-200",
      green: "dark:bg-green-900 bg-green-200",
      emerald: "dark:bg-emerald-900 bg-emerald-200",
      teal: "dark:bg-teal-900 bg-teal-200",
      cyan: "dark:bg-cyan-900 bg-cyan-200",
      sky: "dark:bg-sky-900 bg-sky-200",
      blue: "dark:bg-blue-900 bg-blue-200",
      darkblue: "dark:bg-darkblue-900 bg-darkblue-200",
      indigo: "dark:bg-indigo-900 bg-indigo-200",
      violet: "dark:bg-violet-900 bg-violet-200",
      purple: "dark:bg-purple-900 bg-purple-200",
      fuchsia: "dark:bg-fuchsia-900 bg-fuchsia-200",
      pink: "dark:bg-pink-900 bg-pink-200",
      rose: "dark:bg-rose-900 bg-rose-200",
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    color: defaultColor,
  },
});

type SelectType = {
  value?: string;
  onChange?: (index: string) => any;
  options: {
    id: number;
    option: string;
    unavailable?: boolean;
    style?: string;
    action?: () => any;
  }[];
  label?: string;
  children?: string;
  inputStyleOverride?: string;
  labelStyleOverride?: string;
  onSelect: (e: any) => any;
  initialValue?: {
    id: number;
    option: string;
    unavailable?: boolean;
    style?: string;
    action?: () => any;
  };
};
interface InputType extends SelectType, VariantProps<typeof input> {}
interface LabelProps extends InputType, VariantProps<typeof labelClasses> {}
interface InputProps extends LabelProps, VariantProps<typeof optionClasses> {}

function Select({
  color,
  size,
  width,
  inputStyleOverride,
  label,
  labelStyleOverride,
  children,
  options,
  onSelect,
  initialValue,
}: InputProps) {
  const [selectedOption, setSelectedOption] = useState(
    initialValue || {
      id: 0,
      option: children || "",
      unavailable: true,
    }
  );

  return (
    <Listbox
      value={selectedOption}
      name={children}
      onChange={(e) => {
        onSelect(e);
        setSelectedOption(e);
      }}
    >
      {({ value, open, disabled }) => {
        return (
          <div className={`${null} relative ${topMargin[size || "md"]}`}>
            <Listbox.Button
              className={twMerge(
                `${input({
                  color,
                  size,
                  width,
                  className: inputStyleOverride,
                })}`
              )}
            >
              <div className={`${null} flex`}>
                <span
                  className={`grow ${
                    value.option === children || open ? "opacity-0" : ""
                  } `}
                >
                  {selectedOption.option}
                </span>
                <UpDownArrow color={color} size={size}></UpDownArrow>
              </div>
            </Listbox.Button>
            <Listbox.Label
              htmlFor={children}
              className={twMerge(
                `${labelClasses({
                  color,
                  size,
                  width,
                  className:
                    value.option !== children
                      ? `scale-75 -translate-y-[90%] peer-placeholder-shown:top-[90%] {labelSize2["md"]}`
                      : null,
                })}`
              )}
            >
              {children}
            </Listbox.Label>

            <Transition
              as={Fragment}
              enter="transition-all duration-300 overflow-hidden"
              leave="transition-all duration-300 overflow-hidden"
              enterFrom="transform scale-y-0  scale-x-90-xx  origin-top"
              enterTo="transform scale-100  origin-top"
              leaveFrom="transform scale-100  origin-top"
              leaveTo="transform scale-y-0  scale-x-90-xx  origin-top"
            >
              <Listbox.Options
                className={`${null} ${optionsClasses({
                  color,
                })} dark:bg-grey-850 bg-white p-1 mb-20 mt-1 rounded-lg border appearance-none-xxx focus:outline-none focus:ring-0 peer absolute w-full z-50`}
              >
                {options?.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    value={item}
                    disabled={item.unavailable}
                  >
                    {({ selected, active }) => (
                      <div
                        className={`${twMerge(`p-1 rounded 
                        ${selected && `${optionClasses({ color })}`}
                        ${active && "dark:bg-grey-700 bg-grey-50"} 
                        ${
                          item.unavailable && "text-grey-275 dark:text-grey-500"
                        }
                        ${item.style}
                        `)}`}
                      >
                        {item.option}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        );
      }}
    </Listbox>
  );
}

export default Select;
