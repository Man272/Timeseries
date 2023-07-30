import React from 'react';
import './page1.css';
const Page1 = () => {

  return (
    <div className='page1-container'>
      <div className='line1'>
        <div className='title'>
          <h1>TIME SERIES FORECASTING AND ANALYSIS</h1>
          <p>SRET INT 300 - INTERNSHIP 2</p>
        </div>
      </div>
      <div className='line2'>
        <div className='title2'>
          <div className='header1'>
            <h1>Abstract</h1>
            <p>When forecasting sales figures, not only the sales history but also the future price of a product will influence the sales quantity. At first sight, multivariate time series seem to be the appropriate model for this task. Nonthe less, in real life history is not always repeatable, i.e. in the case of sales history there is only one price for a product at a given time. This complicates the design of a multivariate time series. However, for some seasonal or perishable products the price is rather a function of the expiration date than of the sales history. This additional information can help to design a more accurate and causal time series model. The proposed solution uses a univariate time series model but takes the price of a product as a parameter that influences systematically the prediction. The price influence is computed based on historical sales data using correlation analysis and adjustable price ranges to identify products with comparable history. Compared to other techniques this report approach is easy to compute and allows to present the price parameter for predictions. Tests with data from the collection of historical datasets demonstrate better results than established sophisticated timeseries methods. Keywords-sales prediction, multivariate time series, price-sales correlation, parametrized predictor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
