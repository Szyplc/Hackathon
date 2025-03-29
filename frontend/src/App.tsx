import { Grid } from "@mui/material";
import SliderDemo from "./components/Slider";
import { Products } from "./components/Products";

function App() {
    return (
        <Grid container>
            <Grid size={2}>
                <SliderDemo  />
            </Grid>
            <Grid size={10}>
                <Products />
            </Grid>
        </Grid>
    );
}

export default App;
