import classNames from 'classnames';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = (props: ContainerProps) => {
  return (
    <div className={classNames('max-w-[120rem] px-8 mx-auto', props.className)}>
      {props.children}
    </div>
  );
};
