import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Input } from "@mui/material";
import { Badge } from "@material-ui/core";
import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/auth";
import Logout from "@mui/icons-material/Logout";

const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <span className={classes.language}>EN</span>
          <div className={classes["search-container"]}>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
          <div style={{ paddingLeft: "5px" }}>
            {user?.name ? (
              <p>
                Welcome <b>{user.name}</b>
              </p>
            ) : (
              <p>Welcome Guest</p>
            )}
          </div>
        </div>
        <div className={classes.center}>
          <h1 className={classes.logo} onClick={() => router.push("/")}>
            Lebanese Anime Corner.
          </h1>
        </div>
        <div className={classes.right}>
          {user?.name && (
            <div className={classes["menu-item"]}>
              <Link href="/admin/list">ADMIN</Link>
            </div>
          )}
          <div className={classes["menu-item"]}>
            <Link href="/products">BROWSE</Link>
          </div>
          {!user?.name && (
            <div className={classes["menu-item"]}>
              <Link href="/register">REGISTER</Link>
            </div>
          )}
          {!user?.name && (
            <div className={classes["menu-item"]}>
              <Link href="/login">LOGIN</Link>
            </div>
          )}
          {user?.name && (
            <div className={classes["menu-item"]}>
              <Logout onClick={logout} />
            </div>
          )}
          {user?.name && (
            <div className={classes["menu-item"]}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
