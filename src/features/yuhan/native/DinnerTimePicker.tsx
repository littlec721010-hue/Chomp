import React, { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Button, ui } from './Controls';

const rowHeight = 40;
function Wheel({ values, value, onChange, label }: { values: string[]; value: string; onChange: (value: string) => void; label: string }) {
  const ref = useRef<ScrollView>(null);
  const choose = (index: number) => {
    const i = Math.max(0, Math.min(values.length - 1, index));
    onChange(values[i]); ref.current?.scrollTo({ y: i * rowHeight, animated: true });
  };
  return <View style={{ flex: 1, height: 120, overflow: 'hidden', borderRadius: 16, backgroundColor: '#FAECDF' }}>
    <View pointerEvents="none" style={{ position: 'absolute', top: 40, left: 0, right: 0, height: 40, backgroundColor: '#FFDF6D' }} />
    <ScrollView ref={ref} accessibilityLabel={label} showsVerticalScrollIndicator={false} nestedScrollEnabled snapToInterval={rowHeight} decelerationRate="fast"
      contentOffset={{ x: 0, y: Math.max(0, values.indexOf(value)) * rowHeight }} contentContainerStyle={{ paddingVertical: 40 }}
      onMomentumScrollEnd={event => choose(Math.round(event.nativeEvent.contentOffset.y / rowHeight))}
      onScrollEndDrag={event => { if (!event.nativeEvent.velocity?.y) choose(Math.round(event.nativeEvent.contentOffset.y / rowHeight)); }}>
      {values.map((v, index) => <Pressable key={v} accessibilityRole="button" accessibilityLabel={`${label}: ${v}`} accessibilityState={{ selected: v === value }} onPress={() => choose(index)} style={{ height: rowHeight, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: v === value ? 'JakartaBold' : 'Jakarta', fontSize: 19, color: v === value ? '#251E14' : '#8C7E71' }}>{v}</Text>
      </Pressable>)}
    </ScrollView>
  </View>;
}
function parseTime(value: string) {
  const now = new Date(), date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (/^Tomorrow/i.test(value)) date.setDate(date.getDate() + 1);
  else { const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})/); if (iso) date.setFullYear(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])); }
  const time = value.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  return { date, hour: time?.[1] ?? '7', minute: time?.[2] ?? '30', period: time?.[3].toUpperCase() ?? 'PM' };
}
export function DinnerTimePicker({ initial, onConfirm, onChange }: { initial: string; onConfirm: (value: string) => void; onChange?: (value:string)=>void }) {
  const [start] = useState(() => parseTime(initial));
  const [date, setDate] = useState(start.date), [month, setMonth] = useState(new Date(start.date.getFullYear(), start.date.getMonth(), 1));
  const [hour, setHour] = useState(start.hour), [minute, setMinute] = useState(start.minute), [period, setPeriod] = useState(start.period);
  const y = month.getFullYear(), m = month.getMonth(), first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((first + days) / 7) * 7 }, (_, i) => i - first + 1);
  const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}, ${hour}:${minute} ${period}`;
  useEffect(()=>{onChange?.(formatted);},[formatted,onChange]);
  return <View style={{ gap: 14 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Pressable accessibilityRole="button" accessibilityLabel="Previous month" onPress={() => setMonth(new Date(y, m - 1, 1))} style={{ padding: 10 }}><Text style={ui.title}>‹</Text></Pressable>
      <Text style={[ui.buttonText, { fontSize: 16 }]}>{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</Text>
      <Pressable accessibilityRole="button" accessibilityLabel="Next month" onPress={() => setMonth(new Date(y, m + 1, 1))} style={{ padding: 10 }}><Text style={ui.title}>›</Text></Pressable>
    </View>
    <View style={{ flexDirection: 'row' }}>{['S','M','T','W','T','F','S'].map((day, i) => <Text key={i} style={[ui.body, { width: '14.2857%', textAlign: 'center', color: '#8C7E71' }]}>{day}</Text>)}</View>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{cells.map((day, i) => {
      const valid = day > 0 && day <= days, selected = valid && date.getFullYear() === y && date.getMonth() === m && date.getDate() === day;
      return <Pressable key={i} disabled={!valid} accessibilityRole="button" accessibilityLabel={valid ? `${y}-${m + 1}-${day}` : undefined} accessibilityState={{ selected }} onPress={() => setDate(new Date(y, m, day))} style={{ width: '14.2857%', height: 36, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: selected ? '#FFD43B' : 'transparent' }}><Text style={selected ? ui.buttonText : ui.body}>{valid ? day : ''}</Text></View>
      </Pressable>;
    })}</View>
    <Text style={ui.buttonText}>Time</Text>
    <View style={{ flexDirection: 'row', gap: 8 }}><Wheel label="Hour" values={Array.from({length:12},(_,i)=>String(i+1))} value={hour} onChange={setHour}/><Wheel label="Minute" values={Array.from({length:60},(_,i)=>String(i).padStart(2,'0'))} value={minute} onChange={setMinute}/><Wheel label="AM or PM" values={['AM','PM']} value={period} onChange={setPeriod}/></View>
    <Text style={[ui.body, { textAlign: 'center' }]}>{formatted}</Text>
    <Button onPress={() => onConfirm(formatted)}>Confirm date & time</Button>
  </View>;
}
