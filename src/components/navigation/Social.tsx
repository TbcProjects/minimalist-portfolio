import Link from "next/link";

import TwitterIcon from "../icons/social/TwitterIcon";
import GithubIcon from "../icons/social/GithubIcon";
import LinkedInIcon from "../icons/social/LinkedInIcon";

import { hstack } from "../../../styled-system/patterns";

interface SocialProps {}

export default function Social({}: SocialProps) {
  const icons = ["TWITTER", "GITHUB", "LINKEDIN"];

  const returnSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "TWITTER":
        return <TwitterIcon />;
      case "GITHUB":
        return <GithubIcon />;
      case "LINKEDIN":
        return <LinkedInIcon />;
    }
  };

  const renderSocialIcon = () => {
    return icons.map((icon) => {
      return (
        <Link key={icon} href={"/"}>
          {returnSocialIcon(icon)}
        </Link>
      );
    });
  };

  return <div className={hstack({ gap: "15px" })}>{renderSocialIcon()}</div>;
}
