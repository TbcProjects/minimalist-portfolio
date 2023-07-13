/* eslint-disable */
export type Token = "colors.cyan" | "colors.pine" | "colors.yankee_blue" | "colors.japanese_indigo" | "colors.darkBlue" | "colors.greyDarkBlue" | "colors.lightGrey" | "colors.mediumGrey" | "colors.brightRed" | "fonts.heading" | "fonts.body" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.xl" | "breakpoints.2xl" | "breakpoints.lg" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "sizes.breakpoint-lg"

export type ColorToken = "cyan" | "pine" | "yankee_blue" | "japanese_indigo" | "darkBlue" | "greyDarkBlue" | "lightGrey" | "mediumGrey" | "brightRed"

export type FontToken = "heading" | "body"

export type BreakpointToken = "sm" | "md" | "xl" | "2xl" | "lg"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-xl" | "breakpoint-2xl" | "breakpoint-lg"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"