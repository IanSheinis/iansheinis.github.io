import Hero from './components/Hero'
import self_portrait from './assets/self_portrait.jpeg'
export default function App() {
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
    </>
  )
}