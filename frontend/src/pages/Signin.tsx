import { Qoutes } from "../components/Qoutes";
import { SigninForm } from "../components/SigninForm";

const Signin = () => {
    return(<div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
        <SigninForm/>
    </div>
    <div className="hidden lg:block"> 
        <Qoutes/>
    </div>      
</div> 
    )
}
export default Signin;