import React from "react";
import "./Signup.css"

const Signup = ({ toggle}) => {


    return (<div>
        <div className="container">
            <label>Signup</label><span id="close" onClick={toggle}>X</span>
            <form>
                <div class="form-group">

                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full Name" />
                </div>
                <div class="form-group">


                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Email" />

                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <p>i agree to Zomato's terms of service, Privacy policy and content policies</p>
                </div>
                <button type="submit" class="btn btn-danger">Create account</button>
                <i >or</i>
                <a href="#" className="anch"><span className="bi bi-google"></span>                     continue with google                             </a>
            </form>
            <p>already have an account? <a id="login">Login</a></p>
        </div>

    </div>)
}
export default Signup