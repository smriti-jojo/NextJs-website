'use client';
import Link from 'next/link';
import '../ui/global.css';
import { useRouter } from 'next/navigation';
import Navbar from '../ui/navbar/navbar';
import NavLinks from '../ui/dashboard/nav-links';
import CustomersTable from '../ui/customers/table';
import { Card } from '../ui/dashboard/cards';
import SideNav from '../ui/dashboard/sidenav';
import friendship from '../../public/friendship.jpg';
import Image from 'next/image';
import LoginForm from '../ui/login-form';
import Login from '../ui/login/login';

export default function Page() {
  const router = useRouter();
  return (
    <div className="relative flex-col">
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>
      <div className="">
        <Image src={friendship} alt="image" className="max-h-screen w-full" />
      </div>
      <div className="absolute bottom-[40%] right-[10%]">
        <Login />
      </div>
    </div>
  );
}
