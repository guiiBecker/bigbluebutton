import { styled } from '@linaria/react';
import { ListItemProps } from './types';
import {
  borderSize,
  navigationSidebarBorderRadius,
  navigationSidebarListItemsContainerGap,
  navigationSidebarListItemsGap,
  navigationSidebarListItemsWidth,
  navigationSidebarPaddingY,
  navigationSidebarMargin,
} from '/imports/ui/stylesheets/styled-components/general';
import {
  colorGrayDark,
  colorGrayLight,
  colorWhite,
  colorDanger,
  colorPrimary,
  listItemBgHover,
  itemFocusBorder,
  colorGrayIcons,
  colorBackground,
} from '/imports/ui/stylesheets/styled-components/palette';
import { ScrollboxVertical } from '/imports/ui/stylesheets/styled-components/scrollable';
import Button from '/imports/ui/components/common/button/component';

const smallHeight = '(max-height: 40em)';

const NavigationSidebarBackdrop = styled.div`
  position: absolute;

  &[data-mobile="false"] {
    background-color: ${colorBackground};
    padding: ${navigationSidebarMargin};
  }
  
  &[data-mobile="true"] {
    background-color: transparent;
  }
  
  &[data-mobile="true"][data-animations="true"] {
    transition: height 0.2s ease-out, background-color 0.4s ease-out;
  }
`;

const NavigationSidebar = styled.div`
  background-color: ${colorWhite};
  border-radius: ${navigationSidebarBorderRadius};
  display: flex;
  flex-direction: column;
  height: 100%;

  &[data-mobile="true"] {
    gap: 1rem;
    padding-bottom: ${navigationSidebarPaddingY};
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  &[data-mobile="true"][data-expanded="false"] {
    background-color: transparent;
  }
  
  &[data-mobile="true"][data-animations="true"] {
    transition: background-color 0.2s ease-out;
  }
  
  &[data-mobile="false"] {
    padding: ${navigationSidebarPaddingY} 0;
  }
`;

// @ts-ignore - js component
const NavigationToggleButton = styled(Button)`
  margin: 0;
  z-index: 3;
  align-self: center;
  
  &[data-has-notification="true"] {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      bottom: ${borderSize};
      right: 3px;
      background-color: ${colorDanger};
      border: ${borderSize} solid ${colorGrayDark};
    }
  }
`;

const NavigationSidebarListItemsContainer = styled(ScrollboxVertical)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  border-radius: ${navigationSidebarBorderRadius};
  gap: ${navigationSidebarListItemsContainerGap};
  
  @media ${smallHeight} {
    gap: 1.25rem;
  }

  &[data-expanded="true"] {
    max-height: 100%;
    opacity: 1;
  }
  
  &[data-expanded="false"] {
    height: 0;
    opacity: 0;
    background: transparent !important;
  }

  &[data-no-bg="true"] {
    background: transparent !important;
  }

  &[data-mobile="true"][data-animations="true"] {
    transition: height 0.2s ease-out,
     opacity 0.2s ease-out,
     background 0.2s ease-out;
  }

  &[data-enable-scroll="false"] {
    overflow: hidden;
  }
`;

const PositionedDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${navigationSidebarListItemsGap};

  @media ${smallHeight} {
    gap: 0.4rem;
  }
`;

const Top = styled(PositionedDiv)`
  flex-grow: 0;
`;

const Center = styled(PositionedDiv)`
  flex-grow: 1;
`;

const Bottom = styled(PositionedDiv)`
  justify-content: flex-end;
`;

const ListItem = styled.div<ListItemProps>`
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-decoration: none;
  color: ${colorGrayIcons};
  cursor: pointer;
  width: ${navigationSidebarListItemsWidth};
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  > i {
    font-size: 175%;
    color: ${colorGrayLight};

    @media ${smallHeight} {
      font-size: 125%;
    }
  }

  &:hover {
    outline: transparent;
    outline-style: dotted;
    outline-width: ${borderSize};
    background-color: ${listItemBgHover};
  }

  &:active,
  &:focus {
    outline: transparent;
    outline-width: ${borderSize};
    outline-style: solid;
    background-color: ${listItemBgHover};
    box-shadow: inset 0 0 0 ${borderSize} ${itemFocusBorder}, inset 1px 0 0 1px ${itemFocusBorder};
  }
  
  &[data-active="true"] {
    outline: transparent;
    outline-style: dotted;
    outline-width: ${borderSize};
    color: ${colorWhite};
    background-color: ${colorPrimary} !important;
    
    > i {
      color: ${colorWhite} !important;
    }
  }

  &[data-has-notification="true"] {
    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      bottom: ${borderSize};
      right: 3px;
      background-color: ${colorDanger};
      border: ${borderSize} solid ${colorGrayDark};
    }
  }

  :disabled {
    border: none;
  }
`;

const BadgeCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  bottom: ${borderSize};
  right: 3px;
  background-color: ${colorDanger};
  border: ${borderSize} solid ${colorGrayDark};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .7rem;
  color: white;
`;

export default {
  NavigationSidebarBackdrop,
  NavigationSidebar,
  NavigationToggleButton,
  NavigationSidebarListItemsContainer,
  Top,
  Center,
  Bottom,
  ListItem,
  BadgeCircle,
};
