const buildings = {
  T: { name: 'Theatre', time: 5, profit: 1500, size: 2 },
  P: { name: 'Pub', time: 4, profit: 1000, size: 1 },
  C: { name: 'Commercial Park', time: 10, profit: 3000, size: 3 }
};

function maxProfit(timeUnit) {
  const dp = new Array(timeUnit + 1).fill(0);
  const choices = new Array(timeUnit + 1).fill(null);

  for (let t = 1; t <= timeUnit; t++) {
    for (const [type, building] of Object.entries(buildings)) {
      if (t >= building.time) {
        const profit = dp[t - building.time] + building.profit;
        if (profit > dp[t]) {
          dp[t] = profit;
          choices[t] = type;
        }
      }
    }
  }

  const result = { T: 0, P: 0, C: 0 };
  let t = timeUnit;
  while (t > 0 && choices[t]) {
    const type = choices[t];
    result[type]++;
    t -= buildings[type].time;
  }

  return { earnings: dp[timeUnit], mix: result };
}

function formatResult(result) {
  const { earnings, mix } = result;
  const formattedMix = Object.entries(mix)
    .map(([type, count]) => `${type}: ${count}`)
    .join(' ');
  return `Earnings: $${earnings}\nSolutions\n1. ${formattedMix}`;
}

// Test cases
console.log("Test Case 1");
console.log("Time Unit: 7");
console.log(formatResult(maxProfit(7)));

console.log("\nTest Case 2");
console.log("Time Unit: 8");
console.log(formatResult(maxProfit(8)));

console.log("\nTest Case 3");
console.log("Time Unit: 13");
console.log(formatResult(maxProfit(13)));