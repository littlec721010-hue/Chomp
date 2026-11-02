import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';
import Dice from '../../../assets/v3/88623.svg';
import Arrow from '../../../assets/v3/1fbe0.svg';
import Calendar from '../../../assets/v3/87547.svg';
import Chevron from '../../../assets/v3/f4c1b.svg';
import Minus from '../../../assets/v3/3c126.svg';
import Plus from '../../../assets/v3/5d708.svg';
import Bulb from '../../../assets/v3/04b97.svg';
import AddCircle from '../../../assets/v3/bd846.svg';
import Utensils from '../../../assets/v3/4f915.svg';
import ItemMinus from '../../../assets/v3/d26fd.svg';
import ItemPlus from '../../../assets/v3/57c4b.svg';
import Add from '../../../assets/v3/be84c.svg';
import Crown from '../../../assets/v3/17252.svg';
import Pick from '../../../assets/v3/7740d.svg';
import Star from '../../../assets/v3/cc64e.svg';
import Orbit from '../../../assets/v3/2e201.svg';
import Sparkle from '../../../assets/v3/e51e3.svg';
import SparkleGreen from '../../../assets/v3/d66d8.svg';
import SparkleCoral from '../../../assets/v3/1b80c.svg';
import SparkleGold from '../../../assets/v3/9d66b.svg';
import SpinDice from '../../../assets/v3/34c6b.svg';
import Spin from '../../../assets/v3/b5746.svg';
import Diners from '../../../assets/v3/7e2de.svg';
import RamenTag from '../../../assets/v3/74786.svg';
import TacoTag from '../../../assets/v3/8e4d9.svg';
import Next from '../../../assets/v3/9712b.svg';

const icons = {dice:Dice,arrow:Arrow,calendar:Calendar,chevron:Chevron,minus:Minus,plus:Plus,bulb:Bulb,addCircle:AddCircle,utensils:Utensils,itemMinus:ItemMinus,itemPlus:ItemPlus,add:Add,crown:Crown,pick:Pick,star:Star,orbit:Orbit,sparkle:Sparkle,sparkleGreen:SparkleGreen,sparkleCoral:SparkleCoral,sparkleGold:SparkleGold,spinDice:SpinDice,spin:Spin,diners:Diners,ramenTag:RamenTag,tacoTag:TacoTag,next:Next} satisfies Record<string,ComponentType<SvgProps>>;
export type V3IconName = keyof typeof icons;
/** Imported SVGs keep the exact root geometry supplied by Figma. */
export function V3Icon({name}:{name:V3IconName}) { const Icon=icons[name]; return <Icon/>; }
