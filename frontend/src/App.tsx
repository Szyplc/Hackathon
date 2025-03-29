import { Grid } from "@mui/material";
import { Products } from "./components/Products";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AppTheme from './shared-theme/AppTheme'

function App() {
    const [economicValue, setEconomicValue] = useState(50);
    const [ecologicValue, setEcologicValue] = useState(50);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    return (
        <AppTheme>
                <Grid container>
                    <Grid size={2}>
                        <Sidebar
                            economicValue={economicValue}
                            setEconomicValue={setEconomicValue}
                            ecologicValue={ecologicValue}
                            setEcologicValue={setEcologicValue}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </Grid>
                    <Grid size={10}>
                        <Products
                            economicValue={economicValue}
                            ecologicValue={ecologicValue}
                            selectedCategory={selectedCategory}
                        />
                    </Grid>
                </Grid>
        </AppTheme>
    );
}

export default App;
