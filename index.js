// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const newDriver = drivers.filter(driver => driver.revenue > revenue);
  return newDriver;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDriver = driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
  return newDriver;
}

function exactMatch(drivers, object) {
  const newDriver = drivers.filter(driver => driver[key] === object[key]);
  return newDriver;
}

function exactMatchToList(drivers, object) {
  const newDriver = exactMatch(drivers, object).map(driver => driver.name);
  return newDriver;
}
