import { useState, useEffect } from 'react';

const VisitorsCount = () => {
  const [visitorsCount, setVisitorsCount] = useState(0);

  useEffect(() => {
    const fetchVisitorsCount = () => {
      try {
        // Get the current count from local storage
        let count = localStorage.getItem('visitorsCount');
        
        if (count) {
          // Parse the count and increment it
          count = parseInt(count, 10) + 1;
        } else {
          // If no count exists, initialize it to 1
          count = 1;
        }
        
        // Update the state with the new count
        setVisitorsCount(count);
        
        // Save the new count back to local storage
        localStorage.setItem('visitorsCount', count);
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
