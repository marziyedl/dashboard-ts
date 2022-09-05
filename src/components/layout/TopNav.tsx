import { faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, NavbarText } from 'reactstrap'

function TopNav() {
  return (
    <>
    <Navbar
    color="dark"
    dark
  >""
    <NavbarText href="/"  className="my-2">
      
    Jane Doge
     <FontAwesomeIcon className='mx-2' icon={faUser} />
    </NavbarText>
  </Navbar>

  </>
  )
}

export default TopNav