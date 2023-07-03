import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog/${id}`);
        const formattedDate = new Date(response.data.createdAt).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
        const blogDataWithFormattedDate = { ...response.data, createdAt: formattedDate };
        setBlog(blogDataWithFormattedDate);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const createMarkup = () => {
    return { __html: blog.desc };
  };

  return (
    <div className="single-blog-page">
      <div className="single-blog-wrapper">
        <div className="open-blog-sec">
          <div
            className="contact-sec-1"
            style={{ backgroundImage: `url(${blog.image})`, height: '70vh', marginBottom:'5%' }}
          >
            <h2 style={{color:'white'}}>{blog.title}</h2>
          </div>
          <div className="open-blog-content">
            <p dangerouslySetInnerHTML={createMarkup()}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
