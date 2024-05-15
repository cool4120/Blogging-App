import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
interface Blog {

}
export const useBlogs = () => {
    const [loading,setLoading] = useState(true);
    const [blogData, setBlogData] = useState<Blog[]>([]);
    useEffect( () => {
         axios.get(BACKEND_URL+'/api/v1/blog')
            .then((res) => {
                const data = res.data;
                setBlogData(data)
                setLoading(false)
            })
    },[])
    return{
        loading,
        blogData
    }
}