import { useState,useEffect } from "react";
import './AddMusic.css'
import axios from 'axios';

const AddMusic = (props) => {

       const [songTitle,setSongTitle] = useState('');
        const [songAlbum,setSongAlbum] = useState('');
        const [songArtist,setSongArtist] = useState('');
        const [songGenre,setSongGenre] = useState('');
        const [songReleaseDate,setSongReleaseDate] = useState('');
    
        async function handleSubmit(){
            axios.post(`http://localhost:5005/api/songs`, {
                "title": songTitle,
                "album": songAlbum,
                "artist": songArtist,
                "genre": songGenre,
                "releaseDate": songReleaseDate
            })
            .then(response => {
                console.log(response);
            });
        };
    

    return ( 
        <div id="addSong mt-5"> 
            <div className="container mt-5">
           
                <h2 className="mt-5">Add A Song</h2>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">Title</label>
                        <input type="text" className="form-control" value={songTitle} onChange={(event) => setSongTitle(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Album</label>
                        <input type="text" className="form-control" value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Artist</label>
                        <input type="text" className="form-control" value={songArtist} onChange={(event) => setSongArtist(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Genre</label>
                        <input type="text" className="form-control" value={songGenre} onChange={(event) => setSongGenre(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Release Date</label>
                        <input type="date" className="form-control" value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-warning" value="Add Song" />
                    </div>
                </form>
            </div>            
        </div>
     );

}
 
export default AddMusic;