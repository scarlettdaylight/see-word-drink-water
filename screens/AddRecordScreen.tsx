import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from 'components/Themed';
import { PrimaryText } from 'components/StyledText';
import {StackScreenProps} from "@react-navigation/stack"
import {HomeParamList} from "../types"

const AddRecordScreen = ({navigation}: StackScreenProps<HomeParamList, 'AddRecordScreen'>) => {
  return (
    <View style={styles.container}>
      <PrimaryText>AddRecordScreen </PrimaryText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default AddRecordScreen
