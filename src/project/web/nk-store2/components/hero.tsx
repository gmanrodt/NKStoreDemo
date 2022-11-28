import styles from './hero.module.css'

export default function Hero(){
    const heroClass = "w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right " + styles.hero;
    return <section className={heroClass}>
	<div className="container mx-auto">
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
			<h1 className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</h1>
			<a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">products</a>
		</div>
	  </div>
</section>
}