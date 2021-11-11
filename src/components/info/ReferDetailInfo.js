import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function ReferDetailInfo({}) {
    return (
        <div class="container">
            <div class="refer__detail pt200">
                <h3></h3>
                <p></p>
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
                            <td>인라인 구조(Inline Element)</td>
                        </tr>
                        <tr>
                            <th>닫는 태그</th>
                            <td>닫는 태그 사용(&lt;a&gt; ~ &lt;/a&gt;)</td>
                        </tr>
                        <tr>
                            <th>버전</th>
                            <td>HTML4</td>
                        </tr>
                        <tr>
                            <th>시각적 표현</th>
                            <td>밑줄과 파란색으로 표시</td>
                        </tr>
                        <tr>
                            <th>사용성</th>
                            <td>★★★</td>
                        </tr>
                    </tbody>
                </table>

                <h4>정의(Definition)</h4>
                <ul>
                    <li>&lt;a&gt; 태그는 클릭하면 다른 페이지로 이동합니다. 현재 페이지에서 다른 페이지 URL로 연결하는 것을 하이퍼링크라고 합니다.</a>
                    <li>&lt;a&gt; 태그는 페이지 주소 뿐만 아니라, 메일 주소, 전화 번호 등도 연결할 수 있습니다.</a>
                    <li>&lt;a&gt; 태그는 아이디(#id)로 이동 할 수 있습니다.</a>
                    <li>&lt;a&gt; 태그는 target 속성을 이용하면 새로운 브라우저 창에서 페이지 이동을 할 수 있습니다.</a>
                    <li>&lt;a&gt; 태그는 방문한 링크는 밑줄과 보라색으로 표시되고, 활성화된 링크는 밑줄과 빨간색으로 표시됩니다.</a>
                    <li>원칙적으로 &lt;a&gt; 태그는 블록구조를 포함 할 수 없지만, HTML5에서는 &lt;a&gt; 태그는 블록 요소를 포함할 수 있습니다.</a>
                    <li>href='#'의 페이지 지정을 막기 위해 javascript:void(0)를 사용하는 것보다 &lt;button&gt; 태그를 사용하는 것이 바람직합니다.</a>
                </ul>
                <a class="list-btn" href="reference.html">목록보기</a>
            </div>
        </div>
    )
}

ReferDetailInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
}

export default ReferDetailInfo;