import React, { useRef } from 'react';

import { Pressable, StyleSheet, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';

import { BodyText } from '@/components/StyledText';
import { useThemeColor } from '@/components/Themed';
import { ColorsName } from '@/enums/ColorsName';

export default function ModalScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();
  const backgroundColor = useThemeColor({}, ColorsName.BOTTOM_SHEET_BACKGROUND);
  const iconColor = useThemeColor({}, ColorsName.ICON_HEADER);

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.overlay} onPress={closeBottomSheet} />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={['25%', '50%', '75%']}
        enablePanDownToClose={true}
        onClose={() => router.back()}
        backgroundStyle={{ backgroundColor }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <BodyText style={styles.title}>Fait avec </BodyText>
          <FontAwesome name="heart" size={48} color={iconColor} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  overlay: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
