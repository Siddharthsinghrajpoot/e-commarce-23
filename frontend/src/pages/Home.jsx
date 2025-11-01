import React from 'react'
import HeroSection from '../Components/HeroSection'
import {context}  from '../context/ShopContext'
import { useContext } from 'react'
import Title from '../Components/title'
import Statement from '../Components/Statement'
import LatestCollection from '../Components/LatestCollection'
import Title2 from '../Components/Title2'
import BestSeller from '../Components/BestSeller'
import Policy from '../Components/Policy'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
const value=useContext(context);
console.log(value);


  return (
    <div >
  <HeroSection/>
  <Title/>
  <Statement/>
  <LatestCollection></LatestCollection>
 <Title2/>
   <Statement/>
 <BestSeller/>
<Policy/>
<NewsletterBox/>

    </div>
  )
}

export default Home
