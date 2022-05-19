---
title: "geoMesa Kafka"
date: 'May 18 2022'
excerpt: 'Setting up GeoMesa with a Kafka stream'
cover_image: 'images/posts/007_GeoMesa.png'
---

# geomesa and Kafka

GeoMesa is an open source suite of tools that enables large-scale geospatial querying and analytics on distributed computing systems. GeoMesa provides spatio-temporal indexing on top of the Accumulo, HBase, Google Bigtable and Cassandra databases for massive storage of point, line, and polygon data. GeoMesa also provides near real time stream processing of spatio-temporal data by layering spatial semantics on top of Apache Kafka. Through GeoServer, GeoMesa facilitates integration with a wide range of existing mapping clients over standard OGC (Open Geospatial Consortium) APIs and protocols such as WFS and WMS. GeoMesa supports Apache Spark for custom distributed geospatial analytics.

[https://www.geomesa.org/](https://www.geomesa.org/)

#### Install Java JDK

```bash
sudo apt install default-jre
java --version
```

#### Install Apache Maven  

[https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

Update the $PATH

```bash
export PATH=$PATH:$HOME/apache-maven-3.8.5/bin
```
Confirm with mvn -v in a new shell

```bash
mvn -v
```
#### Install Kafka    

I followed the quick start guide.

[https://kafka.apache.org/documentation.html#quickstart](https://kafka.apache.org/documentation.html#quickstart)

```bash
export PATH=$PATH:$HOME/geomesa/kafka_2.13-3.2.0
```
Start Zookeeper

```bash
$KAFKA_DIR/bin/zookeeper-server-start.sh config/zookeeper.properties
```
Start another terminal and start the kafka services

```bash
$KAFKA_DIR/bin/kafka-server-start.sh config/server.properties
```

#### Clone the Git Repo
```bash
$ git clone https://github.com/geomesa/geomesa-tutorials.git
$ cd geomesa-tutorials
```

#### Build Geomesa from JAR

```bash
mvn clean install -pl geomesa-tutorials-kafka/geomesa-tutorials-kafka-quickstart -am
```

#### Run the tutorial  
  
User needs to supply kafka.brokers and kafka.zookeepers, local installs are:  

kafka.brokers localhost:9092  
kafka.zookeeper localhost:2181

```bash
java -cp geomesa-tutorials-kafka/geomesa-tutorials-kafka-quickstart/target/geomesa-tutorials-kafka-quickstart-$VERSION.jar \
    org.geomesa.example.kafka.KafkaQuickStart \
    --kafka.brokers localhost:9092                \
    --kafka.zookeepers localhost:2181 \
    --cleanup
```


if you receive an error like below you need to install java 8

```bash
java.lang.ClassNotFoundException: org.geomesa.example.kafka.KafkaQuickStart
```

Uninstall Java 11

```bash
sudo apt-get remove openjdk*
```

Install JDK 8

```bash
sudo apt-get install openjdk-8-jdk
```
You should see some business happening

```bash
java -cp geomesa-tutorials-kafka/geomesa-tutorials-kafka-quickstart/target/geomesa-tutorials-kafka-quickstart-3.5.0-SNAPSHOT.jar \
    org.geomesa.example.kafka.KafkaQuickStart \
    --kafka.brokers localhost:9092                \
    --kafka.zookeepers localhost:2181 \
    --cleanup
```

```bash
Writing features to Kafka... refresh GeoServer layer preview to see changes
```