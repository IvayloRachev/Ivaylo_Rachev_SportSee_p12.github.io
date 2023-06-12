import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import ClassModel from '../../models/ClassModel'
import './index.css'

/**
 * PerformanceChart display a radar chart based on user performances
 * @param {object} data - The data of the user performances
 * @returns PerformanceChart returns a radar chart based on user performances
 */
function PerformanceChart({ data }) {
  const classModel = new ClassModel();
  const formattedData = classModel.formatPerf(data)

  return (
    <div className="performanceChart chart-item">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={formattedData}
          fill="#FFFFFF"
          outerRadius={70}
          startAngle={30}
          endAngle={-330}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tickLine={false}
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />
          <PolarRadiusAxis
            domain={[0, 'dataMax + 20']}
            axisLine={false}
            tick={false}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="none"
            fill="#FF0101"
            fillOpacity={0.7}
            animationEasing={'ease-out'}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.object,
}

export default PerformanceChart