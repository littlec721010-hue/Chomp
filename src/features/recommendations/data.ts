import type { Restaurant, User } from '../contracts';
export const restaurants: Restaurant[] = [
  {id:'oishii',isMock:true,name:'Kumo Ramen Studio',cuisine:'Japanese',category:'Izakaya',price:[15,24],distanceMiles:.8,rating:4.9,reviews:'420+',cardImage:'06631.png',resultImage:'91d18.png',voteImage:'f37ad.png',ingredients:['Rice noodles','Shiitake','Scallions','Tofu'],supports:['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish'],perks:['Mock nut & shellfish-free prep','Gluten-Free Rice Noodles','Vegan Shiitake Broth','$15–24 / Person'],menu:[{name:'Shiitake Rice Noodle Ramen',price:18},{name:'Tofu & Mushroom Rice Bowl',price:17},{name:'Scallion Rice Noodles',price:19}]},
  {id:'taqueria',isMock:true,name:'Seoul Taco Kitchen',cuisine:'Korean',category:'Fusion Tacos',price:[18,26],distanceMiles:.6,rating:4.8,reviews:'310',cardImage:'73440.png',resultImage:'73440.png',voteImage:'73440.png',ingredients:['Corn tortillas','Tofu','Rice','Cabbage','Sesame'],supports:['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish'],perks:['Mock nut & shellfish-free prep','Gluten-Free Corn Tortillas','Plant-Based Korean Fillings','$18–26 / Person'],menu:[{name:'Korean Tofu Taco Trio',price:20},{name:'Mushroom Bibimbap',price:22},{name:'Cabbage & Tofu Rice Bowl',price:18}]},
  {id:'pasta',isMock:true,name:'Mila Pasta House',cuisine:'Italian',category:'Fresh Pasta',price:[20,28],distanceMiles:.9,rating:4.7,reviews:'185',cardImage:'cec1d.png',resultImage:'cec1d.png',voteImage:'cec1d.png',ingredients:['Rice pasta','Tomato','Basil','Mushrooms'],supports:['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish'],perks:['Mock nut & shellfish-free prep','Gluten-Free Rice Pasta','Vegetarian Tomato & Basil','$20–28 / Person'],menu:[{name:'Gluten-Free Tomato Basil Pasta',price:24},{name:'Mushroom Rice Tagliatelle',price:26},{name:'Roasted Tomato Rice Pasta',price:22}]}
];
export const demoMembers: User[] = [
  {id:'sarah',name:'Sarah',preferences:{cuisines:['Japanese','Mediterranean','Italian'],restrictions:['Gluten-Free'],budget:[15,30],distanceMiles:3.5}},
  {id:'alex',name:'Alex',preferences:{cuisines:['Japanese','Mediterranean','Italian'],restrictions:[],budget:[15,30],distanceMiles:5}},
  {id:'jamie',name:'Jamie',preferences:{cuisines:['Japanese','Mediterranean'],restrictions:['Vegetarian (Strict)'],budget:[15,35],distanceMiles:4}},
  {id:'taylor',name:'Taylor',preferences:{cuisines:['Japanese'],restrictions:['Peanut Allergy'],budget:[10,30],distanceMiles:5}}
];
export const asset = (name: string) => `/assets/figma/${name}`;
