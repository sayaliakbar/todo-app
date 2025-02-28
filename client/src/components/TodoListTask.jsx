import crossIcon from "../assets/images/icon-cross.svg";
import PropTypes from "prop-types";

export default function TodoListTask({ text, id }) {
  TodoListTask.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };
  return (
    <li className="border-b dark:border-white/50 border-black/25 py-3 sm:py-4 pl-11 sm:pl-16 pr-10 relative group hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer break-words">
      <input
        type="checkbox"
        id={id}
        className="absolute left-4 top-4 sm:left-5 peer appearance-none w-4 h-4 sm:w-6 sm:h-6 border border-black/25 checked:border-none  rounded-full focus:outline-none shrink-0 checked:bg-gradient-to-br from-cyan-400 to-purple-500 dark:border-white/25 hover:ring-2 after:content-[''] after:w-full after:h-full after:rounded-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:12px] checked:after:bg-[url(./assets/images/icon-check.svg)]"
      />
      <label
        htmlFor={id}
        className="w-full dark:peer-checked:text-white/25 peer-checked:text-black/25  peer-checked:line-through cursor-pointer text-sm sm:text-body"
      >
        {text}
      </label>
      <button className="group-hover:visible invisible">
        <img
          className="absolute top-1/2 right-4 -translate-y-1/2  w-3 h-3 "
          src={crossIcon}
          alt="Remove item"
        />
      </button>
    </li>
  );
}

{
  /* <input
        id="checkbox1"
        className="  absolute p-2 left-4 top-4 sm:top-4 sm:left-5 appearance-none rounded-full border border-black/25 sm:p-3 cursor-pointer peer hover:border-t-cyan-400 hover:border-l-cyan-400 hover:border-r-purple-400 hover:border-b-purple-400 dark:border-white/25 group"
        type="checkbox"
      />
      <label
        className="leading-none cursor-pointer peer-checked:line-through peer-checked:text-gray-500 w-fit text-xs sm:text-body"
        htmlFor="checkbox1"
      >
        <img
          className=" bg-gradient-to-br from-cyan-400 border to-purple-500 w-6 h-6 absolute left-[21px] top-[17px] p-2 rounded-full hover:border peer-checked:block"
          src={checkIcon}
          alt="Checked"
        />
        {/* <TodoListTaskCheckIcon></TodoListTaskCheckIcon> }
        Complete online JavaScript course
      </label> */
}
