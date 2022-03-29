import { screen, render } from '@testing-library/react';

import { StatusBadge } from '../StatusBadge';

describe('<StatusBadge />', () => {
    test('should render CheckIcon, if last commit status is SUCCESS', async () => {
        const mockedLastCommitStatus = 'SUCCESS';

        await render(
            <StatusBadge lastCommitStatus={mockedLastCommitStatus} children />,
        );

        const lastCommitStatusSuccess = await screen.findByTestId(
            'lastCommitStatusSuccess',
        );

        expect(lastCommitStatusSuccess).toBeTruthy();
    });

    test('should render CloseIcon, if last commit status is not SUCCESS', async () => {
        const mockedLastCommitStatus = 'FAIL';

        await render(
            <StatusBadge lastCommitStatus={mockedLastCommitStatus} children />,
        );

        const lastCommitStatusFail = await screen.findByTestId(
            'lastCommitStatusFail',
        );

        expect(lastCommitStatusFail).toBeTruthy();
    });
});
