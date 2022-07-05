
import CartWidget from './CartWidget'
import NavBar from './NavBar'

function Header() {
    return (
        <header className="lf-header">
            <input type="checkbox" style={{display: 'none'}} id="nav-switch"/>
            <div className='top-header'>
                <h2>LaissezFaire</h2>
                <div className='top-end'>
                    <label for="nav-switch" className='burger-btn'><i class="bi bi-list"></i></label>
                <CartWidget/>
                </div>
                
            </div>
            <NavBar />
        </header>
    )
}

export default Header
