import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api', // Adjust the base URL based on your API server
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you may need, such as authorization headers
  },
});

// Interceptors to handle request and response globally
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example API methods
// const blogAPI = {
//   getAllBlogs: async () => {
//     try {
//       const response = await api.get('/blogs');
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getBlogById: async (blogId) => {
//     try {
//       const response = await api.get(`/blogs/${blogId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   createBlog: async (blogData) => {
//     try {
//       const response = await api.post('/blogs', blogData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// };

export default blogAPI;