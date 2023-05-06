import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Success = () => {
  const router = useRouter();
  const redirect = () => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <motion.div
          animate={{ x: 40, y: 40, scale: 1.5 }}
          transition={{ duration: 2 }}
          className="text-[#ADFF2F] text-4xl z-[2]"
        >
          <Link href="/">Success...</Link>
        </motion.div>
      </div>
    </>
  );
};

export default Success;
