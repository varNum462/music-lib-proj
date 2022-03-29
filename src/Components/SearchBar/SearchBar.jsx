import { useState } from "react";
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchTerm,setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSearch = {
            searchTerm
        }
        //props.findSong(newSearch);
        setSearchTerm('');
        console.log(`Search term is ${searchTerm}`);
        }

    return (         
        <div className="container">
            <h2>Find A Song</h2>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="control-label">Enter a Title, Album, Artist or Genre to search by:</label>
                    <input type="text" className="form-control" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                </div>                    
                <div className="form-group">
                    <input type="submit" className="btn btn-warning small p-1 pl-3 pr-3 m-2" value="Find Song" />
                </div>
            </form>
        </div>
     );
}
 
export default SearchBar;