import { logo_url } from "./Constants";
import { Link } from "react-router";

const Footer=()=>{
    return(
        <div className="Footer">
            <ul className="list">
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
            <div className="brand-details">
                <img src={logo_url} alt="footer-logo" />
                <h4>Thank You for visiting</h4>
            </div>
        </div>
    )
}


export default Footer;