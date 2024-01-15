'use client'
import { ReactNode } from 'react'
import '../../../globals.css'

type FirstPostLayoutProps = {
  children: ReactNode;
}

export default function FirstPostLayout(
  props: FirstPostLayoutProps
) {
  const { children } = props;
  console.log('FirstPostLayout props', props);

  return (
    <div>
      FIRST POST LAYOUT
      {children}
    </div>
  );
}
