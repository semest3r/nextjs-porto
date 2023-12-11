export default function Project2Component() {
    return (
        <div className="bg-gray-500/10 rounded">
            <div className="md:flex gap-2">
                <img
                    className="rounded h-[15rem]"
                    src="/dankos-expedition.png"
                    alt="MyImage"
                />
                <div className="p-2">
                    <h1 className="font-medium text-xl">Dankos Expedition</h1>
                    <p>
                        This project was created while participating in the
                        Kampus Merdeka MSIB Batch 5. This website was created
                        using Laravel, Blade, Select2, and Jquery.
                    </p>
                </div>
            </div>
        </div>
    );
}
