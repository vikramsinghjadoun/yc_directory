
import Form from 'next/form'

const SearchBar = ({query }: {query?: string}) => {
    

  return (
    <Form action="/" scroll={false} className="relative w-full pt-12">
      <input 
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search startups..."
        // onChange={(e) => onSearch?.(e.target.value)}
        className="w-full px-6 py-4 
                 bg-white
                 border-4 border-black
                 font-mono text-lg
                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                 transition-all duration-200
                 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                 focus:outline-none
                 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                 placeholder:text-gray-500"
      />
      <button 
      type='submit'
        className="absolute right-4 top-20 -translate-y-1/2
                   p-2 
                   hover:bg-gray-100 
                   rounded-full 
                   transition-colors"
        // onClick={() => onSearch?.('')}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
          />
        </svg>
      </button>
    </Form>
  );
};

export default SearchBar;
