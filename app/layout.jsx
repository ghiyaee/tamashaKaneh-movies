import '../styles/globals.css';
import '../components/header';
import Header from '../components/header';
import Footer from '@/components/footer';
import Head from 'next/head';
const BlogLayout = ({ children }) => {
  return (
    <html lang="fa:IR">
      <body >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
};

export default BlogLayout;
