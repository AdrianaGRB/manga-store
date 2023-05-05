import React from "react";
import { IconsButtonsContainer } from "../../UI/StyledButtons";
import { BsFillTrashFill } from "react-icons/bs";

const TrashButton = ({
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <>
      <IconsButtonsContainer disabled={disabled} onClick={onClick}>
        <BsFillTrashFill style={{ fontSize: "25px", color: "#ffff" }} />
      </IconsButtonsContainer>
    </>
  );
};

export default TrashButton;
