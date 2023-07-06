import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { Nav } from "components";
import { layout } from 'styles';
import SocialLoginModal from 'components/ui/modal/SocialLoginModal';
import { useGlobalVariables } from 'components';

// function Main({ isMobile, headerHeight, navHeight, mainHeight}) {
  function Main() {
    // 만들어둔 context 사용하기
    const { windowSize, isMobile, headerHeight, navHeight, mainHeight } = useGlobalVariables();
    console.log('Main rendered:', windowSize, isMobile, headerHeight, navHeight, mainHeight)
  // console.log(document.cookie);
  // 닉네임 모달
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const { search } = useLocation();


 

  useEffect(() => {
    let loginSuccess = queryString.parse(search);
    loginSuccess = Object.keys(loginSuccess).length === 0 ? true : JSON.parse(loginSuccess.loginSuccess)

    if (!loginSuccess){
      console.log(loginSuccess)
      setIsSocialLogin(true)
    }
  }, [])
  

  return (
    <layout.PageLayout isMobile={isMobile}>
      <layout.Header headerHeight={`${headerHeight}px`}>
        <div className="statusBarHeight" style={{width: "inherit", height: "50px"}}></div>
        <layout.HeaderContent>Main의 Header 내용</layout.HeaderContent>
      </layout.Header>
      <layout.Main headerHeight={`${headerHeight}px`} mainHeight={`${mainHeight}px`}>
        <layout.MainContent>Main의 메인 내용</layout.MainContent>
      </layout.Main>
      <layout.Nav navHeight={`${navHeight}px`}>
        <Nav selected="main" />
      </layout.Nav>
      { isSocialLogin && <SocialLoginModal>회원가입</SocialLoginModal> }
    </layout.PageLayout>
  );
}

export default Main;
