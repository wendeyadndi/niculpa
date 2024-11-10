import React, { useRef } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const ScrollComponent = () => {
  const scrollViewRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToView = (ref) => {
    ref.current.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current.scrollTo({ x: 0, y: y, animated: true });
      }
    );
  };

  return (
    <ScrollView ref={scrollViewRef}>
      <Button title="Go to Section 1" onPress={() => scrollToView(section1Ref)} />
      <Button title="Go to Section 2" onPress={() => scrollToView(section2Ref)} />

      <View ref={section1Ref} style={{ height: 500, marginTop: 50, borderColor: 'black', borderWidth: 1 }}>
        <Text>Section 1</Text>
      </View>

      <View ref={section2Ref} style={{ height: 500, marginTop: 50, borderColor: 'black', borderWidth: 1 }}>
        <Text>Section 2</Text>
      </View>

      <View style={{ height: 1000 }} /> {/* Spacer for scrolling */}
    </ScrollView>
  );
};

export default ScrollComponent;
