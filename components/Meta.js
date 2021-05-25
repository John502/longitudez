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