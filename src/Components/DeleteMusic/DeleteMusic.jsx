import './DeleteMusic.css'

const DeleteSong = (props) => {
    return ( 
        <div className="modal" id="deleteSong">
            <div className="modal-dialog">
                <div className="modal-content">

               
                <div className="modal-header">
                    <h4 className="modal-title">Delete A Song</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
               
                <div className="modal-body">
                    Are you sure you want to delete the following song?
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    );
}
 
export default DeleteSong;