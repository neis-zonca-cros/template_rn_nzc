import { StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { BodyText, TitleText } from '@/components/StyledText';
import { useThemeColor, View } from '@/components/Themed';
import { ColorsName } from '@/enums/ColorsName';
import { RoutesEnum } from '@/enums/RoutesEnum';

const TabOneScreen = () => {
  const iconColor = useThemeColor({}, ColorsName.ICON_HEADER);

  return (
    <View style={styles.container}>
      <BodyText style={styles.title}>Template</BodyText>
      <TitleText style={styles.title}>React Native</TitleText>
      <TouchableOpacity onPress={() => router.push(RoutesEnum.MODAL)} hitSlop={10}>
        <Ionicons name="arrow-up-outline" size={48} color={iconColor} style={{ margin: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

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
  iconButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
