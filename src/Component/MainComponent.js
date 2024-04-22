import React, { useState, useEffect } from 'react';
import '../css/MainComponent.css';
import myFace from '../images/KakaoTalk_20240130_142459113.jpg';
import githubimage from '../images/free-icon-github-logo-25231-removebg-preview.png'
import tstoryimage from '../images/logomark-removebg-preview.png'
import phoneimage from '../images/free-icon-mobile-phone-7424905.png'
import mailimage from '../images/free-icon-letter-11081026.png'
import gwnu from '../images/gwnu.png'
import pubchat from '../images/pubchat.png'
import community from '../images/community.png'
import usedmarket from '../images/usedmarket.png'
import mine from '../images/Mine.png'

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
          <img src = {pubchat} style={{height:'400px', width:'800px'}}></img>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2022.08.04 ~ 2022.09.14</p>
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
          사용자들이 소통 중에 필요한 정보를 쉽게 찾을 수 있도록 네이버 검색 API를 통해 네이버 검색 기능도 추가했습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: Node.js Express Mysql</p>
          <br></br>
          <h2>커뮤니티 서버 프로젝트</h2>
          <br></br>
          <img src = {community} style={{height:'400px', width:'800px'}}></img>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2023.08.10 ~ 2023.09.20</p>
          <p>
              <a href="https://github.com/Cjxisia/Community_project" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/8" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>Node.js에 어느정도 익숙해진 후에 개발한 프로젝트로 Mysql과 연동시켜 특정 주제에 관한 커뮤니티를 만들 수 있도록 하고 <br></br>
          글을 작성하고 댓글을 달면서 소통할 수 있는 사이트를 만들었습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: Node.js Express Mysql</p>
          <br></br>
          <h2>중고거래 프로젝트</h2>
          <br></br>
          <img src = {usedmarket} style={{height:'380px', width:'800px'}}></img>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2023.12.28 ~ 2024.01.25</p>
          <p>
              <a href="https://github.com/Cjxisia/usedmarket" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/19" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>Node.js를 통해 개발한 프로젝트 이후에 Java Spring에 관심을 갖게 되어 중고거래 홈페이지를 만들었습니다. 
            <br></br>KakaoMap API를 활용하여 사용자의 위치를 표시하고, 사용자 간 거래를 용이하게 하기 위해 사용자 닉네임을 클릭하면 채팅창이 열리도록 구현했습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: JavaSpring React Mysql </p>
          <br></br>
          <h2>경매 프로젝트 MINE</h2>
          <br></br>
          <img src = {mine} style={{height:'380px', width:'800px'}}></img>
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
            <br></br>네이버 로그인 API를 사용하여 네이버 계정으로 로그인 하도록 해두었고 네이버 알림 API를 사용하여 댓글이 달리거나 입찰및 구매성공시에 알림이 가게 해두었습니다.</p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: JavaSpring React Mysql </p>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;
