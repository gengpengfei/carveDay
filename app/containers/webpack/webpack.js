import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class WebPack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            woItems: [],
            handlerList: []
        };

        setTimeout(() => {
            this.setState({
                isShowWait: '111',
                ...this.state
            });
        }, 1000)
    }
    render() {
        return (
            <View>
                {
                    this.state.isShowWait == 'false' ? null :
                        <View>
                            <Text>123</Text>
                        </View>
                }

            </View>
        )
    }
}