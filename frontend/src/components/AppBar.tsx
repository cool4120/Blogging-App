import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="border-b-2 flex justify-between px-10 align-content:center">
        <div className="flex flex-col justify-center">
            Medium
        </div>
        <div className="flex justify-center m-2">
            <Avatar name="Colin"/>
        </div>

    </div>
}