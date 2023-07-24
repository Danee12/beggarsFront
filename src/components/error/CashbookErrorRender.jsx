import React from 'react'

import { useGlobalVariables } from 'providers'
import { DayPicker } from 'react-dates';
import { BlurOverlay, CashBookCard, Nav, LoggedYet } from 'components'
import { cashbookDummyData } from 'constants/dummyData'
import { bgCloud100, bgMountain100, bgSky100 } from "assets";
import { ifNotLoggedIn } from "constants"
import { layout, style } from 'styles'

function CashbookErrorRender() {
  const {
    isMobile,
    widthRatio,
    headerHeight,
    navHeight,
    mainHeight,
    screenWidth,
  } = useGlobalVariables();

  const { cashbookDateBox, cashbookCard } = useGlobalVariables();
  const dateBoxWidth = cashbookDateBox.width * widthRatio;
  const dateBoxHeight = cashbookDateBox.height * widthRatio;

  const cardHeight = cashbookCard.height * widthRatio;
  const cardWidth = cashbookCard.width * widthRatio;
  return (
    <style.BackgroundPageLayout
      screenWidth={`${screenWidth}px`}
      isMobile={isMobile}
      backPngTop={`url(${bgSky100})`}
      backPngMiddle={`url(${bgCloud100})`}
      backPngTail={`url(${bgMountain100})`}
    >
      <layout.Header headerHeight={`${headerHeight}px`} style={{zIndex: "10"}}>
        <div
          className="statusBarHeight"
          style={{ width: "inherit", height: "50px" }}
        ></div>
        <layout.HeaderContent style={{ flexDirection: "column" }}>
          <layout.FlexCenter100>
            <style.CashBookHeader ratio={widthRatio}>
              가계부
            </style.CashBookHeader>
          </layout.FlexCenter100>
          <layout.Flex100 style={{}}>
            <style.DayPickerWrap
              dateBoxWidth={`${dateBoxWidth}px`}
              dateBoxHeight={`${dateBoxHeight}px`}
              ratio={widthRatio}
            >
              {/* <DayPicker
                selectDate={"2023-07-24"}
                setSelectDate={"2023-07-24"}
              /> */}
            </style.DayPickerWrap>
          </layout.Flex100>
        </layout.HeaderContent>
      </layout.Header>
      <layout.Main
        headerHeight={`${headerHeight}px`}
        mainHeight={`${mainHeight}px`}
        style={{position: "relative"}}
      >
        <layout.CashBookMainContent className="thisCash">
            <layout.FlexCenterColumn style={{gap: "20px"}}>
             { cashbookDummyData.map((card, idx) => {
                return (
                    <CashBookCard
                        key={idx}
                        id={card.cashbookId}
                        budget={card.cashbookGoalValue}
                        spend={card.cashbookNowValue}
                        category={card.cashbookCategory}
                        title={card.cashbookName}
                        ratio={widthRatio}
                        writeCheck={card.writeCheck}
                        isDefault={true}
                      />
                )
            })}
            </layout.FlexCenterColumn>
            <BlurOverlay addComponent={<LoggedYet />} width="inherit" top={`${headerHeight - 70}px`} left={window.screenWidth - screenWidth} height={`${mainHeight + 70}px`}>
                {ifNotLoggedIn}
            </BlurOverlay>
        </layout.CashBookMainContent>
        
      </layout.Main>
      <layout.Nav navHeight={`${navHeight}px`}>
        <Nav selected="money" ratio={widthRatio} />
      </layout.Nav>
    </style.BackgroundPageLayout>
  )
}

export default CashbookErrorRender