import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const policiesDirectory = path.join(process.cwd(), 'src/common/content/policy');

async function getPolicyMD(slug: string, locale: string) {
  try {
    const fullPath = path.join(policiesDirectory, locale, `${slug}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(matterResult.content);

    return {
      slug,
      contentHtml: processedContent.toString(),
      ...matterResult.data,
    };
  } catch {
    return null;
  }
}

export default getPolicyMD;
