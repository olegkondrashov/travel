import { BlueButton,GrayButton, RoundedButton, TransparentButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
    transparent: 'transparent',
    blue: 'blue',
    gray: 'gray',
    rounded: 'rounded'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.transparent) => 
    ({
        [BUTTON_TYPE_CLASSES.transparent]: TransparentButton,
        [BUTTON_TYPE_CLASSES.blue]: BlueButton,
        [BUTTON_TYPE_CLASSES.gray]: GrayButton,
        [BUTTON_TYPE_CLASSES.rounded]: RoundedButton,
    }[buttonType]);

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton type="button" {...otherProps}> 
            {children} 
        </CustomButton>
    )
}

export default Button;
