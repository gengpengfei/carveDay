import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#fe7013',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 15,
    currentStepLabelColor: '#fe7013'
}

export default class Step extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 0,
            data: [
                {
                    title: 'Preface',
                    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes'
                },
                {
                    title: 'Introduction',
                    body: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut '
                },
                {
                    title: 'Chapter 1',
                    body: 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vesti'
                },
                {
                    title: 'Chapter 2',
                    body: 'Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan '
                },
                {
                    title: 'Chapter 3',
                    body: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi ve'
                },
                {
                    title: 'About',
                    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium'
                }
            ]
        };
        this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='流程进度'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        stepCount={6}
                        direction='vertical'
                        currentPosition={this.state.currentPage}
                        labels={this.state.data.map(item => item.title)}
                    />
                </View>
                <FlatList
                    style={{ flexGrow: 1 }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={this.renderPage}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    viewabilityConfig={this.viewabilityConfig}
                />
                <ClickView {...this.props} />
            </View>
        );
    }

    renderPage = (rowData) => {
        const item = rowData.item
        return (
            <View style={styles.rowItem}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        )
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        const visibleItemsCount = viewableItems.length;
        if (visibleItemsCount != 0) {
            this.setState({ currentPage: viewableItems[visibleItemsCount - 1].index })
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    stepIndicator: {
        paddingHorizontal: 10
    },
    rowItem: {
        flex: 3,
        paddingVertical: 20
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: '#333333',
        paddingVertical: 16,
        fontWeight: '600'
    },
    body: {
        flex: 1,
        fontSize: 15,
        color: '#606060',
        lineHeight: 24,
        marginRight: 8
    }
});