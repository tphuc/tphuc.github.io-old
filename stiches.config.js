import { mauve, mauveDark, gray, grayDark, grayA, grayDarkA, mauveA, mauveDarkA } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';





export const {
    styled,
    getCssText,
    createTheme,
    globalCss
} = createStitches({

    media: {
        mobile: '(max-width: 480px)',
        bp1: '(max-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
   

 

    theme: {
        fontSizes: {
            'x-small':"12px",
            'smaller': '13px',
            'small': '14px',
            'revert': '15px',
            'medium': '16px',
            'large':'18px'
        },

        colors: {
            text: '#000',
            background: `linear-gradient(145deg, ${mauve.mauve2}, ${gray.gray2}, ${gray.gray1})`,

            mauve1: mauve.mauve1,
            mauve2: mauve.mauve2,
            mauve3: mauve.mauve3,
            mauve4: mauve.mauve4,
            mauve5: mauve.mauve5,
            mauve6: mauve.mauve6,
            mauve7: mauve.mauve7,
            mauve8: mauve.mauve8,
            mauve9: mauve.mauve9,
            mauve10: mauve.mauve10,
            mauve11: mauve.mauve11,
            mauve12: mauve.mauve12,


            mauveA1: mauveA.mauveA1,
            mauveA2: mauveA.mauveA2,
            mauveA3: mauveA.mauveA3,
            mauveA4: mauveA.mauveA4,
            mauveA5: mauveA.mauveA5,
            mauveA6: mauveA.mauveA6,
            mauveA7: mauveA.mauveA7,
            mauveA8: mauveA.mauveA8,
            mauveA9: mauveA.mauveA9,
            mauveA10: mauveA.mauveA10,
            mauveA11: mauveA.mauveA11,
            mauveA12: mauveA.mauveA12,


            grayA1: grayA.grayA1,
            grayA2: grayA.grayA2,
            grayA3: grayA.grayA3,
            grayA4: grayA.grayA4,
            grayA5: grayA.grayA5,
            grayA6: grayA.grayA6,
            grayA7: grayA.grayA7,
            grayA8: grayA.grayA8,
            grayA9: grayA.grayA9,
            grayA10: grayA.grayA10,
            grayA11: grayA.grayA11,
            grayA12: grayA.grayA12,


            gray1: gray.gray1,
            gray2: gray.gray2,
            gray3: gray.gray3,
            gray4: gray.gray4,
            gray5: gray.gray5,
            gray6: gray.gray6,
            gray7: gray.gray7,
            gray8: gray.gray8,
            gray9: gray.gray9,
            gray10: gray.gray10,
            gray11: gray.gray11,
            gray12: gray.gray12,





        }
    }
});



export const darkTheme = createTheme({
    colors: {
        text: '#fff',
        background: `linear-gradient(145deg, ${mauveDark.mauve2}, ${grayDark.gray2})`,
        mauve1: mauveDark.mauve1,
        mauve2: mauveDark.mauve2,
        mauve3: mauveDark.mauve3,
        mauve4: mauveDark.mauve4,
        mauve5: mauveDark.mauve5,
        mauve6: mauveDark.mauve6,
        mauve7: mauveDark.mauve7,
        mauve8: mauveDark.mauve8,
        mauve9: mauveDark.mauve9,
        mauve10: mauveDark.mauve10,
        mauve11: mauveDark.mauve11,
        mauve12: mauveDark.mauve12,


        gray1: grayDark.gray1,
        gray2: grayDark.gray2,
        gray3: grayDark.gray3,
        gray4: grayDark.gray4,
        gray5: grayDark.gray5,
        gray6: grayDark.gray6,
        gray7: grayDark.gray7,
        gray8: grayDark.gray8,
        gray9: grayDark.gray9,
        gray10: grayDark.gray10,
        gray11: grayDark.gray11,
        gray12: grayDark.gray12,



        mauveA1: mauveDarkA.mauveA1,
        mauveA2: mauveDarkA.mauveA2,
        mauveA3: mauveDarkA.mauveA3,
        mauveA4: mauveDarkA.mauveA4,
        mauveA5: mauveDarkA.mauveA5,
        mauveA6: mauveDarkA.mauveA6,
        mauveA7: mauveDarkA.mauveA7,
        mauveA8: mauveDarkA.mauveA8,
        mauveA9: mauveDarkA.mauveA9,
        mauveA10: mauveDarkA.mauveA10,
        mauveA11: mauveDarkA.mauveA11,
        mauveA12: mauveDarkA.mauveA12,



        grayA1: grayDarkA.grayA1,
        grayA2: grayDarkA.grayA2,
        grayA3: grayDarkA.grayA3,
        grayA4: grayDarkA.grayA4,
        grayA5: grayDarkA.grayA5,
        grayA6: grayDarkA.grayA6,
        grayA7: grayDarkA.grayA7,
        grayA8: grayDarkA.grayA8,
        grayA9: grayDarkA.grayA9,
        grayA10: grayDarkA.grayA10,
        grayA11: grayDarkA.grayA11,
        grayA12: grayDarkA.grayA12,

    }


});