import { styled } from '@linaria/react';
import {
  colorWhite,
} from '/imports/ui/stylesheets/styled-components/palette';

const Avatar = styled.div`
  position: relative;
  height: 2.25rem;
  width: 2.25rem;
  text-align: center;
  font-size: 110%;
  border: 2px solid transparent;
  user-select: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 50% !important;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2.25rem;
  color: ${colorWhite};
  
  &[data-moderator="true"] {
    border-radius: 0.5rem !important;
  }
`;

const Skeleton = styled.div`
  & .react-loading-skeleton {    
    height: 3rem;
    width: 2rem;
  }
`;

const UserListColumn = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 0;
  flex-grow: 1;
  padding: 0;
`;

const VirtualizedList = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0px;
`;

const UserListItem = styled.li``;

export default {
  Avatar,
  Skeleton,
  UserListColumn,
  VirtualizedList,
  UserListItem,
};
