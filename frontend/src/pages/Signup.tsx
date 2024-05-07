import { Auth } from "../components/Auth";
import { Qoutes } from "../components/Qoutes";

const Signup = () => {
    return(
    <div className="flex grid grid-cols-2">
        <div>
            <Auth type="signup"/>
        </div>
        <div className="invisible lg:visible"> 
        <Qoutes/>
        </div>      
    </div> 
    )
}
export default Signup;