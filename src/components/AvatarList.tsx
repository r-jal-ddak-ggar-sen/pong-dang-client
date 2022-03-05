import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { theme } from 'src/utils/theme';
import Typo from './Typo';
import CancelIcon from '../../public/assets/icons/icon-cancel.svg';

type AvatarProps = {
  nickname: string;
  color: keyof typeof theme;
  onRemove: () => void;
};

function Avatar({ nickname, color, onRemove }: AvatarProps): ReactElement {
  return (
    <StyledAvatar color={color}>
      <Typo font="BODY_01" align="center" color="WHITE">
        {nickname.substring(0, 2)}
      </Typo>
      <RemoveButton onClick={onRemove}>
        <CancelIcon />
      </RemoveButton>
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div<{ color: keyof typeof theme }>`
  width: 48px;
  height: 48px;
  border-radius: 20px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => theme[color]};
  margin-left: 8px;
`;

const RemoveButton = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: #a4a29e;
  position: absolute;
  top: 0;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type AvatarListProps = {
  list?: string[];
  onRemove: (nickname: string) => void;
};
export function AvatarList({ list, onRemove }: AvatarListProps): ReactElement {
  return (
    <StyledAvatarList>
      {list?.map((nickname, index) => (
        <Avatar
          nickname={nickname}
          color={getColor(index)}
          onRemove={() => onRemove(nickname)}
          key={nickname}
        />
      ))}
    </StyledAvatarList>
  );
}

const StyledAvatarList = styled.div`
  height: 48px;
  white-space: nowrap;
  overflow: auto;
  margin-top: 17px;
`;

const getColor = (index: number): keyof typeof theme => {
  if (index % 3 === 0) {
    return 'SECONDARY_BLUE_50';
  } else if (index % 3 === 1) {
    return 'SECONDARY_BEIGE_50';
  } else {
    return 'SECONDARY_YELLOW_50';
  }
};
