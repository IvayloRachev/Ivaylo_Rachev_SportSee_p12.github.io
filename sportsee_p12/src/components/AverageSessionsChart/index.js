import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'
import ClassModel from '../../models/ClassModel'
import './index.css'

   /**
 * Create a custom tooltip
 * @param {bool} active - a boolean denoting if a tooltip should be displayed when a user mouses over the chart on desktop
 * @param {array} payload - the data the tooltip will be displaying from the chart
 * @returns CustomTooltip returns a custom tooltip
 */

   const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="averageSessionsChart__customTooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }

  //const CustomTooltip = ClassModel.CustomTooltip
  
  /**
   * Create a custom cursor
   * @param {array} points - the current position of the cursor coordinate x and y
   * @param {number} width - the width of the graph
   * @returns CustomCursor returns a cursor in the shape of a rectangle in the background
   */
  const CustomCursor = ({ points, width }) => {
    const { x } = points[0]
    return (
      <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />
    )
  }

/**
 * AverageSessionsChart display a chart based on user sessions over a week
 * @param {object} data - The data of the user sessions over a week
 * @returns AverageSessionsChart returns a chart based on user sessions over a week
 */
function AverageSessionsChart({ data }) {
  
  const classModel = new ClassModel();
  const formattedData = classModel.formatData(data);

  return (
    <div className="averageSessionsChart chart-item">
      <div className="averageSessionsChart__title">
        Durée moyenne des sessions
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            left: 0,
            top: 20,
            right: 0,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ fill: '#FFFFFF', opacity: '.5' }}
            interval={'preserveStartEnd'}
          />
          <YAxis
            type="number"
            domain={['dataMin', 'dataMax + 30']}
            hide="true"
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: '#FFFFFF',
              r: 4,
              strokeWidth: 8,
              strokeOpacity: 0.4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

AverageSessionsChart.propTypes = {
  data: PropTypes.object,
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AverageSessionsChart
