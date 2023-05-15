import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bank_limit = 10000;
  return (
    <Stack my={0.5}>
      <SliderComponent
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            downPayment: e.target.value * 0.2,
            loanAmount: e.target.value * 0.8,
            homeValue: e.target.value,
          })
        }
        label="Home value"
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            loanAmount: data.homeValue - e.target.value,
            downPayment: e.target.value,
          })
        }
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            downPayment: data.homeValue - e.target.value,

            loanAmount: e.target.value,
          })
        }
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e) =>
          setData({
            ...data,
            interestRate: e.target.value,
          })
        }
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
      />
    </Stack>
  );
};

export default SliderSelect;
