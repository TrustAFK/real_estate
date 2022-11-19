import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import{Box , Flex ,Text , Avatar } from "@chakra-ui/react"
import {FaBed , FaBath} from "react-icons/fa"
import {BsGridFill} from "react-icons/bs"
import millify from 'millify'
// import DefaultImage from '..assets/images/house.jpg'
// assets\images\house.jpg

function Property({property:{coverPhoto , price , rentFrequency , rooms , title , baths , area , agency , isVerifies , externalId}}) {
  console.log(title)
  return (
    <div>
      <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTopo="0" justifyContent="flex-start" cursor="pointer" >
          <Box>
            <Image src={coverPhoto.url} width={400} height={260} alt="image"/>
          </Box>

        </Flex>
      {title}
      </Link>



    </div>
  )
}

export default Property