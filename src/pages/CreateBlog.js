import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    category: '',
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      desc: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');

      const newBlog = new FormData();
      newBlog.append('title', formData.title);
      newBlog.append('desc', formData.desc);
      newBlog.append('category', formData.category);
      if (formData.image) {
        newBlog.append('image', formData.image);
      }

      Swal.fire({
        title: 'Creating blog...',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      await axios.post(`${process.env.REACT_APP_BASE_URL}/blog`, newBlog, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Blog created',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Error creating blog',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="create-blog-page" style={{ marginTop: '5%' }}>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            id="category"
            required
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="coding">Coding</option>
            <option value="sport">Sports</option>
            <option value="others">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="coverPhoto">Cover Photo:</label>
          <input
            id="coverPhoto"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <div className="blogEditor">
            <ReactQuill
              value={formData.desc}
              onChange={handleContentChange}
              modules={{
                toolbar: {
                  container: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                      { list: 'ordered' },
                      { list: 'bullet' },
                      { indent: '-1' },
                      { indent: '+1' },
                    ],
                    ['link', 'image'],
                    ['clean'],
                  ],
                },
              }}
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
