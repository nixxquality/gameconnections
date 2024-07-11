import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SteamHeader: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const steamid = fileData.frontmatter?.steamid
  if (steamid) {
    const img_src = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${steamid}/header.jpg`
    return <img src={img_src} width={460} height={215} alt="Header image" />
    //return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

export default (() => SteamHeader) satisfies QuartzComponentConstructor
