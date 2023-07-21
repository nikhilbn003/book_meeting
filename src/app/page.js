"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dbConnect from '../../utils/mongoConnect';

dbConnect();

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform the automatic redirect to the dashboard on the client side
      router.push('/dashboard');
  }, [router]);

  return null; // This will render nothing on the index page
};

export default HomePage;

