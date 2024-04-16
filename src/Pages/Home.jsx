
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
                      <div className='flex justify-center items-center mb-4 flex-col'>
                      <h1 className="text-2xl">Estates </h1>
                      <p className='text-green-500'>Our Featured Properties For Sale and Rent</p>
                      <p></p>
                      </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10  max-w-6xl mx-auto mb-5'>
             
            {
            residentials.map(residential=><Estate key={residential.id} residential={residential}></Estate>)
          }
            </div>
         
        </div>
    );
};

export default Home;