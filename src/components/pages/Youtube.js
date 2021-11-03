import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';

function Youtube (){
    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <div className="wrap__title">
                            <h2><strong>Youtube</strong><em>Reference</em></h2>
                        </div>
                        <div className="youtube__cont">
                            <div className="youtube">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Youtube;