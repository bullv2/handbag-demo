import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  
  const navigateToBrands = () => {
    // This casting is necessary to work around TypeScript issues with expo-router paths
    router.push('brand-screen' as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>奢侈品导购</Text>
      <TouchableOpacity 
        style={styles.link}
        onPress={navigateToBrands}>
        <Text style={styles.linkText}>浏览品牌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
}); 