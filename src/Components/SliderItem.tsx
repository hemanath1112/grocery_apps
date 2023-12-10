import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Gray, Green, Red} from './Color';

const SliderItem = () => {
  const slider = [
    'https://s.yimg.com/ny/api/res/1.2/vj3qwnOvD3ak6LG_yZ4AIA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/b0d7a79feb094b84645c93545437bd2d',
    'https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg',
    'https://food-ubc.b-cdn.net/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg',
  ];

  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={slider}
        dotColor={Green}
        inactiveDotColor={Gray}
        // eslint-disable-next-line react-native/no-inline-styles
        ImageComponentStyle={{
          borderRadius: 15,
          width: '93%',
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SliderItem;
