import { Auth } from "../components/Auth";
import { Qoutes } from "../components/Qoutes";

const Signin = () => {
    return(<div className="flex grid grid-cols-2">
    <div>
        <Auth type="signin"/>
    </div>
    <div className="invisible lg:visible"> 
    <Qoutes/>
    </div>      
</div> 
    )
}
export default Signin;