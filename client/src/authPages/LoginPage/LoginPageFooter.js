import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormInvalidMessage = () => {
    return 'Enter correct email address and password';
}

const getFormValidMessage = () => {
    return 'Click to login';
}


const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToRegisterPage = () => {
        navigate("/register");
    };

    return (
    <>
        <Tooltip
            title={!isFormValid ? getFormInvalidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimaryButton
                label="Log in"
                additionalStyles={{ marginTop: "30px" }}
                disabled={!isFormValid}
                onClick={handleLogin}
                />
        </div>
        </Tooltip>
        <RedirectInfo
        text="Don't have account? "
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
        />
    </>
  )
}

export default LoginPageFooter;