import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// Demo luxury items for each category
const LUXURY_ITEMS = {
  bags: [
    { id: 'bag1', name: '爱马仕 Kelly', price: '¥100,000+', color: '#FF6600' },
    { id: 'bag2', name: '香奈儿 Classic Flap', price: '¥65,000+', color: '#000000' },
    { id: 'bag3', name: '路易威登 Neverfull', price: '¥15,000+', color: '#A36B35' },
    { id: 'bag4', name: '迪奥 Lady Dior', price: '¥50,000+', color: '#2C2C2C' },
    { id: 'bag5', name: '古驰 Marmont', price: '¥20,000+', color: '#006C3A' },
    { id: 'bag6', name: '赛琳 Luggage', price: '¥25,000+', color: '#000000' },
  ],
  watches: [
    { id: 'watch1', name: '劳力士 Submariner', price: '¥120,000+', color: '#006B3C' },
    { id: 'watch2', name: '欧米茄 Speedmaster', price: '¥45,000+', color: '#000000' },
    { id: 'watch3', name: '百达翡丽 Nautilus', price: '¥800,000+', color: '#00529B' },
    { id: 'watch4', name: '卡地亚 Tank', price: '¥60,000+', color: '#B30838' },
  ],
  jewelry: [
    { id: 'jewelry1', name: '卡地亚 LOVE', price: '¥50,000+', color: '#B30838' },
    { id: 'jewelry2', name: '蒂芙尼 T系列', price: '¥20,000+', color: '#81D8D0' },
    { id: 'jewelry3', name: '梵克雅宝 Alhambra', price: '¥40,000+', color: '#006B3F' },
    { id: 'jewelry4', name: '宝格丽 Serpenti', price: '¥80,000+', color: '#000000' },
  ],
  belts: [
    { id: 'belt1', name: '古驰 GG', price: '¥5,000+', color: '#006C3A' },
    { id: 'belt2', name: '爱马仕 H扣', price: '¥8,000+', color: '#FF6600' },
    { id: 'belt3', name: '路易威登 LV', price: '¥5,500+', color: '#A36B35' },
  ],
  sunglasses: [
    { id: 'sunglasses1', name: '雷朋 Aviator', price: '¥2,000+', color: '#000000' },
    { id: 'sunglasses2', name: '普拉达 Minimal', price: '¥3,500+', color: '#000000' },
    { id: 'sunglasses3', name: '圣罗兰 SL', price: '¥3,000+', color: '#000000' },
    { id: 'sunglasses4', name: '蔻依 Butterfly', price: '¥3,800+', color: '#7B3F00' },
  ],
  scarves: [
    { id: 'scarf1', name: '爱马仕 丝巾', price: '¥4,500+', color: '#FF6600' },
    { id: 'scarf2', name: '路易威登 围巾', price: '¥5,000+', color: '#A36B35' },
    { id: 'scarf3', name: '博柏利 格纹', price: '¥3,800+', color: '#BE8A60' },
  ],
  clothing: [
    { id: 'clothing1', name: '古驰 T恤', price: '¥6,000+', color: '#006C3A' },
    { id: 'clothing2', name: '巴黎世家 卫衣', price: '¥9,000+', color: '#000000' },
    { id: 'clothing3', name: '普拉达 夹克', price: '¥15,000+', color: '#000000' },
    { id: 'clothing4', name: '路易威登 衬衫', price: '¥8,000+', color: '#A36B35' },
  ],
  shoes: [
    { id: 'shoes1', name: '克里斯提·鲁布托 高跟鞋', price: '¥8,000+', color: '#B51F29' },
    { id: 'shoes2', name: '巴黎世家 运动鞋', price: '¥7,500+', color: '#000000' },
    { id: 'shoes3', name: '古驰 乐福鞋', price: '¥7,000+', color: '#006C3A' },
    { id: 'shoes4', name: '爱马仕 凉鞋', price: '¥8,500+', color: '#FF6600' },
  ],
  all: [
    { id: 'all1', name: '爱马仕 Kelly', price: '¥100,000+', color: '#FF6600' },
    { id: 'all2', name: '劳力士 Submariner', price: '¥120,000+', color: '#006B3C' },
    { id: 'all3', name: '卡地亚 LOVE', price: '¥50,000+', color: '#B30838' },
    { id: 'all4', name: '古驰 GG', price: '¥5,000+', color: '#006C3A' },
    { id: 'all5', name: '雷朋 Aviator', price: '¥2,000+', color: '#000000' },
    { id: 'all6', name: '爱马仕 丝巾', price: '¥4,500+', color: '#FF6600' },
  ],
};

interface LuxuryItemsDisplayProps {
  category: string;
}

const LuxuryItemsDisplay: React.FC<LuxuryItemsDisplayProps> = ({ category }) => {
  const items = LUXURY_ITEMS[category as keyof typeof LUXURY_ITEMS] || LUXURY_ITEMS.all;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categoryTitle}>
        {category === 'all' ? '热门品牌' : `${category === 'bags' ? '包袋' : 
          category === 'watches' ? '腕表' : 
          category === 'jewelry' ? '首饰' : 
          category === 'belts' ? '腰带' : 
          category === 'sunglasses' ? '墨镜' : 
          category === 'scarves' ? '围巾' : 
          category === 'clothing' ? '衣服' : 
          category === 'shoes' ? '鞋靴' : '全部品牌'}`}
      </Text>
      <View style={styles.itemsGrid}>
        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.itemContainer}>
            <View style={[styles.itemImage, { backgroundColor: item.color }]}>
              <Text style={styles.itemInitial}>{item.name.charAt(0)}</Text>
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '30%',
    marginBottom: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInitial: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemName: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default LuxuryItemsDisplay; 