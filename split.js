const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');

const sections = content.split(/\/\* ============================================================\n \* (.*?)\n \* ============================================================ \*\//g);

// sections[0] is the imports and constants
const header = sections[0];

const parts = [];
for (let i = 1; i < sections.length; i += 2) {
  parts.push({
    name: sections[i].trim(),
    code: sections[i + 1]
  });
}

// Ensure components directory exists
if (!fs.existsSync('components')) {
  fs.mkdirSync('components');
}

const allIcons = [
  "Check", "Star", "ArrowRight", "Smartphone", "MessageSquare", "Share2", "Zap", "RefreshCw", "Palette", "ChevronDown", "Shield", "Clock", "Sparkles", "X", "Search", "Globe", "Calendar", "CreditCard", "Mail", "Image as ImageIcon", "BarChart3", "Code2", "Plus", "Minus"
];
const allFramer = [
  "motion", "useScroll", "useTransform", "AnimatePresence", "useInView", "useMotionValue", "useSpring"
];
const allReact = ["useEffect", "useRef", "useState"];

const primitives = ["Section", "Eyebrow", "SectionHeader", "PrimaryCTA", "GhostCTA", "Counter"];

function getImports(code, isPrimitive = false) {
  let imports = '"use client";\n\n';
  
  const framerUsed = allFramer.filter(f => code.includes(f));
  if (framerUsed.length > 0) {
    imports += `import { ${framerUsed.join(", ")} } from "framer-motion";\n`;
  }
  
  const reactUsed = allReact.filter(r => code.includes(r));
  if (reactUsed.length > 0) {
    imports += `import { ${reactUsed.join(", ")} } from "react";\n`;
  }
  
  const iconsUsed = allIcons.filter(i => {
    const iconName = i.includes(" as ") ? i.split(" as ")[0] : i;
    const iconAlias = i.includes(" as ") ? i.split(" as ")[1] : i;
    return code.includes(`<${iconAlias}`) || code.includes(`${iconAlias} `) || code.includes(`icon: ${iconAlias}`) || code.includes(`${iconAlias},`);
  });
  if (iconsUsed.length > 0) {
    imports += `import { ${iconsUsed.join(", ")} } from "lucide-react";\n`;
  }

  if (!isPrimitive) {
    const primitivesUsed = primitives.filter(p => code.includes(`<${p}`) || code.includes(` ${p} `));
    if (primitivesUsed.length > 0) {
      imports += `import { ${primitivesUsed.join(", ")} } from "./Primitives";\n`;
    }
  }
  
  return imports + "\n";
}

let pageImports = [];
let pageCode = 'export default function Page() {\n  return (\n    <main className="min-h-screen bg-background text-foreground">\n';

const constants = `
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
`;

for (const part of parts) {
  if (part.name === 'Index') continue;

  let filename = part.name.split(' ')[0].replace('—', '').replace('-', '').trim() + '.tsx';
  if (filename === 'Bento.tsx') filename = 'Features.tsx';
  if (filename === 'Add.tsx') filename = 'AddOns.tsx';
  if (filename === 'Final.tsx') filename = 'CTA.tsx';
  if (filename === 'Comparison.tsx') filename = 'Compare.tsx';
  
  const isPrimitive = filename === 'Primitives.tsx';
  
  let code = part.code;
  if (isPrimitive || filename === 'Hero.tsx' || filename === 'Nav.tsx') {
    code = constants + code;
  }
  
  // export functions
  code = code.replace(/function ([A-Z][a-zA-Z0-9_]*)/g, 'export function $1');
  
  fs.writeFileSync('components/' + filename, getImports(code, isPrimitive) + code);
  
  // Extract component names to import in page.tsx
  const componentMatches = [...part.code.matchAll(/function ([A-Z][a-zA-Z0-9_]*)/g)].map(m => m[1]);
  if (componentMatches.length > 0 && !isPrimitive) {
     const mainComponent = componentMatches[0];
     pageImports.push(`import { ${mainComponent} } from "@/components/${filename.replace('.tsx', '')}";`);
     pageCode += `      <${mainComponent} />\n`;
  } else if (filename === 'Primitives.tsx') {
     // Primitives are not directly rendered in the main layout usually, wait they aren't
  }
}

pageCode += '    </main>\n  );\n}\n';

const finalPageTsx = pageImports.join('\n') + '\n\n' + pageCode;
fs.writeFileSync('app/page.tsx', finalPageTsx);
console.log('Done splitting components!');
