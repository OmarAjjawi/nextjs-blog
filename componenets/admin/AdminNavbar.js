import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';



const AdminNavbar = () => {
  const router = useRouter();

  const backArrowHandler = () => {
    router.push('/')
  }

  return (
    <>
      <Navbar bg="primary">
        <ArrowBackOutlinedIcon onClick={backArrowHandler} style={{color: 'white', marginLeft: '50px', cursor: 'pointer'}}/>
        <Container>
          <Link href={"/admin/list"}>
            <a className="navbar-brand text-white">Lebanese Anime Corner: Admin Panel</a>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
