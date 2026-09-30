import { useState } from 'react'
import Sidebar from './components/Sidebar'


export default function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderPage = () => {
    switch (activeTab) {

      default: return null
    }
  }

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar activeTab={activeTab} onSwitch={setActiveTab} />
      <main className="flex-1 overflow-y-auto bg-slate-50">
        {renderPage()}
      </main>
    </div>
  )
}