import { useState, useEffect } from 'react';
import axios from 'axios';

const MusicTable = (props) => {

  const [musicData,setMusicData] = useState([{}]);   

  async function getData() {
     let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
      console.log(response.data); 
      setMusicData(response.data);  
  }

  useEffect(()=>{
    getData();
  },[]);
    return ( 
      <div className="container p-5">
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
            {musicData.map((music) => {
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