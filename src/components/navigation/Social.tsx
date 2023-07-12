import Link from "next/link";

import TwitterIcon from "../icons/social/TwitterIcon";
import GithubIcon from "../icons/social/GithubIcon";
import LinkedInIcon from "../icons/social/LinkedInIcon";

import { hstack } from "../../../styled-system/patterns";

import { SocialIcon } from "@typesDef/general";
import type { ISocialContent } from "@app/layout";

interface SocialProps {
  socialLinks: NonNullable<ISocialContent>;
}

export default function Social({ socialLinks }: SocialProps) {
  const returnSocialIcon = (iconName: SocialIcon) => {
    switch (iconName) {
      case SocialIcon.TWITTER_ICON:
        return <TwitterIcon />;
      case SocialIcon.GITHUB_ICON:
        return <GithubIcon />;
      case SocialIcon.LINKEDIN_ICON:
        return <LinkedInIcon />;
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
