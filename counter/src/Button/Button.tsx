import React from 'react';
import { faMinus, faPlus, faRotate, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

type IconType = 'plus' | 'minus' | 'reset';
interface Props {
  type: IconType;
  onPress: () => void;
}

export default function Button({ type, onPress }: Props) {
  const typeMap: Record<IconType, IconDefinition> = {
    plus: faPlus,
    minus: faMinus,
    reset: faRotate,
  };

  return (
    <TouchableButton onPress={onPress} isCircle={type !== 'reset'} activeOpacity={0.5}>
      <FontAwesomeIcon
        icon={typeMap[type]}
        color={type === 'reset' ? 'crimson' : 'darkblue'}
        size={30}
      />
    </TouchableButton>
  );
}

const TouchableButton = styled(TouchableOpacity)<{ isCircle: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: ${({ isCircle }) => (isCircle ? '30px' : '5px')};
  background-color: #eee;

  justify-content: center;
  align-items: center;
`;
