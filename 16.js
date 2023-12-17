const fs = require('fs');

const input = fs.readFileSync('./16_input.txt', 'utf8');
const example = fs.readFileSync('./16_example.txt', 'utf8');

const DIR = { RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3 };
const TILE = { MIRROR: { DOWN: '\\', UP: '/' }, SPLITTER: { HOR: '-', VERT: '|' }, EMPTY: '.' };
const DIR_VISUAL = ['>', 'v', '<', '^'];

const findBeamHead = (beams, { rowIndex, colIndex, dir }) =>
  beams.map((b) => b[0]).find((b) => b.rowIndex === rowIndex && b.colIndex === colIndex && b.dir === dir);
const countEnergized = (beams) => {
  return beams.reduce((energizedTiles, beam) => {
    beam.map(({ rowIndex, colIndex }) => `${rowIndex}_${colIndex}`).forEach((t) => energizedTiles.add(t));
    return energizedTiles;
  }, new Set()).size;
};

const calculateEnergy = (beams, matrix) => {
  for (let beamIndex = 0; beamIndex < beams.length; beamIndex++) {
    const beam = beams[beamIndex];
    let beamEnded = false;
    while (!beamEnded) {
      const { rowIndex, colIndex, dir } = beam[beam.length - 1];
      let nextCoord = null;
      if (dir === DIR.UP && (matrix[rowIndex - 1] || [])[colIndex]) nextCoord = { rowIndex: rowIndex - 1, colIndex };
      if (dir === DIR.DOWN && (matrix[rowIndex + 1] || [])[colIndex]) nextCoord = { rowIndex: rowIndex + 1, colIndex };
      if (dir === DIR.LEFT && matrix[rowIndex][colIndex - 1]) nextCoord = { rowIndex, colIndex: colIndex - 1 };
      if (dir === DIR.RIGHT && matrix[rowIndex][colIndex + 1]) nextCoord = { rowIndex, colIndex: colIndex + 1 };

      if (nextCoord) {
        const { rowIndex, colIndex } = nextCoord;
        const nextTile = matrix[rowIndex][colIndex];
        if (
          nextTile === TILE.EMPTY ||
          (nextTile === TILE.SPLITTER.HOR && [DIR.RIGHT, DIR.LEFT].includes(dir)) ||
          (nextTile === TILE.SPLITTER.VERT && [DIR.DOWN, DIR.UP].includes(dir))
        ) {
          beam.push({ rowIndex, colIndex, dir });
        } else if ((dir === DIR.RIGHT && nextTile === TILE.MIRROR.DOWN) || (dir === DIR.LEFT && nextTile === TILE.MIRROR.UP)) {
          beam.push({ rowIndex, colIndex, dir: DIR.DOWN });
        } else if ((dir === DIR.RIGHT && nextTile === TILE.MIRROR.UP) || (dir === DIR.LEFT && nextTile === TILE.MIRROR.DOWN)) {
          beam.push({ rowIndex, colIndex, dir: DIR.UP });
        } else if ((dir === DIR.DOWN && nextTile === TILE.MIRROR.DOWN) || (dir === DIR.UP && nextTile === TILE.MIRROR.UP)) {
          beam.push({ rowIndex, colIndex, dir: DIR.RIGHT });
        } else if ((dir === DIR.DOWN && nextTile === TILE.MIRROR.UP) || (dir === DIR.UP && nextTile === TILE.MIRROR.DOWN)) {
          beam.push({ rowIndex, colIndex, dir: DIR.LEFT });
        } else if ((dir === DIR.RIGHT && nextTile === TILE.SPLITTER.VERT) || (dir === DIR.LEFT && nextTile === TILE.SPLITTER.VERT)) {
          if (!findBeamHead(beams, { rowIndex, colIndex, dir: DIR.UP })) {
            beams.push([{ rowIndex, colIndex, dir: DIR.UP }]);
          }
          if (!findBeamHead(beams, { rowIndex, colIndex, dir: DIR.DOWN })) {
            beams.push([{ rowIndex, colIndex, dir: DIR.DOWN }]);
          }
          beamEnded = true;
        } else if ((dir === DIR.DOWN && nextTile === TILE.SPLITTER.HOR) || (dir === DIR.UP && nextTile === TILE.SPLITTER.HOR)) {
          if (!findBeamHead(beams, { rowIndex, colIndex, dir: DIR.RIGHT })) {
            beams.push([{ rowIndex, colIndex, dir: DIR.RIGHT }]);
          }

          if (!findBeamHead(beams, { rowIndex, colIndex, dir: DIR.LEFT })) {
            beams.push([{ rowIndex, colIndex, dir: DIR.LEFT }]);
          }
          beamEnded = true;
        }
      } else {
        beamEnded = true;
      }
    }
  }
  return countEnergized(beams) - 1;
};

//================================================================================================================================

function part1(input) {
  const matrix = input.split`\n`.map((row) => row.split``);
  return calculateEnergy([[{ rowIndex: 0, colIndex: -1, dir: DIR.RIGHT }]], matrix)
}

console.log('Part 1 expected:', 46, 'actual:', part1(example));
console.log('Part 1 result:', part1(input));

//================================================================================================================================

function part2(input) {
  const matrix = input.split`\n`.map((row) => row.split``);
  let maxEnergy = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    maxEnergy = Math.max(maxEnergy, calculateEnergy([[{ rowIndex: -1, colIndex: i, dir: DIR.DOWN }]], matrix));
  }
  for (let i = 0; i < matrix.length; i++) {
    maxEnergy = Math.max(maxEnergy, calculateEnergy([[{ rowIndex: i, colIndex: matrix[0].length, dir: DIR.LEFT }]], matrix));
  }
  for (let i = 0; i < matrix[0].length; i++) {
    maxEnergy = Math.max(maxEnergy, calculateEnergy([[{ rowIndex: matrix.length, colIndex: i, dir: DIR.UP }]], matrix));
  }
  for (let i = 0; i < matrix.length; i++) {
    maxEnergy = Math.max(maxEnergy, calculateEnergy([[{ rowIndex: i, colIndex: -1, dir: DIR.RIGHT }]], matrix));
  }

  return maxEnergy;
}

console.log('Part 2 expected:', 51, 'actual: ', part2(example));
console.log('Part 2 result:', part2(input));
