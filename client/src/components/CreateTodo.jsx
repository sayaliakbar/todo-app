


export default function CreateTodo() {


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative mt-4 sm:mt-0 xs:drop-shadow-lg"
    >
      <input
   
        className="leading-none w-full py-4 sm:py-5 px-11 sm:px-16 rounded-lg text-xs sm:text-body dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200 cursor-pointer"
        type="text"
        placeholder="Create a new todo..."
      />
      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-black/25 absolute top-3 sm:top-4 left-4 sm:left-5 dark:border-white/25"></div>
    </form>
  );
}
