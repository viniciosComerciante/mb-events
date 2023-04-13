import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components/header';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}
