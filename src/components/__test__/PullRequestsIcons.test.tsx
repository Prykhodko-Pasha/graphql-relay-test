import { screen, render } from '@testing-library/react';

import { PullRequestsIcons } from '../PullRequestsIcons';

describe('<PullRequestsIcons />', () => {
    test('should render maximum 4 pull request icons', async () => {
        const mockedNodes = [
            { author: { avatarUrl: '1.jpg' }, mergeable: 'MERGEABLE' },
            { author: { avatarUrl: '1.jpg' }, mergeable: 'NO', isDraft: true },
            { author: { avatarUrl: '1.jpg' }, mergeable: 'NO', isDraft: false },
            { author: { avatarUrl: '1.jpg' }, mergeable: 'MERGEABLE' },
            { author: { avatarUrl: '1.jpg' }, mergeable: 'NO', isDraft: true },
            { author: { avatarUrl: '1.jpg' }, mergeable: 'NO', isDraft: false },
        ];
        const mockedTotalCountPullRequests = 6;

        await render(
            <PullRequestsIcons
                nodes={mockedNodes}
                totalCountPullRequests={mockedTotalCountPullRequests}
            />,
        );

        const pullRequestIcons = await screen.findAllByTestId(
            'pullRequestIcon',
        );

        expect(pullRequestIcons).toHaveLength(4);
    });
});
