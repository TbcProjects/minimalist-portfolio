import SiteLogo from "../icons/SiteLogo";
import ButtonLink from "../shared/button/ButtonLink";
import { Box } from "../../../styled-system/jsx";

interface HeroProps {
  data: any;
}

export default function Hero({ data }: HeroProps) {
  return (
    <Box>
      <SiteLogo />
      <ButtonLink variant="primary">Click me</ButtonLink>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
}
