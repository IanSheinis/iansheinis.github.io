import architectureDiagram from '../assets/centrova_diagram.svg'
import placeholderImg from '../assets/Placeholder.png'
import ProjectSection from '../components/ProjectSection'
export default function Centrova() {
    return (
        <>
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
                description="I built a pipeline to match patients to clinical trials using an LLM"
                bullets={[
                    { label: "Asynchronous", text: "Bedrock evaluation time exceeds API Gateway's 29-second timeout, therefore requiring asynchronous processing" },
                    { label: "Workflow", text: "Frontend POSTs patient info and trial ID to queue the evaluation, then polls for results via GET"}
                ]}
                imageSrc={architectureDiagram}
                imageAlt="Centrova architecture diagram"
            />
        </>
    )
}
   

