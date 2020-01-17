const deepEquals = (apple, orange) => {
  if ((typeof apple || typeof orange) !== 'object') {
    // Reached un-nested value, check match
    return apple === orange;
  } else if (Object.keys(apple).length !== Object.keys(orange).length) {
    // Objects have different amount of keys, they can't be the same
    return false; 
  }

  for (const key in apple) {
    if (!deepEquals(apple[key], orange[key])) {
      // Found a difference in a deeper nesting
      return false;
    }
  };

  // We've made it through all nestings without finding a difference
  return true;
};
