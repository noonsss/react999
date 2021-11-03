import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';

function Contact (){
    return (
        <div>
            <Header />
            <Contents>
                <section id="contactInfo">
                    <div class="contact__info">
                        <div>
                            <p>Let’s create something new</p>
                            <h3>LET`S Get IN<br />TOUCH</h3>
                            <a href="contact.html" class="contact">Contact Me</a>
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Contact;