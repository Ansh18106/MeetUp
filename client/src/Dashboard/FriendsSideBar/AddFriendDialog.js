import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validation";
import InputWithLabel from "../../shared/components/InputWithLabel";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

const AddFriendDialog = (
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => { }
) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    // send friend request to server
  };

  const handleCloseDialog = () => {
    console.log(26, "mail");
    closeDialogHandler();
    setMail("");
  };
  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);
  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddFriendDialog;
