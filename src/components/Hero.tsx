interface HeroProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imageDesc: string
  links: { label: string; href: string }[]
}

// From https://www.hyperui.dev/components/marketing/ctas/#component-3
const Hero = ({ title, description, imageSrc, imageAlt, imageDesc, links  }: HeroProps) => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-4 dark:bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 sm:col-span-3">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            {description}
          </p>
          <div className="mt-4 md:mt-8 flex gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={
                  index === 0
                    ? "inline-block rounded bg-emerald-600 px-8 py-3 text-sm font-medium text-white hover:bg-emerald-700"
                    : "inline-block rounded border border-emerald-600 px-8 py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-600 hover:text-white"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className = "flex flex-col">
        <img
            alt={imageAlt}
            src={imageSrc}
            className="h-56 w-full object-cover sm:h-full"
        />
        <p className = "mt-4 mb-4 text-gray-500 dark:text-gray-300">
            {imageDesc}
        </p>
      </div>
    </section>
  )
}
export default Hero