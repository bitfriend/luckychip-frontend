import React from 'react'
import styled, { keyframes, DefaultTheme } from 'styled-components'
import { Colors, Text } from '@heswap/uikit'
import { MENU_ENTRY_HEIGHT } from '../config'

export interface Props {
  secondary?: boolean
  isActive?: boolean
  theme: DefaultTheme
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed }) => isPushed ? 'inherit' : 'transparent'};
  transition: color 0.4s;
  flex-grow: 1;
`

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? '0 32px' : '0 16px')};
  font-size: ${({ secondary }) => (secondary ? '14px' : '16px')};
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.inputFocusedBorder : 'transparent')};
  color: ${({ theme }) => theme.colors.backgroundAlt};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.backgroundAlt};
    transition: fill 0.4s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
}

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed)

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel }
