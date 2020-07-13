import * as React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { HomeParamList } from '../../types'
import { View } from 'components/Themed'
import { PrimaryText } from 'components/StyledText'
import { PrimaryButton } from '../../components/StyledButton'

const HomeScreen = ({ navigation }: StackScreenProps<HomeParamList, 'HomeScreen'>) => {
  const onPressDrink = () => {
    navigation.replace('AddRecordScreen')
  }

  return (
    <View style={styles.container}>
      <PrimaryText>Next reminder at </PrimaryText>
      <PrimaryText>16:00</PrimaryText>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <PrimaryText>Volume of Water you drank today: </PrimaryText>
      <PrimaryText>60L</PrimaryText>
      <PrimaryButton
        onPress={onPressDrink}
        title='Drink now!'
        accessibilityLabel='Drink now!'
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
