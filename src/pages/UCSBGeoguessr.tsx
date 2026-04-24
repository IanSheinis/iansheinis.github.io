import gameplay from '../assets/Ucsbgeoguessr_gameplay.mp4'
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

        </>
    )
 }
