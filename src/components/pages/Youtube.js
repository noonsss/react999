import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import ContInfo from '../layouts/ContInfo';
import WrapTitle from '../layouts/WrapTitle';
import YoutubeList from '../info/YoutubeList';
import YoutubeSearch from '../info/YoutubeSearch';
import Loading from '../layouts/Loading';
import {gsap} from "gsap";

function Youtube(){
    const [videos, setvideos] = useState([]);

    const start = () => {
        setTimeout(() => {
            //loading-active 제거 javascript로
            // clearInterval()
            document.getElementById("loading").classList.remove("loading-active");
            gsap.set(".wrap__title h2 strong", {opacity: 0, y: 100});
            gsap.set(".wrap__title h2 em", {opacity: 0, y:100});
            gsap.set("#header", {top: "-100%"});
            gsap.set("#footer", {bottom: "-100%"});
            gsap.set(".youtube__cont", {opacity: 0});
            
            gsap.to(".wrap__title h2 strong", {duration: 0.4, opacity: 1, delay: 1, y:0, ease: "power2.out"});
            gsap.to(".wrap__title h2 em", {duration: 0.4, opacity: 1, delay: 1.4, y:0, ease: "power2.out"});
            gsap.set("#header", {duration: 0.4, top: 0, delay: 1.8, ease: "power1.out"});
            gsap.set("#footer", {duration: 0.4, bottom: 0, delay: 2, ease: "power1.out"});
            gsap.set(".youtube__cont", {duration: 0.4, delay: 2.2, opacity: 1});
        }, 2000);
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDAr2pZDcIvmYQSqhBwD2rq-ODM-8r0xTE&maxResults=30&type=video`, requestOptions)
        .then(response => response.json())
        .then(result => setvideos(result.items))
        .catch(error => console.log('error', error));    
    }
    
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=몽자&key=AIzaSyAsoeJRLzPEh6HkUD6WYZoM3SkphkC41n0&maxResults=30&type=video", requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result.items))
        .then(result => {
            setvideos(result.items);
            start();
        })
        .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <Loading />
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["youtube", "reference"]} />
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search} />
                            <div className="youtube">
                                <YoutubeList videos={videos} />
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer />
        </div>
    )
}

export default Youtube;