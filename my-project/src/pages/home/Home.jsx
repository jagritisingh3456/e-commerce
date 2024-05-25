/* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
// import Layout from "../../components/layout/Layout";
// import MyContext from "../../context/data/myContext";

// const Home = () => {
//   const context = useContext(myContext)
//   console.log(context)

//   const { name } = context
//   console.log(name)
//   return <Layout>Home</Layout>
// };

// export default Home;


// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react';
import Layout from "../../components/layout/Layout";
//import myContext from "../../context/data/myContext";
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCart/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Dashboard from '../admin/dashboard/Dashboard';
import {useDispatch, useSelector} from 'react-redux'

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=>state.cart)

  console.log(cartItem)

  const addcart = () =>{
    dispatch(addcart("shift"));
  }

  const deleteCart = () =>{
    dispatch(deleteCart("shift"));
  }
  return (
    <Layout>
    <div className="flex gap-5 justify-center">
       <button className='bg-gray-300 p-5' onClick={()=> addcart()}>add</button>
       <button className='bg-gray-300 p-5' onClick={()=> addcart()}>del</button>
    </div>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Testimonial />
      <Dashboard />
    </Layout>
  )
}

export default Home