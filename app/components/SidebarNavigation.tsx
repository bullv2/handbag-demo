import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export type CategoryType = {
  id: string;
  name: string;
  key: string;
};

// All the luxury categories
export const LUXURY_CATEGORIES: CategoryType[] = [
  { id: 'bags', name: '包袋', key: 'bags' },
  { id: 'watches', name: '腕表', key: 'watches' },
  { id: 'jewelry', name: '首饰', key: 'jewelry' },
  { id: 'belts', name: '腰带', key: 'belts' },
  { id: 'sunglasses', name: '墨镜', key: 'sunglasses' },
  { id: 'scarves', name: '围巾', key: 'scarves' },
  { id: 'clothing', name: '衣服', key: 'clothing' },
  { id: 'shoes', name: '鞋靴', key: 'shoes' },
];

interface SidebarNavigationProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hot Brands / All option at the top */}
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategory === 'all' && styles.selectedCategory,
          ]}
          onPress={() => onSelectCategory('all')}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'all' && styles.selectedCategoryText,
            ]}
          >
            热门品牌
          </Text>
        </TouchableOpacity>
        
        {/* Regular category options */}
        {LUXURY_CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              selectedCategory === category.id && styles.selectedCategory,
            ]}
            onPress={() => onSelectCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    backgroundColor: '#f5f5f5',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  scrollView: {
    paddingVertical: 10,
  },
  categoryItem: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: '#fff',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  selectedCategoryText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SidebarNavigation; 