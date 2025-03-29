import {
  energyPricePerKwh,
  waterPricePerL,
  energyCo2EmissionsPerKwh,
  waterCo2EmissionsPerL,
  packagingEnvironmentalImpact,
  UserPreference
} from './constants';

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  score?: number;
  category: string;
  price: number;
  energyUsePerYear: number | undefined;
  waterUsePerYear: number | undefined;
  packagingKindOfMaterial: "plastic" | "paper" | "glass" | "metal" | undefined;
  packagingMaterialFromRecycledMaterials: boolean | undefined;
  lifeSpan: number;
  // url: string;
  
  ecoScore?: number;
  costScore?: number;
};

export const calculateEcoScore = (product: Product): number => {
  let score = 100;
  
  if (product.energyUsePerYear !== undefined) {
    const energyCO2 = product.energyUsePerYear * energyCo2EmissionsPerKwh;
    score -= (energyCO2 / 100);
  }
  
  if (product.waterUsePerYear !== undefined) { // CO2 emissions from water use
    const waterCO2 = product.waterUsePerYear * waterCo2EmissionsPerL;
    score -= (waterCO2 / 10);
  }
  
  if (product.packagingKindOfMaterial) {
    const impactFactor = packagingEnvironmentalImpact[product.packagingKindOfMaterial];
    score -= impactFactor * 5;
    
    if (product.packagingMaterialFromRecycledMaterials === false) {
      score -= 15;
    }
  }

  if (product.lifeSpan !== undefined){
    score += product.lifeSpan * 4;
  }
  
  return score;
};

export const calculateEffectiveCost = (product: Product): number => {
  let effectiveCost = product.price / product.lifeSpan;
  
  if (product.energyUsePerYear !== undefined) {
    effectiveCost += product.energyUsePerYear * energyPricePerKwh;
  }
  
  if (product.waterUsePerYear !== undefined) {
    effectiveCost += product.waterUsePerYear * waterPricePerL;
  }

  return effectiveCost;
}


export const calculateCostScore = (product: Product): number => {
    return -calculateEffectiveCost(product);
};

export const getOverallScore = (
  product: Product, 
  ecoPreference: UserPreference, 
  costPreference: UserPreference
): number => {
  const ecoScore = calculateEcoScore(product);
  product.ecoScore = ecoScore;
  const costScore = calculateCostScore(product);
  product.costScore = costScore;

  const sum = ecoPreference + costPreference;
  const ecoWeight = ecoPreference / sum;
  const costWeight = costPreference / sum;
  
  return (ecoWeight * ecoScore) + (costWeight * costScore);
};

export const initializeScores = (product: Product): Product => {
  return {
    ...product,
    ecoScore: calculateEcoScore(product),
    costScore: calculateCostScore(product)
  };
};