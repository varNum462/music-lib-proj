import { useState, useEffect } from "react";
import axios from 'axios';

const DeleteMusic = (props) => {

       const [songId,setSongId] = useState('');
           
        useEffect(() => {
            async function handleSubmit() {
                await axios.delete('http://localhost:5005/api/songs/${songId}');
                console.log('Delete successful');
            }
        }, []);



    return ( 
        <div> 
            <form className="form-horizontal" > 
                <input type="hidden" value={songId} onSubmit={(event) => setSongId(event.target.value)} />           
                <input type="submit" className="btn btn-danger" value="DELETE"  />
            </form>
        </div>
     );

}
 
export default DeleteMusic;