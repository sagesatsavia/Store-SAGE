import "../Style.css"

export default function Footer(){
    return(
        <>
        <div className="container-fluid footerdiv">
            <div className="container">
                <div className="row">
                    <div className="col-12 newsletter ">
                        <h2 className="text-center NewsletterHeader">Subscribe to our NewsLetter <br></br>                        
                        <input className="NewsletterEmail" type="email" placeholder=" Email@example.com"/>
                        <button className="btn1">Subscribe</button>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row text-center border-top pt-5">
                <div className="col-4">
                    <h4 className="footertext">Follow Us</h4>
                    <i className="bi bi-instagram fs-4 me-4"></i>
                    <i className="bi bi-facebook fs-4"></i>
                </div>
                <div className="col-4">
                    <h4 className="footertext">Legal Area</h4>
                    <a className="nav-link footerText" href="#">Refund Policy</a>
                    <a className="nav-link footerText" href="#">Delivery Policy</a>
                    <a className="nav-link footerText" href="#">Privacy Policy</a>
                </div>
                <div className="col-4">
                    <h4 className="footertext">Contact Us</h4>
                    <ul type="none">
                    <li className="footerText" ><i className="bi bi-telephone-fill me-2"></i> +1(437) 499-9776 </li>
                    <li className="footerText"><i className="bi bi-envelope-fill me-2"></i> sagesatsavia@hotmail.com</li>
                    <li className="footerText"><i className="bi bi-geo-alt-fill me-2"></i> Toronto, Ontario</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="row copyright border-top">
                <div className="col-12">
                    COPYRIGHT &copy;  2025 XALIA
                </div>
            </div>   
        </div>
        
        </>
    )
}