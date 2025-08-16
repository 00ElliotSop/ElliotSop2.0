import type { MDXComponents } from 'mdx/types';
import { Code } from 'lucide-react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-gradient">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 text-[#66E3FF]">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-none space-y-2 mb-4 ml-4">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="flex items-start text-gray-300">
        <span className="text-[#22C55E] mr-2 mt-2">•</span>
        {children}
      </li>
    ),
    code: ({ children, className }) => {
      const isBlock = className?.includes('language-');
      
      if (isBlock) {
        return (
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700 rounded-t-lg">
              <div className="flex items-center">
                <Code className="h-4 w-4 text-[#66E3FF] mr-2" />
                <span className="text-sm text-gray-300">Code</span>
              </div>
              <button 
                onClick={() => navigator.clipboard.writeText(children as string)}
                className="text-xs text-gray-400 hover:text-[#66E3FF] transition-colors"
              >
                Copy
              </button>
            </div>
            <pre className="bg-[#0F172A] p-4 rounded-b-lg overflow-x-auto border border-gray-700">
              <code className="text-sm font-mono text-gray-300">
                {children}
              </code>
            </pre>
          </div>
        );
      }
      
      return (
        <code className="bg-[#66E3FF]/10 text-[#66E3FF] px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }) => children,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#66E3FF] pl-4 py-2 my-4 bg-[#101826] rounded-r-lg">
        <div className="text-gray-300 italic">
          {children}
        </div>
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="text-[#66E3FF] font-semibold">
        {children}
      </strong>
    ),
    ...components,
  };
}