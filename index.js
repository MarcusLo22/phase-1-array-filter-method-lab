// Code your solution here
function findMatching(drivers, string) {
    const matches = [];
  
    for (let i = 0; i < drivers.length; i++) {
      const driver = drivers[i];
      if (driver.toLowerCase() === string.toLowerCase()) {
        matches.push(driver);
      }
    }
  
    return matches;
  }
  function fuzzyMatch(drivers, query) {
    const matches = [];
  
    for (let i = 0; i < drivers.length; i++) {
      const driver = drivers[i];
      if (driver.startsWith(query)) {
        matches.push(driver);
      }
    }
  
    return matches;
  }
  function matchName(drivers, string) {
    const matches = [];
  
    for (let i = 0; i < drivers.length; i++) {
      const driver = drivers[i];
      if (driver.name === string) {
        matches.push(driver);
      }
    }
  
    return matches;
  }
  