import styles from '../../styles/Leaderboard.module.css'

export const getStaticProps = async () => {
  const data = [
    {
        id: 1,
        name: 'DannyBoyyy77',
        edits: 49
    },
    {
        id: 2,
        name: 'DannyBoyyy41',
        edits: 41
    },
    {
        id: 3,
        name: 'DannyBoyyy39',
        edits: 39
    },
    {
        id: 4,
        name: 'DannyBoyyy30',
        edits: 30
    },
    {
        id: 5,
        name: 'DannyBoyyy29',
        edits: 29
    },
    {
        id: 6,
        name: 'DannyBoyyy10',
        edits: 10
    },
    {
        id: 7,
        name: 'DannyBoyyy9',
        edits: 9
    },
    {
        id: 8,
        name: 'DannyBoyyy7',
        edits: 7
    },
    {
        id: 9,
        name: 'DannyBoyyy5',
        edits: 5
    },
    {
        id: 10,
        name: 'DannyBoyyy4',
        edits: 4
    },
  ]

  return {
    props: { topUsers: data }
  }
}

const Leaderboard = ({ topUsers }) => {
  return (
    <div>
      <h1 className='title'>Toolhub Leaderboard</h1>
      <h4>These are users that fixed the most snippets through Toolhub in the past 30 days. Well done!</h4>
      <div className='p-2 m-4 flex flex-row justify-between'>
            <div className='basis-1/4'>
                <h3 className='font-bold'>User</h3>
            </div>
            <div className='basis-1/4'>
                <h3 className='font-bold'>Edits</h3>
            </div>
        </div>
      {topUsers.map(user => (
        <a href="#" className={`flex flex-row justify-between ${styles.single}`} key={user.id}>
            <div className='basis-1/4'>
                <h3>{ user.name }</h3>
            </div>
            <div className='basis-1/4'>
                <p>{ user.edits }</p>
            </div>
        </a>
      ))}
    </div>
  );
}
 
export default Leaderboard;