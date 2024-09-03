import Image from "next/image";
import ProfileImage from "@/assets/images/profile2.png";

import DankosIdpImage from "@/assets/images/dankos-idp.png";
import DankosIdpDashboardImage from "@/assets/images/dankos-idp2.png";
import DankosIdpHistoryImage from "@/assets/images/dankos-idp3.png";

import DankosExpdtnImage from "@/assets/images/dankos-expedition.png";
import DeaDashboardImage from "@/assets/images/dea-dashboard.png";
import DeaPengirimanImage from "@/assets/images/dea-pengiriman.png";
import DeaTrackingImage from "@/assets/images/dea-tracking.png";

import CatalogImage from "@/assets/images/catalog.png";
import AppDevelopmentImage from "@/assets/images/app-development.svg";
import PencilImage from "@/assets/images/pencil.svg";

import JaringHelpLoginImage from "@/assets/images/jaringhelp-login.png";
import JaringHelpDashboardImage from "@/assets/images/jaringhelp-dashboard.png";
import JaringHelpHomeImage from "@/assets/images/jaringhelp-home.png";

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


//DEA
export function DankosExpdtnImg({ className }: { className: string }) {
    return (<>
        <Image src={DankosExpdtnImage} className={className} alt="My Image" />
    </>)
}
export function DeaDashboardImg({ className }: { className: string }) {
    return (<>
        <Image src={DeaDashboardImage} className={className} alt="My Image" />
    </>)
}
export function DeaTrackingImg({ className }: { className: string }) {
    return (<>
        <Image src={DeaTrackingImage} className={className} alt="My Image" />
    </>)
}
export function DeaPengirimanImg({ className }: { className: string }) {
    return (<>
        <Image src={DeaPengirimanImage} className={className} alt="My Image" />
    </>)
}

//IDP
export function DankosIdpLoginImg({ className }: { className: string }) {
    return (<>
        <Image src={DankosIdpImage} className={className} alt="My Image" />
    </>)
}
export function DankosIdpDashboardImg({ className }: { className: string }) {
    return (<>
        <Image src={DankosIdpDashboardImage} className={className} alt="My Image" />
    </>)
}
export function DankosIdpHistoryImg({ className }: { className: string }) {
    return (<>
        <Image src={DankosIdpHistoryImage} className={className} alt="My Image" />
    </>)
}

///Product Catalog
export function CatelogImg({ className }: { className: string }) {
    return (<>
        <Image src={CatalogImage} className={className} alt="My Image" />
    </>)
}

///Jaring Help
export function JaringHelpLoginImg({ className }: { className: string }) {
    return (<>
        <Image src={JaringHelpLoginImage} className={className} alt="My Image" />
    </>)
}
export function JaringHelpHomeImg({ className }: { className: string }) {
    return (<>
        <Image src={JaringHelpHomeImage} className={className} alt="My Image" />
    </>)
}
export function JaringHelpDashboardImg({ className }: { className: string }) {
    return (<>
        <Image src={JaringHelpDashboardImage} className={className} alt="My Image" />
    </>)
}