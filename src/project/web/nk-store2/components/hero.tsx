import { HeroBanner } from '../lib/kontent/models';
import styles from './hero.module.css'

export interface IHeroBanner{
	headline: string;
	background_image: any;
	cta_text: string;
	cta_route: string;
}

export default function Hero(hero: HeroBanner){
	const styling = {
		backgroundImage: `url('${hero.elements.background_image.value[0].url}')`,
		maxWidth: '1600px',
    	height: '32rem',
	}
    const heroClass = "w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right " + styles.hero;
    return <section className={heroClass} style={styling}>
	<div className="container mx-auto">
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
			<h1 className="text-white text-4xl my-4">{hero.elements.headline.value}</h1>
			{(hero.elements.cta_text.value && hero.elements.cta_route.value) ?
			(
			<a className="text-2xl text-white inline-block no-underline border-b border-white-600 leading-relaxed hover:text-white hover:border-white" href={hero.elements.cta_route.value}>{hero.elements.cta_text.value}</a>
			):
			<></>}
		</div>
	  </div>
</section>
}