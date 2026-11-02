import type { DiningRoom, Preferences, User, Vote } from '../contracts';
import { voteSignature } from './model';

export type RoomStatus = 'lobby' | 'voting' | 'tie' | 'complete';
export interface RoomSnapshot {
 id: string; code: string; name: string; dateTime?: string; scope?: string; hostId: string; status: RoomStatus;
 optionIds: string[]; winnerId: string | null; luckyUserId: string | null; revision: number;
 members: (User & { ready: boolean })[]; votes: Vote[];
}
export type GroupAction = 'create' | 'join' | 'read' | 'resume' | 'preferences' | 'details' | 'start' | 'vote' | 'draw';
export function wirePreferences(p: Preferences): Preferences {
 return { ...p, dislikedFoods: p.dislikedFoods ?? [], distanceMiles: Number.isFinite(p.distanceMiles) ? p.distanceMiles : 100000 };
}
export function snapshotRoom(s: RoomSnapshot): DiningRoom {
 const room: DiningRoom = { ...s, dateTime: s.dateTime ?? 'This meal', scope: s.scope ?? 'Choose area', invited: [], remote: true };
 if (s.luckyUserId && s.winnerId) room.luckyDiner = { userId: s.luckyUserId, restaurantId: s.winnerId, voteSignature: voteSignature(room) };
 return room;
}
// Same-room late responses must never rewind a finalized result.
export function newerRoom(current: DiningRoom | null, next: DiningRoom): DiningRoom {
 return current?.id === next.id && (current.revision ?? -1) > (next.revision ?? -1) ? current : next;
}
