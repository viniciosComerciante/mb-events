import Link from 'next/link';

interface MainLinkProps {
  href: string;
  title?: string;
  border?: boolean;
  borderColor?: string;
  color?: string;
}

export function MainLink({
  href,
  title = '',
  borderColor = 'white',
  border = false,
  color = 'white',
}: MainLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        border &&
        `border border-solid rounded-lg ease-in-out duration-300 hover:bg-white hover:text-primary-500`
      } py-2.5 px-4 text-${color}`}
      style={{ borderColor }}
    >
      <span className="uppercase text-xs font-bold">{title}</span>
    </Link>
  );
}
