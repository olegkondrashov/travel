import { BlueButton,GrayButton, RoundedButton, TransparentBlueButton, TransparentButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
    transparent: 'transparent',
    blue: 'blue',
    gray: 'gray',
    rounded: 'rounded',
    transparentBlue: 'transparentBlue'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.transparent) => 
    ({
        [BUTTON_TYPE_CLASSES.transparent]: TransparentButton,
        [BUTTON_TYPE_CLASSES.blue]: BlueButton,
        [BUTTON_TYPE_CLASSES.gray]: GrayButton,
        [BUTTON_TYPE_CLASSES.rounded]: RoundedButton,
        [BUTTON_TYPE_CLASSES.transparentBlue]: TransparentBlueButton,
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
