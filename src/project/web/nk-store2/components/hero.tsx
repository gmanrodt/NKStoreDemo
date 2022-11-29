import styles from './hero.module.css'

export interface IHeroBanner{
	headline: string;
	background_image: any;
	cta_text: string;
	cta_route: string;
}

export default function Hero({headline, background_image, cta_text, cta_route}: IHeroBanner){
	const styling = {
		backgroundImage: `url('${background_image.url}')`,
		maxWidth: '1600px',
    	height: '32rem',
	}
	console.log(background_image);
    const heroClass = "w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right " + styles.hero;
    return <section className={heroClass} style={styling}>
	<div className="container mx-auto">
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
			<h1 className="text-white text-4xl my-4">{headline}</h1>
			(if{cta_text && cta_route})
			<a className="text-2xl text-white inline-block no-underline border-b border-white-600 leading-relaxed hover:text-white hover:border-white" href={cta_route}>{cta_text}</a>
		</div>
	  </div>
</section>
}