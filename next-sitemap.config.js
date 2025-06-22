/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.parfumorangbiasa.com',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 5000,
    // ...other options
  }