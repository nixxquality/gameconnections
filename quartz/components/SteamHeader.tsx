import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SteamHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const steamid = fileData.frontmatter?.steamid
  if (steamid) {
    const a_href = `https://store.steampowered.com/app/${steamid}/?curator_clanid=45100321`;
    const img_src = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${steamid}/header.jpg`
    return <a href={a_href}>
      <img src={img_src} width={460} height={215} alt="Header image" />
      <br/>
      View on Steam
    </a>
  } else {
    return null
  }
}

export default (() => SteamHeader) satisfies QuartzComponentConstructor
