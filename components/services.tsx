import Title from "@/components/ui/title";
import Container from "./shared/container";
import Service from "@/components/ui/service";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center mb-10 lg:mb-0"
    >
      <Container>
        <Title title="Fitness Plans &" titlePrimary="Nutritions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          <Service
            image="/icons/icon-1.png"
            title="Weight Loss"
            description="Achieve sustainable weight loss with customized training and nutrition plans designed to help you burn fat while maintaining muscle mass."
          />
          <Service
            image="/icons/yoga.png"
            title="Classic Yoga"
            description="Enhance flexibility, balance, and mindfulness with expert-led yoga sessions, suitable for all skill levels."
          />
          <Service
            image="/icons/cycling.png"
            title="Cycling"
            description="Boost cardiovascular endurance and lower body strength with high-intensity indoor and outdoor cycling workouts."
          />
          <Service
            image="/icons/body.png"
            title="Body Building"
            description="Build strength and muscle definition with scientifically backed resistance training and nutrition strategies."
          />
          <Service
            image="/icons/musculation.png"
            title="Musculation"
            description="Develop muscular strength and endurance through targeted weightlifting programs designed for progressive overload."
          />
          <Service
            image="/icons/running.png"
            title="Fitness Running"
            description="Improve speed, stamina, and overall fitness with structured running programs tailored to your goals."
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
