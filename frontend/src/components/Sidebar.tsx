import { useState } from "react"
import SliderDemo from "./Slider"
import CategoryPanel from "./Category"

function App() {
  const [economicValue, setEconomicValue] = useState(50)
  const [ecologicValue, setEcologicValue] = useState(50)
  const arr_of_category = ["pralki", "suszarki", "inne urządzenia", "jezdzace", "latajace", "plywajace", "inne pojazdy", "inne"]
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <>
      <SliderDemo label="Economic" value={economicValue} setValue={(value: number) => setEconomicValue(value)} />
      <SliderDemo label="Economic" value={ecologicValue} setValue={(value: number) => setEcologicValue(value)} />
        <CategoryPanel categories={arr_of_category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </>
  )
}

export default App
