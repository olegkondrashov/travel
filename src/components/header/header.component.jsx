
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import Logo from '../logo/logo.component';

import './header.styles.scss';
import Navigation from '../navigation/navigation.component';

const Header = () => {
    
    return (
        <header className="header">
            <Logo/>
            <Navigation/>
            <Button buttonType={BUTTON_TYPE_CLASSES.transparent} className='button-sign-in'>Sign in</Button>
        </header>
    )
}

export default Header;