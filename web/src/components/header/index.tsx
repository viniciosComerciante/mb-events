import Image from 'next/image';
import { SearchBox } from './searchBox';
import { SelectBox } from './selectBox';
import { MainLink } from '../mainLink';

export function Header() {
  return (
    <header className="w-full h-20 bg-primary-500 flex items-center px-8">
      <Image
        src="/logo.png"
        alt="logo mb-events"
        width={232}
        height={55}
      ></Image>
      <div className="flex justify-between w-full">
        <SearchBox />
        <SelectBox />
        <nav className="flex items-center">
          <MainLink href="creator-register" title="Seja um produtor"></MainLink>
          <MainLink href="login" title="login"></MainLink>
          <MainLink href="register" title="cadastre-se" border></MainLink>
        </nav>
      </div>
    </header>
  );
}
