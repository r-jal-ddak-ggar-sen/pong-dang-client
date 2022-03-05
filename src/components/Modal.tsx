import styled from '@emotion/styled';
import { ReactNode } from 'react';

import useOutsideEvent from 'src/hooks/useOutsideEvent';
import { Button } from 'src/components/Button';
import Typo from 'src/components/Typo';

interface Props {
  title: string;
  content?: string;
  action?: ReactNode;
  resetAction?: () => void;
  prevButtonText: string;
  onPrevButtonClick?: () => void;
  nextButtonText: string;
  onNextButtonClick: () => void;
  isNextButtonDisabled?: boolean;
}

const Modal = ({
  title,
  content,
  action,
  resetAction,
  prevButtonText,
  onPrevButtonClick,
  nextButtonText,
  onNextButtonClick,
  isNextButtonDisabled = false,
}: Props) => {
  const { modalRef } = useOutsideEvent<HTMLDivElement>({
    onOutsideClick: () => {
      resetAction?.();
      onPrevButtonClick?.();
    },
  });

  return (
    <ModalStyled>
      <ModalBox ref={modalRef}>
        <Typo font="SUB_TITLE_02" css={{ marginBottom: 8 }}>
          {title}
        </Typo>
        {content && <Typo css={{ marginBottom: 24 }}>{content}</Typo>}
        {action}
        <ModalButtonStyled>
          <Button onClick={onPrevButtonClick} outline>
            {prevButtonText}
          </Button>
          <ModalButtonPadding />
          <Button onClick={onNextButtonClick} disabled={isNextButtonDisabled}>
            {nextButtonText}
          </Button>
        </ModalButtonStyled>
      </ModalBox>
    </ModalStyled>
  );
};

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const ModalBox = styled.div`
  width: calc(100% - 56px);
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.WHITE};
  box-shadow: 0px 0px 26px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

const ModalButtonStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ModalButtonPadding = styled.div`
  width: 4%;
`;

export default Modal;
