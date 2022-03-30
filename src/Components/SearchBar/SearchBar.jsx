import { useState } from "react";
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchTerm,setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.getSearchTerm(searchTerm);
        setSearchTerm('');
        //console.log(`searching for ${searchTerm}`)
        }

    return (         
        <div className="container">           
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <label> <h2>Find A Song</h2></label>
                    <input type="text" className="form-control rounded-start" placeholder="Search by Title, Album, Artist, Genre or Release Date" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                    <button className="btn btn-success" type="submit">Search</button>
                </div> 
            </form>
        </div>
     );
}
 
export default SearchBar;