interface AboutProps extends React.PropsWithChildren {}

export const About: React.FunctionComponent<AboutProps> = (): JSX.Element => {
  return (
    <section className="relative flex w-full select-none flex-col items-center justify-center bg-light-primary px-5 pt-10 pb-20 text-light-content dark:bg-dark-primary dark:text-dark-content md:min-h-[calc(100vh-176px)]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <img
            className="w-52 rounded-full shadow-md shadow-light-heading dark:shadow-dark-heading"
            src="/assets/logo.jpg"
            alt="mad frogs logo"
          />
          <div className="flex w-[90vw] flex-col items-center justify-center gap-4 sm:w-[70vw] lg:w-[600px] xl:w-[650px] 2xl:w-[1100px]">
            <h2 className="uppercase text-light-hover dark:text-dark-hover sm:text-lg">
              We solve problems as easy as eating a [BUG]
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod
              expedita laudantium quasi minus quae nobis dignissimos officia nam
              amet voluptatibus accusantium, exercitationem assumenda temporibus
              rerum architecto ullam, fugit voluptates? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. A quod expedita laudantium
              quasi minus quae nobis dignissimos officia nam amet voluptatibus
              accusantium, exercitationem assumenda temporibus rerum architecto
              ullam, fugit voluptates?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A quod expedita laudantium quasi minus quae
              nobis dignissimos officia nam amet voluptatibus accusantium,
              exercitationem assumenda temporibus rerum architecto ullam, fugit
              voluptates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
