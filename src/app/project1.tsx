export default function Project1Component() {
    return (
        <div className="bg-gray-500/10 rounded">
            <div className="md:flex gap-2">
                <img
                    className="rounded h-[15rem]"
                    src="/individual-development-plan.png"
                    alt="MyImage"
                />

                <div className="p-2">
                    <h1 className="font-medium text-xl">
                        Individual Development Plan
                    </h1>
                    <p>
                        This project was created while participating in the
                        Kampus Merdeka MSIB Batch 4 and 5. This website was
                        created using Laravel, IntertiaJs, and Vue3.
                    </p>
                </div>
            </div>
        </div>
    );
}
