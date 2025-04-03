import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {  Trash2 } from "lucide-react";
import { deleteBlog } from "@/redux/slices/blog.slice";

const BlogList = () => {
  const dispatch = useAppDispatch();

  const blogs = useAppSelector((state) => state.blog.blogs);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Latest Blogs
      </h2>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white relative p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <button
              className=" bg-white absolute top-4 right-4 p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              onClick={() => {
                dispatch(deleteBlog(blog.id));
              }}
            >
              <Trash2 className="w-5 h-5 text-red-700" />
            </button>
            <h3 className="text-xl font-semibold text-gray-900">
              {blog.title}
            </h3>
            <p
              className="text-gray-600 mt-2"
              dangerouslySetInnerHTML={{
                __html: blog.paragraphs[0].substring(0, 100) + "...",
              }}
            />
            <Link
              to={`/blog/${blog.id}`}
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/create"
          className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-all"
        >
          + Create New Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
