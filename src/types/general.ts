export type MenuItem = {
  name: string;
  src: string;
};

export enum SocialIcon {
  TWITTER_ICON = "twitter_icon",
  GITHUB_ICON = "github_icon",
  LINKEDIN_ICON = "linkedin_icon",
}

export type IconColor = "white" | "#33323D";

export interface IconProps {
  color: IconColor;
}
