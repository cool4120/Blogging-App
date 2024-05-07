import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Link } from "react-router-dom"

export const Auth = ({type}:{type:'signup'|'signin'}) => {
    const [postInputs,setPostInputs] = useState({
        name:'',
        username:'',
        password:''
    })
    return(
        <div className="h-screen flex flex-col justify-center">
            {/* <div>{postInputs.username}</div> */}
                <div className="flex justify-center">
                <div>
                    <div>
                        <div className="text-2xl justify-center">
                            { type == 'signup'?'Create An account':'Sign in'}
                        </div>
                        <div className="text-slate-400">
                            {type == 'signup'?'Already have an account? ':'Dont Have an Account'}
                            <Link className="pl-2 underline text-slate-400" to={type == 'signup'?"/signin":'/signup'} style={{}}>Login</Link>
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
                    <button className="bg-black hover:bg-blue-700 w-full text-white font-bold py-2 px-10 my-3 rounded" onClick={()=> {}}>{type == 'signin'?'Sign In':'Sign Up'}</button>
                </div>
            </div>       
        </div>
    )
}
interface Labeltype {
    placeholder:string;
    label:string,
    onChange:(e:ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

const LabelledInput = ({placeholder,label,onChange, type}:Labeltype) => {
    return(
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    )
}