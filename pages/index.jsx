import Head from 'next/head';
import {Flex , Box , Text ,Button} from "@chakra-ui/react";
import{baseUrl , fetchApi} from "../utils/fetchApi"
import Banner from "../components/Banner"
import Property from "../components/Property"
export default function Home({propertiesForRent , propertiesForSale}) {
  // console.log(propertiesForRent);
  // console.log(propertiesForSale);

  return (
    <div>
      <Head>
        <title>Real estate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

    <div >
<Box>
     <Banner
     purpose ="RENT A HOME"
     title1 ="rental Homes for"
     title2 ="Everyone"
     desc  ="Explore Apartments , Villas , Homes"
      buttonText ="Explore Renting"
     imageurl= "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      linkname="/search?purpose=for-rent"
     />
          <Flex flexWrap="wrap" >
            {
              propertiesForSale.map((property)=>(
                <Property key={property.id} property={property} />
              ))
            }

</Flex>
     <Banner
     purpose ="BUY A HOME"
     title1 ="Find, Buy &Own Your "
     title2 ="Dream home"
     desc  ="Explore Apartments , Villas , Homes"
      buttonText ="Explore Renting"
     imageurl= "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      linkname="/search?purpose=for-sale"
     />
          <Flex flexWrap="wrap" >
            {
              propertiesForRent.map((property)=>(
                <Property key={property.id} property={property} />
              ))
            }

</Flex>
</Box>
    </div>
    </div>
    
  
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}