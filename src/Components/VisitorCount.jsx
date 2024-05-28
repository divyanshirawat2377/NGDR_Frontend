import { useState, useEffect } from 'react';

const VisitorsCount = () => {
  const [visitorsCount, setVisitorsCount] = useState(0);

  useEffect(() => {

    const fetchVisitorsCount = async () => {
      try {

        const response = await fetch('');  //use API here
        const data = await response.json();
        setVisitorsCount(data.count);
      } catch (error) {
        console.error('Error fetching visitors count:', error);
      }
    };

    fetchVisitorsCount();
  }, []);

  return (
    <div className="mt-20 text-2xl font-bold leading-9 text-yellow-400 max-md:mt-10">
      Visitors Count: {visitorsCount}
    </div>
  );
};

export default VisitorsCount;
