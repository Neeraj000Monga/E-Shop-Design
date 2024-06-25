import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header style={{ background: "#e8eced", height: "60px", marginBottom: "10px"}}>
      <nav>
        <NavLink to="/" >
          <h1 style={{background: "#00aeae", color: "#fff", padding: "10px"}}>LOGO</h1>
        </NavLink>
        <div className="avtar">
          <NavLink to="/cart">
            <ShoppingCartIcon style={{ fontSize: "2rem", color: "#00AEAE" }} />
          </NavLink>

          <Avatar style={{ background: "#00AEAE" }} onClick={handleClick} />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
             <Link to="/store"> My Store</Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Link to="/Profile"> Profile</Link>
              
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </>
        </Menu>
      </nav>
    </header>
  );
};
