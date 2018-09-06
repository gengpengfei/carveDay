import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../theme'
export default clickView = (props) => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
            }}
            onPress={() => {
                var routeName = props.navigation.state.routeName;
                props.navigation.navigate(routeName + 'Code');
            }}
        >
            <Text style={{ color: styles.linkColor }}>
                查看教程
            </Text>
        </TouchableOpacity >
    )
}