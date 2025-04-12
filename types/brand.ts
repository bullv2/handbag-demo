export interface Brand {
  name: string;
  image: any; // ImageSourcePropType
  description?: string;
}

export interface BrandCategory {
  title: string;
  brands: Brand[];
}

export interface BrandScreenProps {
  navigation?: any;
} 