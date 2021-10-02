import Head from 'next/head'

import React, { Component } from 'react'

const Meta = ({ title, keywords, description }) => {
    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=auto" rel="stylesheet" as="font"></link>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=auto" rel="stylesheet" as="font"></link>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
        <title>{title}</title>
      </Head>
    )
  }

Meta.defaultProps = {
    title: 'Longitudez',
    keywords: 'Maps, GIS, Mapping',
    description: 'Adventures in GIS and mapping'

}

export default Meta