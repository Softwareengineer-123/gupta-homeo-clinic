import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import FeaturedTreatments from "../components/home/FeaturedTreatments/FeaturedTreatments";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DoctorPreview from "../components/home/DoctorPreview/DoctorPreview";
import PatientPreview from "../components/home/PatientPreview/PatientPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedTreatments />
      <WhyChooseUs />
      <DoctorPreview />
      <PatientPreview />
    </>
  );
}