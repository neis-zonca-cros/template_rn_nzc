import { StyleSheet } from 'react-native';

import { BodyText, TitleText } from '@/components/StyledText';
import { View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BodyText style={styles.title}>Template</BodyText>
      <TitleText style={styles.title}>React Native</TitleText>
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
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
