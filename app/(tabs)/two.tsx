import { StyleSheet } from 'react-native';

import { BodyText, TitleText } from '@/components/StyledText';
import { View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <BodyText style={styles.title}>By</BodyText>
      <TitleText style={styles.title}>NZC</TitleText>
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
    fontSize: 80,
    fontWeight: 'bold',
  },
});
