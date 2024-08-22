import { useState, useEffect } from 'react';

interface BlogData {
    title: string;
    description: string;
    readTime: string;
    dateAndTime: string;
  }[]

const useBlogsCategory = (page:any) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://sensa-server.vercel.app/blogs?page=${page}`);
      const data= await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  return [blogs, loading];
};

export default useBlogsCategory;