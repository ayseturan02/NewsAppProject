import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const App3 = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: windowHeight * 0.05}}>
        <Text
          style={{
            fontSize: windowWidth * 0.15,
            fontFamily: 'ZillaSlabHighlight_Bold',
            color: '#262825',
          }}>
          Moderatör Paneli
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App3;

const styles = StyleSheet.create({});
