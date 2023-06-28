import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { layout, style } from "styles";
import { BackCramps } from "assets";
import { Nav } from "components";


function Profile({ isMobile, headerHeight, navHeight, mainHeight  }) {
  const navigate = useNavigate();

  // 뒤로가기
  const onClickBack = () => {
    navigate(-1)
  }

  return (
    <layout.PageLayout isMobile={isMobile}>
      <layout.Header headerHeight={`${headerHeight}px`}>
        <layout.HeaderContent>Profile의 Header 내용</layout.HeaderContent>
      </layout.Header>
      <layout.Main headerHeight={`${headerHeight}px`} mainHeight={`${mainHeight}px`}>
        <layout.MainContent>
          <layout.FlexCenterColumn100
            style={{ marginTop: "2em", marginBottom: "10em", gap: "1em" }}
          >
            <style.ProfilePicWrap />
            <div style={{ fontSize: "1.5em" }}>사용자 닉네임 출력</div>
            <div style={{ fontSize: "1em", color: "#858585" }}>
              이메일 정보 출력
            </div>
          </layout.FlexCenterColumn100>
          <layout.FlexCenterColumn100 style={{ gap: "1em" }}>
            <style.MidBlackBtn>정보수정</style.MidBlackBtn>
            <span style={{ fontSize: "1em", textDecoration: "underline" }}>
              로그아웃
            </span>
          </layout.FlexCenterColumn100>
        </layout.MainContent>
      </layout.Main>
      <layout.Nav navHeight={`${navHeight}px`}>
        <Nav selected="profile" />
      </layout.Nav>
    </layout.PageLayout>
  );
}

export default Profile;