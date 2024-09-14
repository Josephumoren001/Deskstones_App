import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group bg-white p-5 w-full border border-gray-200 hover:shadow-lg h-[420px] overflow-hidden rounded-lg sm:w-[430px] transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={post.image}
          className="h-[240px] w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out"
          alt={post.title}
        />
      </div>

      {/* Title and Slug */}
      <div className="pt-5">
        <p className="text-[#333] text-[20px] font-bold leading-tight line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
          {post.title}
        </p>
        <p className="text-[#737373] text-[14px] pt-2">{post.slug}</p>
      </div>

      {/* "Read Article" Link - Always Visible */}
      <div className="pt-4">
        <Link
          to={`/post/${post.slug}`}
          className="block text-center bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
