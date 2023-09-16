import { marked } from 'marked';
import * as fs from 'node:fs/promises';

export const load = async () => {
	const md = await fs.readFile('./src/routes/felix/index.md', { encoding: 'utf8' });
	const rendered = marked.parse(md);
	return { result: rendered };
};
