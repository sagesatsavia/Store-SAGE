import { Link } from "react-router-dom"
import "../Style.css"

export default function Home(){
    return(
        <>
        <div className="container-fluid">
            <div className="row ">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./Extras/necklaces/1.jpg"className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./Extras/necklaces/4.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./Extras/necklaces/3.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container xaliahook">
            <div className="row">
                <div className="col-12">
                    <h2> XALIA is not jewelry — just heirlooms that haven’t met their future yet.</h2>
                    <h5>You don’t just wear it—you inaugurate it</h5>
                    <Link to={'/Collections'} className="text-decoration-none">
                        <h5 className="xalialink">Ready to enter your new chapter? </h5>
                    </Link>                    

                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center categorydiv">
                    <h3 className="categorydivtext">Browse Our Categories</h3>
                </div>
            </div>

            <div className="row mt-5 ">

                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5 ">
                    <div className="card cardtext" style={{width: "auto"}}>
                        <img src="./Extras/earrings/1.jpg" className="d-block w-100" />                          
                    <div className="card-body">
                            <h5 className="card-title fs-3 text-center">Earrings <br></br>
                                <Link to={'/categories'}>
                                <button className="btn1 mt-3"> Shop Now</button>
                                </Link>                             
                            </h5>
                             
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12  mb-5 ">
                    <div className="card cardtext" style={{width: "auto"}}>
                        <img src="./Extras/necklaces/1.jpg" className="d-block w-100" />                          
                    <div className="card-body">
                            <h5 className="card-title fs-3 text-center">Necklaces<br></br>
                            <Link to={'/categories'}>
                                <button className="btn1 mt-3"> Shop Now</button>
                            </Link>  
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12  mb-5 ">
                    <div className="card cardtext" style={{width: "auto"}}>
                        <img src="./Extras/earrings/2.jpg" className="d-block w-100" />                          
                    <div className="card-body">
                            <h5 className="card-title fs-3 text-center">Bracelets<br></br>
                            <Link to={'/categories'}>
                                <button className="btn1 mt-3"> Shop Now</button>
                            </Link>  
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="container-fluid border-top">
            <div className="row ">

                <div className="col-lg-4 col-md-12 col-sm-12 text-center border-bottom lastdiv">
                    <i className="bi bi-bag del"></i>
                    <h1 style={{fontSize:"20px"}}>Free Delivery Over $50 CAD</h1>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 text-center border-bottom  lastdiv">
                    <i class="bi bi-gift del"></i>
                    <h1 style={{fontSize:"20px"}}>Free Gift Wrapping on Orders Over $20 CAD</h1>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 text-center border-bottom  lastdiv">
                    <i className="bi bi-shop del"></i>
                    <h1 style={{fontSize:"20px"}}>Easy Returns </h1>
                </div>
            </div>

        </div>
        
        </>
    )
}