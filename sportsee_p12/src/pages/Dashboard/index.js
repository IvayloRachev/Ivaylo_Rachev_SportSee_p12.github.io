import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SourceContext } from '../../utils/context'
import Greeting from '../../components/Greeting'
import DailyActivityChart from '../../components/DailyActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import GoalChart from '../../components/GoalChart'
import NutrientCard from '../../components/NutrientCard'
import iconCalories from '../../assets/svg/icon-calories.svg'
import iconProteins from '../../assets/svg/icon-proteins.svg'
import iconCarbohydrates from '../../assets/svg/icon-carbohydrates.svg'
import iconLipids from '../../assets/svg/icon-lipids.svg'
import './index.css'

function Dashboard() {
  const { source } = useContext(SourceContext)
  const [userInformations, setUserInformations] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)
  const { userId } = useParams()

  useEffect(() => {
    Promise.all([
      source.getUserData(userId),
      source.getUserActivity(userId),
      source.getUserAverageSessions(userId),
      source.getUserPerformance(userId),
    ])
      .then(([userInfos, userActivities, userSessions, userPerf]) => {
        setUserInformations(userInfos)
        setUserActivity(userActivities)
        setUserAverageSessions(userSessions)
        setUserPerformance(userPerf)
      })
      .catch((e) => {
        console.log(e.message)
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return null
  }

  if (isError) {
    return <h2>Oops, we can't reach the server. Please try again later.</h2>
  }

  if (!userInformations) {
    return <h2>User not found.</h2>
  }

  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <Greeting
          firstname={userInformations.userInfos.firstName}
          motivationalSpeech="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
      </div>
      <div className="dashboard__content">
        <div className="dashboard__charts">
          <div className="dashboard__row">
            {userActivity && <DailyActivityChart data={userActivity} />}
          </div>
          <div className="dashboard__row">
            {userAverageSessions && (
              <AverageSessionsChart data={userAverageSessions} />
            )}
            {userPerformance && <PerformanceChart data={userPerformance} />}
            {userInformations && <GoalChart data={userInformations} />}
          </div>
        </div>
        <div className="dashboard__nutrients">
          <NutrientCard
            data={userInformations.keyData.calorieCount}
            name="Calories"
            className="nutrient__icon--calories"
            icon={iconCalories}
          />
          <NutrientCard
            data={userInformations.keyData.proteinCount}
            name="Proteines"
            className="nutrient__icon--proteins"
            icon={iconProteins}
          />
          <NutrientCard
            data={userInformations.keyData.carbohydrateCount}
            name="Glucides"
            className="nutrient__icon--carbohydrates"
            icon={iconCarbohydrates}
          />
          <NutrientCard
            data={userInformations.keyData.lipidCount}
            name="Lipides"
            className="nutrient__icon--lipids"
            icon={iconLipids}
          />
        </div>
      </div>
    </main>
  )
}

export default Dashboard;