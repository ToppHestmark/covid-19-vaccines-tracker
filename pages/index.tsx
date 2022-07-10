import { useState, ChangeEvent, useEffect } from "react";
import Head from "next/head";

import { continentsArray } from "../variables/continentsArray";

import {
  Layout,
  Header,
  ProgressBar,
  ContinentsList,
  CountriesList,
  SearchBar,
  WorldList,
} from "../components";
import { Countries } from "../globaltypes";

interface HomeProps {
  countries: Countries[];
}

export default function Home({ countries }: HomeProps) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true as boolean);

  const countriesSearch = countries.filter((con: any) =>
    con.country.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const continentsData = countries.filter((obj: any) =>
    continentsArray.includes(obj.country)
  );

  const worldData = countries.filter((obj: any) => obj.country === "World");

  useEffect(() => {
    setLoading(countries ? false : true);
  }, [countries]);

  return (
    <>
      <Head>
        <title>Covid Vaccines Tracker</title>
        <meta
          name="description"
          content="Covid-19 vaccines tracking per country."
        />
        <meta name="author" content="Topp Hestmark." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {loading ? (
          <ProgressBar />
        ) : (
          <>
            <Header> Covid Vaccines Tracker </Header>
            <WorldList worldData={worldData} />
            <ContinentsList continents={continentsData} />
            <SearchBar
              type="text"
              placeholder="Search for countries"
              onChange={handleSearch}
            />
            <CountriesList countries={countriesSearch} />
          </>
        )}
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  let countries: Countries[] = [];
  const res = await fetch(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
  );

  if (res.ok) {
    countries = await res.json();
  }

  return {
    props: {
      countries,
    },
  };
};
