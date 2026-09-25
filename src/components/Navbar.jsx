import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">
                    <h2>ViralLoop</h2>
                </Link>
            </div>

            <div>
                <Link to="/challenges">Explore</Link>
                <Link to="/create">Create</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar