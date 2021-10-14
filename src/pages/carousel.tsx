import type { VFC } from 'react';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carousel: VFC = () => {
  return (
    <div>
      <Link href='/'>
        <a className='block my-8 text-center'>
          <p>TOP</p>
        </a>
      </Link>
      <div className=''>
        <Carousel swipeable>
          <div>
            <img src='https://storage.googleapis.com/zenn-topics/javascript.png' />
          </div>
          <div>
            <img src='https://storage.googleapis.com/zenn-topics/react.png' />
          </div>
          <div>
            <img src='https://zenn.dev/images/topic.png' />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default carousel;
