import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Maybetuandat, a passionate Cloud Infrastructure
                Engineer and Pull-stack Developer specializing in building
                scalable, cloud-native solutions.{" "}
                <span className="font-bold text-white">
                  With expertise in OpenStack, Kubernetes, and modern web
                  technologies
                </span>
                , I'm dedicated to creating robust infrastructure and seamless
                user experiences.
              </p>
              <p className="text-white">
                My focus is on leveraging open-source technologies to build
                resilient, scalable systems that empower businesses to thrive in
                the cloud era. Currently, I'm diving deep into container
                orchestration, microservices architecture, and DevOps practices
                to deliver enterprise-grade solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and open-source advocate, driven by a
                    passion for cloud technologies and infrastructure
                    automation. From Kubernetes clusters to OpenStack
                    deployments, I love transforming complex infrastructure
                    challenges into elegant, scalable solutions that drive
                    innovation forward.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      maybetuandat
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
