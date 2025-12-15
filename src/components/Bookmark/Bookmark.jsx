const Bookmark = ({ bookmark }) => {

    const {title} = bookmark

    return (
        <div className="w-87 h-24 border-2 border-[#FFFFFF] text-center p-2 mb-5 rounded-lg bg-[#FFFFFF]">
            <h4 className="font-semibold text-lg">{title}</h4>
        </div>
    );
};

export default Bookmark;