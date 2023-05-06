import { useSelector } from 'react-redux';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';
import RegistrationForm from '@/components/RegistrationForm';


const Registration = () => {
  const router = useRouter();
  const { userEmail, userPassword } = useSelector((state) => state.profile);


  async function registrationUser(){
    const {data, error} = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword
    })
    if(error) throw error
    return router.push('/')
  }


  return (
    <div>
      <RegistrationForm handleRegUser={registrationUser}/>
    </div>
  );
};


export default Registration;
