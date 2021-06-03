import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { Layout, Chart } from "../../components";
import { Countries } from "./Chart.models";

const ChartPage = ({
  countriesArray,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const countryIsoCode = router.query.iso;

  const selectedCountry = countriesArray.find(
    (obj: any) => obj.iso_code === countryIsoCode
  );

  return (
    <Layout>
      <Chart selectedCountry={selectedCountry} />
    </Layout>
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
