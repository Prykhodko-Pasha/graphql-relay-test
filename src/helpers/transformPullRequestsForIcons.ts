import { PullRequestIcon, PullRequestNode } from '../types';
import pullRequestStatus from './pullRequestStatus';

const transformPullRequestForIcons = (pullRequest: {
    nodes: PullRequestNode[];
}): PullRequestIcon[] => {
    return pullRequest.nodes.map(node => ({
        status: pullRequestStatus(node),
        avatar: node.author?.avatarUrl || '',
    }));
};

export default transformPullRequestForIcons;
