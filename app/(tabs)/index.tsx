import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';

export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <ScrollView className="flex-1 bg-[#050505] px-5 pt-16">
      <MotiView 
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 800 }}
      >
        <Text className="text-gray-400 text-lg font-medium">{today}</Text>
        <Text className="text-white text-4xl font-bold mb-8">Hello, Keynan</Text>

        {/* Productivity Summary */}
        <GlassCard>
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white/60 text-sm uppercase tracking-widest">Focus Score</Text>
              <Text className="text-white text-3xl font-bold">85%</Text>
            </View>
            <TouchableOpacity className="bg-[#3B82F6] p-3 rounded-full">
              <Feather name="zap" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </GlassCard>

        {/* Quick Task Access */}
        <Text className="text-white text-xl font-semibold mt-6 mb-4">Priority Tasks</Text>
        {[1, 2].map((_, i) => (
          <GlassCard key={i}>
            <View className="flex-row items-center">
              <TouchableOpacity className="w-6 h-6 rounded-full border-2 border-[#3B82F6] mr-4" />
              <View>
                <Text className="text-white font-medium text-lg">Finish UI Design</Text>
                <Text className="text-white/40 text-sm">Productivity App • 2:00 PM</Text>
              </View>
            </View>
          </GlassCard>
        ))}
      </MotiView>
    </ScrollView>
  );
}
