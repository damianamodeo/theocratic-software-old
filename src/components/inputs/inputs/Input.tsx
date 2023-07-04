import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const defaultSize = "md";
const defaultColor: any =
  `${import.meta.env.VITE_APP_NAME.toLowerCase()}` || "proclaimer";

const color = {
  orderly: `dark:focus:border-orderly-light focus:border-orderly`,
  proclaimer: `dark:focus:border-proclaimer-light focus:border-proclaimer`,
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

const topMargin: any = {
  xs: "mt-6",
  sm: "mt-7",
  md: "mt-7",
  lg: "mt-8",
  xl: "mt-8",
  xxl: "mt-8",
  xxxl: "mt-9",
};
export const colorOptions = Object.keys(color);
export const widthOptions = Object.keys(width);

const input = cva(
  `block text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer border py-1 px-2`,
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

const labelColor = {
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
const labelSize = {
  xs: "text-xs -translate-y-7 peer-focus:-translate-y-7 ",
  sm: "text-sm -translate-y-8 peer-focus:-translate-y-8 ",
  md: "text-base -translate-y-8 peer-focus:-translate-y-8 ",
  lg: "text-lg -translate-y-9 peer-focus:-translate-y-9 ",
  xl: "text-xl -translate-y-9 peer-focus:-translate-y-9 ",
  xxl: "text-2xl -translate-y-10 peer-focus:-translate-y-10 ",
  xxxl: "text-3xl -translate-y-11 peer-focus:-translate-y-11 ",
};
const labelWidth = {
  auto: "w-auto",
  full: "w-full",
  xs: "w-24",
  sm: "w-32",
  md: "w-48",
  lg: "w-64",
  xl: "w-96",
};

const label = cva(
  `absolute text-sm text-grey-400 dark:text-grey-325 duration-300 transform scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-proclaimer peer-focus:dark:text-proclaimer-light peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 left-1 bg-transparent`,
  {
    variants: {
      color: labelColor,
      size: labelSize,
      width: labelWidth,
    },
    compoundVariants: [{}],
    defaultVariants: {
      color: defaultColor,
      size: defaultSize,
      width: "md",
    },
  }
);

type Props = {
  inputStyleOverride?: string;
  labelStyleOverride?: string;
  children: string;
  onChange?: any;
  value?: string | number;
  type?: "text" | "number" | "email" | "password";
  property?: string
};
interface InputType extends Props, VariantProps<typeof input> {}
interface InputProps extends InputType, VariantProps<typeof label> {}

/**
 *
 * @param color color of the outline
 * @param size size of font which affects heigt also
 * @param width width of input element
 * @param inputStyleOverride prop to add tailwind classes change look of input element
 * @param labelStyleOverride prop to add tailwind classes change look of label element
 * @param children placeholder and label of input
 * @param value optionally control initial startin value
 * @param type chose what type of input. Options:  "text" | "number" | "email" | "password"
 * @param onChange supply a function that is called every time the user changes the value in the field
 * @returns an Input Element
 */

const Input = ({
  color,
  size,
  width,
  inputStyleOverride,
  labelStyleOverride,
  children,
  value,
  type = "text",
  onChange,
  property
}: InputProps) => {
  return (
    <div className={`relative ${topMargin[size || "md"]}`}>
      <input
        value={value}
        onChange={({ target: { value } }: any) =>
          onChange({ payload: value, type: property || children })
        }
        type={type}
        id={children}
        className={twMerge(
          `${input({
            color,
            size,
            width,
            className: inputStyleOverride,
          })}`
        )}
        placeholder=" "
      />
      <label
        htmlFor={children}
        className={twMerge(
          `${label({
            color,
            size,
            width,
            className: labelStyleOverride,
          })}`
        )}
      >
        {children}
      </label>
    </div>
  );
};

export default Input;
