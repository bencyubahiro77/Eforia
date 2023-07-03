import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditUserForm({ blog }) {
  const [formData, setFormData] = useState({
    title: blog.title,
    desc: blog.desc,
    category: blog.category,
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

      const updatedBlog = new FormData();
      updatedBlog.append('title', formData.title);
      updatedBlog.append('desc', formData.desc);
      updatedBlog.append('category', formData.category);
      if (formData.image) {
        updatedBlog.append('image', formData.image);
      }

      Swal.fire({
        title: 'Updating blog...',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      await axios.put(`${process.env.REACT_APP_BASE_URL}/blog/${blog._id}`, updatedBlog, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Blog updated',
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
        text: 'Error updating blog',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="create-blog-page" style={{ marginTop: '-10%' }}>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            id="category"
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
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;
