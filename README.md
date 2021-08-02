# Covid-19 Vaccines Tracker

[Demo app](https://covid-vaccines-tracker.netlify.app/)

Source: <br />

- [Our World in Data](https://github.com/owid/covid-19-data) github repository. <br />
- [Dataset](https://ourworldindata.org/covid-vaccination-dataset) / [Statistics and Research](https://ourworldindata.org/covid-vaccinations) from ourworldindata.org. <br />
  Visit [ourworldindata.org](https://ourworldindata.org/) for more info.

## About

Vaccines tracker in data table of every country/territory worldwide. Note that some countries are still behind and lack of data.
My source during this project are coming from ourworldindata.org, which again relied on the internal source of the respected country.
The webapp itself contain some issues of the library and cache on the Netlify platform as listed below. I was reconsider to scrap this app and rebuild a new one with a new API, but I leave this as a showcase to my project portfolio until further.
<br />
<br />
<strong>Note: </strong> This was just an API I stumbled upon through the reddit blog post and decided to tried this out by myself. API documentation were kinda poor for developers to understand, but data from the site was pretty much reliable.

### Dependencies

- [NextJS](https://nextjs.org/) as Javascript framework.
- [Recharts](https://recharts.org/en-US) for data chart of selective country onClick.
- Organized CSS with [styled-components](https://github.com/styled-components/styled-components)

### Todos

- [x] Setting up typescript styled-components.
- [x] Create a layout.
- [x] Grapgh data / Chart.js
- [x] Chart page meta data for SEO.
- [x] Link footer with github account.
- [x] Cleaned/split up codes.
- [x] Graph data for continents.
- [ ] Fix the loading for main page.
- [ ] Fix the loading for country onClick.

### Issues

- [ ] Netlify cache that prevent the app to load the newest API data / re-consider new API?
- [ ] Bug on Recharts chart library. Failed to render chart smoothly when entering the country data page.
