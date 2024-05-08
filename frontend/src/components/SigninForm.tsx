import { Link, useNavigate } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const SigninForm = () => {
    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState({
        username:'',
        password:''
    })
    return <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
            <div>
                <div>
                    <div className="text-2xl justify-center">
                        {'Sign in'}
                    </div>
                    <div className="text-slate-400">
                        {'Dont Have an Account'}
                        <Link className="pl-2 underline text-slate-400" to={'/signup'} style={{}}>Login</Link>
                    </div>
                </div>
                <div>
                {/* <div className="flex flex-col"> */}
                    <LabelledInput placeholder="Enter Username" label="Username" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username:e.target.value
                        }))
                    }}/>
                    <LabelledInput placeholder="***" type="password" label="Password" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password:e.target.value
                        }))
                    }}/>
                </div>
                <button className="bg-black hover:bg-blue-700 w-full text-white font-bold py-2 px-10 my-3 rounded" onClick={async ()=> {        
                try{
                    const response = await axios.post(BACKEND_URL+'/api/v1/user/signin',postInputs)
                    const token = response.data.token
                    localStorage.setItem('token',token)
                    navigate('/blog')
                }catch(err){
                   console.log(`Error`,err)
                }
                }}>{'Sign In'}</button>
            </div>
        </div>       
</div>
}