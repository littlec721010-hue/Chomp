# Sprint 3 P02 Live Usability Session Record

This record combines the supplied conversation excerpts and moderator clarifications. It records one real moderated session. Missing measurements and unverified outcomes have not been simulated.

## Session details

| Field | Recorded value |
| --- | --- |
| Moderator | Tongrong |
| Participant | P02 |
| Date and time | November 1, 2026, approximately 9:58–10:22 PM, America/New_York |
| Notes consent | Yes |
| Recording consent | Yes |
| Deletion date | Unknown |
| Participant device | Windows PC, Google Chrome; versions unknown |
| Moderator device | iOS, Safari; versions unknown |
| Deployment | https://chomp-pk3oe3k96-chomp4.vercel.app/ |
| Tested commit | Unknown; the current branch HEAD must not be substituted for the tested deployment SHA |
| Both clients reloaded before testing | Yes, moderator confirmed |
| Mode | Live authenticated |
| Room | QEA-994 |
| Accessibility settings | None reported |
| Source evidence | Moderator-supplied 1.txt, 2.txt and 3.txt and subsequent confirmations; original files retained outside the repository |

Task durations and ease ratings were not collected. No observation timestamps are assigned.

## Task outcomes

U means unassisted completion; A means assisted completion; F means failed or blocked. Completed indicates moderator-confirmed completion with assistance level unrecorded. Task fixture details differed from the task packet in places, so completion does not imply every scripted assertion was verified.

| Task | Outcome | Observation and qualification | Evidence |
| --- | --- | --- | --- |
| T0 | U | Registration, email verification and login completed independently. | Moderator confirmation |
| T1 | A | Created a group, shared the invitation code and confirmed both members joined. Moderator clarified which code to share. Exact date/time setup not established. | 2.txt and moderator confirmation |
| T2 | U | Submitted preferences independently and checked the other member readiness. | Moderator confirmation |
| T3 | U | Viewed the group summary, started voting and recognized demo restaurant information. | Moderator confirmation |
| T4 | U | Submitted a Random vote and changed the vote before the partner voted. | Moderator confirmation |
| T5 | F | Clients displayed different candidate lists with no restaurant in common, preventing both members from choosing the same restaurant. | Moderator clarification; P02 DEV 02 |
| T6 | Completed | Moderator confirmed successful completion. Participant discussed Lucky Diner as helping two people decide. Assistance level and all detailed reload assertions were not recorded. | Moderator confirmation; 3.txt |
| O1 | Completed | Moderator confirmed completion of joining another host's group. Assistance level not recorded. | Moderator confirmation |
| O2 | A | Used an OCR receipt rather than the manual fixture, changed diner count to three and reported $38.11 per person. Initially could not find the diner-count editor and received guidance. Exact receipt arithmetic not independently verified. | 3.txt |
| O3 | A | Edited price, tax and tip; added and deleted an item; reported updated calculations. Moderator provided prompts. Invalid-price rejection remains unverified because the discussed value was zero, which may be valid for a free item. | 3.txt |
| O4 | A | Saved a profile preference, reopened settings, made another edit and cancelled it; confirmed the intended saved information remained. Exact scripted cuisine and reload assertions not established. | 3.txt |

## Findings and triage

| Finding | Classification | Status and impact |
| --- | --- | --- |
| P02 DEV 01 | Important | Open: yellow bars disagree with numeric match percentages, confusing interpretation of group preferences. |
| P02 DEV 02 | Critical | Open: different candidate sets prevent a shared restaurant selection; T5 is blocked. |
| P02 DEV 03 | Important | Open: leaving for another webpage and returning refreshes the app into No active room. Room recovery must be checked; escalate if the existing room cannot be resumed. Server data loss is not established. |

Reproduction steps, expected behavior and closure checks are in the [development defect register](Sprint3-Defect-Reporting-and-Reproduction.md#p02-live-session-findings-recorded-november-1-2026). No finding is marked fixed. Deferred work requires an explicit scheduling decision; none of these findings is classified Out of Scope.

## Observation and quotation log

- Participant reported that both cuisines showed 100% match while their yellow bars differed in length. The screenshot also shows a nonempty bar for 0%. Expected behavior is consistent percentage visualization. The moderator explained shared preferences and asked the participant to disregard bar length; later interpretations may have been influenced by that guidance.
- Both clients reportedly had different restaurant choices and no shared candidate. This prevented the same-restaurant voting task. T6 completion does not close this separate defect.
- After creating a room, switching webpages and returning, the app reportedly refreshed and showed No active room. Expected behavior is restoring the active room and workflow step or offering a clear resume action.
- On bill editing, the participant said, translated: "At first I could not find where to change the number of people." The moderator directed attention to Guests.
- The participant requested ratings or review context to build trust in unfamiliar restaurant suggestions and suggested easier import of paperless receipts from email. These are product suggestions, not implemented features.

## Session conclusion

The participant completed most attempted flows, with assistance during invitation sharing, receipt editing and profile save/cancel. The same-restaurant voting task was blocked. Main concerns were match visualization, recommendation trust and discovery of the diner-count editor. The moderator also reported room-page recovery failure.

Follow-up: fix and retest shared candidates first; correct percentage bars; verify active-room recovery. Retain before/after evidence for revisions. General OCR accuracy remains a separately documented limitation. This record contributes one session toward the three-session requirement and does not establish overall Beta acceptance.
