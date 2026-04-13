import React, { useState, useRef } from 'react'
import Game from './components/Game'
import UI from './components/UI'
import StartScreen from './components/StartScreen'

export default function App() {
  const [started, setStarted] = useState(false)
  const [currentLessonId, setCurrentLessonId] = useState(null)
  
  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />
  }
  
  return (
    <>
      <Game onLessonChange={setCurrentLessonId} />
      <UI lessonId={currentLessonId} />
    </>
  )
}