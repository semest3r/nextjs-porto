export default function Project2Component() {
    return (
        <div className="bg-gray-500/10 rounded">
            <div className="flex gap-2">
                <div className="p-2">
                    <h1 className="font-medium text-xl">Dankos Expedition</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse corrupti harum rem quo doloribus, accusantium
                        architecto dolore accusamus doloremque soluta aspernatur
                        consectetur dignissimos odio expedita eveniet dicta
                        obcaecati quae debitis.
                    </p>
                </div>
                <img
                    className="rounded h-[15rem]"
                    src="/dankos-expedition.png"
                    alt="MyImage"
                />
            </div>
        </div>
    );
}
