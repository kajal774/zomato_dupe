import React, { useState } from "react";
import "./pages.css"
import Login from "../AuthComponents/LOGIN/Login";
import Signup from "../AuthComponents/Signup";
import { Modal } from "react-bootstrap";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import zomatoNamePlate from "../images/zomatoNamePlate.avif"
import { Link } from "react-router-dom";

const Header = () => {

    let [logintoggle, setlogintoggle] = useState(false)
    let [signuptoggle, setsignuptoggle] = useState(false)
    const logintogglehandler = (e) => {
        e.preventDefault();
        setsignuptoggle(false)
        if (logintoggle === true) {
            setlogintoggle(false)
        }
        else {
            setlogintoggle(true)
        }
    }
    const Signuptogglehandler = (e) => {
        e.preventDefault();
        setlogintoggle(false)
        if (signuptoggle === true) {
            setsignuptoggle(false)
        }
        else {
            setsignuptoggle(true)
        }

    }
    return (<div id="container">
        <div className="sub-container">
            <ul>
                <li><Link to="#">Investor Relations</Link></li>
                <li><Link to="#">Add Resturant</Link></li>
                <li><Link  onClick={logintogglehandler}>Login</Link></li>
                <li><Link  onClick={Signuptogglehandler}>Signup</Link></li>

            </ul>
        </div>


        <Modal show={logintoggle} class="modal-dialog modal-dialog-scrollable">
            {
                <Login toggle={logintogglehandler} />
            }

        </Modal>
        <Modal show={signuptoggle} class="modal-dialog modal-dialog-scrollable">
            {
                <Signup toggle={Signuptogglehandler} />
            }

        </Modal>
        <div className="content-container">
            <div id="imagec">
                <image src={zomatoNamePlate} alt="image not found"  style={{height:"60px"}} />
            </div>
            <div className="content">
                <h1> Discover the best food & drinks in Bengaluru</h1>
            </div>
            <div className="input-container">
              <LocationOnIcon/>  <input type="search"  className="first" /><SearchOutlinedIcon/><input type="search" className="second" list="searchidea" placeholder="Search for resturants, cusins and dishes " />
            </div>
            <datalist id="searchidea">
                <option >Megana</option>
                <option > nagarguna</option>
            </datalist>

        </div>

    </div>)

}
export default Header