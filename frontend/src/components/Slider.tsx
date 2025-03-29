import { Box, Slider, Typography } from "@mui/material";

interface SliderDemoProps {
    value: number;
    setValue: (value: number) => void;
    label?: string;
}

const SliderDemo: React.FC<SliderDemoProps> = ({
    label = "Slider",
    value,
    setValue,
}) => {
    const handleSliderChange = (event: Event, newValue: number) => {
        setValue(newValue as number);
        if (setValue) {
            setValue(newValue);
        }
    };

    return (
        <Box>
            <Typography id="basic-slider" gutterBottom>
                {label}
            </Typography>
            <Box sx={{ width: "100%", mr: 2 }}>
                <Slider
                    value={value}
                    onChange={handleSliderChange}
                    aria-labelledby="basic-slider"
                    valueLabelDisplay="auto"
                />
            </Box>
        </Box>
    );
}

export default SliderDemo;
