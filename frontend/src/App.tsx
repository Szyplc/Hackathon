import { Grid } from "@mui/material";
import { Products } from "./components/Products";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <Grid container>
            <Grid size={2}>
                <Sidebar />
            </Grid>
            <Grid size={10}>
                <Products />
            </Grid>
        </Grid>
    );
}

export default App;
