import gameplay from '../assets/Ucsbgeoguessr_gameplay.mp4'
import UcsbgeoguessrDiagram from '../assets/ucsbgeoguessr_diagram.png'
import ProjectSection from '../components/ProjectSection'
import VideoSection from '../components/VideoSection'
 export default function UCSBGeoGuessr() {
    return (
        <>

        <VideoSection
            videoSrc={gameplay}
            title="UCSBGeoGuessr"
            labels={[
                "We wanted to build a GeoGuessr clone as a fun way for UCSB students to familiarize themselves with the campus and test their knowledge.",
                "Problem is, how do we store hundreds of images of campus without adding hundreds of MB to our app???" 
            ]}
        />

        <ProjectSection
                title="LLM pipeline"
                description="I built a pipeline to match patients to clinical trials using an LLM"
                bullets={[
                    { label: "Asynchronous", text: "Bedrock evaluation time exceeds API Gateway's 29-second timeout, therefore requiring asynchronous processing" },
                    { label: "Workflow", text: "Frontend POSTs patient info and trial ID to queue the evaluation, then polls for results via GET"}
                ]}
                imageSrc={UcsbgeoguessrDiagram}
                imageAlt="Centrova architecture diagram"
        />

        </>
    )
 }
