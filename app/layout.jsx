import '@styles/global.css';
import { Children } from 'react';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'PromptGen',
    description: 'Discover & Share AI prompts'
}

const Rootlayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
                </Provider>
            </body>
        </html>
    )
}

export default Rootlayout