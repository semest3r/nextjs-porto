import Image from "next/image";
import ProfileImage from "@/assets/images/profile.png";
import DankosIdpImage from "@/assets/images/dankos-idp.png";
import DankosExpdtnImage from "@/assets/images/dankos-expedition.png";
import CatalogImage from "@/assets/images/catalog.png";

export function ProfileImg({ className }: { className: string }) {
    return (<>
        <Image src={ProfileImage} className={className} alt="profile" />
    </>)
}

export function DankosExpdtnImg({ className }: { className: string }) {
    return (<>
        <Image src={DankosExpdtnImage} className={className} alt="My Image" />
    </>)
}

export function DankosIdpImg({ className }: { className: string }) {
    return (<>
        <Image src={DankosIdpImage} className={className} alt="My Image" />
    </>)
}

export function CatelogImg({ className }: { className: string }) {
    return (<>
        <Image src={CatalogImage} className={className} alt="My Image" />
    </>)
}