import React, { useState, useEffect } from 'react';
import '../css/MainComponent.css';
import myFace from '../images/KakaoTalk_20240130_142459113.jpg';
import githubimage from '../images/free-icon-github-logo-25231-removebg-preview.png';
import tstoryimage from '../images/logomark-removebg-preview.png';
import phoneimage from '../images/free-icon-mobile-phone-7424905.png';
import mailimage from '../images/free-icon-letter-11081026.png';
import gwnu from '../images/gwnu.png';
import pubchat1 from '../images/pubchat1.png';
import pubchat2 from '../images/pubchat2.png';
import community1 from '../images/community1.png';
import community2 from '../images/community2.png';
import community3 from '../images/community3.png';
import community4 from '../images/community4.png';
import usedmarket1 from '../images/usedmarket1.png';
import usedmarket2 from '../images/usedmarket2.png';
import usedmarket3 from '../images/usedmarket3.png';
import usedmarket4 from '../images/usedmarket4.png';
import mine1 from '../images/mine1.jpg';
import mine2 from '../images/mine2.jpg';
import mine3 from '../images/mine3.jpg';
import mine4 from '../images/mine4.jpg';

function MainComponent() {
  const [currentSection, setCurrentSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < skillsSection.offsetTop
      ) {
        setCurrentSection('about');
      } else if (
        scrollPosition >= skillsSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setCurrentSection('skills');
      } else if (
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight
      ) {
        setCurrentSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="MainComponent">
      <div className="toc">
        <div className="profile">
          <div>
            <img src={myFace} alt="My Face" style={{ width: '120px', height: '140px' }} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>박서강</p>
            
            <p style={{ fontSize: '0.8rem'}}>
              <img src={phoneimage} alt="MY phone" style={{ width: '20px', height: '20px', marginRight: '5px', verticalAlign: 'middle' }}></img> 
              <a href="tel:010-3016-5895" style={{ verticalAlign: 'middle', textDecoration: 'none', color:'black'}}>010-3016-5895</a>
            </p>
            <p style={{ fontSize: '0.8rem'}}>
              <img src={mailimage} alt="My mail" style={{ width: '20px', height: '20px', marginRight: '5px', verticalAlign: 'middle'}}></img>
              <a href="mailto:qkrtjrkd12@gmail.com" style={{ verticalAlign: 'middle' , textDecoration: 'none', color:'black'}}>qkrtjrkd12@gmail.com</a>
            </p>
            <p>
              <a href="https://github.com/Cjxisia" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
            </p>
            <hr></hr>
          </div>
        </div>
        <ul id="indexlist">
          <li className={currentSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About Me</li>
          <li className={currentSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</li>
          <li className={currentSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</li>
        </ul>
      </div>
      <div className="content">
        <section id="about">
          <p className="titlename">INTRODUCE</p>
          <p style={{ fontSize: '3.0rem', fontWeight:'bold'}}>안녕하세요. <br></br>
          저는 신입 백엔드 개발자를 희망하는<br></br>
          박서강 입니다.
          </p>
          <br></br>
          <p>대학교 저학년 시절, 우연히 PHP를 사용한 서버 통신을 시작으로 서버와 클라이언트 간의 원활한 상호작용에 흥미가 생겨, 백엔드에 대한 공부를 시작하게 되었습니다.</p>
          <p>PHP 대신 보편적으로 더 많이 사용하는 Node.js와 Express를 시작으로 백엔드 공부에 더 집중했고, </p>
          <p>백엔드 프레임워크인 Spring과 같은 것뿐만 아니라 Rest 통신을 위해 React와 같은 프론트엔드 라이브러리도 함께 공부하고 있습니다.</p>
          <p>지금까지 학습한 것을 뛰어넘어 더 많은 기술을 습득하고, 내가 원하는 어떤 것이든 구현할 수 있는 다재다능한 개발자가 되고자 합니다.</p>
          <br></br>
        </section>
        <section id="skills">
          <p style={{color:"gray"}}>Education</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={gwnu} alt="My school" style={{ width: '100px', height: '100px' }} />
            <div>
              <p style={{fontWeight:'bold'}}>강릉원주대학교</p>
              <p style={{fontSize:'0.8rem'}}>2018.03 - 2024.02</p>
              <p style={{fontSize:'0.8rem'}}>컴퓨터 공학과</p>
            </div>
          </div>
        <hr></hr>
          <p className='titlename'>Skills</p>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Language and Framework</p>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Javascript</li>
            <li>Spring</li>
            <li>Java</li>
            <li>Mysql</li>
            <li>React</li>
          </ul>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Development tools</p>
          <ul>
            <li>Visual Studio Code</li>
            <li>Intellij IDEA</li>
            <li>Postman</li>
            <li>GitHub</li>
            <li>MySQLWorkbench</li>
          </ul>
        </section>
        <hr></hr>
        <p className='titlename'>Projects</p>
        <section id="projects" style={{ textAlign: 'center' }}>
          <h2>오픈 채팅 프로젝트</h2>
            <div className="image-grid">
            <img src={pubchat1}  alt="Open Chat Project" />
            <img src={pubchat2}  alt="Open Chat Project" />
            <p style={{fontSize:'0.7rem', color:'gray'}}>2022.08.04 ~ 2022.09.14</p>
          </div>
          <p>
              <a href="https://github.com/Cjxisia/public-chat" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/2" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>Node.js를 처음 배운 후, 여러 명의 사용자가 한 곳에서 채팅할 수 있는 웹사이트를 개발했습니다. <br></br>
          이 웹사이트는 사용자들 간의 소통과 정보 공유를 목적으로 제작되었으며<br></br>
          사용자들이 소통 중에 필요한 정보를 쉽게 찾을 수 있도록 네이버 검색 API를 사용하였고<br></br>
          특정 버튼을 누르면 네이버로 검색할 수 있는 창이 나타나며 네이버에 검색할 수 있도록 기능을 추가하였습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: Node.js Express Mysql</p>
          <br></br>
          <h2>커뮤니티 서버 프로젝트</h2>
          <br></br>
          <div className="image-grid">
            <img src={community1} alt="Community Project" />
            <img src={community2} alt="Community Project" />
            <img src={community3} alt="Community Project" />
            <img src={community4} alt="Community Project" />
          </div>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2023.08.10 ~ 2023.09.20</p>
          <p>
              <a href="https://github.com/Cjxisia/Community_project" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/8" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>Node.js에 어느정도 익숙해진 후에 개발한 프로젝트로 MVC패턴을 적극적으로 활용하여 프로젝트를 진행하였고<br></br>
          MYSQL을 적극 활용하여 테이블에 저장 및 조회를 통해 글의 관리 및 로그인 기능을 구현하였습니다.<br></br>
          글 작성 이외에도 작성한 글을 검색하거나 댓글작성 기능을 구현하여 글을 작성하고 댓글을 달면서 소통할 수 있는 사이트를 만들었습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: Node.js Express Mysql</p>
          <br></br>
          <h2>중고거래 프로젝트</h2>
          <br></br>
          <div className="image-grid">
            <img src={usedmarket1} alt="Used Market 1" />
            <img src={usedmarket2} alt="Used Market 2" />
            <img src={usedmarket3} alt="Used Market 3" />
            <img src={usedmarket4} alt="Used Market 4" />
          </div>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2023.12.28 ~ 2024.01.25</p>
          <p>
              <a href="https://github.com/Cjxisia/usedmarket" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/19" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>Node.js를 통해 개발한 프로젝트 이후에 Java Spring에 관심을 갖게 되어 중고거래 홈페이지를 만들었습니다.<br></br>
            이전과 같이 커뮤니티 형식으로 홈페이지를 만들고 MYSQL을 통해 관리 하였으며 거래를 위한 거래게시판과 자유롭게 이야기를 나눌 수 있는 자유게시판을 분리시켜두었습니다.<br></br>
            그 이외에도 중고거래를 위해서는 사용자의 위치와 소통이 중요하기 때문에 KakaoMap API를 활용하여 사용자의 위치를 표시하도록 하였고<br></br>
            사용자 간 거래를 용이하게 하기 위해 사용자 닉네임을 클릭하면 채팅창이 열리도록 하여 구매자와 판매자가 소통할 수 있도록 구현했습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: JavaSpring React Mysql </p>
          <br></br>
          <h2>경매 프로젝트 MINE</h2>
          <br></br>
          <div className="image-grid">
            <img src={mine1} alt="Mine Project" />
            <img src={mine2} alt="Mine Project" />
            <img src={mine3} alt="Mine Project" />
            <img src={mine4} alt="Mine Project" />
          </div>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2024.03.23 ~ 2024.04.20</p>
          <p>
              <a href="https://github.com/team-mine" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/35" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>이전의 프로젝트를 진행하며 배운 기술을 이용하여 입찰을 통해 물품을 구매할 수 있는 경매 홈페이지를 만들었습니다.
            <br></br>경매 프로젝트는 팀 프로젝트로 진행하여 프론트 / 백엔드로 나눠서 진행하였고 저는 백엔드 역할을 맡아서 수행하게 되었습니다.
            <br></br>네이버 로그인 API를 사용하여 네이버 계정으로 로그인 하도록 해두었고 네이버 알림 API를 사용하여 댓글이 달리거나 입찰및 구매성공시에 알림이 가도록 구현했습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: JavaSpring Next Mysql </p>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;
