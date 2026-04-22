interface ProjectSectionProps {
  title: string
  description: string
  bullets?: { label: string; text: string }[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

const ProjectSection = ({
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
}: ProjectSectionProps) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className={reverse ? "md:order-2" : ""}>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
                {title}
              </h2>
              <p className="mt-4 text-pretty text-gray-700 dark:text-gray-300">
                {description}
              </p>
              {bullets && (
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {bullets.map((bullet, index) => (
                    <li key={index}>
                      <span className="font-semibold">{bullet.label}</span>
                      {" : "}
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={reverse ? "md:order-1" : ""}>
            <a
                href={`#/diagram?src=${encodeURIComponent(imageSrc)}&alt=${encodeURIComponent(imageAlt)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={imageSrc}
                    className="w-full rounded cursor-pointer hover:opacity-90 transition-opacity"
                    alt={imageAlt}
                />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection