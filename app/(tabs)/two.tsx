import { StyleSheet } from 'react-native';

import { BodyText, TitleText } from '@/components/StyledText';
import { View } from '@/components/Themed';

const TabTwoScreen = () => (
  <View style={styles.container}>
    <BodyText style={styles.title}>By</BodyText>
    <TitleText style={styles.title}>NZC</TitleText>
  </View>
);

export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});
