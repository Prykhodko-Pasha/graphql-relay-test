import { screen, render } from '@testing-library/react';

import { RepoCard } from '../RepoCard';

describe('<RepoCard />', () => {
    const mockedName = 'Pasha';
    const mockedLastCommitStatus = 'SUCCESS';
    const mockedLatestStatusUpdatedAt = new Date(Date.now());
    const mockedPackageJsonText = null;
    const mockedTotalCountCommits = 20;
    const mockedTotalCountIssues = 6;
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
    const mockedTotalCountPullRequests = 2;
    const mockedPullRequests = {
        nodes: [
            { author: { avatarUrl: '1.jpg' }, mergeable: 'MERGEABLE' },
            { author: { avatarUrl: '1.jpg' }, mergeable: 'MERGEABLE' },
        ],
    };
    const mockedForkCount = 10;

    test('should render right name of repository', async () => {
        await render(
            <RepoCard
                name={mockedName}
                lastCommitStatus={mockedLastCommitStatus}
                latestStatusUpdatedAt={mockedLatestStatusUpdatedAt}
                packageJsonText={mockedPackageJsonText}
                totalCountCommits={mockedTotalCountCommits}
                totalCountIssues={mockedTotalCountIssues}
                issues={mockedIssues}
                totalCountPullRequests={mockedTotalCountPullRequests}
                pullRequests={mockedPullRequests}
                forkCount={mockedForkCount}
            />,
        );

        const name = await screen.findByTestId('name');

        expect(name.childNodes[0].textContent).toContain('Pasha');
    });

    test('should render right date of latest update of repository', async () => {
        await render(
            <RepoCard
                name={mockedName}
                lastCommitStatus={mockedLastCommitStatus}
                latestStatusUpdatedAt={mockedLatestStatusUpdatedAt}
                packageJsonText={mockedPackageJsonText}
                totalCountCommits={mockedTotalCountCommits}
                totalCountIssues={mockedTotalCountIssues}
                issues={mockedIssues}
                totalCountPullRequests={mockedTotalCountPullRequests}
                pullRequests={mockedPullRequests}
                forkCount={mockedForkCount}
            />,
        );

        const updatedAt = await screen.findByTestId('updatedAt');

        expect(updatedAt.childNodes[0].textContent).toContain('0');
    });

    test('should render right version of repository if it exists in package.json', async () => {
        await render(
            <RepoCard
                name={mockedName}
                lastCommitStatus={mockedLastCommitStatus}
                latestStatusUpdatedAt={mockedLatestStatusUpdatedAt}
                packageJsonText={mockedPackageJsonText}
                totalCountCommits={mockedTotalCountCommits}
                totalCountIssues={mockedTotalCountIssues}
                issues={mockedIssues}
                totalCountPullRequests={mockedTotalCountPullRequests}
                pullRequests={mockedPullRequests}
                forkCount={mockedForkCount}
            />,
        );

        const version = await screen.findByTestId('version');

        expect(version.childNodes[0].textContent).toContain('0.0.0');
    });

    test('should render right count of commits', async () => {
        await render(
            <RepoCard
                name={mockedName}
                lastCommitStatus={mockedLastCommitStatus}
                latestStatusUpdatedAt={mockedLatestStatusUpdatedAt}
                packageJsonText={mockedPackageJsonText}
                totalCountCommits={mockedTotalCountCommits}
                totalCountIssues={mockedTotalCountIssues}
                issues={mockedIssues}
                totalCountPullRequests={mockedTotalCountPullRequests}
                pullRequests={mockedPullRequests}
                forkCount={mockedForkCount}
            />,
        );

        const totalCountCommits = await screen.findByTestId(
            'totalCountCommits',
        );

        expect(totalCountCommits.childNodes[0].textContent).toContain('20');
    });

    test('should render right count of forks', async () => {
        await render(
            <RepoCard
                name={mockedName}
                lastCommitStatus={mockedLastCommitStatus}
                latestStatusUpdatedAt={mockedLatestStatusUpdatedAt}
                packageJsonText={mockedPackageJsonText}
                totalCountCommits={mockedTotalCountCommits}
                totalCountIssues={mockedTotalCountIssues}
                issues={mockedIssues}
                totalCountPullRequests={mockedTotalCountPullRequests}
                pullRequests={mockedPullRequests}
                forkCount={mockedForkCount}
            />,
        );

        const forkCount = await screen.findByTestId('forkCount');

        expect(forkCount.childNodes[0].textContent).toContain('10');
    });
});
