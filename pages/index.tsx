import { useState, ChangeEvent, useEffect } from "react";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import { continentsArray } from "../variables/continentsArray";

import {
  Layout,
  ProgressBar,
  ContinentsList,
  CountriesList,
  SearchBar,
  WorldList,
} from "../components";

export default function Home({
  countriesArray,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const countriesSearch = countriesArray.filter((con: any) =>
    con.country.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const continentsData = countriesArray.filter((obj: any) =>
    continentsArray.includes(obj.country)
  );

  const worldData = countriesArray.filter(
    (obj: any) => obj.country === "World"
  );

  useEffect(() => {
    setTimeout(() => {
      countriesArray && setLoading(false);
    }, 1000);
  }, [countriesArray]);

  return (
    <>
      <Head>
        <title>Covid-19 Vaccines Tracker</title>
        <meta
          name="description"
          content="Covid-19 viccines tracking per country."
        />
        <meta name="author" content="Topp Hestmark." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {loading ? (
          <ProgressBar />
        ) : (
          <>
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

export const getStaticProps = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
  );
  const countriesArray = await res.json();

  return {
    props: {
      countriesArray,
    },
  };
};
