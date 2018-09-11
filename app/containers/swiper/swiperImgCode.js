import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class SwiperImgCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='轮播图实现代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper'
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class SwiperImg extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='轮播图'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swiper
                    width={screenWidth}
                    height={400}    //-- 高度
                    style={{}}    //-- 样式
                    horizontal={true}              //水平方向，为false可设置为竖直方向
                    loop={true}//-- 如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                    index={2}    //-- 默认到起始位置
                    onIndexChanged={() => { }}     //-- 当轮播滚动时调用的函数
                    autoplay={true}                //自动轮播
                    autoplayTimeout={3}                //每隔x秒切换
                    autoplayDirection={true}     //-- 当前轮播图是否循环
                    paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10px
                    showsPagination={true}       //为false不显示下方圆点
                    dot={<View style={{           //未选中的圆点样式
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        marginLeft: 10,
                        marginRight: 9,
                        marginTop: 9,
                        marginBottom: 9,
                    }} />}
                    activeDot={<View style={{    //选中的圆点样式
                        backgroundColor: '#007aff',
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        marginLeft: 10,
                        marginRight: 9,
                        marginTop: 9,
                        marginBottom: 9,
                    }}
                    />}
                    showsButtons={true}           //为false时不显示两边控制按钮
                    buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }} //-- 控制两边控制按钮排列样式
                    nextButton={<Text>左滑动</Text>}
                    prevButton={<Text>右滑动</Text>}
                >
                    <View style={{ width: 100, height: 200 }}>
                        <Text>第一张图</Text>
                    </View>
                    <View style={{ width: 100, height: 200 }}>
                        <Text>第二张图</Text>
                    </View>
                    <View style={{ width: 100, height: 200 }}>
                        <Text >第三张图</Text>
                    </View >
                </Swiper>
                <ClickView {...this.props} />
            </View >
        )
    }
}`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}