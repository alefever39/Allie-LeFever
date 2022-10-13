import HeadShot from "../Images/personal_website_portrait.jpg";

function AboutMe() {
  return (
    <div className="flex-col bg-red-400 rounded-md justify-around content-center shadow-lg p-2 sm:my-0 md:my-5 sm:mx-0 md:mx-20">
      <div>
        <h2 className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
          About Me
        </h2>
      </div>

      <div className="flex justify-around content-center">
        <div className="w-5/12 flex justify-center shadow-md">
          <img
            src={HeadShot}
            className="w-full h-auto object-contain rounded-md"
            alt="Picture of Allie"
          />
        </div>

        <div className="flex-col justify-center content-center w-5/12 px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-semibold">Hi! I'm</p>
            <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Allie LeFever
            </h2>
            <p className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
              I am a software engineer that has recently graduated from
              Flatiron. I worked as a systems engineer for Siemens for 9 years
              prior to joining Flatiron. At Siemens I used my organizational and
              analytical skills to plan out projects from start to finish, and
              my communication skills to manage multiple jobs simultaneously.
              However, I found myself wanting to express my creativity and use
              my problem-solving skills. I enrolled in Flatiron for the
              opportunity to express those parts of myself, and so far, I
              haven’t been disappointed.
            </p>
            <p className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
              At Flatiron I put my skills in JavaScript, React, Redux, HTML,
              CSS, Ruby on Rails, SQL, Git, PostgreSQL, and Heroku to develop
              and ship 3 full stack applications; Prattle, Reserve Set Play, and
              my capstone project Consumed.
            </p>
            <p className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
              I am so excited to continue my software engineering journey to
              create new, world changing technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
