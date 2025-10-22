import { styled } from '@linaria/react';
import {
  lgPaddingY,
  smPaddingY,
  borderSize,
} from '/imports/ui/stylesheets/styled-components/general';
import {
  listItemBgHover,
  itemFocusBorder,
} from '/imports/ui/stylesheets/styled-components/palette';

interface UserItemContentsProps {
  selected?: boolean;
  isActionsOpen?: boolean;
}

const UserItemContents = styled.div<UserItemContentsProps>`
  position: static;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  overflow: hidden;
  min-height: 3rem;
  flex-grow: 0;
  display: flex;
  flex-flow: row;
  border: 3px solid transparent;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  background-color: ${(props) => (props.selected || props.isActionsOpen ? listItemBgHover : 'transparent')};
  
  ${(props) => (props.isActionsOpen ? `
    outline: transparent;
    outline-width: ${borderSize};
    outline-style: solid;
    box-shadow: inset 0 0 0 ${borderSize} ${itemFocusBorder}, inset 1px 0 0 1px ${itemFocusBorder};
    border-top-left-radius: ${smPaddingY};
    border-bottom-left-radius: ${smPaddingY};
  ` : '')}

  &:focus {
    background-color: ${listItemBgHover};
    box-shadow: inset 0 0 0 ${borderSize} ${itemFocusBorder}, inset 1px 0 0 1px ${itemFocusBorder};
    outline: none;
  }

  [dir="rtl"] & {
    padding: ${lgPaddingY} ${lgPaddingY} ${lgPaddingY} 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Avatar = styled.div`
  position: relative;
  text-align: center;
  font-size: .85rem;
  border: 2px solid transparent;
  user-select: none;
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  min-height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  
  &[data-moderator="true"] {
    border-radius: 0.5rem;
  }
  
  &[data-talking="true"] {
    border: 2px solid #0F70D7;
    animation: pulse 1s infinite;
  }
  
  &[data-animations="true"] {
    transition: border 0.3s ease-in-out;
  }
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(15, 112, 215, 0.4);
    }
    50% {
      box-shadow: 0 0 0 4px rgba(15, 112, 215, 0.2);
    }
  }
`;

const IconRightContainer = styled.div`
  margin: .25rem;
  align-content: center;
`;

export default {
  Avatar,
  UserItemContents,
  IconRightContainer,
};
