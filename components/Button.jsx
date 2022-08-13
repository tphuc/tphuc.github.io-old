import { styled } from "stiches.config"


export const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    transition: "0.4s ease all",
    cursor: "pointer",

    variants: {
        size: {
            md: {
                height: 35
            },
            lg: {
                height: 40,
            }
        },
        variant: {
            default: {
                color: '$mauve11',
                '&:hover': {
                    transition: "0.4s ease all",
                    color: '$mauve12',
                }
            },
        }
    },

    defaultVariants: {
        variant: "default",
        size: "md"
    }
})
