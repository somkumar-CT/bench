'use client';
import { CustomFlipDotDisplay } from '@/components/icons/flip-dot-display';
import { allBitMaps5x5 } from '@/lib/bitMaps';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

const createEmptyGrid = (rows: number, cols: number) => {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
};

const TestPage = () => {
  // const [displayFlipGrid, setDisplayFlipGrid] = useState<number[][]>(
  //   createEmptyGrid(5, 5)
  // );
  const [firstLetterOfSecond, setFirstLetterOfSecond] = useState(0);
  const [secondLetterOfSecond, setSecondLetterOfSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = DateTime.now();
      const hour = currentDate.toFormat('HH');
      const minutes = currentDate.toFormat('mm');
      const seconds = currentDate.toFormat('ss');
      const firstLetterOfHour = hour.slice(0, 1);
      const secondLetterOfHour = hour.slice(1, 2);
      const firstLetterOfMinute = minutes.slice(0, 1);
      const secondLetterOfMinute = minutes.slice(1, 2);
      const firstLetterOfSecond = seconds.slice(0, 1);
      const secondLetterOfSecond = seconds.slice(1, 2);
      console.log(
        firstLetterOfHour,
        secondLetterOfHour,
        firstLetterOfMinute,
        secondLetterOfMinute
      );

      // const data = [
      //   ...allBitMaps5x5[firstLetterOfSecond],
      //   ...allBitMaps5x5[secondLetterOfSecond],
      // ...allBitMaps5x5[firstLetterOfHour].map((item) => [...item, 0]),
      // ...allBitMaps5x5[secondLetterOfHour],
      // ...allBitMaps5x5[firstLetterOfMinute].map((item) => [...item, 0]),
      // ...allBitMaps5x5[secondLetterOfMinute],
      //   [],
      // ];
      setFirstLetterOfSecond(Number(firstLetterOfSecond));
      setSecondLetterOfSecond(Number(secondLetterOfSecond));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex-1'>
      <div className='mt-navigation-height'>
        <p className='text-md my-4'>Flip Dot Display</p>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex'>
            <CustomFlipDotDisplay matrix={allBitMaps5x5.space} />
            <CustomFlipDotDisplay matrix={allBitMaps5x5[firstLetterOfSecond]} />
            <CustomFlipDotDisplay matrix={allBitMaps5x5.space} />
            <CustomFlipDotDisplay
              matrix={allBitMaps5x5[secondLetterOfSecond]}
            />
            <CustomFlipDotDisplay matrix={allBitMaps5x5.space} />
            <CustomFlipDotDisplay matrix={allBitMaps5x5[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
// const toggleFlip = (rowIndex: number, colIndex: number) => {
//   setFlipGrid((prevGrid) => {
//     const newGrid = prevGrid.map((row) => [...row]);
//     newGrid[rowIndex][colIndex] = newGrid[rowIndex][colIndex] === 1 ? 0 : 1;
//     return newGrid;
//   });
// };
/* <div className='*:mb-1 last:mb-0 mb-10'>
        {flipGrid.map((row, rowIndex) => (
          <div key={rowIndex} className='flex *:mr-1 last:mr-0'>
            {row.map((flip, colIndex) => (
              <div
                key={colIndex}
                onClick={() => toggleFlip(rowIndex, colIndex)}
                className={classNames(
                  'h-7 w-7 rounded-full cursor-pointer transition-transform',
                  flip
                    ? '[transform:rotateY(-180deg)] bg-[#e9e0d2]'
                    : ' bg-[#1a473c]'
                )}
              ></div>
            ))}
          </div>
        ))}
      </div> */
