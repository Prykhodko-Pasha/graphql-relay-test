import { screen, render } from '@testing-library/react';

import { IssuesIcons } from '../IssuesIcons';

describe('<IssuesIcons />', () => {
    test('should render maximum 4 issue icons', async () => {
        const mockedIssues = {
            nodes: [
                { labels: { nodes: [{ color: 'yellow' }] } },
                { labels: { nodes: [{ color: 'orange' }] } },
                { labels: { nodes: [{ color: 'red' }] } },
                { labels: { nodes: [{ color: 'blue' }] } },
                { labels: { nodes: [{ color: 'green' }] } },
                { labels: { nodes: [{ color: 'grey' }] } },
            ],
        };
        const mockedTotalCountIssues = 6;

        await render(
            <IssuesIcons
                issues={mockedIssues}
                totalCountIssues={mockedTotalCountIssues}
            />,
        );

        const issueIcons = await screen.findAllByTestId('issueIcon');

        expect(issueIcons).toHaveLength(4);
    });
});
