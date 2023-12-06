const input = `Time:        48     93     85     95
Distance:   296   1928   1236   1391`;

const example = `Time:      7  15   30
Distance:  9  40  200`;

function part1(input) {
  let [times, records] = input.split`\n`;
  times = times.split("Time:")[1].trim().split(/\s+/).map(Number);
  records = records.split("Distance:")[1].trim().split(/\s+/).map(Number);

  const games = times.reduce((games, time, i) => {
    return [...games, { time, record: records[i] }];
  }, []);

  return games.reduce((winCount, { time, record }) => {
    let minWin = Math.floor((time - Math.sqrt(time ** 2 - 4 * record)) / 2);
    let maxWin = Math.floor((time + Math.sqrt(time ** 2 - 4 * record)) / 2);

    if (maxWin * (time - maxWin) === record) maxWin--;

    const raceWinCount = maxWin - minWin;

    return winCount * raceWinCount;
  }, 1);
}

console.log("Part 1 expected:", 288, "actual:", part1(example));
console.log("Part 1 result:", part1(input));

//================================================================================================================================

const example2 = ``;

function part2(input) {
  let [time, record] = input.split`\n`;
  time = Number(time.replaceAll(/[Times:,\s+]/g, ""));
  record = Number(record.replaceAll(/[Distance:,\s+]/g, ""));

  let minWin = Math.floor((time - Math.sqrt(time ** 2 - 4 * record)) / 2);
  let maxWin = Math.floor((time + Math.sqrt(time ** 2 - 4 * record)) / 2);

  if (maxWin * (time - maxWin) === record) maxWin--;

  return maxWin - minWin;
}

console.log("Part 2 expected:", 71503, "actual: ", part2(example));
console.log("Part 2 result:", part2(input));
