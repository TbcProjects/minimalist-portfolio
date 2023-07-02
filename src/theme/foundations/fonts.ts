import { theme as base } from "@chakra-ui/react";

import { Ibarra_Real_Nova, Public_Sans } from "next/font/google";

const ibrarra = Ibarra_Real_Nova({
  subsets: ["latin"],
});
const publicSans = Public_Sans({
  subsets: ["latin"],
});

const fonts = {
  heading: ibrarra.style.fontFamily,
  body: publicSans.style.fontFamily,
};

export default fonts;
