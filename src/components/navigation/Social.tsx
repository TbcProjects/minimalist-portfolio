import Link from "next/link";

import TwitterIcon from "../icons/social/TwitterIcon";
import GithubIcon from "../icons/social/GithubIcon";
import LinkedInIcon from "../icons/social/LinkedInIcon";

import { hstack } from "../../../styled-system/patterns";

import { SocialIcon } from "@typesDef/general";
import type { ISocialContent } from "@app/layout";
import type { IconColor } from "@typesDef/general";

interface SocialProps {
  socialLinks: NonNullable<ISocialContent>;
  iconColor: IconColor;
}

export default function Social({ socialLinks, iconColor }: SocialProps) {
  const returnSocialIcon = (iconName: SocialIcon) => {
    switch (iconName) {
      case SocialIcon.TWITTER_ICON:
        return <TwitterIcon color={iconColor} />;
      case SocialIcon.GITHUB_ICON:
        return <GithubIcon color={iconColor} />;
      case SocialIcon.LINKEDIN_ICON:
        return <LinkedInIcon color={iconColor} />;
    }
  };

  const renderSocialIcon = () => {
    return socialLinks.socialLinks.map((icon) => {
      return (
        icon && (
          <Link key={icon._modelApiKey} href={icon?.linkUrl || ""}>
            {returnSocialIcon(icon.linkIcon as SocialIcon)}
          </Link>
        )
      );
    });
  };

  return <div className={hstack({ gap: "15px" })}>{renderSocialIcon()}</div>;
}
