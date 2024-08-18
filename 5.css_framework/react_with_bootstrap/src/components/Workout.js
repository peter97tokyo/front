import React, { useState } from 'react';

import tokyo from '../assets/images/tokyo.jpeg';
import osaka from '../assets/images/osaka.jpeg';
import hukuoka from '../assets/images/hukuoka.jpeg';



const Workout = () => {
     
    return (
        <div>
            <div className="container p-5 my-5 border">
                <h1>Workout</h1>
                <h3>Bootstrap 5 Buttons</h3>
                <div>
                    <button type="button" class="btn">Basic</button>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-info">Info</button>
                    <button type="button" class="btn btn-warning">Warning</button>
                    <button type="button" class="btn btn-danger">Danger</button>
                    <button type="button" class="btn btn-dark">Dark</button>
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-link">Link</button>

                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">Apple</button>
                        <button type="button" class="btn btn-primary">Samsung</button>
                        <button type="button" class="btn btn-primary">Sony</button>
                    </div>
                </div>    
                <h3>Bootstrap 5 Carousel</h3>    
                    {/* Carousel start */}
                    <div id="demo" className="carousel slide p-5" data-bs-ride="carousel">
                        {/* Indicators/dots */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                        {/* The slideshow/carousel */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={tokyo} alt="tokyo" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={osaka} alt="osaka" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={hukuoka} alt="hukuoka" className="d-block w-100" />
                            </div>
                        </div>
                        {/* Left and right controls/icons */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    {/* Carousel end */}
                    <div>
                        <h2>Bootstrap Carousel 클래스 설명</h2>
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>클래스</th>
                                    <th>설명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>.carousel</td>
                                    <td>캐러셀(Carousel)을 생성합니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-indicators</td>
                                    <td>캐러셀에 인디케이터(슬라이드 표시 점)를 추가합니다. 인디케이터는 각 슬라이드 하단에 있는 작은 점들로, 캐러셀에 몇 개의 슬라이드가 있는지, 그리고 사용자가 현재 보고 있는 슬라이드가 무엇인지 나타냅니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-inner</td>
                                    <td>캐러셀에 슬라이드를 추가합니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-item</td>
                                    <td>각 슬라이드의 콘텐츠를 지정합니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-control-prev</td>
                                    <td>캐러셀에 왼쪽(이전) 버튼을 추가하여 사용자가 슬라이드를 뒤로 이동할 수 있게 합니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-control-next</td>
                                    <td>캐러셀에 오른쪽(다음) 버튼을 추가하여 사용자가 슬라이드를 앞으로 이동할 수 있게 합니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-control-prev-icon</td>
                                    <td>.carousel-control-prev와 함께 사용되어 "이전" 버튼을 만듭니다.</td>
                                </tr>
                                <tr>
                                    <td>.carousel-control-next-icon</td>
                                    <td>.carousel-control-next와 함께 사용되어 "다음" 버튼을 만듭니다.</td>
                                </tr>
                                <tr>
                                    <td>.slide</td>
                                    <td>항목 간에 슬라이드할 때 CSS 전환 및 애니메이션 효과를 추가합니다. 이 효과를 원하지 않으면 이 클래스를 제거할 수 있습니다.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                
            </div>
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>개인정보처리방침</p>
            </div>
        </div>
    );
};

export default Workout;
