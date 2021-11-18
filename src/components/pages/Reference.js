import axios from 'axios';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import PropTypes from 'prop-types';

import Loading from '../layouts/Loading';
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import ReferInfo2 from '../info/ReferInfo2';
import ReferInfo3 from '../info/ReferInfo3';

import ContInfo from '../layouts/ContInfo';


// function Reference(){
//     return (
//         <div>
//             <Header />
//             <Contents>Reference</Contents>
//             <Footer />
//         </div>
//     )
// }

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: {},
        select: ""
    }

    getRefer = async () => {
        const {
            data: {
                data 
            }
        } = await axios.get("https://peng-jo.github.io/react999/src/assets/json/refer.json");

        this.setState({refers:data,isLoading:false})
    }

    renderSwitch = (refers, select)=>{
        
        switch(select){
            case 'HTML' :
                return refers.htmlRefer.map((refer,index)=>(
                    <ReferInfo
                        key = {index}
                        refer = {refer}
                    />   
                ))
            case 'CSS' :
                return refers.cssRefer.map((refer,index)=>(
                    <ReferInfo2
                        key = {index}
                        refer = {refer}
                    />   
                ))
            case 'JAVASCRIPT' :
                return refers.jsRefer.map((refer,index)=>(
                    <ReferInfo3
                        key = {index}
                        refer = {refer}
                    />   
                ))    
            default :
                return refers.htmlRefer.map((refer,index)=>(
                    <ReferInfo3
                        key = {index}
                        refer = {refer}
                    />   
                )) 
        }
            
    }

    onClick = (e) =>{
        document.querySelectorAll('.table h3').forEach((el, index)=>{
            el.classList.remove('active');
        })
        e.target.classList.add('active')
        this.setState({select:e.target.textContent})
        return false;
    }

    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        },2000)
    }
    render(){
        const {isLoading, refers, select} = this.state;
        
        return (
            <div>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div>
                            <Header />
                            <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={['Reference','book']}/>  
                                    <div className="refer__cont">
                                       <div className="table">
                                           <h3 onClick={this.onClick}>HTML</h3><h3 onClick={this.onClick}>CSS</h3><h3 onClick={this.onClick}>JAVASCRIPT</h3>
                                            <ul>
                                                {
                                                    this.renderSwitch(refers, select)
                                                }
                                            </ul>
                                       </div>
                                    </div>
                                </div>
                            </section>
                                <ContInfo/>
                            </Contents>
                            <Footer />
                        </div>
                    )
                }
            </div>
        )
    }
}

ReferInfo.propTypes = {
    refer : PropTypes.object.isRequired
}
ReferInfo2.propTypes = {
    refer : PropTypes.object.isRequired
}
ReferInfo3.propTypes = {
    refer : PropTypes.object.isRequired
}

export default Reference;