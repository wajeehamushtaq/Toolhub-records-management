import PieChart from '../../components/Charts/PieChart';
import LineChart from '../../components/Charts/LineChart';
import styles from '../../styles/Leaderboard.module.css'
import ScatterChart from '../../components/Charts/ScatterChart';

const Dashboard = () => {
  return (
    <div className='p-2'>
      <div className='m-8'>
        <LineChart/>
      </div>
      <div className="flex flex-row justify-between">
        <div className="p-2 basis-1/4">
          <PieChart/>
        </div>
        <div className="p-2 basis-1/2">
          <ScatterChart/>
        </div>
      </div>
    </div>
  );
}
 
export default Dashboard;