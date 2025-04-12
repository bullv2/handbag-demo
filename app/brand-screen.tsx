import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SidebarNavigation from './components/SidebarNavigation';
import LuxuryItemsDisplay from './components/LuxuryItemsDisplay';

const BRAND_CATEGORIES = [
  {
    title: '包袋',
    brands: [
      { name: '爱马仕', color: '#FF6600' },  // Orange
      { name: '香奈儿', color: '#000000' },  // Black
      { name: '路易威登', color: '#A36B35' }, // Brown
      { name: '迪奥', color: '#2C2C2C' },    // Dark gray
    ]
  },
  {
    title: '首饰',
    brands: [
      { name: '古驰', color: '#006C3A' },    // Green
      { name: '赛琳', color: '#000000' },    // Black
      { name: '芬迪', color: '#F4B51E' },    // Yellow
      { name: '罗意威', color: '#0077C8' },  // Blue
    ]
  },
  {
    title: '墨镜',
    brands: [
      { name: '圣罗兰', color: '#000000' },    // Black
      { name: '普拉达', color: '#000000' },    // Black
      { name: '巴黎世家', color: '#000000' },  // Black
      { name: 'MCM', color: '#B4975A' },      // Gold
    ]
  }
];

const ALPHABET = 'ABCDEFGHJKLMPRSTY'.split('');

export default function BrandScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.searchInput}
            placeholder="请输入品牌名称"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>搜索</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content with Sidebar */}
      <View style={styles.mainContent}>
        {/* Sidebar Navigation */}
        <SidebarNavigation 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        {/* Luxury Items Display */}
        <View style={styles.contentArea}>
          <LuxuryItemsDisplay category={selectedCategory} />
        </View>

        {/* Alphabet Index */}
        <View style={styles.alphabetIndex}>
          {ALPHABET.map((letter, index) => (
            <TouchableOpacity key={`${letter}-${index}`} style={styles.letterButton}>
              <Text style={styles.letterText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchHeader: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    padding: 10,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#333',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  contentArea: {
    flex: 1,
  },
  alphabetIndex: {
    position: 'absolute',
    right: 5,
    top: 0,
    bottom: 0,
    width: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  letterButton: {
    padding: 2,
  },
  letterText: {
    fontSize: 12,
    color: '#666',
  },
}); 