import * as React from 'react'
import { StyleSheet, Button } from 'react-native'
import { Text, View } from 'components/Themed'
import { PrimaryText } from 'components/StyledText'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeParamList } from '../types'

const HomeScreen = ({ navigation }: StackScreenProps<HomeParamList, 'HomeScreen'>) => {
  const onPressDrink = () => {
    navigation.replace('AddRecordScreen')
  }

  return (
    <View style={styles.container}>
      <PrimaryText>Volume of Water you drank today: </PrimaryText>
      <PrimaryText>60L</PrimaryText>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Button
        onPress={onPressDrink}
        title='Drink now!'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
    </View>
  )
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
})

export default HomeScreen
