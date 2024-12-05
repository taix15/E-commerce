import {Sidebar} from '../../components/ui/sidebar'
import MainContent from './components/MainContent'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <MainContent />
    </div>
  )
}

