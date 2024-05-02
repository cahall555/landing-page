import matter from 'gray-matter';
import path from 'path';

const URL = "https://courtney.elsner.dev";

export async function getServerSideProps({ res }) {
    const fs = require('fs'); 
    const postsDirectory = path.join(process.cwd(), 'posts');

    // Read and sort posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
	const date = matterResult.data.date;

        return {
            id,
	    date,
            ...matterResult.data,
        };
    });
    
    const sitemap = generateSiteMap(allPostsData);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
}

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${URL}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>${URL}/projects</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>${URL}/resume</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>${URL}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  ${posts.map(post => `
    <url>
      <loc>${URL}/posts/${post.id}</loc>
    <lastmod>${post.date ? new Date(post.date).toISOString() : new Date().toISOString()}</lastmod>
    </url>`).join("")}
</urlset>
`;
}

export default function SiteMap() {
    return null;
}

