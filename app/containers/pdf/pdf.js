/**
 * Created by wangdi on 27/11/16.
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import PDFView from 'react-native-pdf-view';
export default class Pdf extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='显示PDF'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <PDFView
                    ref={(pdf) => { this.pdfView = pdf; }}
                    // path={}
                    pageNumber={1}
                    // zoom={}
                    src={"./src/aa.pdf"}
                    onLoadComplete={(pageCount) => {
                        console.log(pageCount)
                        this.pdfView.setNativeProps({
                            zoom: 1.5
                        });
                    }}
                    style={{}} />
                }
                <ClickView {...this.props} />
            </View>
        );
    }
}