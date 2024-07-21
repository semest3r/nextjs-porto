import Image from "next/image";
import ProfileImage from "@/assets/images/profile2.png";
import DankosIdpImage from "@/assets/images/dankos-idp.png";
import DankosExpdtnImage from "@/assets/images/dankos-expedition.png";
import CatalogImage from "@/assets/images/catalog.png";
import AppDevelopmentImage from "@/assets/images/app-development.svg";
import PencilImage from "@/assets/images/pencil.svg";
import JaringHelpImage from "@/assets/images/jaring-help.png";

export function AppDevelopmentImg({ className }: { className: string }) {
    return (<>
        <Image src={AppDevelopmentImage} className={className} alt="AppDevelopment" />
    </>)
}

export function PencilImg({ className }: { className: string }) {
    return (<>
        <Image src={PencilImage} className={className} alt="Pencil" />
    </>)
}

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
export function DankosIdpImg2({ className }: { className: string }) {
    return (<>
        <Image src={DankosIdpImage} className={className} alt="My Image" />
    </>)
}
export function DankosIdpImg3({ className }: { className: string }) {
    return (<>
        <Image src={DankosIdpImage} className={className} alt="My Image" />
    </>)
}

export function CatelogImg({ className }: { className: string }) {
    return (<>
        <Image src={CatalogImage} className={className} alt="My Image" />
    </>)
}

export function JaringHelpImg({ className }: { className: string }) {
    return (<>
        <Image src={JaringHelpImage} className={className} alt="My Image" />
    </>)
}