import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import { Body } from "../styles";
import 'react-toastify/dist/ReactToastify.css';



export const Root = () => {

    return (
        <Body>
          <Header />
          <Outlet />
          <ToastContainer autoClose={1500} closeOnClick/>
        </Body>
  
    )
  }

export default Root;
  