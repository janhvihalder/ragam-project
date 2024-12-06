import { useState } from 'react'
import Card from './components/Card'

export default function App() {
  return (
    <div>

      {/* Contains all the tasks */}
      <div className='card-container'>
        <Card/>
        <Card backgroundColor='#56C2E6' topic='Play' icon='/icon-play.svg'/>
        <Card backgroundColor='#FF5E7D' topic='Study' icon='/icon-study.svg'/>
        <Card backgroundColor='#4BCF82' topic='Exercise' icon='/icon-exercise.svg'/>
        <Card backgroundColor='#7235D1' topic='Social' icon='/icon-social.svg'/>
        <Card backgroundColor='#F1C75B' topic='Self Care' icon='/icon-self-care.svg'/>
      </div>

    </div>
  )
}
