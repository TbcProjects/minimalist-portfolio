const tokens = {
  "colors.cyan": {
    "value": "#5FB4A2",
    "variable": "var(--colors-cyan)"
  },
  "colors.pine": {
    "value": "#55A292",
    "variable": "var(--colors-pine)"
  },
  "colors.yankee_blue": {
    "value": "#1D3444",
    "variable": "var(--colors-yankee_blue)"
  },
  "colors.japanese_indigo": {
    "value": "#203A4C",
    "variable": "var(--colors-japanese_indigo)"
  },
  "colors.darkBlue": {
    "value": "#203A4C",
    "variable": "var(--colors-dark-blue)"
  },
  "colors.greyDarkBlue": {
    "value": "#33323D",
    "variable": "var(--colors-grey-dark-blue)"
  },
  "colors.lightGrey": {
    "value": "#FAFAFA",
    "variable": "var(--colors-light-grey)"
  },
  "colors.mediumGrey": {
    "value": "#EAEAEB",
    "variable": "var(--colors-medium-grey)"
  },
  "colors.brightRed": {
    "value": "#F43030",
    "variable": "var(--colors-bright-red)"
  },
  "fonts.heading": {
    "value": "var(--font-ibrarra-real-nova)",
    "variable": "var(--fonts-heading)"
  },
  "fonts.body": {
    "value": "var(--font-public-sans), sans-serif",
    "variable": "var(--fonts-body)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar