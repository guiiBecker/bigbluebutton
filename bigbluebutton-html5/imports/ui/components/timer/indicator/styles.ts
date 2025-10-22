import { styled } from '@linaria/react';
import { phoneLandscape, smallOnly } from '/imports/ui/stylesheets/styled-components/breakpoints';
import { borderRadius } from '/imports/ui/stylesheets/styled-components/general';
import {
  colorSuccess,
  colorDanger,
} from '/imports/ui/stylesheets/styled-components/palette';
import { fontSizeBase, fontSizeXS } from '/imports/ui/stylesheets/styled-components/typography';

interface TimerButtonProps {
  running: boolean;
  disabled: boolean;
  hide: boolean;
}

const TimerWrapper = styled.div`
  overflow: hidden;
  margin-left: auto;
`;

const Timer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  max-height: 1.62rem;
`;

const TimerButton = styled.div<TimerButtonProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: white;
  font-weight: 400;
  border-radius: 2rem 2rem;
  font-size: ${fontSizeBase};
  margin-left: ${borderRadius};
  margin-right: ${borderRadius};
  background-color: ${(props) => (props.running ? colorSuccess : colorDanger)};
  border: solid 2px ${(props) => (props.running ? colorSuccess : colorDanger)};

  @media ${phoneLandscape} {
    height: 1rem;
  }

  @media ${smallOnly} {
    visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 10rem;

    @media ${phoneLandscape} {
      font-size: ${fontSizeXS};
    }
  }

  i {
    font-size: var(--font-size-small);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    @media ${phoneLandscape} {
      height: 0.5rem;
      width: 0.5rem;
      font-size: ${fontSizeXS};
    }
  }
`;

const TimerContent = styled.div`
  box-sizing: border-box;
  display: flex;
  align-self: center;
  padding: 0 0.25rem 0 0;
  display: flex;

  [dir="ltr"] & {
    span:first-child {
      padding: 0 0.25rem;
    }
  }

  [dir="rtl"] & {
    span:last-child {
      padding: 0 0.25rem;
    }
  }
`;

const TimerIcon = styled.span`
  box-sizing: border-box;
  display: flex;
  align-self: center;
  padding: 0 0.25rem 0 0;
`;

const TimerTime = styled.span`
  box-sizing: border-box;
  display: flex;
  align-self: center;
  padding: 0 0.25rem 0 0;
`;

export default {
  TimerWrapper,
  Timer,
  TimerButton,
  TimerContent,
  TimerIcon,
  TimerTime,
};
