import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import Link from 'next/link';
import useSound from 'use-sound';


const Button = ({handeleCreateTodo, handleSetText}) => {
  const [play] = useSound('/click.mp3');

  return (
    <>
          <div className="flex flex-col fixed bottom-0 right-4 pb-4 drop-shadow-2xl">
        <button
          onClick={() => {
            handeleCreateTodo(), play(); handleSetText('')
          }}
          className="py-2"
          id="text-todo"
          type="submit"
        >
          <AiOutlinePlus className="text-indigo-700 text-xl w-20 h-20 bg-black/40 rounded-full" />
        </button>
      </div>
      <div className="flex fixed bottom-0 left-1 pb-10">
        <Link href='/'>
          <AiOutlineDoubleLeft className="text-4xl text-white" />
        </Link>
      </div>
    </>
  )
}

export default Button