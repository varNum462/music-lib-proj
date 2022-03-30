import './TitleBar.css'

const TitleBar = (props) => {
    return ( 
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <h1><a className="navbar-brand" href="#">Music Search</a></h1>
                </div>
            </div>
        </nav>
    );
}
 
export default TitleBar;