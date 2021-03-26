import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Superhéros <i>par Achraf Lemghari</i></h1>
            <div className="links">
                <Link to="/">Blog des Superhéros</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;