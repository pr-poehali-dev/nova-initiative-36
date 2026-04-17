import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import LessonsSection from "@/components/LessonsSection"
import ParentsSection from "@/components/ParentsSection"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <LessonsSection />
      <ParentsSection />
    </>
  )
}

export default Index
