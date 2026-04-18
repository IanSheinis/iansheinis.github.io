 // src/pages/Home.tsx
import Hero from '../components/Hero'
import self_portrait from '../assets/self_portrait.jpeg'
import centrova_overview from '../assets/centrova_overview.png'
import main_page from '../assets/main_page.png'
import TeaserCard from '../components/TeaserCard'
 export default function Home() {
    return (
        <>
        <Hero
            title="Ian Sheinis"
            description="CS student at UCSB. Backend and infrastructure engineer."
            imageSrc={self_portrait}
            imageAlt="Self Portrait"
            imageDesc="picture of me watching cloudformation rollback"
            links={[
            { label: "GitHub", href: "https://github.com/IanSheinis" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ian-sheinis" },
            ]}
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <TeaserCard
            title="Centrova — Clinical Trial Matching"
            description="Built the serverless backend infrastructure for a clinical-trial-matching platform, including an async SQS pipeline for AI-powered patient matching."
            imageSrc={centrova_overview}
            imageAlt="SQS to Lambda to Bedrock architecture"
            imageFit='contain'
            link="/centrova"
            />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <TeaserCard
            title="UCSBGeoGuessr"
            description="GeoGuessr inspired app"
            imageSrc={main_page}
            imageAlt="UCSBGeoGuessr main page"
            imageFit='cover'
            link="/ucsbgeoguessr"
            />
        </div>
        </>
    )
 }

