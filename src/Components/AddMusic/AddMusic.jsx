import { useState } from "react";
import './AddMusic.css'

const AddMusic = (props) => {

    const [songTitle,setSongTitle] = useState('');
    const [songAlbum,setSongAlbum] = useState('');
    const [songArtist,setSongArtist] = useState('');
    const [songGenre,setSongGenre] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            songTitle,
            songAlbum,
            songArtist,
            songGenre
        }
        props.addNewSong(newSong);
        setSongTitle("");
        setSongAlbum("");
        setSongArtist("");
        setSongGenre("");
    }

    return ( 
        <div>
            <div className="m-3 container">
                <h2>Add A Song</h2>
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
                        <input type="submit" className="btn btn-warning" value="Add Song" />
                    </div>
                </form>
            </div>
            <hr />
        </div>
     );
}
 
export default AddMusic;