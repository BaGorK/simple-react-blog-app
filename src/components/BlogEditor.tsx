import { useEffect, useRef, useState } from 'react';
import { Upload, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import TextEditor from './QuillEditor';
import { Blog } from '@/types/blog.type';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addBlog, updateBlog } from '@/redux/slices/blog.slice';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';

export default function BlogEditor() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const blogId = useParams().id;
  const { blogs } = useAppSelector((state) => state.blog);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  const imageRef = useRef<HTMLInputElement | null>(null);
  const [heroImage, setHeroImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Temporary URL
      setHeroImage(imageUrl);
    }
  };
  const [blog, setBlog] = useState<Blog>({
    id: uuid4(),
    title: '',
    subtitle: '',
    paragraphs: [],
    image: '',
  });

  useEffect(() => {
    if (blogId) {
      blogs.forEach((blog) => {
        if (blog.id === blogId) {
          setBlog(blog);
          setTitle(blog.title);
          setSubTitle(blog.subtitle);
        }
      });
    }
  }, [blogId]);
  useEffect(() => {
    setBlog((prev) => ({
      ...prev,
      image: heroImage || '',
    }));
  }, [heroImage]);

  const handleAddBlog = () => {
    if (blogId) dispatch(updateBlog(blog));
    else dispatch(addBlog(blog));
    navigate('/');
  };

  return (
    <div className='flex h-screen bg-white'>
      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        {/* Top Header */}

        {/* Content Area */}
        <div className='flex-1 overflow-auto p-6'>
          <div className='max-w-5xl mx-auto bg-white border rounded-md shadow-sm'>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-6'>
                <h1 className='text-xl font-medium'>Create a new blog</h1>
                <div className='flex gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={handleAddBlog}
                    className='bg-purple-600 text-white hover:bg-purple-700 border-none'
                  >
                    Save
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => navigate('/')}
                    className='bg-gray-200 text-gray-700 hover:bg-gray-300 border-none'
                  >
                    Cancel
                  </Button>
                </div>
              </div>

              <div className='space-y-6'>
                {/* Title */}
                <div className='grid grid-cols-4 gap-6'>
                  <div className='col-span-1'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Title:
                    </label>
                  </div>
                  <div className='col-span-3'>
                    <Textarea
                      placeholder='Title'
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        setBlog((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }));
                      }}
                      className='w-full border rounded-md p-2 min-h-[60px] resize-none'
                    />
                  </div>
                </div>

                {/* Sub Title */}
                <div className='grid grid-cols-4 gap-6'>
                  <div className='col-span-1'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Sub Title:
                    </label>
                  </div>
                  <div className='col-span-3'>
                    <Textarea
                      placeholder='Sub Title'
                      value={subTitle}
                      onChange={(e) => {
                        setSubTitle(e.target.value);
                        setBlog((prev) => ({
                          ...prev,
                          subtitle: e.target.value,
                        }));
                      }}
                      className='w-full border rounded-md p-2 min-h-[60px] resize-none'
                    />
                  </div>
                </div>

                {/* Hero Image */}
                <div className='grid grid-cols-4 gap-6'>
                  <div className='col-span-1'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Hero Image:
                    </label>
                  </div>
                  <div className='col-span-3'>
                    <div
                      onClick={() => {
                        imageRef.current?.click();
                        imageRef.current?.addEventListener('change', (event) =>
                          handleImageUpload(
                            event as unknown as React.ChangeEvent<HTMLInputElement>
                          )
                        );
                      }}
                      className='border cursor-pointer border-dashed border-gray-300 rounded-md p-12 flex flex-col items-center justify-center'
                    >
                      <Upload className='text-gray-400 mb-2' size={24} />
                      <span className='text-sm text-gray-500'>
                        Upload Image
                      </span>
                      {blog.image && (
                        <img
                          src={blog.image}
                          alt='Uploaded'
                          className='mt-4 w-64 h-40 object-cover rounded-lg'
                        />
                      )}
                      <input
                        ref={imageRef}
                        className='hidden'
                        type='file'
                        name=''
                        id=''
                      />
                    </div>
                  </div>
                  <div className=' col-span-3 col-start-2'>
                    <div className='space-y-4 mt-8'>
                      {blog.paragraphs.map((paragraph, index) => (
                        <div key={index} className='relative'>
                          <div className='absolute text-sm top-2 flex items-center gap-2'>
                            <button
                              onClick={() => {
                                const updatedParagraphs: string[] = [];
                                blog.paragraphs.forEach((_, i) => {
                                  if (i !== index) {
                                    updatedParagraphs.push(blog.paragraphs[i]);
                                  } else {
                                    updatedParagraphs.push('');
                                    updatedParagraphs.push(paragraph);
                                  }
                                });
                                setBlog((prev) => ({
                                  ...prev,
                                  paragraphs: [...updatedParagraphs],
                                }));
                              }}
                              className=' flex items-center gap-1 left-2 text-gray-500'
                            >
                              <Plus className='' /> before
                            </button>
                            <button
                              onClick={() => {
                                const updatedParagraphs: string[] = [];
                                blog.paragraphs.forEach((_, i) => {
                                  if (i !== index) {
                                    updatedParagraphs.push(blog.paragraphs[i]);
                                  } else {
                                    updatedParagraphs.push(paragraph);
                                    updatedParagraphs.push('');
                                  }
                                });
                                setBlog((prev) => ({
                                  ...prev,
                                  paragraphs: [...updatedParagraphs],
                                }));
                              }}
                              className=' flex items-center gap-1 left-2 text-gray-500'
                            >
                              <Plus className='' /> after
                            </button>
                            <button
                              onClick={() => {
                                setBlog((prev) => ({
                                  ...prev,
                                  paragraphs: blog.paragraphs.filter(
                                    (_, i) => i !== index
                                  ),
                                }));
                              }}
                              className=' flex items-center gap-1 left-2 text-red-500'
                            >
                              <Trash2 size={15} className='' /> delete
                            </button>
                          </div>

                          <TextEditor
                            label={``}
                            value={paragraph}
                            onChange={(newContent) => {
                              setBlog((prev) => ({
                                ...prev,
                                paragraphs: prev.paragraphs.map((p, i) =>
                                  i === index ? newContent : p
                                ),
                              }));
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add Card Button */}
                <div className='flex justify-center mt-6'>
                  <Button
                    onClick={() => {
                      setBlog((prev) => ({
                        ...prev,
                        paragraphs: [
                          ...prev.paragraphs,
                          `Paragraph ${prev.paragraphs.length + 1}`,
                        ],
                      }));
                    }}
                    className='bg-purple-600 text-white hover:bg-purple-700'
                  >
                    Add More Content
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
