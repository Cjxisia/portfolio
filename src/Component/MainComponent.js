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
import yeogi1 from '../images/yeogi1.png'
import yeogi2 from '../images/yeogi2.gif'
import yeogi3 from '../images/yeogi3.gif'
import yeogi4 from '../images/yeogi4.png'

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
          특정 버튼을 누르면 네이버로 검색할 수 있는 창이 나타나며 네이버에 검색할 수 있도록 기능을 추가하였습니다.<br></br>
          이 프로젝트는 대학교 과제를 수행하는것이 아닌 스스로에게 과제를 부여하고 해결한 저의 첫번째 프로젝트입니다. <br></br>
          새로운 언어를 사용해보고자 다양한 자료를 찾아보았고, 오류를 해결하기 위해 수많은 시행착오를 겪었습니다. <br></br>
          완벽하지는 않지만, 스스로 문제를 해결하고 제가 원하는 방향으로 프로젝트를 성공적으로 구동했기에 저에게 매우 뜻깊은 경험이었습니다.</p>
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
              <a href="https://eatingmouse.tistory.com/29" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>채팅프로젝트를 마치고 경험과 지식을 토대로 좀 더 복잡한 프로젝트를 진행하고 싶어서 시작한 프로젝트입니다.<br></br>
          채팅프로젝트에서는 하지 못했던 MVC모델을 생각하며 프론트의 배치와 백엔드의 구조를 구성해 두었고 <br></br>
          이전 보다 복잡해진 데이터베이스가 엉키지 않도록 코드를 작성하기전에 데이터베이스의 구조를 설계해두었습니다.<br></br>
          MYSQL을 적극 활용하여 테이블에 저장 및 조회를 통해 글의 관리 및 로그인 기능을 구현하였습니다.<br></br>
          글 작성 이외에도 작성한 글을 검색하거나 댓글작성 기능을 구현하여 글을 작성하고 댓글을 달면서 소통할 수 있는 사이트를 만들었습니다.<br></br>
          프로젝트를 완성한 이후에 Aws의 Ec2를 이용하여 배포한 프로젝트이기도 하며 Docker의 사용법을 배우기 위해 사용한 프로젝트이기도 합니다.<br></br>
          채팅 프로젝트와 달리, 이번에는 초기에 구상을 하고 설계에 맞춰 코딩을 진행했더니, 이전 프로젝트의 엉성한 구조와 비교해 훨씬 탄탄해졌음을 느낄 수 있었으며<br></br>
          이번 프로젝트를 통해 코드 작성 전에 설계를 철저히 하는 것이 얼마나 중요한지 실감할 수 있었습니다.<br></br></p>
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
            사용자 간 거래를 용이하게 하기 위해 사용자 닉네임을 클릭하면 채팅창이 열리도록 하여 구매자와 판매자가 소통할 수 있도록 구현했습니다.<br></br>
            이번에는 자바스크립트로만 만들어 두었던 프론트도 적극적으로 React를 배우고 활용하였으며 이전에 제대로 다루지 못했던 Restful한 api를 설계하려 노력하였습니다.<br></br>
            처음이었기에 React와 Java Spring간의 통신을 어려워하였지만 서버에서 해야할 일을 프론트가 분담하여 처리하여 데이터처리속도가 늘어나는걸 실감하였고<br></br>
            프론트엔드의 라이브러리가 큰 서버에 영향을 끼칠 수 있기에 프론트의 역할을 무시해서는 안된다는걸 배울 수 있었습니다.</p>
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
          <p>이전의 프로젝트를 진행하며 배운 기술을 이용하여 입찰을 통해 물품을 구매할 수 있는 경매 홈페이지를 만들었습니다.<br></br>
          경매 프로젝트는 팀 프로젝트로 진행하여 프론트 / 백엔드로 나눠서 진행하였고 저는 백엔드 역할을 맡아서 수행하게 되었습니다.<br></br>
          네이버 로그인 API를 사용하여 네이버 계정으로 로그인 하도록 해두었고 네이버 알림 API를 사용하여 댓글이 달리거나 입찰및 구매성공시에 알림이 가도록 구현했습니다.<br></br>
          개인적으로 진행한 첫 팀프로젝트로 같이 진행한 프론트인원과 회의를 하고 계획을 세우며 서로 맞지 않은 의견차이를 조율하는 데 어려움을 겪었습니다.<br></br>
          하지만 저는 이전에 개인 프로젝트를 진행하며 프론트엔드를 다뤄본 경험이 있어, 프론트 팀원의 상황을 이해하고 능동적으로 계획을 수정해 나갈 수 있었으며<br></br>
          백엔드를 담당한다고 해서 백엔드만 공부하는 것이 아니라, 다른 팀원의 입장에서 생각하고 그들의 분야도 공부하는 것이 중요하다는 것을 느꼈습니다.<br></br>
          역할을 분담하여 프로젝트를 진행하다 보니 개인 프로젝트와 비교할 수 없을 정도로 작업 속도가 빨라졌으며<br></br>
          저는 회의와 소통을 통해 팀원과 의견을 조율하면서 팀 프로젝트를 잘 관리하면 놀라운 효율을 낼 수 있다는 것을 배웠습니다.<br></br></p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: JavaSpring Next Mysql </p>

          <h2>여행지 등록 프로젝트 가자여기</h2>
          <br></br>
          <div className="image-grid">
            <img src={yeogi1} alt="Yeogi Project" />
            <img src={yeogi2} alt="Yeogi Project" />
            <img src={yeogi3} alt="Yeogi Project" />
            <img src={yeogi4} alt="Yeogi Project" />
          </div>
          <p style={{fontSize:'0.7rem', color:'gray'}}>2024.06.23 ~ 2024.08.19</p>
          <p>
              <a href="https://github.com/GajaYeogi" target="_blank" rel="noopener noreferrer">
                <img src={githubimage} alt="My Github" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://eatingmouse.tistory.com/48" target="_blank" rel="noopener noreferrer">
                <img src={tstoryimage} alt="My Tstory" style={{ width: '35px', height: '35px' }} />
              </a>
          </p>
          <p>경매프로젝트 이후로 진행한 두번째 팀 프로젝트로 이번에도 이전과 같이 프론트와 백엔드 파트를 나누었고 저는 백엔드 파트를 담당하였습니다.<br></br>
          ‘가자여기’ 프로젝트는 투어 API를 활용해 관광지 정보를 제공하는 프로젝트입니다. 다만, 투어 API에 등록되지 않은 개인만의 특별한 관광지를 추가하고 이를 다른 사람들과 공유할 수 있도록 기획하였습니다.<br></br>
          사용자는 관광지 정보 등록 게시판을 통해 자신이 원하는 관광지 정보를 등록할 수 있으며, 일정 수 이상의 추천을 받으면 해당 관광지가 모든 사람이 볼 수 있는 투어 맵에 표시됩니다.<br></br>
          맵에 등록된 관광지를 클릭하면 상세 정보를 확인할 수 있으며, 실제로 방문 후 리뷰를 작성해 다른 사람들과 감상을 공유할 수 있습니다. 또한, 마음에 드는 관광지를 스크랩하여 언제든지 다시 찾을 수 있도록 기능을 구현하였습니다.<br></br>
          두번째로 진행한 팀프로젝트였기에 이전에 팀프로젝트에서 하지 못했던 팀원과의 원활한 소통을 위해 프론트가 이해할 수 있도록 주석을 달고 해야할 일에대해 커맨트를 달아놓았습니다.<br></br>
          보다 체계적인 방법으로 팀프로젝트를 진행함으로서 이전에 진행했던 프로젝트보다 원활한 수행이 가능했고 팀프로젝트에서의 팀과의 소통이 중요하다는 사실을 배웠습니다.<br></br>
          </p>
          <p style={{fontSize:'0.7rem', color:'gray'}}>사용기술: JavaSpring Next Mysql </p>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;
