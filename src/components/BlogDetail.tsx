import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { Pen, Trash2 } from 'lucide-react';
import { deleteBlog } from '@/redux/slices/blog.slice';

const BlogDetail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogs } = useAppSelector((state) => state.blog);

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog)
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600'></div>
      </div>
    );

  return (
    <div className='max-w-4xl mt-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      {/* Hero Image Section */}

      <div className='relative'>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className='w-full h-72 object-cover'
          />
        )}
        <div className='flex items-center gap-2 absolute top-4 right-4'>
          <button
            className=' bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200'
            onClick={() => navigate(`/edit/${blog.id}`)}
          >
            <Pen className='w-5 h-5 text-gray-700' />
          </button>
          <button
            className=' bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200'
            onClick={() => {
              dispatch(deleteBlog(blog.id));
              navigate('/');
            }}
          >
            <Trash2 className='w-5 h-5 text-red-700' />
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className='p-8'>
        <h1 className='text-4xl font-bold text-gray-900 mb-2'>{blog.title}</h1>
        <p className='text-lg text-gray-600 italic mb-6'>{blog.subtitle}</p>

        <hr className='mb-6 border-gray-300' />

        <div className='space-y-6 text-gray-800 text-lg leading-relaxed'>
          {blog.paragraphs.map((paragraph, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
