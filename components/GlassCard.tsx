import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import { styled } from 'nativewind';

const StyledBlur = styled(BlurView);

export const GlassCard = ({ children, intensity = 20 }) => (
  <View className="overflow-hidden rounded-3xl border border-white/10 mb-4">
    <StyledBlur intensity={intensity} tint="dark" className="p-5">
      {children}
    </StyledBlur>
  </View>
);
