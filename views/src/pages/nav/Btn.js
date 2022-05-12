import {
  Stack,
  Divider,
  Badge,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { connect } from "react-redux";

const Btn = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {user ? (
        <Stack direction="row" spacing={2}>
          <Badge badgeContent={5} color="error" className="mt-2">
            <MailIcon
              color="#0c1232"
              fontSize="large"
              className="cursor-pointer "
            />
          </Badge>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar alt="Remy Sharp" src="">
              {" "}
              <AccountCircleIcon fontSize="large" />{" "}
            </Avatar>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      ) : (
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Link to="/Login" className="">
            <button className="btn">Log in</button>
          </Link>
          <Link to="/Register" className="">
            <button className="btn">Sign up</button>
          </Link>
        </Stack>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Btn);
