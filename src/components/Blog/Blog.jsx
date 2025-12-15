import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog

    return (
        <div className="space-y-3 my-5">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-15">
                        <img src={author_img} alt="" />
                    </div>
                    <div className="ml-4">
                        <p className="font-bold text-2xl">{author}</p>
                        <span className="font-semibold text-[16px] text-[#11111199]">{posted_date}</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-[#11111199] font-medium text-[20px]">{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-5xl font-bold">{title}</h2>
            <p className="text-[#11111199]">
                {
                    hashtags.map((hash, index) => <span key={index}><a>#{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className="text-[#6047EC] font-semibold text-xl border-b">Mark as read</button>
        </div>
    );
};

export default Blog;