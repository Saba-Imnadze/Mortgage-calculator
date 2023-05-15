import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
