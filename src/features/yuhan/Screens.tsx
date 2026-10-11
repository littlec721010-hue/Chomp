import React, { useRef } from 'react';
import { Image, Pressable, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { useDining } from '../DiningProvider';
import { diningPreferences } from '../preferencesAdapter';
import { restaurants } from '../recommendations/data';
import { castVote, pickRandom, rankRestaurants, winningRestaurant } from '../group/model';
import { ChompModule, type Route } from './ChompModule';
import { Page, Action, s } from '../decide/ui';
import { T } from '../../components/ui';
import { photos } from '../decide/assets';

type Props = NativeStackScreenProps<RootStackParamList>;
function IntegratedScreen({ navigation, route }: Props) {
  const d = useDining();
  const params = route.params as { group?: boolean; id?: string; joined?: boolean; method?: 'free' | 'random' } | undefined;
  const group = route.name.startsWith('Group') || !!params?.group;
  const selected = useRef(params?.id ?? d.history[0]?.id ?? restaurants[0].id);
  selected.current = params?.id ?? selected.current;
  const user = { ...d.user, preferences: diningPreferences(d.meal) };
  const matches = rankRestaurants(restaurants, group ? d.room?.members ?? [] : [user]);
  const routes: Partial<Record<keyof RootStackParamList, Route>> = {
    Recommendations: group ? '/group/recommendations' : '/recommendations',
    Restaurant: group ? '/group/result' : '/recommendations/result',
    Group: '/group', GroupRoom: params?.joined ? '/group/join' : '/group/create',
    GroupConsensus: '/group/consensus', GroupVote: params?.method === 'random' ? '/group/random-vote' : '/group/vote',
  };
  if (group && route.name !== 'Group' && !d.room) return <Page title="No active room"><Action title="Create or join a room" onPress={() => navigation.replace('Group')} /></Page>;
  function navigate(next: Route) {
    switch (next) {
      case '/group': navigation.navigate('Group'); break;
      case '/group/create': navigation.navigate('GroupRoom', { joined: false }); break;
      case '/group/join': navigation.navigate('GroupRoom', { joined: true }); break;
      case '/group/consensus': navigation.navigate('GroupConsensus'); break;
      case '/recommendations': navigation.navigate('Recommendations', { group: false }); break;
      case '/group/recommendations': navigation.navigate('Recommendations', { group: true }); break;
      case '/group/vote': navigation.navigate('GroupVote', { method: 'free' }); break;
      case '/group/random-vote': navigation.navigate('GroupVote', { method: 'random' }); break;
      case '/recommendations/result': navigation.navigate('Restaurant', { id: selected.current }); break;
      case '/group/result': navigation.navigate('Restaurant', { id: selected.current, group: true }); break;
    }
  }
  const pending = route.name === 'GroupVote' && d.room && !winningRestaurant(d.room, matches);
  return <View style={{ flex: 1 }}>
    {route.name === 'Recommendations' && !matches.length && <View style={{ padding: 12, gap: 8, backgroundColor: '#FFF2C4' }}>
      <T style={{ fontSize: 12 }}>No sample restaurants match all your preferences. The cards below are a HiFi preview; selection is unavailable.</T>
      <Action title="Review meal preferences" variant="beige" onPress={() => navigation.navigate('DecidePreferences', { group })} />
    </View>}
    <ChompModule route={routes[route.name as keyof RootStackParamList]!} user={user} room={d.room ?? undefined} matches={matches}
    selectedId={route.name === 'Restaurant' ? params?.id : undefined} bookmarks={d.bookmarks} onBookmark={d.bookmark}
    onRoomChange={d.setRoom} onCreateRoom={() => d.startRoom(false)} onJoinRoom={() => d.startRoom(true)}
    onHome={() => navigation.navigate('Main', { screen: 'Decide' })} onNavigate={navigate}
    onBackToPreferences={() => navigation.navigate('DecidePreferences', { group: false })}
    onRestaurantSelected={restaurant => { selected.current = restaurant.id; d.select(restaurant); }}
    onPreferences={room => { d.setRoom(room); navigation.navigate('DecidePreferences', { group: true }); }} />
    {pending && <View style={{ padding: 12 }}><Action title="Simulate sample members’ votes" variant="beige" disabled={!matches.length} onPress={() => {
      let room = d.room!;
      for (const member of room.members.filter(m => m.id !== d.user.id)) room = castVote(room, { userId: member.id, restaurantId: pickRandom(matches).id, method: 'random' });
      d.setRoom(room);
    }} /></View>}
  </View>;
}
export const RecommendationsScreen = IntegratedScreen;
export const RestaurantScreen = IntegratedScreen;
export const GroupScreen = IntegratedScreen;
export const GroupRoomScreen = IntegratedScreen;
export const ConsensusScreen = IntegratedScreen;
export const GroupVoteScreen = IntegratedScreen;
export function HistoryScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'History'>) {
  const d = useDining();
  return <Page title="Recent Chomps" onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Main', { screen: 'Decide' })}>
    {!d.recent.length && <T>Your choices from this session will appear here.</T>}
    {d.recent.map(r => <Pressable key={r.id} accessibilityRole="button" accessibilityLabel={`Chomp at ${r.name}`} style={s.panel} onPress={() => { d.select(r); navigation.navigate('Restaurant', { id: r.id }); }}>
      <Image source={photos[r.cardImage]} style={{ height: 150, width: '100%', borderRadius: 20 }} resizeMode="cover" /><T style={s.cardTitle}>{r.name}</T><T>{r.cuisine} • {r.distanceMiles} mi</T><T>Chomp Again →</T>
    </Pressable>)}
  </Page>;
}
