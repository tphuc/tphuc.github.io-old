import React from 'react';
import { gray, mauve } from '@radix-ui/colors';
import { styled } from 'stiches.config'
import { BoxIcon } from '@radix-ui/react-icons';
import { RiTimerFlashFill, RiWaterFlashFill } from 'react-icons/ri';


const Box = styled('div', {});

const LightningCard = ({ color1 = 'hsla(0, 100%, 69%, 0.12)', color2 = 'rgba(255, 97, 97, 0)', iconColor }) => {
    return <div style={{ position: "relative", borderRadius: 14, width: 200, height: 200 }}>
        <Box css={{
            // pointerEvents:"none",
            background: gray.gray12,
            cursor: "pointer",
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",

            borderRadius: 14,
            border: '1px solid hsla(264, 100%, 100%, 0.07)',
            transition: "all 0.8s ease",
            transform: "translate(0px, 0px)",
            '& > .grid .blur': {


                zIndex: -1,
                opacity: 0.5,
                '--positionX': 1,
                '--positionY': 8,

                transition: "all 0.8s ease-in-out",
                backgroundImage: `radial-gradient( 100% 100% at calc(var(--positionX) * 20px) calc(var(--positionY) * 20px),  ${color1} 0%, ${color2} 100% )`,
                // transform: 'translate3d(calc((var(--positionX) * 66px) - 50%), calc((var(--positionY) * 66px) - 50%), 0)'
            },
            '&:hover': {
                scale: 1.08
            },

            // ------------------------

            '& .grid .cell:nth-child(10n + 1):hover ~ .blur': {

                scale: 1,
                transition: "all 0.8s ease",
                '--positionX': 0,


                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 1):nth-child(-n + 10):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 0,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 2):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 1,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 11):nth-child(-n + 20):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 1,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 3):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 2,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 21):nth-child(-n + 30):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 2,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 4):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 3,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 31):nth-child(-n + 40):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 3,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 5):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 4,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 41):nth-child(-n + 50):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 4,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 6):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 5,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 51):nth-child(-n + 60):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 5,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)
            },

            '& .grid .cell:nth-child(10n + 7):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 6,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 61):nth-child(-n + 70):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 6,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 8):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 7,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 71):nth-child(-n + 80):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 7,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 9):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 8,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 81):nth-child(-n + 90):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 8,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(10n + 10):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionX': 9,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },

            '& .grid .cell:nth-child(n + 91):nth-child(-n + 100):hover ~ .blur': {
                opacity: 1,
                transition: "all 0.8s ease",
                '--positionY': 9,
                // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
            },



        }}>
            {/* <Box className='blur' css={{
          '--positionX': 0,
          '--positionY': 0,

          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "all 0.4s ease-in-out",
          background: 'radial-gradient(45% 45% at 50% 50%, hsla(0, 100%, 69%, 0.12) 0%, rgba(255, 97, 97, 0) 100%)',
          transform: `translate3d(0px,0px,0px)`,
        }}> </Box> */}


            <Box className='grid' css={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: 'repeat(10, 1fr)',
                gridTemplateRows: 'repeat(10, 1fr)',
                zIndex: 200,
            }}>
                {[...Array(100).keys()].map((item, id) => <div key={id} className='cell'></div>)}
                <Box className='blur' css={{
                    pointerEvents: "none",
                    '--positionX': 1,
                    '--positionY': 10,
                    '-webkit-transition': 'all 0.8s ease-in-out',
                    '-moz-transition': 'all 0.8s ease-in-out',
                    '-o-transition': 'all 0.8s ease-in-out',
                    opacity: 0,
                    marginTop: "-10%",
                    marginLeft: "-10%",
                    position: "absolute",
                    width: "120%",
                    height: "120%",
                    transition: "all 0.8s ease-in-out",
                    backgroundImage: "radial-gradient( 200px circle at calc(var(--positionX) * 20px) calc(var(--positionY) * 20px),   hsla(0, 100%, 69%, 0.1) 0%, rgba(255, 97, 97, 0) 100% )",
                    // transition: "all 0.4s ease-in-out",
                    // background: 'radial-gradient(45% 45% at 50% 50%, hsla(0, 100%, 69%, 0.12) 0%, rgba(255, 97, 97, 0) 100%)',
                }}> </Box>
            </Box>

            <Box style={{ padding: 20, color: "white" }}>
                <div style={{ padding: 20, display: "inline-flex", background: color1, borderRadius: '50%', justifyContent: "center", alignItems: "center" }}>
                    <RiWaterFlashFill size={24} color={iconColor} />
                </div>
                <p style={{ fontSize: "18px", marginBottom: 5 }}>A Card</p>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>Try hover on this card</span>
            </Box>
        </Box>
    </div>
}




export default LightningCard