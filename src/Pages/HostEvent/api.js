// Simulated data for event planners
const eventPlannersData = [
    { id: '1', name: 'Event Planner 1' },
    { id: '2', name: 'Event Planner 2' },
    { id: '3', name: 'Event Planner 3' }
  ];
  
  // Simulated data for vendors
  const vendorsData = [
    { id: '1', name: 'Vendor 1' },
    { id: '2', name: 'Vendor 2' },
    { id: '3', name: 'Vendor 3' }
  ];
  
  // Simulated function to fetch event planners
  export const getEventPlanners = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(eventPlannersData);
      }, 1000); // Simulate delay for asynchronous operation
    });
  };
  
  // Simulated function to fetch vendors
  export const getVendors = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(vendorsData);
      }, 1000); // Simulate delay for asynchronous operation
    });
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
  