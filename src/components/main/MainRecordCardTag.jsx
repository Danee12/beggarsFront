import React from 'react'

import { useGlobalVariables } from 'components';
import { getAssetSize } from 'functions'
import { style } from 'styles'

function MainRecordCardTag({ weatherCode }) {
  const { frameSize, screenWidth, mainTag } = useGlobalVariables();
  const { width, height } = getAssetSize(frameSize, screenWidth, mainTag);
  const ratio = width / mainTag.width
  const tagComment = weatherCode > 0 ? "절약" : "과소비"

  return (
    <>
      <style.MainRecordCardTagBox weatherCode={weatherCode} width={`${width}px`} height={`${height}px`} ratio={ratio}>
        {tagComment}
      </style.MainRecordCardTagBox>
    </>
  )
}

export default MainRecordCardTag