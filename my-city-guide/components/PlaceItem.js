import { Text, Image, Pressable, View } from 'react-native';

export default function PlaceItem({ place }) {
  return (
    <Pressable style={{ flexDirection: 'row', padding: 16, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 }}>
      <Image source={place.imageUrl} style={{ width: 100, height: 100, borderRadius: 8 }} />
      <View style={{ marginLeft: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{place.name}</Text>
        <Text>{place.description}</Text>
      </View>
    </Pressable>
  );
}
