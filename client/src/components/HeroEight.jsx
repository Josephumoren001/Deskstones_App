import Blog from "./BlogComponent";
import next from "../assets/next.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import PostCard from "./PostCard";

const HeroEight = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-[#E7F9E9] p-5 lg:p-20">
      {posts && posts.length > 0 && (
        <div>
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Stay informed and inspired
          </p>
          <h1 className="text-[35px] lg:text-[50px] font-extrabold">Blog</h1>
          <div className="flex flex-col lg:flex-row gap-5 pt-10">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <div className="flex gap-2 items-center pt-5 text-[#10CC6F]">
            <Link to="/blogs" className="lg:text-[24px] hover:underline">
              All Blogs
            </Link>
            <img src={next} alt="Next" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroEight;
