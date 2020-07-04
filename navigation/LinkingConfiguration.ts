import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
              AddRecordScreen: 'AddRecord',
            },
          },
          Statistic: {
            screens: {
              StatisticScreen: 'Statistic',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
}
