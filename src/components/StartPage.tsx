import { Nav } from './Nav';

function getImageUrl() {
    return new URL(`../assets/soldado.png`, import.meta.url).href
  }

export function StartPage() {
    return (
        <>
            <Nav />
            <section className='grid grid-cols-2 max-h-[985px] h-full items-center'>
                <div className="flex-row justify-center">
                    <h1 className='font-bold text-x-large text-primary-700'>
                        We create gaming breakthroughs.
                    </h1>
                    <p className='font-medium text-primary-700'>
                        Hawk Industries is a company that inspires new ways to play games by combining innovative software with an easy to use interface.
                    </p>
                    <div className="flex flex-row gap-4 mt-14">
                        <button className='shadow-lg shadow-primary-700/40 border border-primary-900 font-bold text-primary-100 rounded bg-primary-900 px-[53px] py-4 hover:bg-primary-200 transition duration-150 hover:border-primary-200 hover:text-primary-700'>See Products</button>
                        <button className='shadow-lg shadow-primary-700/20 border border-primary-200 font-bold rounded text-primary-900 px-[53px] py-4 bg-primary-200'>Contact Us</button>
                    </div>
                </div>
                <div className='h-full w-full ml-6'>
                    <img alt="soldado" src={getImageUrl()} />
                </div>
            </section>
        </>
    );
}