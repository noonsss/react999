import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';

function Script (){
    return (
        <div>
            <Header />
            <Contents>
                <section id="scriptCont">
                    <div className="container">
                        <div className="wrap__title">
                            <h2><strong>Script</strong><em>Reference</em></h2>
                        </div>
                        <div className="script__cont">
                            
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Script;