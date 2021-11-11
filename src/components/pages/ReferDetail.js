import React from 'react';
// import axios from 'axios';
// import Loading from '../layouts/Loading';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
// import WrapTitle from '../layouts/WrapTitle';
import { Link } from 'react-router-dom';
import ContInfo from '../layouts/ContInfo';

// function ReferDetail(){
//         return()
// }

class ReferDetail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if( location.state === undefined ){
            history.push('/reference');
        }
    }

    // state = {
    //     isLoading: true,
    //     refers: []
    // }
    // getReferDetail = async () => {
    //     const {
    //         data: {
    //             data : {htmlReferDetail},
    //         },
    //     } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
    //     this.setState({refers : htmlReferDetail, isLoading : false});
        
    //     console.log(htmlReferDetail);
    // }

    render(){
        const {location }= this.props;
        if(location.state){
            return (
                <div>
                    <Header />
                    <Contents>
                        <section id="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                <h3>{location.state.title}</h3>
                                <p>{location.state.desc2}</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>특징</th>
                                            <th>설명</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>요소</th>
                                            <td>{location.state.element}</td>
                                        </tr>
                                        <tr>
                                            <th>닫는 태그</th>
                                            <td>{location.state.tag}</td>
                                        </tr>
                                        <tr>
                                            <th>버전</th>
                                            <td>{location.state.version}</td>
                                        </tr>
                                        <tr>
                                            <th>시각적 표현</th>
                                            <td>{location.state.view}</td>
                                        </tr>
                                        <tr>
                                            <th>사용성</th>
                                            <td>{location.state.use}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4>
                                    <ul>
                                        {location.state.definition.map((defer) => (
                                            <li>{defer}</li>
                                        ))}
                                    </ul>
                                    <Link className="list-btn" to="/reference">목록보기</Link>
                                </h4>
                                </div>
                            </div>
                        </section>
                        <ContInfo />
                    </Contents>
                    <Footer />
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ReferDetail;