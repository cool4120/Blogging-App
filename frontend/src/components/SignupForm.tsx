import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const SignUpForm = () => {
    const [postInputs,setPostInputs] = useState({
        name:'',
        username:'',
        password:''
    })
    const navigate = useNavigate()
    return ( <div className="h-screen flex flex-col justify-center">
    {/* <div>{postInputs.username}</div> */}
        <div className="flex justify-center">
        <div>
            <div>
                <div className="text-2xl justify-center">
                    {'Create An account'}
                </div>
                <div className="text-slate-400">
                    {'Already have an account? '}
                    <Link className="pl-2 underline text-slate-400" to={"/signin"} style={{}}>Login</Link>
                </div>
            </div>
            <div>
            {/* <div className="flex flex-col"> */}
                <LabelledInput placeholder="Enter Name" label="Name" onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        name:e.target.value
                    }))
                }}/>
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
                    const resp = await axios.post(BACKEND_URL+'/api/v1/user/signup',postInputs)
                    const token = resp.data.token
                    localStorage.setItem('token',token)
                    navigate('/blog')
                } catch(err){
                    console.log(`Error`,err)
                }


            }}>{'Sign Up'}</button>
        </div>
    </div>       
</div>)
}