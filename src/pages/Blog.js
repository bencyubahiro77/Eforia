import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../components/pagination';
import LoadingSpinner from '../components/LoadingSpinner';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);

      try {
        const url = selectedCategory
          ? `${process.env.REACT_APP_BASE_URL}/blog?category=${selectedCategory}`
          : `${process.env.REACT_APP_BASE_URL}/blog`;
        const response = await axios.get(url);
        setBlogs(response.data);
        setTotalPages(Math.ceil(response.data.length / 6));
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  // eslint-disable-next-line no-unused-vars
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const createMarkup = (content) => {
    return { __html: content };
  };

  const extractFirstParagraph = (content) => {
    const strippedContent = content.replace(/<[^>]+>/g, '');
    const paragraphs = strippedContent.split('\n');
    const firstParagraph = paragraphs.find((paragraph) => paragraph.trim() !== '');

    if (firstParagraph) {
      return firstParagraph.trim().substring(0, 220) + '...';
    } else {
      return '';
    }
  };

  return (
    <div className="blog-sec">
      <div className="contact-sec-1">
        <h2>Blog</h2>
        <p>WE WOULD LOVE TO SHARE OUR BLOGS</p>
      </div>

      <h2 className="blog-sec-1">EFORIA Limited | Blog</h2>

      <div className="blog-sec-2">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          currentBlogs.map((blog) => (
            <div className="one-blog-container" key={blog._id}>
              <div className="image-container">
                <img src={blog.image} alt="" />
              </div>
              <h2>{blog.title}</h2>
              <p>{formatDate(blog.createdAt)}</p>
              <p className="excerpt">
                {blog.desc.includes('<img') ? (
                  <span dangerouslySetInnerHTML={createMarkup(extractFirstParagraph(blog.desc))}></span>
                ) : (
                  extractFirstParagraph(blog.desc)
                )}
              </p>
              <Link to={`/blog/${blog._id}`} className="read-more">
                Read more
              </Link>
            </div>
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Blog;
