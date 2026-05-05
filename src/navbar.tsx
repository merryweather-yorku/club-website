import './navbar.css';
import logo from './assets/logo_notext.png';

function Navbar({ setPage }: any) {
    return (
        <>
            <div id="main-nav">
                <img src={logo} id="logo" height="90%" onClick={() => setPage(0)} />
                <div id="buttons-divider">
                    <div id="buttons">
                        <button id="nav-button" onClick={() => setPage(0)}>Home</button>
                        <button id="nav-button" onClick={() => setPage(1)}>About</button>
                        <button id="nav-button" onClick={() => setPage(2)}>Projects</button>
                        <button id="nav-button" onClick={() => setPage(3)}>Join Us</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar

