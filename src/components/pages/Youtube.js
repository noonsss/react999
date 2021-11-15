import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import ContInfo from '../layouts/ContInfo';
import WrapTitle from '../layouts/WrapTitle';
import YoutubeList from '../info/YoutubeList';
import YoutubeSearch from '../info/YoutubeSearch';

function Youtube(){
    const [videos, setvideos] = useState([]);

    const start = () => {
        setTimeout(() => {
            alert("dd");
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
          
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=몽자&key=AIzaSyDAr2pZDcIvmYQSqhBwD2rq-ODM-8r0xTE&maxResults=30&type=video", requestOptions)
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