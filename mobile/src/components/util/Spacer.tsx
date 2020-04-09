import React from 'react';
import styled from 'styled-components/native';

const Spacer = styled.View<{ size?: number }>`
  background-color: transparent;
  height: ${(p) => p.size || 8}px;
  width: ${(p) => p.size || 8}px;
`;

export default Spacer;
