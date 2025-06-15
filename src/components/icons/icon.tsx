import React from "react"
import PropTypes from "prop-types"
import {
    IconInstagram,
    IconCatalog,
    IconOrang,
    IconShopee,
    IconTiktok,
    IconWhatsapp,
} from "@/components/icons"

const Icon = ({ name }: { name: string }) => {
    switch (name) {
        case "instagram":
        return <IconInstagram />;
        case "catalog":
        return <IconCatalog />;
        case "orang":
        return <IconOrang />;
        case "shopee":
        return <IconShopee />;
        case "tiktok":
        return <IconTiktok />;
        case "whatsapp":
        return <IconWhatsapp />;
        default:
        return null
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon