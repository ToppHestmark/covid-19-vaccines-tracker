import { useState, ChangeEvent } from "react";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import { continentsArray } from "../variables/continentsArray";

import {
  Layout,
  Header,
  ContinentsList,
  CountriesList,
  SearchBar,
  WorldList,
} from "../components";

export default function Home({
  countriesArray,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState("");

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
        <Header> Covid Vaccines Tracker </Header>

        <WorldList worldData={worldData} />
        <ContinentsList continents={continentsData} />
        <SearchBar
          type="text"
          placeholder="Search for countries"
          onChange={handleSearch}
        />
        <CountriesList countries={countriesSearch} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
  );
  const json = await res.json();

  const countriesArray = json;

  return {
    props: {
      countriesArray,
    },
  };
};
