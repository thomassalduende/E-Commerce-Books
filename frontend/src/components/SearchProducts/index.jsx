import './index.css'
import { FaSearch } from 'react-icons/fa'
import { useInputValue } from '../../hooks/useInputValue'
import { useNavigate } from 'react-router-dom'
export function SearchPoducts () {

 const search = useInputValue('')
  const Navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault();
    Navigate(`/${search.value}`);
  };
 
  return (
    <form className="searchBar" onSubmit={handleSearch}>

    <input 
      type="text" 
      placeholder="Libro, autor, etc..."  
      {...search}
      
    />

    <FaSearch className="searchBarIcon" />
  </form>
  )
}