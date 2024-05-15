interface BlogCardProps {
    authorName:string;
    title:string;
    content: string;
    publishedDate:string;
}
export const BlogCard  = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {

    return <div className="flex p-2 justify-center ">
        <div className="flex flex-col border border-b-2 w-2/3">
            <div className="flex items-center"> 
                <div className="m-1">
                    <Avatar name={authorName}/>
                </div>
                <div className="mx-2 font-light text-gray-600">
                    {authorName} {' . '}
                    {publishedDate} 
                </div>
            </div>
            <div className="font-bold text-2xl m-1">
                {title}
            </div>
            <div className="font-light mx-1">
                {content.slice(0,100)+'...'}
            </div>
            <div className="m-1 text-slate-500">
                {Math.floor(content.length/100)+' Minutes read'}
            </div>
            {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/> */}
        </div>
    </div>
}

export const Avatar = ({name}:{name:string}) => {
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
    )
}

function Circle () {
    return <div className="h-1 w-1 rounded-full bg-slate-200">

    </div>
}