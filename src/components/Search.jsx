import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const AnimatedSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        searchValue === ""
      ) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchValue]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      {!searchOpen && (
        <button onClick={() => setSearchOpen(true)} aria-label="Open search"
          className="text-gray-600 text-lg p-3 rounded-full hover:bg-gray-200 transition" >
          <FaSearch />
        </button>
      )}

      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 240, opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative flex items-center bg-white/60 backdrop-blur-sm rounded-full overflow-hidden shadow-md" >
            <FaSearch className="absolute left-5 text-gray-500 text-sm pointer-events-none" />
            <input type="search" autoFocus value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} placeholder="Search"
              className="pl-12 pr-4 py-3 w-full bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSearch;
