---
title: "AWS MLS-C01"
date: "Nov 04 2023"
excerpt: "Study Guide for MLS-C01"
cover_image: "images/posts/014_AWS_MLS_C01.png"
tag: "dev:aws:machinelearning"
---

## MLS-C01 Study Guide
[Modeling](#modeling)  
- [Convolutional Neural Networks](#convolutional-neural-networks)  

[Exploritory Data Analysis](#exploritory-data-analysis)
 - [Flavors of Data](#flavors-of-data)
 - [Data Distributions](#data-distributions)
 - [Time Series Analysis](#time-series-analysis)  
[Keyterms](#keyterms)  


### Keyterms

- Additive Model - time Series, which the seasonal component is just added on. 
- Multiplicative Model - times series, added on as proportinoal amount explores the relationship of two or parameters on an outcome. 
- Gradient Descent - 
- Local Minima -  A local minimum is a point in the parameter space where the loss function is minimized in a local neighborhood  
- Loss Function - It is a method of evalutating your model's accuracy.  The difference between the prediction and the actual value.   
- Overfitting - The tendency for a model to be too well suited to a training dataset.  For example, retaking AWS practice exams, you are fitted to that specific exam not as well to the over all topic. 
- Vanishing Gradient Problem -  

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

## Modeling

Deep Learning - Neurons rendered together
Cortical Columns - How GPUs and the brain organize neurons

Tensor, Keras, MXNet (AWS Bias, Apache Based)

Basic Feed Nueral Network
- input weight
    - activation function
        - output to  

Convoluted Neural Network  
    - Image Classification  
Recurrent Neural Network  
    - Time Series

Types of Activation Funcitons  
- Linear Activation Function  
    - Output what it gets as an input

- Binary Step Function 
    - If there is an input there is an output

- Non-Linear Activation Function
    - Multi inputs
    - Sigmoid (Logistic) Activation 
        - Scales everything between 0-1
    - Tanh (aka Hyperbolic Tanget)
        - Scales between -1 and 1
    Complex activatin 
    - ReLU - Rectified Linear Unit
        - Easy and fast to compute
        - When there are 0 or negative values there is a divergence to linear (Dying ReLU) Dying Relu
        - Leaky Relu
            - Solves dying relu  
        - Parametric Relu
        - Exponentional Rely
        - Maxout
    - Softmax 
        - Activation function - for final output.
        - Converts output to probability 

### Convolutional Neural Networks

Imagine Analysis, computationally expensive

CNNs are Feature-location Invariant - Finding features in your data you didn't know where there. Find nouns in sentence, stop sign in picture.    

Inspired by your visual cortex  

CNNs have a hierarchy of layers(convolutions) which gradually detects more detailed features.

convolution - breaking up an image into sub fields  
CNN use third part Keras or Tensorflow
    Shape and color bands is crucial  
Conv2D  (Layer)- Does the actual convolution  
MaxPooling2d - Reduce the size of your data, reduces a layer down to a maximum size.   
Lots of hypertuning

Architecture > Gets deeper
    - LenF5- handwriting
    - AliceNet - image classification
    - GoogleNet - 
    - ResNet - Skip Connections

### Rec

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
    - if you seasonality is consistent you can use an additive model 
    - Multiplicative Model - 
Noise - Can be random  
Seasonality + Noise + Trends = Time Series  

ARIMA Auto regression integrate moving averages
Exponential Smoothing

