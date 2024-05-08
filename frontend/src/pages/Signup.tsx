import { Qoutes } from "../components/Qoutes";
import { SignUpForm } from "../components/SignupForm";

const Signup = () => {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <SignUpForm/>
        </div>
        <div className="hidden lg:block"> 
        <Qoutes/>
        </div>      
    </div> 
    )
}
export default Signup;