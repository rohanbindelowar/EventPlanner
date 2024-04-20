// api.js

export const getEventPlanners = async () => {
  try {
    const response = await fetch('http://localhost:5000/eventPlanners');
    if (!response.ok) {
      throw new Error('Failed to fetch event planners');
    }
    const data = await response.json();
    return data.map(planner => ({ id: planner._id, name: planner.name }));
  } catch (error) {
    console.error('Error fetching event planners:', error);
    return [];
  }
};

export const getVendors = async () => {
  try {
    const response = await fetch('http://localhost:5000/vendors');
    if (!response.ok) {
      throw new Error('Failed to fetch vendors');
    }
    const data = await response.json();
    return data.map(vendor => ({ id: vendor._id, name: vendor.name }));
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return [];
  }
};


  
  // Simulated function to create event
  export const createEvent = (eventObject) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: generateUniqueId(), ...eventObject }); // Simulate success with unique ID
      }, 1000); // Simulate delay for asynchronous operation
    });
  };
  
  // Simple function to generate unique ID
  export const generateUniqueId = () => {
    // Generate a random string of characters
    const randomChars = Math.random().toString(36).substr(2, 10);
    // Generate a timestamp string
    const timestamp = new Date().getTime().toString(36);
    // Combine both strings to form a unique ID
    const uniqueId = randomChars + timestamp;
    return uniqueId;
  };
  