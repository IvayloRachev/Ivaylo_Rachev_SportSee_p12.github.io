import PropTypes from 'prop-types';
import { 
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    //Legend,
    ResponsiveContainer,
} from 'recharts';
import ClassModel from '../../models/ClassModel';
import './index.css';

/**
 * Create a custom tooltip
 * @param {bool} active - a boolean denothing if a tooltip should be displayed when a user mouse over the chart on desktop
 * @param {array} payload - the data the tooltip will be displaying from the chart
 * @returns CustomTooltip returns a custom tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='customTooltip'>
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        )
    }
    return null
}

/**
 * DailyActivityChart display a bar chart based on user activity
 * @param {object} data - The data of the user activity
 * @returns DailyActivityChart returns a bar chart based on user activity
 */
function DailyActivityChart({ data }) {
    const classModel = new ClassModel();
    const dataChart = classModel.formatDaily(data);
    return (
        <div className='dailyActivityChart'>
            <div className='dailyActivityChart__title'>
                <h2>Activité qoutidienne</h2>
                <ul className='dailyActivityChart__legend'>
                    <li className='li-weight'><span className='weight'>Poids (kg)</span></li>
                    <li className='li-cal'><span className='cal'>Calories brûlées (kCal)</span></li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height={210}>
            <BarChart
                data={dataChart}
                barSize={7}
                barGap={8}
                margin={{
                    left: 40,
                    top: 25,
                    right: 20,
                    bottom: 25,
                }}  
            >
            <CartesianGrid strokeDasharray="3 3" vertical="" />
            <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={14}
                tick={{
                    stroke: '#9B9EAC',
                    fontSize: 14,
                    fontWeight: 500,
                }} 
            />
            <YAxis axisLine={false} tickLine={false} tickCount={3} orientation="right" />
            <Tooltip 
                content={<CustomTooltip />}
                wrapperStyle={{ outline: 'none' }}
            />
            <Bar
                name="Poids (kg)"
                dataKey="weight"
                fill="#282D30"
                radius={[3.5, 3.5, 0, 0]}
            />
            <Bar
                name="Calories brûlées (kCal)"
                dataKey="cal"
                fill="#E60000"
                radius={[3.5, 3.5, 0, 0]}
            />
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

DailyActivityChart.propTypes = {
    data: PropTypes.object,
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}

export default DailyActivityChart;