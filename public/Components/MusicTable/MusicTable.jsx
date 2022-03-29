import "./LikeDislike.css"

const MusicTable = (props) => {
    return ( 
        <table width="800">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Genre</th>
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
              </tr>
              )
            })
              
            }            
          </tbody>
        </table>
     );
}
 
export default MusicTable;