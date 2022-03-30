import { useState, useEffect } from 'react';
import axios from 'axios';
import './MusicTable.css'
import SearchBar from '../SearchBar/SearchBar';

const MusicTable = (props) => {

  const [musicData,setMusicData] = useState([{}]);   
  const [searchList,setSearchList] = useState([{}]);

  async function getMusic() {
     let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
      console.log(response.data); 
      setMusicData(response.data);  
      setSearchList(response.data);
  }
  
  function getSearchTerm(searchFor){
    searchFor = searchFor.toLowerCase();  //console.log(`Searching for ${searchFor}`)
    let filterMusic = musicData.filter(function(element){
      if(element.title.toLowerCase().match(searchFor) || element.artist.toLowerCase().match(searchFor) || element.album.toLowerCase().match(searchFor) || element.genre.toLowerCase().match(searchFor) || element.releaseDate.match(searchFor)){
        return true;
      }else{
        return false;
      }
    });
    console.log(filterMusic);
    setSearchList(filterMusic);
  }
   
  useEffect(()=>{
    getMusic();
  },[]);

    return ( 
      <div className="container p-5">
        <SearchBar getSearchTerm={getSearchTerm} />
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((music) => {
              return (
                <tr>
                <td>{music.id}</td>               
                <td>{music.title}</td>
                <td>{music.album}</td>
                <td>{music.artist}</td>
                <td>{music.genre}</td>                
                <td>{music.releaseDate}</td>                
              </tr>
              )
            })
              
            }            
          </tbody>
        </table>
      </div>
     );
}
 
export default MusicTable;