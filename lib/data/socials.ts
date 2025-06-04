import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

export const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jesus',
    class: 'hover:bg-[#0077B575]',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jesus',
    class: 'hover:bg-[#24292e75]',
    icon: FaGithub,
  },
  {
    name: 'Email',
    href: 'mailto:jesus@jesus.com',
    class: 'hover:bg-[#D1483675]',
    icon: FaEnvelope,
  },

  {
    name: 'Instagram',
    href: 'https://instagram.com/jesus',
    class: 'hover:bg-[#E1306C75]',
    icon: FaInstagram,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/jesus',
    class: 'hover:bg-[#1877F275]',
    icon: FaFacebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/jesus',
    class: 'hover:bg-[#1DA1F275]',
    icon: FaXTwitter,
  },
];

export type Social = (typeof SOCIALS)[number];
