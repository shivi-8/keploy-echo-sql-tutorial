import CodeBlock from '@/components/CodeBlock';
import Callout from '@/components/Callout';
import FlowDiagram from '@/components/FlowDiagram';
import NoiseDemo from '@/components/NoiseDemo';
import Issue from '@/components/Issue';

export function useMDXComponents(components) {
  return { pre: CodeBlock, Callout, FlowDiagram, NoiseDemo, Issue, ...components };
}
