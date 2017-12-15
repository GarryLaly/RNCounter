import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Provider,
    connect,
} from 'react-redux';
import store from './src/stores/store.js';
import CounterContainer from './src/containers/CounterContainer.js';

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <View style={styles.container}>
                    <CounterContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
