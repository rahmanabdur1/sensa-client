import { useState, useEffect } from 'react';
interface BlogData {
  title: string;
  description: string;
  readTime: string;
  dateAndTime: string;
  img: string;
}

const useBlogsCategory = (page: number): [BlogData[], boolean] => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://sensa-server.vercel.app/blogs?page=${page}`);
      const data: BlogData[] = await response.json();
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
