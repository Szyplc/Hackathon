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

// export const energyPricePerKwh = 1.11;
// export const waterPricePerL = 0.01;
// export const energyCo2EmissionsPerKwh = 652;
// export const waterCo2EmissionsPerL = 0.0106;
// export type UserPreference = 1 | 2 | 3 | 4 | 5;
// export const defaultUserPreference: UserPreference = 3;

// export const packagingEnvironmentalImpact = {
//     plastic: 3.5,
//     paper: 1.2,
//     glass: 2.0,
//     metal: 2.8
//   };


export const calculateEcoScore = (product: Product): number => {
  let score = 100;
  
  if (product.energyUsePerYear !== undefined) {
    const energyCO2 = product.energyUsePerYear * energyCo2EmissionsPerKwh;
    score -= (energyCO2 / 10000);
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
    //
  }
  
  return Math.max(0, Math.min(100, score));
};


export const calculateCostScore = (product: Product): number => {
  let score = 70;
  
  const priceImpact = Math.min(40, product.price / 50);
  score -= priceImpact;
  
  if (product.energyUsePerYear !== undefined) {
    const lifetimeEnergyCost = product.energyUsePerYear * energyPricePerKwh * product.lifeSpan;
    score -= Math.min(30, lifetimeEnergyCost / 100);
  }
  
  if (product.waterUsePerYear !== undefined) {
    const lifetimeWaterCost = product.waterUsePerYear * waterPricePerL * product.lifeSpan;
    score -= Math.min(15, lifetimeWaterCost / 50);
  }

  if (product.lifeSpan !== undefined) {
    score
  }
  
  score += Math.min(20, product.lifeSpan * 1.5);
  
  return Math.max(0, Math.min(100, score));
};

export const getOverallScore = (
  product: Product, 
  ecoPreference: UserPreference, 
  costPreference: UserPreference
): number => {
  const ecoScore = product.ecoScore ?? calculateEcoScore(product);
  const costScore = product.costScore ?? calculateCostScore(product);

  const sum = ecoPreference + costPreference;
  const ecoWeight = ecoPreference / sum;
  const costWeight = costPreference / sum;
  
  return (ecoWeight * ecoScore) + (costWeight * costScore);
};

export const calculateLifetimeCost = (product: Product): number => {
  let totalCost = product.price;
  
  if (product.energyUsePerYear !== undefined) {
    totalCost += product.energyUsePerYear * energyPricePerKwh * product.lifeSpan;
  }
  
  if (product.waterUsePerYear !== undefined) {
    totalCost += product.waterUsePerYear * waterPricePerL * product.lifeSpan;
  }
  
  return totalCost;
};


export const calculateLifetimeCO2 = (product: Product): number => {
  let totalCO2 = 0;
  
  if (product.energyUsePerYear !== undefined) {
    totalCO2 += product.energyUsePerYear * energyCo2EmissionsPerKwh * product.lifeSpan;
  }
  
  if (product.waterUsePerYear !== undefined) {
    totalCO2 += product.waterUsePerYear * waterCo2EmissionsPerL * product.lifeSpan;
  }
  
  if (product.packagingKindOfMaterial) {
    const impactFactor = packagingEnvironmentalImpact[product.packagingKindOfMaterial];
    totalCO2 += impactFactor * 100; 
    
    if (product.packagingMaterialFromRecycledMaterials === true) {
      totalCO2 *= 0.7; 
    }
  }
  return totalCO2;
};

export const initializeScores = (product: Product): Product => {
  return {
    ...product,
    ecoScore: calculateEcoScore(product),
    costScore: calculateCostScore(product)
  };
};

// export const displayProductInfo = (
//   product: Product, 
//   ecoPreference: UserPreference = 3, 
//   costPreference: UserPreference = 3
// ): string => {
//   const eco = product.ecoScore ?? calculateEcoScore(product);
//   const cost = product.costScore ?? calculateCostScore(product);
//   const overall = getOverallScore(product, ecoPreference, costPreference);
//   const lifetimeCost = calculateLifetimeCost(product);
//   const lifetimeCO2 = calculateLifetimeCO2(product);
  
//   return `
//     Product: ${product.name} (ID: ${product.id})
//     Price: $${product.price.toFixed(2)}
//     Lifespan: ${product.lifeSpan} years
//     Eco Score: ${eco.toFixed(1)}/100
//     Cost Score: ${cost.toFixed(1)}/100
//     Overall Score: ${overall.toFixed(1)}/100
    
//     Lifetime Cost: $${lifetimeCost.toFixed(2)}
//     Lifetime CO2: ${lifetimeCO2.toFixed(2)} kg
    
//     User Preferences Applied: Eco (${ecoPreference}/5), Cost (${costPreference}/5)
//   `;
// };