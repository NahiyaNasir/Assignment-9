
import {useLoaderData} from 'react-router-dom'
import Estate from './Estate';
import Banner from './Banner';

const Home = () => {
    const residentials=useLoaderData()
    console.log(residentials);
    return (
        <div className='mt-10'>
          <div className=''>
            <Banner></Banner>
          </div>
                      <div className='flex justify-center items-center mb-4'>
                      <h1 className="text-2xl">Estates </h1>
                      <p></p>
                      </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
             
            {
            residentials.map(residential=><Estate key={residential.id} residential={residential}></Estate>)
          }
            </div>
         
        </div>
    );
};

export default Home;