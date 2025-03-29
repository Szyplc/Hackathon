import SliderDemo from "./Slider";
import CategoryPanel from "./Category";
import { Box } from "@mui/material";

function Sidebar({
    economicValue,
    setEconomicValue,
    ecologicValue,
    setEcologicValue,
    selectedCategory,
    setSelectedCategory,
}: Props) {
    const arr_of_category = [
        "Pralki",
        "Suszarki",
        "Inne urządzenia",
        "Samochody",
        "Motocykle",
        "Rowery",
        "Inne pojazdy",
        "Inne",
    ];

    return (
        <Box padding={5}>
            <SliderDemo
                label="Ekonomia"
                value={economicValue}
                setValue={(value: number) => setEconomicValue(value)}
            />
            <SliderDemo
                label="Ekologia"
                value={ecologicValue}
                setValue={(value: number) => setEcologicValue(value)}
            />
            <CategoryPanel
                categories={arr_of_category}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </Box>
    );
}

export default Sidebar;

type Props = {
    economicValue: number;
    setEconomicValue: (value: number) => void;
    ecologicValue: number;
    setEcologicValue: (value: number) => void;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
};
