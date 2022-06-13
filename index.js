// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter(
    (driver) => driver.toUpperCase() === name.toUpperCase()
  );
};

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter((driver) => driver.startsWith(letters));
};

const matchName = (drivers, name) => {
  return drivers.filter((driver) => driver.name === name);
};
