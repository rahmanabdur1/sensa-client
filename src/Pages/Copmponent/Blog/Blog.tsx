import { useState } from 'react';
import style from './Blog.module.css';
import useBlogsCategory from '../../../hooks/useBlogsCategory';

interface BlogData {
  title: string;
  description: string;
  readTime: string;
  dateAndTime: string;
  img: string;
}

export function Blog() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogs, loading] = useBlogsCategory(currentPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleFirstLast = (newPage: 'first' | 'last') => {
    if (newPage === 'first') {
      setCurrentPage(1);
    } else if (newPage === 'last') {
      setCurrentPage(6); // Ensure 6 is the total number of pages
    }
  };

  const renderPaginationButtons = () => {
    const totalPages = 6;
    const pageButtons: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || i === 2 || i === currentPage) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? style.currentPage : ''}
          >
            {i}
          </button>
        );
      } else if (pageButtons.length === 0 || pageButtons[pageButtons.length - 1].props.children !== '...') {
        pageButtons.push(<span key={`ellipsis-${i}`}>...</span>);
      }
    }

    return (
      <>
        <button disabled={currentPage === 1} onClick={() => handleFirstLast('first')}>
          First
        </button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {pageButtons}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
        <button disabled={currentPage === totalPages} onClick={() => handleFirstLast('last')}>
          Last
        </button>
      </>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.blogs_category}>
        {blogs.map((blog: BlogData) => (
          <div key={blog.title} className={style.blogItem}>
            <img src={blog.img} alt={blog.title} />
            <div>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p>
              <p>{blog.readTime}</p>
              <p>{blog.dateAndTime}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.pagination}>{renderPaginationButtons()}</div>
    </div>
  );
}
