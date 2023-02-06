
const ContentTitle = ({ title, imageIcon }) => {
    return (
        <div className="flex gap-2 justify-center items-center bg-secondary shadow-lg md:rounded-lg p-3 text-[#ffffff]">
            {imageIcon}
            <p className="font-bold text-lg text-[#ffffff]">{title}</p>
        </div>
    )
}

export default ContentTitle
