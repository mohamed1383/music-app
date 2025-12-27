import StatCard from "../../components/dashboard/statCard/statCard"
import ActivityCard from "../../components/dashboard/activityCard/activityCard"

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <StatCard />
      <ActivityCard />
    </div>
  )
}
