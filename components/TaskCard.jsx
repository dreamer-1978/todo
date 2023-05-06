import { useGetSessionUserQuery } from '@/redux/users/checkRegisterSlice';
import { supabase } from '@/utils/supabaseClient';
import useSound from 'use-sound';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CgEyeAlt } from 'react-icons/cg';
const TaskCard = ({ task }) => {
  const { data } = useGetSessionUserQuery('session');
  const [taskMess] = useSound('/soundtodo.mp3');

  const [deletetodo] = useSound('/deletefile.mp3');
  const router = useRouter();
  // const user_id = data.session.user.id

  useEffect(() => {
    taskMess();
  }, [task]);

  const completeTodo = async (id) => {
    const { error } = await supabase
      .from('todoshka')
      .update({ complete: true })
      .eq('id', id);
    if (error) throw error;
    router.push('todos');
  };

  const notCompleteTodo = async (id) => {
    const { error } = await supabase
      .from('todoshka')
      .update({ complete: false })
      .eq('id', id);
    if (error) throw error;
    router.push('/todos');
  };

  const deleteTodo = async (id) => {
    const { data, error } = await supabase
      .from('todoshka')
      .delete()
      .eq('id', id);
    if (error) throw error;
    router.push('/todos');
  };

  return (
    <>
      {task.map((item) => {
        if (item.user_id == data.session.user.id) {
          return (
            <div
              key={item.id}
              className={`flex flex-col  justify-center py-2 px-1 items-baseline ${
                item.complete ? 'blur' : 'blur-none'
              }`}
            >
              <div className="block w-64 md:w-96  px-2  border border-indigo-400 rounded-xl shadow bg-gray-800 dark:bg-gray-800">
                <h5 className="mb-2 text-sm text-left font-bold tracking-tight  text-[#00FFFF]">
                  {item.date}
                </h5>
                <p
                  className={`text-center select-all text-md font-bold text-white capitalize`}
                >
                  {item.todo}
                </p>
                <div className="flex justify-between py-2">
                  <button
                    onClick={() => {
                      deleteTodo(item.id);
                      deletetodo();
                    }}
                  >
                    <RiDeleteBin2Line className="text-red-700 text-2xl" />
                  </button>

                  <div className="flex items-center justify-center w-full blur-none ">
                    {item.complete ? (
                      <CgEyeAlt
                        onClick={() => notCompleteTodo(item.id)}
                        className="text-xl text-yellow-400 blur-none"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <button onClick={() => completeTodo(item.id)}>
                    <AiOutlineCheckCircle className="text-green-700 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default TaskCard;
