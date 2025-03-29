import { Product, initializeScores, getOverallScore } from './product';
import { UserPreference } from './constants';

const rawProducts: Product[] = [
  {
    id: 'p001',
    name: 'Dishwasher 1',
    price: 899.99,
    energyUsePerYear: 250,
    waterUsePerYear: undefined,
    packagingKindOfMaterial: "paper",
    packagingMaterialFromRecycledMaterials: true,
    lifeSpan: 12
  },
  
  {
    id: 'p002',
    name: 'Dishwasher 2',
    price: 499.99,
    energyUsePerYear: 400,
    waterUsePerYear: 9500,
    packagingKindOfMaterial: "plastic",
    packagingMaterialFromRecycledMaterials: false,
    lifeSpan: 8
  },
  
  {
    id: 'p003',
    name: 'Dishwasher 3',
    price: 749.99,
    energyUsePerYear: 300,
    waterUsePerYear: 3200,
    packagingKindOfMaterial: "glass",
    packagingMaterialFromRecycledMaterials: true,
    lifeSpan: 10
  },
  
  {
    id: 'p004',
    name: 'Dishwasher 4',
    price: 349.99,
    energyUsePerYear: 650,
    waterUsePerYear: undefined,
    packagingKindOfMaterial: "metal",
    packagingMaterialFromRecycledMaterials: false,
    lifeSpan: 6
  },
  
  {
    id: 'p005',
    name: 'Dishwasher 5',
    price: 1299.99,
    energyUsePerYear: 120,
    waterUsePerYear: 5000,
    packagingKindOfMaterial: "paper",
    packagingMaterialFromRecycledMaterials: true,
    lifeSpan: 15
  }
];

export const products: Product[] = rawProducts.map(initializeScores);

export function findBestOverallProducts(
  count: number = 3, 
  ecoPreference: UserPreference = 3, 
  costPreference: UserPreference = 3
): Product[] {
  return [...products]
    .sort((a, b) => 
      getOverallScore(b, ecoPreference, costPreference) - getOverallScore(a, ecoPreference, costPreference)
    )
    .slice(0, count);
}