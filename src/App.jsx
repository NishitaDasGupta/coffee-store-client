
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

function App() {
  const allCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffee);

  return (
    <div className='m-20'>

      <h1 className='text-6xl text-purple-600'>Coffee Store!!</h1>
      <div className='grid md:grid-cols-2  gap-3'>

        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees = {coffees}
            setCoffees = {setCoffees}
          ></CoffeeCard>)
        }

      </div>
      <Link to="/addCoffee">Add Coffee</Link>
    </div>
  )
}

export default App
