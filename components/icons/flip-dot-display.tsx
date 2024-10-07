import classNames from 'classnames';

export const CustomFlipDotDisplay = ({ matrix }: { matrix: number[][] }) => {
  return (
    <div className='flex *:mr-1 last:mr-0'>
      {matrix.map((col, colIndex) => (
        <div key={colIndex} className='*:mb-1 last:mb-0'>
          {col.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={classNames(
                'h-7 w-7 transition-transform delay-[300ms]',
                row
                  ? '[transform:rotateY(-180deg)] bg-[#e9e0d2] rounded-[48%]'
                  : ' bg-[#1a473c] rounded-full'
              )}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
