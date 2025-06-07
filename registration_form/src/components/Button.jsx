export default function Button({ children, ...props }) {
  return (
    <button
      className="text-xs sm:text-sm md:text-base
    px-4 sm:px-6 py-2 sm:py-3
    font-medium uppercase rounded-lg text-white
    bg-[#6c63ff] shrink-0 cursor-pointer
    hover:bg-[#6741d9]
    transition-all duration-200
 sm:w-auto"
      {...props}
    >
      {children}
    </button>
  );
}
