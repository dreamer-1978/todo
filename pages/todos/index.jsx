import { useGetSessionUserQuery } from '@/redux/users/checkRegisterSlice';
import FormTodoInput from '@/components/FormTodoInput';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TaskCard from '@/components/TaskCard';
import { supabase } from '@/utils/supabaseClient';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

const Todoshka = ({ task }) => {
  const { data, isLoading } = useGetSessionUserQuery('session');
  const [text, setText] = useState('');
  const router = useRouter();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const user_id = data?.session?.user.id;

  useEffect(() => {}, [data]);

  const createTodo = async () => {
    const task = {
      user_id: data.session?.user.id,
      email: data.session?.user.email,
      todo: text,
      date: date + ' - ' + time,
      image_url: '',
      complete: false,
    };
    if (text) {
      const { data, error } = await supabase.from('todoshka').insert([task]);
      if (error) throw error;
      router.push('/todos');
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : data.session ? (
        <>
          <div className="md:px-40">
            <FormTodoInput handleSetText={setText} handleText={text} />
          </div>
          <div>
            <TaskCard task={task} />
          </div>
          <div>
            <Button handeleCreateTodo={createTodo} handleSetText={setText} />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Link className="text-4xl text-white" href={'/login'}>
            Back to login ...
          </Link>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const { data, error } = await supabase.from('todoshka').select();
  if (error) throw error;
  return {
    props: {
      task: data,
    },
  };
}

export default Todoshka;
