import {
  RiExternalLinkLine,
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export function GitHubIcon({ size = 17 }) {
  return <RiGithubFill size={size} aria-hidden="true" />;
}

export function LinkedInIcon({ size = 17 }) {
  return <RiLinkedinFill size={size} aria-hidden="true" />;
}

export function FacebookIcon({ size = 17 }) {
  return <RiFacebookFill size={size} aria-hidden="true" />;
}

export function ExternalIcon({ size = 13 }) {
  return <RiExternalLinkLine size={size} aria-hidden="true" />;
}

export function SocialIcon({ name }) {
  if (name === "LinkedIn") return <LinkedInIcon />;
  if (name === "Facebook") return <FacebookIcon />;
  return <GitHubIcon />;
}
