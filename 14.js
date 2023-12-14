const input = `O..#OO..#...O..O#O.O...O##.O#..#O#...O.O.....O..........O..#...#.....O.O.O.O#..O........O...........
.....O#.#O..OO.#......O.O..#...#..OO..O..###..#...O.#...#..O..O.#..#O...#O...............##O..O....#
..#...O...OO.#........O......O#O#......O.#OO....OOO..#...O....O.O.O#..#OO.##...OOO#.#.OO.#O.#....O..
..#...#..#....O...#.#O......O.....#O##.#..#.O..#.....#O.O#...#.......O.....O.##.O.O..#.....O.#.O.OOO
O....#..#.O.O..O.#.#....#.#..##O...O#..O.#.O.OOO.O.O..O..............O.#O.O....#..O.O..O..O.O.O.O.O.
.O.#.#..#.OO.#O....O.O.O#O..O.O.O..O.##..O...OO#.#...O.OO.O..#..#..#.O#..#.....#OO....O.###....#O...
.......#.O.......O.O####OOO..#.O#..#.O.......OOO..O....#........O##....O#O....O...#.O.##OO.O..OO...#
..O.....O.#O#O....O......O..##.#...O.#.O##.....O.#..O.........#...#.#.O#OO.....#O.....O#..##.....O..
.#..O...##....O##O...#O....O..#...O...OOO..OO...OO...#..O.OO#..#.O...##.#..O..O..........O#..#O.O#..
#..#OO#.O#.#........#.........O......##....#...O....#O.....O..##..#O.OO#......O..O.O.OO...O#O.......
#........#.....O.#....O...OO..OO......###..........##O##O.#.....#....###...#.#...O...#.O#.........O.
...O.OO.....O..#...O.#.O#.OO#OO..#.#OO#......#.O.O#..#..OO..#O.O.....O.#..........##..O#.OO.....#...
.O#..#.....O.#..O.....#O...#....#.O.OO....O...#.#..O......#.O...OO..#.O...O#......##O.OO...#....O.##
O#O......O.O....O.O#OO.......OOO..#..#..OO.#.##O#.....#.#O.O.........##........#O....##..#O.O#.#.O..
.....O.OO.O...O..O...OO.#.......##....O..#....#.......O.O#.#.O...O.#O....##...#.O..#.#....O#........
O..#.#O...O.O..OO.....#........OO.#......O.O....O..#.O#.#.O.#....OO.O#..OO.....#.##.####.O##...O.O.#
...O..##O....#....O.O.....#......OO..#OO...#O#..O.......O.#.O.O...O.#.O......#...O...#O...#..##.O...
OOO..#.#....#..#.O.#O#......O......OO.......O..#..#.O#.....O.......#.OO.O.O.......#.O#.O............
.O##O.....OO..O..O....#.O...#.#.#O.#.O#.O.#...##O..OO.O#......O.OO..#O.OO..O.O...O.O#......#...OO#..
..#.OO#..#O....O...O...#........#.O.......O#..O..#.#O.O#...O.............OO...#...O...#....O..#.O...
O..#..##O..O...O.O#.O.#..O.O.....#..O.##.##.O..#..OO...#...#.OOO......#.#.....O##.....#.OOO...O.#...
#.O#..O..#..O..#.#..#..#O#......O#.##O.........#..O.....#..O..#....##......OO#..O....##.O.....O#O.#.
.O.......O.......O..O.#.#O....O.O..#.....O.#O#O.#.......##...O.#O..........O.###...#.##...O........O
.......O.....O..#...##.O.#.#O...O##..O....O..O.##....#.O..#.##O.....O.#...#..OO.......#.....#O.##O..
......#O.........#..O#..#O....O.#..#.O...OO...O....###....O##O..O.O...O..#O.....O.#.......#...#..#..
#..#..#.OO##....O.###.#.....#O#.O....O.#.O......O....#.O..OO....#...O#.O#.....O#O..#.O..OO...OOO.O.#
.#....O.......#O..##.#OO#....OO#....#..OO..#.....O.O.OO.O#OO##...O#..#..#..OO..OO.#..O..........O..#
.O...O#..OO.O..O.#.O..##.O...O.O.....#O.....O.O#..OO...#.O....#O..#...##..#.#...O.O..OO#O...O..#...O
#O.##...O...OO.##.O.....O.......##..#.###...#.O..#.....#O.#....O......#.O#.#.O...O.....OOO.O.....O#O
...O.#....#....#..OO...#...##..O.O.O......O.#..O..OO....O...#..OO......O.#.O.OOOO...O.#OOOOO.OO#.#..
.......O#.O#.O..O.#.O..#.OO.O..#.#.##.....O.#.O##...##..O...O...O.O.......#O.#......#......O.......#
...#..#O.......#O...O..OO....OOOO......OO...#....O............#.........#O...#.#.......OO.....O..#O.
O...OO###.....O.OO......#O.O...O..#..##..O..O...O#.#......O#O.O.OO.#O..#O.O.#.O##O.O.O..#..O........
.O.O.O..#.O...#.##O..#OO###.O..O..#...O..#O........O#O.#.##..O.O....O...#...O.O#...OO.....OO.......#
O.O..O...#O#...#.#....#......OO..O#...O..OOO..O..O.....#...#...O.......#.....#O..O.....O#..O.O...O.#
...##..OOO..OO#.O#OOO.#......O...O.......##........OO..O.#....O....##..##O#...#.#..O.#O........#.O..
.......##O#........O......O......#.............O..O..#.O....#.#OO##...#O...O.O.O#.#......##..O.##O#.
OO.OO##.O...O#..O..O#...#.###....##.O...O.OO.#..#.O.#...#...##...#.....O..O..O.O.#..#..O....#....##.
O.#...##...#.#OO..##...#......O.OO.#O#O......OO...O#OOO...#...O.............OO.O.O.#..#O......#.O.#.
.O.O.....O....#.......O......#O.O..##.O#...O....#O....O..#.OO..O#.O.#.....O.O##...........O#..#O...#
....#OO....#..###..O.O#O......##.#.#.O#O.#.##........##.O...#.OO.......O......O.....#.#O.#.O..#...O#
.....O..#..#...#.###.##....#O.O.O..O....OOO.##...O##..O.#...##..#..O......##....#.O....#O........#.#
...#OO#......O...O#.#..........OOO...#.##O.O..##..#.#.O......O#.....OO......O.#O..###..O...OOO..O..O
.#.O.#.O.O.O.O.#..OO.O...OO...O..O........OO.........#.....##.....O#..#...#.#.#.O...O.......O#...OO.
.....OO.O....O....O.#..##OO...#O#.......O....#....O.O..........O##.#...O..O.#..#..O....OO...#.......
....##...O.#.....##O...##.....O..O...#.##.O##...O....O..O...##.....O....#.OO...O..OO#.O....OO......O
.O....#.....O.#O.#OO.O.##..O.....O..O...#.##.O##...O...O#OO#.O.OO...O.O.#O#....#.O#.O...O....O......
..O#O#.#.#.#....##.#O.O.O....#.##O..#O..O..O....O.....O.O..#...OO#O...#OO...#O..O...OO#O#...#..#....
.#O......O.O.O#..OO.OOO.#......O...#.O......OOO#....O.#..O.......O.......#.....#....#O.....O#O....O.
.....O..O..O#........#............O....O#OO.O..O.#O..O.OO...OO....O.#.O..#.OO.......O.O.OO..OO.##O..
..O#O......#.............#..#.O.O.........O.#OO.OO..##.O#O........#.....O..OO...O.##.##.O.O#....OO.O
O..#..#....#.....#O.O..O.O..O.#.O.O.#OO..O##O..#.#.O...O....OOO.O.#...........#...#...#O...#O.#.O...
OO.....O#..#.#...#...#...##..O...O.....#O..O#O..OO.....##.#.#.OO.....O##O.....#O.O.#.#...OO...O#.#..
....#...O#..O.OO#........O..#..O....#.O.....OO#..#....O..OO.........O..#..#...O...OO.......O.......#
##.O#.........O#.OO..O..#.OO.#O.....O#O...O......#O#.O..O.....#.#O.#O.O#......OO.O........O.....#...
.#.O.OO....O#O..#..O.#.#O....OO...O#..#.O.##..#..O.#O#O..O.......O..#.O#.#.##...O.OO.O#O.#..#.#..O..
...O#.......O#......O#........O..O..#..O#.O...O#..#...O......#...#.#O....O..#.#....OOO.O.......O....
..O....#.....O.##..O..##O....#O..O.###.....O#..OOO..##........#O.O..O.....#......#O#.........#OO..#.
#.##...#.#...#.....#O.O.#..##.O..O.O.....#.#OO.........O.#...O....#......##.#.OOOO.O.OO...O.OO.O....
..#....#...OO..#O.....#..#O..##....#......#O.#..O.#OO.......OO.O....#.......OO..#.#..OO...O.....#OO.
O.....O.#.....#..#.O#......#O#...#....O......O#O.O#.O....#.OO##........O...O#..O#.OOOO.#O#O..##....#
.O........OO.#.....O#O..OO.O#O#..O.......#.O..##.#.#.....#.OOOO...O..OOO.OO#....O....#....O.#....OOO
.O#O.O.......O#O...O.#O...O.OO#O..O.#..#O...O.O.#.#OO....##..##..#......#..O#......#O.O.O#O#.#...#..
..O..O#.#..O#.O..OOOO...O..OOO#O......##.O..O..O..OO#O.#....O.......#..O#.O..O..#..O...OO.....##O#..
...OOO..O........OOO....#..#.O.O..##.O.O..#....O........#...##O#O..O.#OO.#...#..#O#......O.O....O...
.#O#.#.#.O.#..#.O..O.....O.O..O.#.O#........#....##.O#O..#..#O#.#..O#O#.#.#..#......O...O#.O.....#..
.#..O.#OO.#..#O...O...O..#O...#...O#..O.............#.....O.#O....#..#...#.#...OO.O.OOO.O....##O#O.#
OO..O...O....##...#.O...#.#....O.#....O..O##..O.......#O.#...O..##...OO.O#O.....OO...#....#.......O.
.#O.O....#.#O........#.#..O....O.......#..O#.....O..O.O..##..O.O.O...O..O...OO......O.OO...#.#....OO
.#.O..#O.....OO..O..#.O#.O.OO.#....#O....#.OO.....O.OO..#.O.O..OO.....O..##..O..#.#..O......O..OO..O
.O.......OO#.#.O.OO..#OO.OO..#O..O##O..#......#.#O.O.#O..#.O.#..#O.OOO..OO...#.#.#.#.OO.O...#O##O...
O#...O.O.O........O#..OO.#.#.....#..O##....#.#...OO##..#..O..#..O.OO.O.O.......O.O#........OO.##O...
.#.O.#.#...#.O..O##....#.O.#.O#O........#..#.#....O.....#..O#.##...#....#.##.#O.O#O.O..OO##.#..O#O..
O...##..#..#OO#.OO.#...##..O...#.O.O#.#....#O.O##....O........OO#O..O..#.......O.#OOOO........#O...#
O...#...#.O...#....O#O#......O#.OO#..#....#.#O...O#...OO##...O#.OO....####.......#.......O.........#
#O..OO.OO....#.....#....#O.#..OO.#....##.....#...OO.O#O......O.O.O........##..O..O....#..O..O#.O....
#O#.OOO.#O#.#.....#O.O....O.#.....OO...##....##O.#....O.O.#O.##O..#O#.O....O...O.#O.#.OO..#...OO..O.
....O.........O.O.....#.#...O.O....O..#.#...#..#..#..OO..OO.#..O..O....O........O#.O.O.O#.....#O.O.#
#...#O...#OOO...#..O.#..O..O...#.....OO#...##....#.##.##O.OOOO.#O.#...OO##.OO....#...OOO..###...O.##
..........#...#.#.....#O...O#OO....OO#...#..##..O..O...#.#.#..#.......#...OO....#O.......O..O....O.O
..O......#..OO..O#O.......#O...OO......#..O..OO..#.#O#OO..#.......OO#OO.O...#..O...O..##..OOOO.#...O
..OO.O#.#....O#O#O#..O....##..O.O#.O.O..O...O....O...#..O...#O.O..O#.#O..........O.........O..O.O.#.
...#....O#.#.#..OO....O.#.......#O#....OOOO.#O#O.O##.OO.#.#O##.....O.#OO#....O...#..OO#.O..........O
.#......#O#.#.....O...OO..O.#.......OO..O.O...O.O.#O....#....O..OO.O#.....##.#....O.O....#.#O.O#.###
...##O.....#O......O.......O.O.....#.O...O.O....OO..#O...O......#......O...#....O...#.O.....O#.#..OO
O..#.....#O..........#..OO........OOO.O..O#O#...#OO....O.#...OO..O..#....O.O.#.O#........#O.#.#...#O
O...#..OOOO...#.....#........##..OOO#OO#..#..#.#.O.#.O.O......O.....#.#O#..##....O.#O#O.O.#...O.....
.O.#.O....O.OOO..##.....O#.OO........................O..O..#.OOO......#OOO......#...OO........#..OOO
.###...O##..#.O#..O#..#.O#.#.O..O.##..O...#.O..O.#.#.....OO..O.#O.O....OO.O.O..#....#O.OO#.O..O.....
.......O.O.....O.....O#.....O.....OO#.O..#...O..O..##.O..OO.O....#O......###..#...O........#....O.OO
O..O..O...O.O.O.O.O.O...OO........OO..OO..O.#O.#.O....#..OOO.O.#...OO.#...O......OO.OO#.#...O#...##.
O#O.##...O#.#..O.#.O..#..#....#..O##...##....OO.#..##OO....##......O....#OO.O...#OO..OO#...O.OO.#.#.
..O.#OOO....O....#....#..O#O..O..O...O...O.........#..#.#O..#.#...OO.....##.O.......O#..O#.#...OO...
.O.O.O.O..O.##...#..........O.O..............#....#.#O...OO.#..OO...#....O.O..#.......O.#..#..##.O##
..OO.#.....O..O.OO.#.##.O....#...#O....##..O#.O.....O.....#....OO#....##..#O..OO...#O#O#....#.O.O.O#
..O.#O....O.#..#.#.OO.##..OO......#...#....#O...OO....#.O..#.OO#.......O.#.#......O#O...#..OO.....##
#.........O....#..#O.....##....#O......##..O....OO.....O.....#..#O...O...O..#.OOO.O..#......#.....#.
O.##.O.#OO...#..#O.OO.....#.#.....O..##.O.#......#O##......OO..O..O.O.....#..O.O.#..O......O.OO.##..
....O....O#.##..O.O.O..#..##O#......O#.....O......O.#....O......#O.O..#..O..O..##..#O##..........O..
O#..##O..#...OO...#.OO....#..O.....O.......OOO#...##...OO.##....#O..#..#O.#.O#O..O...O.#..O.#O.O#...`;

const example = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

function part1(input) {
  const rows = input.split`\n`;
  const cols = rows[0].split``.map((_, colIndex) => rows.map((row) => row.split``[colIndex]).join``);

  return cols.reduce((total, col) => {
    let colTotal = 0;
    col.split``.forEach((tile, rowIndex) => {
      if (rowIndex === 0 || (col[rowIndex - 1] === '#' && tile !== '#')) {
        const nextSquareIndex = col.slice(rowIndex).indexOf('#');
        const lastIndex = nextSquareIndex > -1 ? rowIndex + nextSquareIndex : rows.length;
        let rocksInSection = (col.slice(rowIndex, lastIndex).match(/O/g) || []).length;

        while (rocksInSection > 0) {
          colTotal += rows.length - rowIndex - rocksInSection + 1;
          rocksInSection--;
        }
      }
    });

    return total + colTotal;
  }, 0);
}

console.log('Part 1 expected:', 136, 'actual:', part1(example));
console.log('Part 1 result:', part1(input));

//================================================================================================================================

function part2(input) {
  const transpose = (rows) => rows[0].split``.map((_, colIndex) => rows.map((row) => row.split``[colIndex]).join``);
  const rotateClockwise = (matrix) => {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    const rotatedMatrix = Array.from({ length: colCount }, () => Array(rowCount).fill(''));

    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < colCount; j++) {
        rotatedMatrix[j][rowCount - 1 - i] = matrix[i][j];
      }
    }

    return rotatedMatrix.map((row) => row.join(''));
  };
  const tiltNorth = (newRows, row, rowIndex) => {
    let newRow = '';
    row.split``.forEach((tile, colIndex) => {
      if (tile === '#') newRow += tile;
      if (colIndex === 0 || (row[colIndex - 1] === '#' && tile !== '#')) {
        const nextSquareIndex = row.slice(colIndex).indexOf('#');
        const lastIndex = nextSquareIndex > -1 ? colIndex + nextSquareIndex : row.length;
        let rocksInSection = (row.slice(colIndex, lastIndex).match(/O/g) || []).length;
        let newSection = 'O'.repeat(rocksInSection) + '.'.repeat(lastIndex - colIndex - rocksInSection);
        newRow += newSection;
      }
    });

    newRows.push(newRow);
    return newRows;
  };
  const cycle = (platform) => {
    const northTilted = transpose(transpose(platform).reduce(tiltNorth, []));
    const westTilted = transpose(transpose(rotateClockwise(northTilted)).reduce(tiltNorth, []));
    const southTilted = transpose(transpose(rotateClockwise(westTilted)).reduce(tiltNorth, []));
    const eastTilted = transpose(transpose(rotateClockwise(southTilted)).reduce(tiltNorth, []));
    return rotateClockwise(eastTilted);
  };
  const calculateLoad = (rows) => {
    return rows.reduce((total, row) => {
      let colTotal = 0;
      row.split``.forEach((tile, colIndex) => {
        if (colIndex === 0 || (row[colIndex - 1] === '#' && tile !== '#')) {
          const nextSquareIndex = row.slice(colIndex).indexOf('#');
          const lastIndex = nextSquareIndex > -1 ? colIndex + nextSquareIndex : rows.length;
          let rocksInSection = (row.slice(colIndex, lastIndex).match(/O/g) || []).length;

          while (rocksInSection > 0) {
            colTotal += rows.length - colIndex - rocksInSection + 1;
            rocksInSection--;
          }
        }
      });

      return total + colTotal;
    }, 0);
  };

  let platform = input.split`\n`;
  const platforms = [platform.join`|`];
  let cycles = 1;
  while (!platforms.includes((platform = cycle(platform)).join('|'))) {
    console.log(cycles++, platform.join('|'));
    platforms.push(platform.join`|`);
  }
  let startIndex = platforms.indexOf(platform.join('|'));
  let cycleLen = cycles - startIndex;

  const load = calculateLoad(transpose(platforms[startIndex + (1000000000 % cycleLen)].split`|`));

  return 1;
}

console.log('Part 2 expected:', 64, 'actual: ', part2(example));
// console.log("Part 2 result:", part2(input));
