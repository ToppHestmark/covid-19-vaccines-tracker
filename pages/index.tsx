import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import { Layout, CountriesList } from "../components";

export default function Home({
  countriesArray,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <CountriesList countries={countriesArray} />
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
