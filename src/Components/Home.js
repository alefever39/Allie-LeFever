import HeadShot from "../Images/personal_website_portrait.jpg";
import SectionCard from "./SectionCard";

function Home() {
  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
  ];

  return (
    <div className="bg-zinc-500/75 flex-col content-center justify-center w-screen p-10">
      <SectionCard>
        <div className="w-5/12 flex justify-center shadow-md">
          <img
            src={HeadShot}
            className="w-full h-auto object-contain rounded-md"
            alt="Picture of Allie"
          />
        </div>

        <div className="flex-col justify-center content-center w-5/12 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold">Hi! I'm</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Allie LeFever
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <p>Here there be icons</p>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </SectionCard>
    </div>
  );
}

export default Home;
