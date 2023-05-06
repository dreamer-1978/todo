import { useSelector } from 'react-redux';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';
import LoginForm from '@/components/LoginForm';
import { useGetSessionUserQuery } from '@/redux/users/checkRegisterSlice';
import LoadingSpinner from '@/components/LoadingSpinner';
import Success from '@/components/Success';
import { useEffect } from 'react';
import useSound from 'use-sound';


const Login = () => {
  const { data } = useGetSessionUserQuery('session');
  const router = useRouter();
  const [tralala] = useSound('/tralala.mp3');
  const { userEmail, userPassword } = useSelector((state) => state.profile);

  const checkSession = () => {
    if(data?.session){
      router.push('/login')
    }
  }
useEffect(() => {
  checkSession()
}, [])

 
  async function LoginAuth() {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });
    if (error) throw error.message
    if (data) {
      setTimeout(() => {
        <LoadingSpinner />;
        router.reload();
      }, 500);
    }
  }

  return (
    <>{data?.session ? <Success /> : <LoginForm handleLogin={LoginAuth} />}</>
  );
};

export default Login;
