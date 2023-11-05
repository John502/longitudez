---
title: "AWS MLS-C01"
date: "Nov 04 2023"
excerpt: "Study Guide for MLS-C01"
cover_image: "images/posts/014_AWS_MLS_C01.png"
tag: "dev:aws:machinelearning"
---

## MLS-C01 Study Guide
[S3](#S3)
[Exploritory Data Analysis](#exploritory-data-analysis)
 - [Flavors of Data](#flavors-of-data)
 - [Data Distributions](#data-distributions)
 - [Time Series Analysis](#time-series-analysis)
 - [Amazon Athena](#amazon-athena)
 - [Amazon Qwiksight](#qwiksight)
 - [Feature Engineering](#feature-engineering)
[Elastic Map Reduce](#elastic-map-reduce)
[Keyterms](#keyterms)


### Keyterms

Additive Model - time Series, which the seasonal component is just added on. 
Multiplicative Model - times series, added on as proportinoal amount explores the relationship of two or parameters on an outcome. 
Gradient Descent -  
HDFS - Hadoop Distributed File System
Local Minima -  A local minimum is a point in the parameter space where the loss function is minimized in a local neighborhood  
Loss Function - It is a method of evalutating your model's accuracy.  The difference between the prediction and the actual value.   
MICE - Multiple Imputation by Chained Equations
Overfitting - The tendency for a model to be too well suited to a training dataset.  For example, retaking AWS practice exams, you are fitted to that specific exam not as well to the over all topic. 
Random Cut Forest

## S3
### S3

## Basic Machine Learning Worklfow

Understand Problem    
Data Acquisition  
Understanding Data  
Feature Engineering  
Modeling and Training   
Model Evaluation (Reengineer Features)  
Deployment

## Feature Engineering

Applying your knowledge of the data. Identifying features in your data which resolve your business problem.   

- Feature Improvement  
- Feature Construction  
- Feature Selection  
- Feature Extraction  
- Feature Learning    

Curse of Dimensionality - The more features you have the more difficult it is to find relationships.

##### Unsupervised dimensionality reduction
- Principal Component Analysis -  transforming a large set of variables into a smaller one that still contains most of the information in the large set.  
- K-Means - Nearest Neighbor

##### Impute missing date
Mean/Median Replacement - Replace missing data with a mean value, median if there are outliers. 
Drop Missing rows
KNN - Nearest Neighbor Analysis, replace with most similar data
Deep Learning - Better @ categorical data. 
Regression - Find relationships between data.   
[MICE](https://cran.r-project.org/web/packages/miceRanger/vignettes/miceAlgorithm.html#:~:text=Multiple%20Imputation%20by%20Chained%20Equations,iterative%20series%20of%20predictive%20models.) - Use random forest techniques to swap data values to find the best relationship.


##### Handling Unbalanced Data

When there is a discrepancy between the positive and negative cases.  Difficult to engineer an accurate results when there is a rare case. Mainly a problem wiht nueral networks.  

Unersampling - Remove some the majority case  
SMOTE - Synthetic Minority Oversample Technique - Create new samples from the minority class.   
Adjusting Thresholds - 

##### Handling Outliers
Variance is that average of the squared differences from the mean. Get the difference from mean, sqare those values, then get the mean of those values. 
Sigma represents standard deviation. 
Standard Deviation is square root of Variance  
Random Cut Forest- unsupervised algorithm for detecting anomalous data points within a data set. These are observations which diverge from otherwise well-structured or patterned data.

##### Binning 
Taking numerical data and converting it to categorical data. 
Quanitle Binning - Each has an equal number of samples
Transforming data by squaring and square root which might imporve the interprebility of the data. 
Encoding - Taking non numberical data and making in numerical   
One Hot Encoding
Scale and Normailization of Data - Creates nomrally distributed data
Shuffling - Shuffling data


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
Seasonal variation increases as the trend increases  
The additive model is useful when the seasonal variation is relatively constant over time. The multiplicative model is useful when the seasonal variation increases over time.  
ARIMA Auto regression integrate moving averages  
Exponential Smoothing - Greater weight to more recent values

### Amazon Athena
Serverless SQL queires of an S3 data lake (strcutured semi-structured data)  
Integrates with Jupyter Notebooks  
Web Logs for exmaple  
ODBC, JDBC Protocols  

Glue Data catalog can crawl your data in S3 and issue SQL quiries. Convert it into columnar formats.  Glue extracts the meaning of the data. 
Pay-as-you-go, $5 per TB scanned.  Saves money to convert to columnar formats.  

### Qwiksight
Serverless  
Ad-hoc visualizations  
Can use on prem or cloud
SPICE - Super Fast In Memory Calculation Engine (10 GB of memory per user)  
Columnar Storage (ODBC, JDBC)  
Used for Anomaly Detection, Farecasting, Auto-Narratives  
QwikSight Q - ansewrs business questions based on NLP
Paginated Reports ()  
MFA, VPC Connectivity
Can restrict users to utilize on specific fields of your data. And row level security   
Pricing
- Standard
- Enterprise - Encrytion at Rest, Microsoft Active Directory
- Enterprise with Q  

### Qwiksight Dashboards
Read Only
- Auto Graph - Selected Automically
- Bar Chart - Histogram
- Line Graph - Time Series, area line charts
- Scatter Plots - Correlation (Heat Maps)
- Pivot Tables -
- Donut Charts - Comparing items in dimension (precision isnt important )
- Guage Charts - How much is there of what you're measuring
- Tree Maps - Hierarchical Aggregation
- ![image](https://github.com/John502/longitudez/assets/12539353/4e7e49cc-0f01-41ce-9b1a-1e55ece9f1eb)
- Word Cloud - word or phrase frequency

### Elastic Map Reduce
Managed Hadoop Cluster on EC2 Instances  
Spark, HBBase, Hive come installed, there is also an EMR notebook
Allows for preparation of data by distributing the computation
- Master Node - Runs cluster, monitors
- Core Node - Run tasks and store
- Task Node - Runs tasks, no data
Transient Cluster automatically terminates at conclusion of tasks
Storage: EMRFS - S3 utilize in place HDFS, elastic block store 
Charges by the hour (EC2 costs)  

Hadoop
- Map Reduce - Processing distributed data. (Apache Spark has taken the place)
- YARN
- HDFS  
Apache Spark - In memory caching data processing.
Spark Streaming, Spark SQL, MLLib GraphX (Distributed Graph Processing Framework)  

MLLib - Host of machine learning algorithms which are used across the cluster.  
EMR Notebooks - Similar to Zeppelin. Can spin up spark cluster from the.   
 




