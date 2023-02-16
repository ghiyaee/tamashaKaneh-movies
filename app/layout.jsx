import '../styles/globals.css';
import '../components/header';
import Header from '../components/header';
import Footer from '@/components/footer';
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
