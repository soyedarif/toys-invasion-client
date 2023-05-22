import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "./Toys";

function CategoryTabs() {
  const [category, setCategory] = useState("dc");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://toys-invasion-server.vercel.app/toys?category=${category}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [category]);

  return (
    <>
      <div className="text-center p-4">
        <h2 className=" text-4xl mb-4">Diverse Toys Category!</h2>
        <p className="mb-4">
          Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.
        </p>
      </div>
      <Tabs selectedTabClassName="selected-tab">
        <TabList className="text-center mb-6 text-white bg-secondary rounded-xl">
          <Tab onClick={() => setCategory("dc")}>DC</Tab>
          <Tab onClick={() => setCategory("marvel")}>Marvel</Tab>
          <Tab onClick={() => setCategory("anime")}>Anime</Tab>
        </TabList>

        <TabPanel>
          <div className="grid  lg:grid-cols-3 gap-4">
            {data.map(item => (
              <Toys key={item._id} item={item}></Toys>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid  lg:grid-cols-3 gap-4">
            {data.map(item => (
              <Toys key={item._id} item={item}></Toys>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid  lg:grid-cols-3 gap-4">
            {data.map(item => (
              <Toys key={item._id} item={item}></Toys>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default CategoryTabs;
