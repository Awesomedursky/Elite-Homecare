export const Button = ({
  text,
  loading,
}: {
  text: string;
  loading?: boolean;
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
      px-4 py-3 sm:px-8 sm:py-4 
bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]
bg-size-[200%_100%]
bg-left overflow-hidden
enabled:hover:bg-right
text-white  
rounded-[20px] 
w-full 
font-semibold 
transition-all  
duration-500 
cursor-pointer  
disabled:cursor-not-allowed 
disabled:bg-gray-400  
disabled:bg-none
flex items-center justify-center gap-2

"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Submitting...
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};
