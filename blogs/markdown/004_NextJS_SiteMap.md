---
title: "NextJS Site Map"
date: "November 15 2021"
excerpt: "Generate a Site Map with Next JS"
cover_image: "images/posts/004_NextJS_SEO_Square.png"
tag: "dev:seo:nextjs"
---

# SEO Site Map for Next JS

Search engines need to index your website, in order to do that we need to create a sitemap. We are going to utilize [NEXT-SITEMAP](https://www.npmjs.com/package/next-sitemap).

### Update package.json

In the package.json of our root NextJS directory where we dictate the build commands.

Add the `postbuild next-sitemap` command to generate a file at build time.

```bash
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "postbuild": "next-sitemap"
  }
```

### Create next-sitemap.js

`next-sitemap` requires a configuration file to create the site map. Create a `next-sitemap.js` file in your root directory to pass the build commands at run time.

Populate with this default information from the documentation.

```bash
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
```

### Generate Sitemap.xml & Robots.txt

`npm run build` will generate a sitemap.xml & robots.txt for you Next.js site.

They will be located in the root directory of your project.

Hopefully, now someone will actually visit the site.
