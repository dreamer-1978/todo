const FormTodoInput = ({ handleSetText, handleText }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetText(null);
  };

  return (
    <>
      <div className="flex justify-center items-center fixed inset-x-0 top-0 ">
        <form className="w-full md:w-1/2" onSubmit={handleSubmit} >
          <div className="mx-4 py-2">
            <textarea
              rows={4}
              value={handleText}
              onChange={(e) => handleSetText(e.target.value)}
              type="text"
              id="text-todo"
              className="py-2 p-4 w-full text-white font-bold border border-gray-300 rounded-lg bg-black/40 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase z-[1]"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormTodoInput;
