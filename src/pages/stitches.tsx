import type { VFC } from 'react';
import { styled } from '@stitches/react';

const stitches: VFC = () => {
  return (
    <div>
      <p>stitches</p>
      <Button>ボタン</Button>
      <Button color='violet' size='md'>
        ボタン
      </Button>
      <Button color='gray'>ボタン</Button>
    </div>
  );
};

const Button = styled('button', {
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
