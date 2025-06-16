import React from "react"
import PropTypes from "prop-types"
import {
    IconInstagram,
    IconCatalog,
    IconOrang,
    IconShopee,
    IconTiktok,
    IconWhatsapp,
    IconOrangNav,
    IconR,
    IconShopeeLarge,
    IconShopeeButton,
    IconShopeeButtonLarge,
} from "@/components/icons"

const Icon = ({ name }: { name: string }) => {
    switch (name) {
        case "instagram":
        return <IconInstagram />;
        case "catalog":
        return <IconCatalog />;
        case "orang":
        return <IconOrang />;
        case "orangnav":
        return <IconOrangNav />;
        case "shopee":
        return <IconShopee />;
        case "shopeelarge":
        return <IconShopeeLarge />;
        case "tiktok":
        return <IconTiktok />;
        case "shopeebutton":
        return <IconShopeeButton />;
        case "shopeebuttonlarge":
        return <IconShopeeButtonLarge />;
        case "whatsapp":
        return <IconWhatsapp />;
        case "r":
        return <IconR />;
        default:
        return null
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon