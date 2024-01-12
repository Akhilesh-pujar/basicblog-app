import  { useState } from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../../services/auth';
import api from '../../services/api';

const Loginform = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/login', formData);
      const { token } = response.data;
      auth.login(token);
      history.push('/blogs');
    } catch (error) {
      console.error('Login error:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginform;