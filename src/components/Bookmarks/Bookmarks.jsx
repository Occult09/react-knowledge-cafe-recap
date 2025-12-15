import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 p-5 space-y-5 bg-[#1111110D] rounded-2xl'>
            <div>
                <h3>Spent time on read : {readingTime} min</h3>
            </div>
            <h1 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;