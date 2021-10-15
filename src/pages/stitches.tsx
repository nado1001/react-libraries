import type { VFC } from 'react';
import { styled } from '../styles';
import { Button } from '../components/Button';

const stitches: VFC = () => {
  return (
    <>
      <div>
        <p>stitches</p>
        <Button2>ボタン</Button2>
        <Button2 color='violet' size='md'>
          ボタン
        </Button2>
        <Button2 color='gray'>ボタン</Button2>
      </div>
      <div>
        <Button color='blue' />
      </div>
    </>
  );
};

const Button2 = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '$2',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },

  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
    size: {
      md: {
        width: '100px',
      },
      lg: {
        width: '200px',
      },
    },
  },

  compoundVariants: [
    // colorがvioletでsizeがlgの時は高さ100px追加
    {
      color: 'violet',
      size: 'lg',
      css: {
        height: '100px',
      },
    },
  ],
});

export default stitches;
