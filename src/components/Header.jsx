import { Component } from './RightDrawer';

export default function Header() {
  return (
    <div className='fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50'>
      <div className='max-w-[1140px] flex justify-between items-center mx-auto p-2 px-4'>
        Header
        <Component />
      </div>
    </div>
  );
}
