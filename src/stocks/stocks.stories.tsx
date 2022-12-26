import React from "react";
import { rest } from "msw";
import { Stocks } from "./stocks";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Stocks",
  component: Stocks
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Stocks {...args} />;

export const Primary = Template.bind({});

const mockStocks = [
  {
    quoteSummary: {
      result: [
        {
          financialData: {
            maxAge: 86400,
            currentPrice: {
              raw: 89.81,
              fmt: "89.81"
            },
            targetHighPrice: {
              raw: 160,
              fmt: "160.00"
            },
            targetLowPrice: {
              raw: 115,
              fmt: "115.00"
            },
            targetMeanPrice: {
              raw: 132.15,
              fmt: "132.15"
            },
            targetMedianPrice: {
              raw: 134.5,
              fmt: "134.50"
            },
            recommendationMean: {
              raw: 1.5,
              fmt: "1.50"
            },
            recommendationKey: "strong_buy",
            numberOfAnalystOpinions: {
              raw: 10,
              fmt: "10",
              longFmt: "10"
            },
            totalCash: {
              raw: 116258996224,
              fmt: "116.26B",
              longFmt: "116,258,996,224"
            },
            totalCashPerShare: {
              raw: 8.982,
              fmt: "8.98"
            },
            ebitda: {
              raw: 93733003264,
              fmt: "93.73B",
              longFmt: "93,733,003,264"
            },
            totalDebt: {
              raw: 29336000512,
              fmt: "29.34B",
              longFmt: "29,336,000,512"
            },
            quickRatio: {
              raw: 2.31,
              fmt: "2.31"
            },
            currentRatio: {
              raw: 2.518,
              fmt: "2.52"
            },
            totalRevenue: {
              raw: 282113015808,
              fmt: "282.11B",
              longFmt: "282,113,015,808"
            },
            debtToEquity: {
              raw: 11.567,
              fmt: "11.57"
            },
            revenuePerShare: {
              raw: 21.45,
              fmt: "21.45"
            },
            returnOnAssets: {
              raw: 0.13916999,
              fmt: "13.92%"
            },
            returnOnEquity: {
              raw: 0.26893,
              fmt: "26.89%"
            },
            grossProfits: {
              raw: 146698000000,
              fmt: "146.7B",
              longFmt: "146,698,000,000"
            },
            freeCashflow: {
              raw: 48262373376,
              fmt: "48.26B",
              longFmt: "48,262,373,376"
            },
            operatingCashflow: {
              raw: 92814999552,
              fmt: "92.81B",
              longFmt: "92,814,999,552"
            },
            earningsGrowth: {
              raw: -0.241,
              fmt: "-24.10%"
            },
            revenueGrowth: {
              raw: 0.061,
              fmt: "6.10%"
            },
            grossMargins: {
              raw: 0.56099,
              fmt: "56.10%"
            },
            ebitdaMargins: {
              raw: 0.33225,
              fmt: "33.22%"
            },
            operatingMargins: {
              raw: 0.27849,
              fmt: "27.85%"
            },
            profitMargins: {
              raw: 0.23746,
              fmt: "23.75%"
            },
            financialCurrency: "USD"
          }
        }
      ],
      error: null
    }
  },
  {
    quoteSummary: {
      result: [
        {
          financialData: {
            maxAge: 86400,
            currentPrice: {
              raw: 123.15,
              fmt: "123.15"
            },
            targetHighPrice: {
              raw: 436,
              fmt: "436.00"
            },
            targetLowPrice: {
              raw: 24.33,
              fmt: "24.33"
            },
            targetMeanPrice: {
              raw: 253.32,
              fmt: "253.32"
            },
            targetMedianPrice: {
              raw: 257.74,
              fmt: "257.74"
            },
            recommendationMean: {
              raw: 2.3,
              fmt: "2.30"
            },
            recommendationKey: "buy",
            numberOfAnalystOpinions: {
              raw: 37,
              fmt: "37",
              longFmt: "37"
            },
            totalCash: {
              raw: 21106999296,
              fmt: "21.11B",
              longFmt: "21,106,999,296"
            },
            totalCashPerShare: {
              raw: 6.684,
              fmt: "6.68"
            },
            ebitda: {
              raw: 16010000384,
              fmt: "16.01B",
              longFmt: "16,010,000,384"
            },
            totalDebt: {
              raw: 5873999872,
              fmt: "5.87B",
              longFmt: "5,873,999,872"
            },
            quickRatio: {
              raw: 0.953,
              fmt: "0.95"
            },
            currentRatio: {
              raw: 1.462,
              fmt: "1.46"
            },
            totalRevenue: {
              raw: 74863001600,
              fmt: "74.86B",
              longFmt: "74,863,001,600"
            },
            debtToEquity: {
              raw: 14.284,
              fmt: "14.28"
            },
            revenuePerShare: {
              raw: 24.151,
              fmt: "24.15"
            },
            returnOnAssets: {
              raw: 0.11723,
              fmt: "11.72%"
            },
            returnOnEquity: {
              raw: 0.32242,
              fmt: "32.24%"
            },
            grossProfits: {
              raw: 13606000000,
              fmt: "13.61B",
              longFmt: "13,606,000,000"
            },
            freeCashflow: {
              raw: 6553249792,
              fmt: "6.55B",
              longFmt: "6,553,249,792"
            },
            operatingCashflow: {
              raw: 16030999552,
              fmt: "16.03B",
              longFmt: "16,030,999,552"
            },
            earningsGrowth: {
              raw: 0.977,
              fmt: "97.70%"
            },
            revenueGrowth: {
              raw: 0.559,
              fmt: "55.90%"
            },
            grossMargins: {
              raw: 0.26613,
              fmt: "26.61%"
            },
            ebitdaMargins: {
              raw: 0.21385999,
              fmt: "21.39%"
            },
            operatingMargins: {
              raw: 0.16569,
              fmt: "16.57%"
            },
            profitMargins: {
              raw: 0.14947,
              fmt: "14.95%"
            },
            financialCurrency: "USD"
          }
        }
      ],
      error: null
    }
  },
  {
    quoteSummary: {
      result: [
        {
          financialData: {
            maxAge: 86400,
            currentPrice: {
              raw: 131.86,
              fmt: "131.86"
            },
            targetHighPrice: {
              raw: 214,
              fmt: "214.00"
            },
            targetLowPrice: {
              raw: 122,
              fmt: "122.00"
            },
            targetMeanPrice: {
              raw: 176.45,
              fmt: "176.45"
            },
            targetMedianPrice: {
              raw: 176,
              fmt: "176.00"
            },
            recommendationMean: {
              raw: 1.9,
              fmt: "1.90"
            },
            recommendationKey: "buy",
            numberOfAnalystOpinions: {
              raw: 41,
              fmt: "41",
              longFmt: "41"
            },
            totalCash: {
              raw: 48304001024,
              fmt: "48.3B",
              longFmt: "48,304,001,024"
            },
            totalCashPerShare: {
              raw: 3.036,
              fmt: "3.04"
            },
            ebitda: {
              raw: 130541002752,
              fmt: "130.54B",
              longFmt: "130,541,002,752"
            },
            totalDebt: {
              raw: 132480000000,
              fmt: "132.48B",
              longFmt: "132,480,000,000"
            },
            quickRatio: {
              raw: 0.709,
              fmt: "0.71"
            },
            currentRatio: {
              raw: 0.879,
              fmt: "0.88"
            },
            totalRevenue: {
              raw: 394328014848,
              fmt: "394.33B",
              longFmt: "394,328,014,848"
            },
            debtToEquity: {
              raw: 261.446,
              fmt: "261.45"
            },
            revenuePerShare: {
              raw: 24.317,
              fmt: "24.32"
            },
            returnOnAssets: {
              raw: 0.21214001,
              fmt: "21.21%"
            },
            returnOnEquity: {
              raw: 1.75459,
              fmt: "175.46%"
            },
            grossProfits: {
              raw: 170782000000,
              fmt: "170.78B",
              longFmt: "170,782,000,000"
            },
            freeCashflow: {
              raw: 90215251968,
              fmt: "90.22B",
              longFmt: "90,215,251,968"
            },
            operatingCashflow: {
              raw: 122151002112,
              fmt: "122.15B",
              longFmt: "122,151,002,112"
            },
            earningsGrowth: {
              raw: 0.048,
              fmt: "4.80%"
            },
            revenueGrowth: {
              raw: 0.081,
              fmt: "8.10%"
            },
            grossMargins: {
              raw: 0.43310001,
              fmt: "43.31%"
            },
            ebitdaMargins: {
              raw: 0.33105,
              fmt: "33.11%"
            },
            operatingMargins: {
              raw: 0.30289,
              fmt: "30.29%"
            },
            profitMargins: {
              raw: 0.2531,
              fmt: "25.31%"
            },
            financialCurrency: "USD"
          }
        }
      ],
      error: null
    }
  }
];

Primary.parameters = {
  msw: {
    handlers: [
      rest.get("/.netlify/functions/stocks", (req, res, ctx) => {
        return res(ctx.json(mockStocks));
      })
    ]
  }
};
