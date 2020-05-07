const trap = (height) => {
  let lrWater = [];
  let rlWater = [];
  let lrMax = 0;
  let rlMax = 0;
  
  
  for (let i = 0; i < height.length; i += 1) {
      const h = height[i];
      if (h > lrMax) {
          lrMax = h;
      }
      
      lrWater.push(lrMax - h);
  };
  
  for (let i = height.length - 1; i >= 0; i -= 1) {
      const h = height[i];
      if (h > rlMax) {
          rlMax = h;
      }
      
      rlWater[i] = rlMax - h;
  };
  
  
  let waterCount = 0;
  
  for (let i = 0; i < lrWater.length; i += 1) {
      const l = lrWater[i];
      const r = rlWater[i];
      
      if (l > r) {
          waterCount += r;
      } else {
          waterCount += l;
      }
  }
  
  return waterCount;
};