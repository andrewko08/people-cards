import '../App.css'
import logo from '..//happy.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='flex-center'>
                <img src={logo} alt='logo'></img>
                <p>AK</p>
            </div>
        </div>
    )
}
export default Header