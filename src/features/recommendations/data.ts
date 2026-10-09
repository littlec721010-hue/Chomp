import type { Restaurant, User } from '../contracts';
export const restaurants: Restaurant[] = [
  {id:'oishii',name:'Oishii Ramen & Izakaya',cuisine:'Japanese',category:'Izakaya',price:[15,30],distanceMiles:.8,rating:4.9,reviews:'420+',cardImage:'06631.png',resultImage:'91d18.png',voteImage:'f37ad.png',supports:['Gluten-Free','Vegetarian (Strict)','Peanut Allergy'],perks:['Nut-Free Line Safe','16-Hr Rich Broth','Vegan Shiitake Prep','<$20 / Person'],menu:[{name:'Rich Tonkotsu Ramen',price:18},{name:'Vegan Shiitake Ramen',price:17},{name:'Gluten-Free Rice Noodles',price:19}]},
  {id:'taqueria',name:'Taqueria El Sol Dorado',cuisine:'Mexican',category:'Street Food',price:[20,30],distanceMiles:1.2,rating:4.8,reviews:'310',cardImage:'73440.png',resultImage:'73440.png',voteImage:'73440.png',supports:['Gluten-Free','Vegetarian (Strict)','Peanut Allergy'],perks:['Nut-Free Kitchen','Handmade Corn Tortillas','Vegan Choices','$20–30 / Person'],menu:[{name:'Street Taco Trio',price:20},{name:'Vegetarian Corn Tacos',price:22}]},
  {id:'pasta',name:'Pasta Fresca Handcrafted',cuisine:'Italian',category:'Fresh Pasta',price:[25,40],distanceMiles:1.5,rating:4.7,reviews:'185',cardImage:'cec1d.png',resultImage:'cec1d.png',voteImage:'cec1d.png',supports:['Gluten-Free','Vegetarian (Strict)','Peanut Allergy'],perks:['Gluten-Free Pasta','Fresh Extruded Noodles','Vegetarian Choices','$25–40 / Person'],menu:[{name:'Handcrafted Tagliatelle',price:28},{name:'Gluten-Free Pasta',price:30}]}
];
export const demoMembers: User[] = [
  {id:'sarah',name:'Sarah',preferences:{cuisines:['Japanese','Mediterranean','Italian'],restrictions:['Gluten-Free'],budget:[15,30],distanceMiles:3.5}},
  {id:'alex',name:'Alex',preferences:{cuisines:['Japanese','Mediterranean','Italian'],restrictions:[],budget:[15,30],distanceMiles:5}},
  {id:'jamie',name:'Jamie',preferences:{cuisines:['Japanese','Mediterranean'],restrictions:['Vegetarian (Strict)'],budget:[15,35],distanceMiles:4}},
  {id:'taylor',name:'Taylor',preferences:{cuisines:['Japanese'],restrictions:['Peanut Allergy'],budget:[10,30],distanceMiles:5}}
];
export const asset = (name: string) => `/assets/figma/${name}`;
