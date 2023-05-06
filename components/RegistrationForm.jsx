import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setEmail } from '@/redux/users/profileSlice';
import { setPassword } from '@/redux/users/profileSlice';
import { motion } from 'framer-motion';

const RegistrationForm = ({ handleRegUser }) => {
  const dispath = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '40%', '40%', '20%'],
            }}
            className="mb-10"
          >
            <Image
              priority={true}
              className="text-white"
              src="/hack_white.png"
              width="100"
              height="50"
              alt="registration"
            />
          </motion.div>
          <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 via-purple-500 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl  text-center text-white">
                Create account
              </h1>
              <form
                onSubmit={handleSubmit}
                action="#"
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => dispath(setEmail(e.target.value))}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => dispath(setPassword(e.target.value))}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleRegUser()}
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-white dark:text-blue-400">
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="font-medium text-green-400 hover:underline dark:text-green-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationForm;
