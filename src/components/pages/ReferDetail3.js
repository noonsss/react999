import React from 'react';
import Contents from '../layouts/Contents';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import {Link} from 'react-router-dom';
import ContInfo from '../layouts/ContInfo';

// function ReferDetail(props){
//     console.log(props)
//     return (
//         <span>{props}</span>
//     )
// }

class ReferDetail3 extends React.Component {
    componentDidMount(){
        const {location,history} = this.props;
        if( location.state === undefined ){
            history.push('./reference');
        }
    }
    render(){
        const { location } = this.props;
        const { title, desc2, returns, syntax, definition, link} = this.props.location.state.refer;
        if( location.state ){
            console.log(location.state)
            return (
                <div>
                    <Header />
                        <Contents>
                        <section id="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{title}</h3>
                                    <p>{desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>반환값</th>
                                                <td>{returns}</td>
                                            </tr>
                                            <tr>
                                                <th>문법</th>
                                                <td>{syntax}</td>
                                            </tr>
                                            <tr>
                                                <th>링크</th>
                                                <td><a href={link}>MDN</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4>정의(Definition)</h4>
                                    <ul>
                                        {
                                            definition.map((def,index)=>(
                                                <li key={index}>{def}</li>
                                            ))
                                        }
                                    </ul>
                                    <Link className="list-btn" to="./reference">목록보기</Link>
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
export default ReferDetail3;