import { Carusel } from "./Carousel";

export default function HeroSection() {
  return (
    <div className='hero bg-cover text-center text-white mt-10'>
      <div className='min-h-60 backdrop-brightness-50'>
        <h1 className='text-4xl pt-10'>Countries</h1>
        <Carusel />
      </div>
    </div>
  );
}