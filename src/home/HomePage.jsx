import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(upcome)
  // eslint-disable-next-line no-unused-vars
  const [item, setItem] = useState(latest)
  // eslint-disable-next-line no-unused-vars
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
    </>
  )
}

export default HomePage