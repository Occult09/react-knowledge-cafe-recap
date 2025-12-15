const Blog = ({ blog }) => {

    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog

    return (
        <div className="space-y-3 mb-5">
            <img src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-15">
                        <img src={author_img} alt="" />
                    </div>
                    <div className="ml-4">
                        <p>{author}</p>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a>#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;