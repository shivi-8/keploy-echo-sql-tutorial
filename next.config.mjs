import createMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const withMDX = createMDX({
  options: { rehypePlugins: [rehypeSlug, [rehypeHighlight, { detect: false }]] },
});

export default withMDX({ pageExtensions: ['js', 'jsx', 'mdx'] });
