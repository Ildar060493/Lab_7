import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import { usePlaces } from '../../context/PlacesContext';
import PlaceItem from '../../components/PlaceItem';

export default function PlacesScreen() {
  const { category } = useLocalSearchParams();
  const { state } = usePlaces();
  const placesInCategory = state.places.filter(place => place.category === category);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {placesInCategory.map(place => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ScrollView>
  );
}
