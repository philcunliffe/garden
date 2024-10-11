import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const status = fileData.frontmatter?.status;
  let statusEmoji = '';
  if (status === 'seedling') statusEmoji = '\u{1F331} ';
  if (status === 'budding') statusEmoji = '\u{1F33F} ';
  if (status === 'evergreen') statusEmoji = '\u{1F332} ';
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{statusEmoji}{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
