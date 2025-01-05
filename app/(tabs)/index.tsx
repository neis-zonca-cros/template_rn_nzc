import { StyleSheet } from 'react-native';

import { BodyText, TitleText } from '@/components/StyledText';
import { View } from '@/components/Themed';

const TabOneScreen = () => (
  <View style={styles.container}>
    <BodyText style={styles.title}>Template</BodyText>
    <TitleText style={styles.title}>React Native</TitleText>
  </View>
);

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
