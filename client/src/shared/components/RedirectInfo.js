import React from 'react';
import { Typography, styled } from '@mui/material';

const RedirectText = styled("span")({
    color: '#bf0640',
    fontWeight: 500,
    cursor: 'pointer'
});

const RedirectInfo = ({
    text,
    redirectText,
    additionalStyles,
    redirectHandler,
}) => {
  return (
    <Typography
        sx={{
            color: '#72767d'
        }}
        style={additionalStyles ? additionalStyles : {}}
        variant='subtitle2'
    >
        {text}
        <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  )
}

export default RedirectInfo;