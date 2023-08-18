import { Global } from '@mantine/core';

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'D2Coding',
                        src: `url('/fonts/D2Coding.woff2') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}
