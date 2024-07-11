import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const EditLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (fileData.filePath) {
    const a_href = `https://github.com/nixxquality/gameconnections/blob/master/${fileData.filePath}`
    // https://remixicon.com/icon/code-s-slash-line
    return <a class="edit-link" href={a_href} title="Edit this page">
        <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>
    </a>
  } else {
    return null
  }
}

// the right sidebar overlaps the edit link on firefox.
// use z-index to ignore that issue and put it "over" the sidebar.
EditLink.css = `
.edit-link {
  display: block;
  width: 1.75rem;
  height: 1.75rem;
  z-index: 10;
}
.edit-icon {
  width: 100%;
  height: 100%;
  fill: var(--dark);
  transition: fill .2s;
}
.edit-icon:hover {
  fill: var(--tertiary);
}
`

export default (() => EditLink) satisfies QuartzComponentConstructor
