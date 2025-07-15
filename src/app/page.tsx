export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-lwb-orange-200 bg-gradient-to-b from-white pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-lwb-grey-50 lg:p-4 text-lwb-black-950">
          L.W. Barker Transport Services LTD
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold text-brand-black">
          Complete <span className="text-brand-orange">Flatbed Transport</span> Solutions
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-6">
        <div className="group rounded-lg border border-lwb-grey-200 px-5 py-4 transition-colors hover:border-lwb-orange-300 hover:bg-lwb-orange-50">
          <h2 className="mb-3 text-2xl font-semibold text-brand-black">
            Services{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-brand-orange">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-brand-grey">
            From 3.5ton van to 44ton Arctic - we cover it all
          </p>
        </div>

        <div className="group rounded-lg border border-lwb-grey-200 px-5 py-4 transition-colors hover:border-lwb-orange-300 hover:bg-lwb-orange-50">
          <h2 className="mb-3 text-2xl font-semibold text-brand-black">
            Fleet{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-brand-orange">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-brand-grey">
            Professional flatbed transport vehicles
          </p>
        </div>

        <div className="group rounded-lg border border-lwb-grey-200 px-5 py-4 transition-colors hover:border-lwb-orange-300 hover:bg-lwb-orange-50">
          <h2 className="mb-3 text-2xl font-semibold text-brand-black">
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-brand-orange">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-brand-grey">
            Learn more about our transport services
          </p>
        </div>

        <div className="group rounded-lg border border-lwb-grey-200 px-5 py-4 transition-colors hover:border-lwb-orange-300 hover:bg-lwb-orange-50">
          <h2 className="mb-3 text-2xl font-semibold text-brand-black">
            Contact{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-brand-orange">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-brand-grey">
            Get a quote for your transport needs
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button className="btn-primary">
          Get a Quote
        </button>
        <button className="btn-secondary">
          View Services
        </button>
      </div>
    </main>
  )
} 