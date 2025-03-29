export type Product = {
    price: number;
    energyUsePerYear: number | undefined;
    waterUsePerYear: number | undefined;
    packagingKindOfMaterial: "plastic" | "paper" | "glass" | "metal" | undefined;
    packagingMaterialFromRecycledMaterials: true | false | undefined;
};
