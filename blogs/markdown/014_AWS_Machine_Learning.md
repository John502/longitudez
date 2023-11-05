---
title: "AWS MLS-C01"
date: "Nov 04 2023"
excerpt: "Study Guide for MLS-C01"
cover_image: "images/posts/014_AWS_MLS_C01.png"
tag: "dev:aws:machinelearning"
---

## MLS-C01 Study Guide
[Exploritory Data Analysis](#exploritory-data-analysis)
 - [Flavors of Data](#flavors-of-data)
 - [Data Distributions](#data-distributions)
 - [Time Series Analysis](#time-series-analysis)  
[Keyterms](#keyterms)  


### Keyterms

Gradient Descent - 
Local Minima -  A local minimum is a point in the parameter space where the loss function is minimized in a local neighborhood  
Loss Function - It is a method of evalutating your model's accuracy.  The difference between the prediction and the actual value.   
Overfitting - The tendency for a model to be too well suited to a training dataset.  For example, retaking AWS practice exams, you are fitted to that specific exam not as well to the over all topic. 

## Basic Machine Learning Worklfow

Understand Problem    
Data Acquisition  
Understanding Data  
Feature Engineering  
Modeling and Training   
Model Evaluation (Reengineer Features)  
Deployment

## Feature Engineering

Feature Improvement  
Feature Construction  
Feature Selection  
Feature Extraction  
Feature Learning  

## How to read summation

![image](https://github.com/John502/longitudez/assets/12539353/477446a4-6149-42aa-a07d-768fcf821ebf)

### Exploritory Data Analysis

Univariate Plots -  Understanding Attributes Independently (Historgram, Box & Whiskey Plots, Density Plots)
Multivariate Plots - Understaing the relation (Correlation Matrix, Scatter Mix )

Denisty Plot   
![image](https://github.com/John502/longitudez/assets/12539353/05d47195-de7e-42b3-b370-79e6a11e013f)

Correlation Matrix   
![image](https://github.com/John502/longitudez/assets/12539353/ef9a2759-1582-4a31-80de-535e641aee14)

Scatter Mix Plot - Show relationships between variables  
![image](https://github.com/John502/longitudez/assets/12539353/c44afd86-50bc-47c7-8f81-49ae4596be4f)


Box and whisker plot (candle stick plot) - shows outliers  
Histogram - places values in a bin (Binning), easily shows the distribution of the dataset.  
Seaborn and Matpotlib for visualization   

### Flavors of Data 

Numerical - Quantifiable
- Discrete Data, integer restricted (counts)
- Continuous Data, floats (infinite amount of precision)

Categorical - No inherint numerical value (race, political party)  

Ordinal Data - Start ratings for movie
  
### Data Distributions

- Probability Density Function (Continuous)- For a given range of values the probability of that occuring (normal distribution curve)
- Probabiliyt Mass Function (Discrete) - probabilities of given discrete
   - Poisson Distribution - Given number of events occuring of fixed interval of time or space.    
- Binomial Distribution -  is the discrete probability distribution of the number of successes or failures in a sequence of n independent experiments
- Bernoli Distribution - has a single trial of n=1

### Time Series Analysis

Trend - Growth over time
Seasonality - Fluxuation of what time of the year  
Noise - Can be random  
Seasonality + Noise + Trends = Time Series  
