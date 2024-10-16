import { Platform, StyleSheet, useColorScheme } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';

import { BodyText } from '@/components/StyledText';
import { View } from '@/components/Themed';
import Colors from '@/constants/Colors';

export default function ModalScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <BodyText style={styles.title}>Fait avec </BodyText>
      <FontAwesome name="heart" size={48} color={Colors[colorScheme ?? 'light'].iconHeader} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
    paddingBottom: 5,
    fontSize: 50,
    fontWeight: 'bold',
  },
});
