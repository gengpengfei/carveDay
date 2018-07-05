import React,{Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles  from '../../utils/commonStyles'
class SectionView extends Component{
    static propTypes = {
        moreTitle:PropTypes.string,
        onPress:PropTypes.func,
        mainTitle:PropTypes.string.isRequired,
        subTitle:PropTypes.string.isRequired,
        rightIcon:PropTypes.bool,
        leftIcon:PropTypes.string,
    }
    static defaultProps = {
        leftIcon:false,
        rightIcon:false,
    }
    constructor(props){
        super(props);
    }
    componentWillMount() {

    }
    render(){
        let moreTitle = this.props.moreTitle;
        let mainTitle = this.props.mainTitle;
        let subTitle = this.props.subTitle;
        let leftIcon = this.props.leftIcon;
        let rightIcon = this.props.rightIcon;
        let onPress = this.props.onPress;
        return (
            <View style={{height:44,padding:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                    {
                        leftIcon? <Image style={{width:26,height:26,marginRight:5}} source={leftIcon}/> : null
                    }
                    <Text style={[styles.MainTitle]}>{mainTitle}</Text>
                    <Text style={[styles.SubTitle,{marginLeft:5}]}>{subTitle}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                {
                    moreTitle ? <Text onPress={onPress} style={{fontSize:14,color:'red'}}>{moreTitle}</Text> : null
                }
                {
                    rightIcon ? <Text style={{color:'red'}}> >> </Text> : null
                }
                </View>
            </View>
        );
    }
}
function select(store) {
    return {

    }
}
export default connect(select)(SectionView)
