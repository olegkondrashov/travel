import Footer from "../../components/footer/footer.component";
import PageTopTemplate from "../../components/page-top-template/page-top-template.component";
import bg from "../../assets/blog/blog_bg.webp";

import "./blog.styles.scss";

const Blog = () => {
    return (
        <section className="blog">
            <PageTopTemplate nameOfPage="Travel Blog" bg={bg} link="blog" />

            <Footer />
        </section>
    );
};

export default Blog;
