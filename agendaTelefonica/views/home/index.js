import React, {Component} from 'react';
import {ScrollView, View, Text, StatusBar} from 'react-native';
import {LAYOUT} from '../../constants/app.constant';

// import AppService from '../../../services/security/app.service';

import {styles} from './styles';

export default class HomeView extends Component {
  constructor(props) {
    // this.api = new AppService();
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={false}
        />
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.text}></Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
