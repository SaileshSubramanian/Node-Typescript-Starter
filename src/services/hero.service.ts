import { data } from "./data";
import { Ihero } from "../interfaces/hero.interface";



export const addHero = async (hero: Ihero): Promise<Ihero> => {
	hero.id = data.heroes.length + 1;
	await data.heroes.push(hero);
	return hero;
};

export const updateHero = async (hero: Ihero): Promise<Ihero> => {
	const index = data.heroes.findIndex(h => h.id === hero.id);
	await data.heroes.splice(index, 1, hero);
	return hero;
};
export const deleteHero = async (id: number): Promise<boolean> => {
	data.heroes = await data.heroes.filter(h => h.id !== id);
	return true;
};
export const getHeroes = async (): Promise<Ihero[]> => {
	const heroes = await data.heroes;
	return heroes;

};

