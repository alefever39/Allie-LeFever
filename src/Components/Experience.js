function Experience() {
  return (
    <div className="flex-col bg-red-400 rounded-md justify-around content-center shadow-lg p-2 sm:my-0 md:my-5 sm:mx-0 md:mx-20">
      <div>
        <h2 className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
          Engineering Experience
        </h2>
      </div>
      <div className="flex-col justify-center content-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold">Siemens Industries, Inc.</h2>
        <p className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
          Systems Engineer
        </p>
        <ul class="list-disc">
          <li>
            Engineered building automation for HVAC systems in more than 50
            buildings.
          </li>
          <li>Wrote RFIs to clarify information in contract documents.</li>
          <li>
            Evaluated project specifications to ensure selected parts matched
            desired technical requirements.
          </li>
          <li>
            Created drawings and assembled technical data sheets to convey
            design to Mechanical Engineer and Technician.
          </li>
          <li>
            Collaborated with Project Manager to ensure a smooth and accurate
            installation of project design.
          </li>
          <li>Managed multiple projects simultaneously.</li>
        </ul>

        <p className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg text-lg">
          Engineering Intern
        </p>
        <ul class="list-disc">
          <li>Built and modified AutoCAD drawings.</li>
          <li>Collected data sheets for selected parts.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
