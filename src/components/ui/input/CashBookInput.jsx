import React from "react";

import { useGlobalVariables } from 'providers';
import { style } from "styles";

function CashBookInput({ title, placeholder, onChange, name, value, height, maxLen }) {
  const { widthRatio } = useGlobalVariables();
  return (
    <style.CashBookCardWrap height={height}>
      <style.CashBookHead>{title}</style.CashBookHead>
      <style.CashBookInput
        ratio={widthRatio}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        maxLength={maxLen}
      />
    </style.CashBookCardWrap>
  );
}

export default CashBookInput;
