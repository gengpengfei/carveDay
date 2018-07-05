import React,{Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

//--获取屏幕的宽高
const { width } = Dimensions.get('window');
const ItemCard = ({item,width,height}) => (

    <View style={{width:width,height:height,margin:width*0.1,justifyContent:'center',alignItems:'center'}}>

        <Image resizeMode='stretch' style={{width:65,height:45}} source={item.url} />
        <View style={{height:10}}></View>
        <Text style={{color:'#000',fontSize:14}}>{item.title}</Text>

    </View>
);

const NavigationCard = ({listData1,listData2,onPressFun})=>(
    <View style={{height:600,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}}>
            {
                listData1.map((item,idx)=> {
                    return(
                        <TouchableOpacity
                            key={idx}
                            onPress={()=>{onPressFun(item.title)}}>
                            <ItemCard height={75} width={width/5} item={item}/>
                        </TouchableOpacity>
                    );
                    }
                )
            }
        </View>
    </View>
);
NavigationCard.defaultProps = {
    listData1:[
        {title:'1.登录注册',url:require('./img/1.jpg')},
        {title:'2.加载列表',url:require('./img/2.jpg')},
        {title:'第③天',url:require('./img/3.jpg')},
        {title:'第④天',url:require('./img/4.jpg')},
        {title:'第⑤天',url:require('./img/1.jpg')},
        {title:'第⑥天',url:require('./img/2.jpg')},
        {title:'第⑦天',url:require('./img/3.jpg')},
        {title:'第⑧天',url:require('./img/4.jpg')},
        {title:'第⑨天',url:require('./img/1.jpg')},
        {title:'第⑩天',url:require('./img/2.jpg')},
        {title:'第十一天',url:require('./img/3.jpg')},
        {title:'第十二天',url:require('./img/4.jpg')},
        {title:'第十三天',url:require('./img/1.jpg')},
        {title:'第十四天',url:require('./img/2.jpg')},
        {title:'第十五天',url:require('./img/3.jpg')},
        {title:'第十六天',url:require('./img/4.jpg')},
        {title:'第十七天',url:require('./img/1.jpg')},
        {title:'第十八天',url:require('./img/2.jpg')},
        {title:'第十九天',url:require('./img/3.jpg')},
        {title:'第二十天',url:require('./img/4.jpg')},
        {title:'第二一天',url:require('./img/00.png')},
        {title:'第二二天',url:require('./img/00.png')},
        {title:'第二三天',url:require('./img/00.png')},
        {title:'第二四天',url:require('./img/00.png')},
        {title:'第二五天',url:require('./img/00.png')},
        {title:'第二六天',url:require('./img/00.png')},
        {title:'第二七天',url:require('./img/00.png')},
        {title:'第二八天',url:require('./img/00.png')},
        {title:'第二九天',url:require('./img/00.png')},
        {title:'第三十天',url:require('./img/00.png')}
    ]
}
export default NavigationCard;