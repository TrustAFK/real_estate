import Link from "next/link";
import Image from "next/image";
import {Flex , Box , Text ,Button} from "@chakra-ui/react";
// import{baseurl , fetchApi} from . 

const Banner=({purpose , title1 , title2 , desc , buttonText , imageurl , linkname }: { purpose: string; title1: string ; title2:string;desc:string;buttonText:string; imageurl:string ; linkname:string; })=>(
<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
  <Image src={imageurl} width={500} height={300} alt="banner" />
<Box p="5">
<Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
<Text  fontSize="3xl" fontWeight="bold" >{title1}<br/>{title2}</Text>
<Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium" >{desc}</Text>
<Button fontSize="xl"  >
  <Link href={linkname}>
    {buttonText}
  </Link>
</Button>
</Box>
</Flex>
)

export default function Home() {
  return (
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

</Flex>
</Box>
    </div>
    

  
  )
}
