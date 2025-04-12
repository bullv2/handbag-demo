import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
          />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>搜索</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Hot Brands Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>热门品牌</Text>
          <View style={styles.brandGrid}>
            {BRAND_CATEGORIES.map((category, index) => (
              <View key={index} style={styles.categoryRow}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <View style={styles.brandRow}>
                  {category.brands.map((brand, brandIndex) => (
                    <TouchableOpacity key={brandIndex} style={styles.brandItem}>
                      <View style={[styles.brandImage, { backgroundColor: brand.color }]}>
                        <Text style={styles.brandInitial}>{brand.name.charAt(0)}</Text>
                      </View>
                      <Text style={styles.brandName}>{brand.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Alphabet Index */}
        <View style={styles.alphabetIndex}>
          {ALPHABET.map((letter, index) => (
            <TouchableOpacity key={`${letter}-${index}`} style={styles.letterButton}>
              <Text style={styles.letterText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  brandGrid: {
    gap: 20,
  },
  categoryRow: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  brandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandItem: {
    alignItems: 'center',
    width: '23%',
  },
  brandImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandInitial: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  brandName: {
    fontSize: 12,
    textAlign: 'center',
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