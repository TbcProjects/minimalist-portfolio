import { IconProps } from "@typesDef/general";

export default function LinkedInIcon({ color }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.4 0H21.6C22.92 0 24 1.08 24 2.4V21.6C24 22.92 22.92 24 21.6 24H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0ZM3.6 20.4H7.2V9.6H3.6V20.4ZM5.4 7.56C4.2 7.56 3.24 6.6 3.24 5.4C3.24 4.2 4.2 3.24 5.4 3.24C6.6 3.24 7.56 4.2 7.56 5.4C7.56 6.6 6.6 7.56 5.4 7.56ZM16.8 20.4H20.4V13.56C20.4 11.28 18.48 9.36 16.2 9.36C15.12 9.36 13.8 10.08 13.2 11.04V9.6H9.6V20.4H13.2V14.04C13.2 13.08 14.04 12.24 15 12.24C15.96 12.24 16.8 13.08 16.8 14.04V20.4Z"
        fill={color}
      />
    </svg>
  );
}
