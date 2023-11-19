import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './destination-item.styles.scss';

const DestinationItem = (props) => {
    const {name, img} = props;
    return (
        <div className='destination-item'>
            <div className="destination-item__image">
                <img src={img} alt={name} />
            </div>
            <div className="destination-item__info">
                <div className="destination-item__info__header">
                    <h6 className="destination-item__info__header-name">{name}</h6>
                    <div className="destination-item__info__header-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99999 0C6.32405 0 3.33331 2.99074 3.33331 6.66668C3.33331 7.7702 3.60921 8.86434 4.1337 9.8348L9.63542 19.7852C9.70866 19.9178 9.84823 20 9.99999 20C10.1518 20 10.2913 19.9178 10.3646 19.7852L15.8683 9.83152C16.3908 8.86434 16.6667 7.77016 16.6667 6.66664C16.6667 2.99074 13.6759 0 9.99999 0ZM9.99999 10C8.16202 10 6.66667 8.50465 6.66667 6.66668C6.66667 4.82871 8.16202 3.33336 9.99999 3.33336C11.838 3.33336 13.3333 4.82871 13.3333 6.66668C13.3333 8.50465 11.838 10 9.99999 10Z" fill="#4997D3"/>
                        </svg>
                        <p className="destination-item__info__header-description">20 Packages</p>
                    </div>
                </div>
                <Button buttonType={BUTTON_TYPE_CLASSES.rounded}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24.75 18.0001C24.75 18.2878 24.64 18.5758 24.4204 18.7954L13.1704 30.0454C12.7308 30.485 12.0189 30.485 11.5796 30.0454C11.1403 29.6058 11.14 28.894 11.5796 28.4547L22.0342 18.0001L11.5796 7.54543C11.14 7.10583 11.14 6.39399 11.5796 5.95468C12.0192 5.51536 12.7311 5.51508 13.1704 5.95468L24.4204 17.2047C24.64 17.4243 24.75 17.7123 24.75 18.0001Z" fill="white"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default DestinationItem;