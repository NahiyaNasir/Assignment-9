
import {useLoaderData} from 'react-router-dom'
import Estate from './Estate';

const Home = () => {
    const residentials=useLoaderData()
    console.log(residentials);
    return (
        <div className='my-7 mx-7'>
          
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
            {
            residentials.map(residential=><Estate key={residential.id} residential={residential}></Estate>)
          }
            </div>
         
        </div>
    );
};

export default Home;