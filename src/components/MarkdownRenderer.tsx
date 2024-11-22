// src/components/MarkdownRenderer.tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownString = `
# Markdown Syntax Showcase

Markdown is a lightweight markup language with plain text formatting syntax.

---

## Text Formatting

- **Bold Text:** **This text is bold**
- *Italic Text:* *This text is italic*
- ***Bold and Italic Text:*** ***This text is bold and italic***
- ~~Strikethrough:~~ ~~This text is crossed out~~

---

## Links and Images

- [Link to OpenAI](https://www.openai.com)
- ![Sample Image](https://via.placeholder.com/150 "Placeholder Image")

---

## Lists

### Ordered List:
1. First item
2. Second item
3. Third item

### Unordered List:
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2

---

## Blockquotes

> This is a blockquote.
> 
> Multiline blockquotes are supported.

---

## Code

### Inline Code:
Here is some \`inline code\`.

### Code Block:
\`\`\`javascript
function greet() {
    console.log("Hello, world!");
}
greet();
\`\`\`

---

## Tables

| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Row 1  | Data 1      |
| Row 2  | Data 2      |

---

## Task Lists

- [x] Task 1 completed
- [ ] Task 2 pending
- [ ] Task 3 pending

---

## Headings of All Levels

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## Horizontal Rules

---
Above is a horizontal rule created with three dashes.
***

---
`;

const MarkdownRenderer = () => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownString}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
