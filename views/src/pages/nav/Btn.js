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
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../stores/userStore/userThunk";
import AddService from "../ServicePage/AddService";
import axios from "axios";

const Btn = ({ user, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:4000/get_user/${user.user}`, {
          withCredentials: true,
        })
        .then((res) => {
          setAvatar(res.data.profile_image);
        });
    }
  }, [user]);

  const nav = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = {
    spacing: 1,
  };

  const handleProfile = () => {
    nav("/profile/" + user?.user);
    setAnchorEl(null);
  };
  const [showAddService, setShowAddService] = useState(false);

  return (
    <div>
      {user?.user ? (
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
            {avatar ? (
              <img
                className="w-12 h-12 rounded-full"
                src={`http://localhost:4000/${avatar}`}
                alt=""
              />
            ) : (
              <Avatar alt="" src="">
                {" "}
                <AccountCircleIcon fontSize="large" />{" "}
              </Avatar>
            )}
          </IconButton>
          <Menu
            sx={{ mr: 5 }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={() => {setShowAddService(true)}}>Add service</MenuItem>
            <MenuItem
              onClick={() => {
                onLogout(nav);
              }}
            >
              Logout
            </MenuItem>
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
      
      {showAddService && <AddService setShowAddService={setShowAddService} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: (nav, setAnchorEl) => {
      dispatch(logout(nav));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Btn);
