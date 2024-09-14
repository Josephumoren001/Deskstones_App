import Button from "../components/Button";
import MainHero from "../components/MainHero";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [category, setCategory] = useState('All'); // State to track selected category

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      setFilteredPosts(data.posts); // Initially, show all posts
    };
    fetchPosts();
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
    if (category === 'All') {
      setFilteredPosts(posts); // Show all posts if "All" is clicked
    } else {
      setFilteredPosts(posts.filter(post => post.category === category)); // Filter posts by category
    }
  };

  return (
    <div className="mt-16">
      {/* Main Hero Section */}
      <MainHero>
        <div className="py-10 lg:py-20 w-full lg:w-[671px] text-[#0C273D]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Stay informed and inspired
          </p>
          <h1 className="text-[35px] lg:text-[50px] dark:text-white font-extrabold">
            Blog
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] dark:text-white pt-5">
            Welcome to our blog with insights and inspiration about RPA and AI.
            You will find expert articles, success stories, and the latest
            trends that keep you ahead in automation.
          </p>
        </div>
      </MainHero>

      {/* Category Buttons */}
      <div className="bg-[#E7F9E9]">
        <div className="relative bg-white mx-5 lg:mx-20 z-50 mt-[-50px] rounded-[20px]">
          <div className="flex gap-3 py-10 lg:py-20 px-5 lg:px-20 overflow-x-auto">
            <Button onClick={() => handleCategoryClick('All')} active={category === 'All'}>
              All Posts
            </Button>
            <Button onClick={() => handleCategoryClick('Reactjs')} active={category === 'Reactjs'}>
              Reactjs
            </Button>
            <Button onClick={() => handleCategoryClick('Java')} active={category === 'Java'}>
              Java
            </Button>
            <Button onClick={() => handleCategoryClick('C#')} active={category === 'C#'}>
              C#
            </Button>
            <Button onClick={() => handleCategoryClick('Nextjs')} active={category === 'Nextjs'}>
              Nextjs
            </Button>
          </div>

          {/* Displaying Filtered Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10 pb-32">
            {filteredPosts && filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
            ) : (
              <p>No posts available for the selected category</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
