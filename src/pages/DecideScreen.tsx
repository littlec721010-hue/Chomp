import { useRef } from 'react'
import { useDining } from '../features/DiningProvider'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../styles/theme'
import SoloBadge from '../assets/decide/0995c.svg'
import GroupBadge from '../assets/decide/c3159.svg'
import SoloPerson from '../assets/decide/651f1.svg'
import GroupPeople from '../assets/decide/79563.svg'
import Arrow from '../assets/decide/1fbe0.svg'
import WhiteArrow from '../assets/decide/03d99.svg'
import History from '../assets/decide/99caf.svg'
import Repeat from '../assets/decide/4fff8.svg'
import Battery from '../../public/assets/navigation/battery.svg'
import Wifi from '../../public/assets/navigation/wifi.svg'
import Cellular from '../../public/assets/navigation/cellular.svg'

type Props = { onSolo: () => void; onGroup: () => void; onHistory: () => void; onRestaurant: (id: string) => void }
const restaurantPhotos: Record<string, number> = { oishii: require('../../public/assets/figma/06631.png'), pasta: require('../../public/assets/figma/cec1d.png'), taqueria: require('../../public/assets/figma/73440.png') };
function Choice({group=false,onPress}: {group?:boolean;onPress:()=>void}) {
  const Badge = group ? GroupBadge : SoloBadge
  const Illustration = group ? GroupPeople : SoloPerson
  const Next = group ? WhiteArrow : Arrow
  return <View style={[styles.choice,group&&styles.groupCard]}>
    <View style={styles.copy}>
      <View style={[styles.badge,group&&styles.groupBadge]}><Badge/><Text style={[styles.badgeText,group&&styles.groupBadgeText]}>{group?'Party of 2+':'Solo Cravings'}</Text></View>
      <Text style={styles.choiceTitle}>{group?'With Friends':'Just Me'}</Text>
      <Text style={[styles.description,group&&styles.groupDescription]}>{group?'Vote together or let Chomp\nsurprise the squad.':'Quick solo cravings, tailored\nstrictly to your taste.'}</Text>
    </View>
    <View pointerEvents="none" accessibilityElementsHidden style={[styles.illustration,group&&styles.groupIllustration]}><Illustration/></View>
    <Pressable accessibilityRole="button" onPress={onPress} style={({pressed})=>[styles.cta,group&&styles.groupCta,pressed&&styles.pressed]}><Text style={[styles.ctaText,group&&styles.groupCtaText]}>{group?'Create / Join a Group':'Start Solo Pick'}</Text><Next/></Pressable>
  </View>
}
export function DecideScreen({onSolo,onGroup,onHistory,onRestaurant}:Props) {
  const dining = useDining();
  const recent = dining.recent.map(r => ({ image: restaurantPhotos[r.id], id: r.id, name: r.name, cuisine: r.cuisine, distance: r.distanceMiles + ' mi' }));
  const tray = useRef<ScrollView>(null)
  const offset = useRef(0)
  const drag = useRef<{ startX: number; startOffset: number } | null>(null)
  const suppressClickUntil = useRef(0)
  return <View style={styles.safe}>

    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.hook}><Text style={styles.title}>What are we eating{'\n'}today?</Text><Text style={styles.subtitle}>No debates, no endless scrolling. Just good food.</Text></View>
      <View style={styles.choices}><Choice onPress={onSolo}/><Choice group onPress={onGroup}/></View>
      <View style={styles.recent}>
        <View style={styles.recentHeader}><View style={styles.recentLabel}><History/><Text style={styles.recentTitle}>Recent Chomps</Text></View><Pressable accessibilityRole="link" hitSlop={8} onPress={onHistory}><Text style={styles.seeAll}>See all ({recent.length})</Text></Pressable></View>
        {!recent.length && <Text style={styles.meta}>Your choices from this session will appear here.</Text>}
        <ScrollView ref={tray} horizontal nestedScrollEnabled directionalLockEnabled showsHorizontalScrollIndicator={false}
          snapToInterval={202} decelerationRate="fast" scrollEventThrottle={16}
          onScroll={event => { offset.current = event.nativeEvent.contentOffset.x }}
          onPointerDown={event => { if (Platform.OS === 'web' && event.nativeEvent.pointerType === 'mouse' && event.nativeEvent.button === 0) drag.current = { startX: event.nativeEvent.clientX, startOffset: offset.current } }}
          onPointerMove={event => {
            if (!drag.current || event.nativeEvent.buttons !== 1) return
            const distance = event.nativeEvent.clientX - drag.current.startX
            if (Math.abs(distance) > 5) { suppressClickUntil.current = Date.now() + 250; tray.current?.scrollTo({ x: Math.max(0, drag.current.startOffset - distance), animated: false }) }
          }}
          onPointerUp={() => { drag.current = null }} onPointerCancel={() => { drag.current = null }} contentContainerStyle={styles.tray} style={styles.trayViewport}>
          {recent.map(item=><View key={item.id} style={styles.restaurant}><View style={styles.photo}><Image source={item.image} accessibilityLabel={item.name} resizeMode="cover" style={[styles.image,{width:'100%',left:0}]}/></View><View><Text numberOfLines={1} style={styles.restaurantName}>{item.name}</Text><Text style={styles.meta}>{item.cuisine} • {item.distance}</Text></View><Pressable accessibilityRole="button" accessibilityLabel={`Chomp again at ${item.name}`} onPress={()=>{if(Date.now() >= suppressClickUntil.current) onRestaurant(item.id)}} style={({pressed})=>[styles.again,pressed&&styles.pressed]}><Repeat/><Text style={styles.againText}>Chomp Again</Text></Pressable></View>)}
        </ScrollView>
      </View>
    </ScrollView>
  </View>
}
const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:theme.colors.background},status:{height:47},time:{position:'absolute',left:50,top:12,fontSize:17,lineHeight:22,fontWeight:'600',color:'#181818'},statusIcons:{position:'absolute',right:32,top:17,flexDirection:'row',alignItems:'center',gap:5},
  content:{paddingTop:5,paddingHorizontal:20,paddingBottom:72},hook:{marginLeft:8,marginRight:-8},title:{fontFamily:theme.fonts.extrabold,fontSize:32,lineHeight:32,letterSpacing:-.8,color:theme.colors.ink},subtitle:{fontFamily:theme.fonts.medium,fontSize:14,lineHeight:19.25,color:theme.colors.ink,marginTop:5},choices:{marginTop:15.75,gap:24.5},choice:{height:214.5,padding:24,borderRadius:32,backgroundColor:theme.colors.surface,boxShadow:'0px 8px 24px -4px rgba(62,45,18,0.08)'},groupCard:{backgroundColor:'#f4e6d9'},copy:{paddingTop:3},badge:{alignSelf:'flex-start',flexDirection:'row',alignItems:'center',gap:4,paddingHorizontal:10,paddingVertical:2,borderRadius:999,backgroundColor:theme.colors.primary},badgeText:{fontFamily:theme.fonts.bold,fontSize:11,lineHeight:14,letterSpacing:.33,color:theme.colors.onPrimary},groupBadge:{backgroundColor:'#ffdad2'},groupBadgeText:{color:'#84240d'},choiceTitle:{fontFamily:theme.fonts.bold,fontSize:24,lineHeight:32,letterSpacing:-.6,color:theme.colors.ink,marginTop:8},description:{fontFamily:theme.fonts.medium,fontSize:14,lineHeight:22.75,color:theme.colors.muted,marginTop:4},groupDescription:{color:theme.colors.ink},illustration:{position:'absolute',right:25,top:42.6,width:71,height:70.1728},groupIllustration:{right:30,top:39.7},cta:{position:'absolute',left:24,right:24,top:158,height:38,borderRadius:999,backgroundColor:theme.colors.primary,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:8,boxShadow:'0px 8px 24px -4px rgba(62,45,18,0.12)'},groupCta:{top:153,backgroundColor:'#a53b22'},ctaText:{fontFamily:theme.fonts.bold,fontSize:15,lineHeight:20,letterSpacing:.15,color:theme.colors.onPrimary},groupCtaText:{color:'white'},pressed:{opacity:.75},recent:{marginTop:24.5,gap:8},recentHeader:{paddingHorizontal:4,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},recentLabel:{flexDirection:'row',alignItems:'center',gap:6},recentTitle:{fontFamily:theme.fonts.semibold,fontSize:18,lineHeight:26,color:theme.colors.ink},seeAll:{fontFamily:theme.fonts.bold,fontSize:11,lineHeight:14,letterSpacing:.33,color:theme.colors.primary},trayViewport:{marginHorizontal:-4,height:218},tray:{gap:12,paddingBottom:8,paddingRight:4},restaurant:{width:190,height:210,padding:12,gap:8,borderRadius:16,backgroundColor:'white',boxShadow:'0px 4px 16px -2px rgba(62,45,18,0.06)'},photo:{height:96,width:'100%',borderRadius:48,overflow:'hidden',backgroundColor:theme.colors.soft},image:{position:'absolute',top:0,height:'100%'},restaurantName:{fontFamily:theme.fonts.semibold,fontSize:18,lineHeight:26,color:'#211a13'},meta:{fontFamily:theme.fonts.bold,fontSize:11,lineHeight:14,letterSpacing:.33,color:theme.colors.muted},again:{marginTop:4,backgroundColor:theme.colors.soft,borderRadius:999,paddingVertical:6,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:4},againText:{fontFamily:theme.fonts.semibold,fontSize:13,lineHeight:18,color:'#211a13'},
})
