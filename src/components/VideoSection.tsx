export default function VideoSection({
    videoSrc,
    title,
    labels = [],
}) {
    const mediaBlock = (
        <div className="md:col-span-3">
            <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="rounded w-full"
            />
        </div>
    );

    const textBlock = (
        <div className="md:col-span-1">
            <div className="max-w-prose md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
                    {title}
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-pretty text-gray-700 dark:text-gray-300">
                    {labels.map((label) => (
                        <li key={label}>{label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                    {textBlock}
                    {mediaBlock}
                </div>
            </div>
        </section>
    );
}