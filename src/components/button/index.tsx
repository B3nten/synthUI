import { forwardRef, HTMLAttributes, PropsWithChildren, Ref } from "react";

const button = {
	base: "",
	variants: {
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		type: {
			primary: "",
			secondary: "",
			tertiary: "",
		},
	},
};

function Button(
	{
		children,
		className,
		...props
	}: PropsWithChildren<
		{ className?: string } & HTMLAttributes<HTMLButtonElement>
	>,
	ref: Ref<HTMLButtonElement>
) {
	return (
		<button ref={ref} className={`${button} ${className}`} {...props}>
			{children}
		</button>
	);
}

export default forwardRef(Button);

const base = [
	"inline-flex",
	"items-center",
	"justify-center",
	"border",
	"font-medium",
]
const sm = [
	"px-2",
	"py-1",
	"rounded",
]
const md = [
	"px-3",
	"py-2",
	"rounded-md",
]

const primary = [
	"bg-blue-500",
	"border-transparent",
	"text-white",
]

const secondary = [
	"bg-white",
	"border-gray-300",
	"text-gray-700",
]

class MyButton {
	default = [
		base,
		md,
		primary,
	]
	size = [
		sm,
		md
	]
	type = [
		primary,
		secondary
	]
}

<div className={new MyButton().default.join(' ')} />