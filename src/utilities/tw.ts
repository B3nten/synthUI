export const tw = (input: string | Array<string | boolean>) => {
	if (Array.isArray(input)) {
		return input.filter(Boolean).join(" ");
	} else if (typeof input === "string") {
		return input.trim();
	}
};
