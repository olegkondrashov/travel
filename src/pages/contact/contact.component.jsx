import ContactForm from "../../components/contact-form/contact-form-component";
import Footer from "../../components/footer/footer.component";
import PageTopTemplate from "../../components/page-top-template/page-top-template.component";

import bg from "../../assets/contact/bg.webp";

import "./contact.styles.scss";

const Contact = () => {
    return (
        <section className="contactUs">
            <PageTopTemplate nameOfPage="Contact Us" bg={bg} link="contact" />
            <ContactForm />
            <Footer />
        </section>
    );
};

export default Contact;
