import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function FocusScreen() {
  // --- HALKAN KA BILOW (Code-ka aad weydiisay) ---
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false); // Jooji saacadda markay ekaato
      // triggerNotification("Focus Session Ended", "Time to take a break!");
      alert("Waqtigii wuu dhamaaday! Nasasho qaado.");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  // --- HALKAN KU JOOJI ---

  // Saacadaha u beddel daqiiqado iyo ilbiriqsiyo (Formatting)
  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-6xl font-bold mb-10">
        {formatTime(seconds)}
      </Text>

      <TouchableOpacity 
        onPress={() => setIsActive(!isActive)}
        className={`px-10 py-4 rounded-full ${isActive ? 'bg-red-500' : 'bg-blue-600'}`}
      >
        <Text className="text-white text-xl font-bold">
          {isActive ? 'Pause' : 'Start Focus'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
