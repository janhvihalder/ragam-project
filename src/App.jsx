import { useState } from 'react'
import Card from './components/Card'
import Profile from './components/Profile'
import data from './assets/data';

export default function App() {

  const [timeFrame, setTimeFrame] = useState('daily')
  

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center",}}>
      <div className='God'>

        {/* Profile div */}
        {/*!IMP - If parent is flexing then the children will also flex */}
        <div style={{display:"flex"}}>
          <Profile setTimeFrame={setTimeFrame} timeFrame={timeFrame}/>
        </div>

        {/* Contains all the tasks */}
        <div className='card-container'>
          <Card timeFrame={timeFrame} data={data[0]}/>
          <Card timeFrame={timeFrame} data={data[1]} backgroundColor='#56C2E6' topic='Play' icon='/icon-play.svg'/>
          <Card timeFrame={timeFrame} data={data[2]} backgroundColor='#FF5E7D' topic='Study' icon='/icon-study.svg'/>
          <Card timeFrame={timeFrame} data={data[3]} backgroundColor='#4BCF82' topic='Exercise' icon='/icon-exercise.svg'/>
          <Card timeFrame={timeFrame} data={data[4]} backgroundColor='#7235D1' topic='Social' icon='/icon-social.svg'/>
          <Card timeFrame={timeFrame} data={data[5]} backgroundColor='#F1C75B' topic='Self Care' icon='/icon-self-care.svg'/>
        </div>

      </div>
    </div>
  )
}
