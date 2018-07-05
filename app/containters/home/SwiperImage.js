import React,{Component} from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'
const {width} = Dimensions.get('window');

const SwiperImage = ({renderList}) => (
    <Swiper style={styles.wrapper} autoplay>
        {
            renderList.map((item, idx) => {
                return (
                    <View key={idx} style={styles.slide}>
                        <Image resizeMode='stretch' style={styles.image} source={item}/>
                    </View>
                )
            })
        }
    </Swiper>
);
export default SwiperImage
const styles = {
    wrapper: {
        height: 160
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width,
        flex: 1
    }
}
