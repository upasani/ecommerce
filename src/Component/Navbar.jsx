import './css/navbar.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";


export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>

            <div id="navbar">
                <div>
                    <Badge color='secondary' style={{ cursor: "pointer" }}>
                        <HomeIcon onClick={() => true ? navigate('/') : "Not true"} />
                    </Badge>
                </div>
                <div>
                    <p>input box and the search icon</p>
                </div>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
               
                <div>
                    <Badge color='secondary' style={{ cursor: "pointer" }}>
                        <ShoppingCartIcon onClick={() => true ? navigate('/cart') : "Not true"} />
                    </Badge>
                    {/* <Link to='/cart'>Cart</Link> */}
                </div>
            </div>
        </>
    )
}