import Head from "next/head";

import React, { Component } from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Longitudez",
  keywords: "Maps, GIS, Mapping, Longitudes, Longitudez, Mapping",
  description: "Where u wanna be",
};

export default Meta;
