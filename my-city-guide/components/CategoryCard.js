import { Text, Pressable, View } from 'react-native';

export default function CategoryCard({ title }) {
  return (
    <Pressable style={{ padding: 20, backgroundColor: '#ddd', marginVertical: 10, borderRadius: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </Pressable>
  );
}
