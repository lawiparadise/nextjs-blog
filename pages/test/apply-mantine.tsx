import Link from "next/link";
import {Button} from '@mantine/core'
import {createStyles, Slider} from '@mantine/core'

const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
];

const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
        // subscribe to color scheme changes right in your styles
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        maxWidth: 400,
        width: '100%',
        height: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: theme.radius.sm,

        // Dynamic media queries, define breakpoints in theme, use anywhere
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            // Type safe child reference in nested selectors via ref
            [`& .${getRef('child')}`]: {
                fontSize: theme.fontSizes.xs,
            },
        },
    },

    child: {
        // assign ref to element
        ref: getRef('child'),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        padding: theme.spacing.md,
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

function Demo() {
    const {classes} = useStyles();

    return (
        <>
            <Link href='/pages' passHref>
                <Button component='a'>hi button</Button>
            </Link>
            <div className={classes.wrapper}>
                <div className={classes.child}>createStyles demo</div>
            </div>
        </>
    )
}

function DemoSlider() {
    return (
        <Slider
            m={100}
            defaultValue={10}
            marks={marks}
            labelTransition="fade"
            size={2}
            styles={(theme) => ({
                // margin m으로 가능
                // root: {
                //   margin:'5rem'
                // },
                track: {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
                },
                mark: {
                    width: 6,
                    height: 6,
                    borderRadius: 6,
                    transform: 'translateX(-3px) translateY(-2px)',
                    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
                },
                markFilled: {
                    borderColor: theme.colors.blue[6],
                },
                markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
                thumb: {
                    height: 16,
                    width: 16,
                    backgroundColor: theme.white,
                    borderWidth: 1,
                    boxShadow: theme.shadows.sm,
                },
            })}
        />
    );
}
function DemoButton(){
    return(
        <Button color='violet'>violet btn</Button>
    )
}

export default DemoButton
