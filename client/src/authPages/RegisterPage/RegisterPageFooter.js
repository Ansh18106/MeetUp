import React from 'react';import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormInvalidMessage = () => {
    return 'Username should contains between 3 and 12 chars and pasword should be greater than 3 chars.';
}

const getFormValidMessage = () => {
    return 'Click to register';
}


const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate("/login");
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
                onClick={handleRegister}
                />
        </div>
        </Tooltip>
        <RedirectInfo
        text=""
        redirectText='Already have an account?'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
        />
    </>
  )
}


export default RegisterPageFooter;