import React, { useState, useRef } from 'react';
import {
  NativeSyntheticEvent,
  ScrollViewProps,
  ScrollView,
} from 'react-native';

import * as S from './styles';

type CarouselTypeProps = {
  data: Array<{ title: string; plate: string; totalKilometers: number }>;
};

interface CustomScrollViewProps extends ScrollViewProps {
  layoutMeasurement: {
    width: number;
    height: number;
  };
}

export const Carrousel = ({ data }: CarouselTypeProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<CustomScrollViewProps>) => {
    const slideSize = event.nativeEvent.contentOffset
      ? event.nativeEvent.layoutMeasurement.width
      : 0;
    const index = Math.round(
      (event.nativeEvent.contentOffset?.x ?? 0) / slideSize
    );
    setActiveIndex(index);
  };

  return (
    <S.CarouselContainer>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {data.map((item, index) => (
          <S.CardContainer key={index}>
            <S.CardContent>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardText>{item.plate}</S.CardText>
              <S.CardText>{item.totalKilometers}</S.CardText>
            </S.CardContent>
          </S.CardContainer>
        ))}
      </ScrollView>
      <S.Pagination>
        {data.map((_, i) => (
          <S.Dot
            key={i}
            style={[
              activeIndex === i
                ? { backgroundColor: '#000' }
                : { backgroundColor: '#ccc' },
            ]}
          />
        ))}
      </S.Pagination>
    </S.CarouselContainer>
  );
};
