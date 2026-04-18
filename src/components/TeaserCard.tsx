interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  link: string
  linkText?: string
}

const TeaserCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
  linkText = "View project",
}: ProjectCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
      <img
        alt={imageAlt}
        src={imageSrc}
        className="h-56 w-full object-contain"
      />
      <div className="p-4 sm:p-6">
        <a href={link}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          {linkText}
          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard