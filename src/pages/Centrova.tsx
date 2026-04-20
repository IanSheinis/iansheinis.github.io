import architectureDiagram from '../assets/centrova_diagram.png'
import placeholderImg from '../assets/Placeholder.png'
import ProjectSection from '../components/ProjectSection'
export default function Centrova() {
    return (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Centrova — Clinical Trial Matching
            </h1>

        <img
            src={placeholderImg}
            alt="Centrova Summary Image"
            className="mx-auto w-1/2 rounded-lg border border-gray-200 dark:border-gray-700 mb-8"
        />

            <ProjectSection
                title="LLM pipeline"
                description="I built a pipeline to asynchronously match patients to clinical trials using an LLM"
                bullets={[
                    { label: "Asynchronous", text: "each trial contains dozens of eligibility criteria that must be individually evaluated, so Bedrock takes 15 seconds to a minute per trial, far beyond API Gateway's 29-second timeout" },
                    { label: "Workflow", text: "Frontend POSTs patient info and trial ID to kick off the job, then polls for results via GET"}
                ]}
                imageSrc={architectureDiagram}
                imageAlt="Centrova architecture diagram"
            />
        </section>
    )
}
   

