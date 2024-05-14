import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto w-full max-w-[1400px] px-4">{children}</div>;
};
