import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

const Blogs = () => {
    return(
        <div>
            <AppBar/>
            <div>
                <BlogCard 
                    content="Hello this my first blog post in this app.  "
                    title="Designing with Dynamic Content in Figma"
                    authorName="Colin"
                    publishedDate="12-May-2024"
                    />

                <BlogCard 
                    content="Hello this my first blog post in this app.  "
                    title="Designing with Dynamic Content in Figma"
                    authorName="Colin"
                    publishedDate="12-May-2024"
                    />
                <BlogCard 
                    content="Hello this my first blog post in this app.  "
                    title="Designing with Dynamic Content in Figma"
                    authorName="Colin"
                    publishedDate="12-May-2024"
                    />
            </div>
        </div>
    )
}
export default Blogs;