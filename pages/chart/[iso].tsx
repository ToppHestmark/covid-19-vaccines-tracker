import { InferGetStaticPropsType } from "next";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { formatDate } from "../../utils/formatting";
import { Layout, Chart, Header } from "../../components";

type Countries = {
  country: string;
  iso_code: string;
  data: {
    date: string;
    daily_vaccinations: number;
    total_vaccinations: number;
    people_fully_vaccinated: number;
    people_vaccinated_per_hundred: number;
    total_vaccinations_per_hundred: number;
  }[];
};

const ChartPage = ({
  countriesArray,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const countryIsoCode = router.query.iso;

  const selectedCountry = countriesArray.find(
    (obj: any) => obj.iso_code === countryIsoCode
  );

  const contentDescription = (): string => {
    const country = selectedCountry.country;
    const perDate = selectedCountry.data[selectedCountry.data.length - 1].date;
    const date = formatDate(perDate);

    return `Latest data of ${country} per ${date}, source: ourworldindata.org.`;
  };

  return (
    <>
      <Head>
        <title>Covid Vaccines Tracker</title>
        <meta name="description" content={contentDescription()} />
        <meta name="author" content="Topp Hestmark." />
      </Head>
      <Layout>
        <Header> {selectedCountry.country.toUpperCase()} </Header>
        <Chart selectedCountry={selectedCountry} />
        <Description>{contentDescription()}</Description>
      </Layout>
    </>
  );
};

export default ChartPage;

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

export async function getStaticPaths() {
  const res = await fetch(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
  );
  const countries = await res.json();

  const paths = countries.map((country: Countries) => ({
    params: { iso: country.iso_code },
  }));

  return { paths, fallback: "blocking" };
}

export const Description = styled.p`
  width: 100%;
  text-align: center;
  padding: 1em;
  font-weight: 200;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.ghost};
`;
