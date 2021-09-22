

function Navbar({ setView }){

    console.log("rendering nav")
    return (
        <nav className="navbar navbar-light bg-warning">
            <span onClick={() => setView("Profile")} className="navbar-brand mb-0 h1 p-2">InstaBop</span>
            <button onClick={() => setView("About")} className="btn btn-dark"> About</button>
            <button onClick={() => setView("Home")} className="btn btn-info">Home</button>
        </nav>
    )
}

export default Navbar;