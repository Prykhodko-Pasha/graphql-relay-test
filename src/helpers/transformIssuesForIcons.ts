import { Issues } from '../types';

const transformIssuesForIcons = (issues: Issues): string[] =>
    issues.nodes.map(node => node.labels.nodes?.[0]?.color ?? 'ddd');

export default transformIssuesForIcons;
