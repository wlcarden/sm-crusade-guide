import type { AdviceCard } from "../types";

export const BASIC_SM_ADVICE: AdviceCard[] = [
{
id: "screen-deep-strike-infiltrators",
title: "Screen likely deep strikes with Infiltrators",
body: "Overlap denial bubbles around center lanes and flanks before turn 2; leave safe hand-off gaps near objectives.",
phase: "movement",
window: "my",
importance: 3,
conditions: { requireAnyTags: { tags: ["deep-strike"] }, phase: ["movement","command"], minTurn: 1, maxTurn: 3 }
},
{
id: "bank-cp-overwatch-fast-melee",
title: "Bank CP for Overwatch vs fast melee",
body: "If they can cross the gap this turn, hold CP for Overwatch to blunt a key threat before contact.",
phase: "movement",
window: "opp",
importance: 3,
conditions: { requireAnyTags: { tags: ["fast-melee"] }, minCP: 1 }
},
{
id: "crack-transports-early",
title: "Crack transports before they unload",
body: "Angle fire lanes to explode Rhinos/Land Raiders early so their melee must charge from distance.",
phase: "shooting",
window: "my",
importance: 3,
conditions: { requireAnyTags: { tags: ["transport", "transport-push"] }, phase: "shooting", minTurn: 1, maxTurn: 3 }
},
{
id: "watch-redeploy",
title: "Expect redeploy tricks",
body: "Protect backfield; avoid leaving lone screens where a redeploy can isolate and remove them.",
phase: "command",
window: "both",
importance: 2,
conditions: { requireAnyTags: { tags: ["redeploy"] } }
},
{
id: "action-pressure-budget",
title: "Budget Actions on action-pressure missions",
body: "Stage Phobos/Incursors to complete Actions without sacrificing your primary damage pieces.",
phase: "command",
window: "my",
importance: 2,
conditions: { requireAnyTags: { tags: ["action-pressure"] } }
},
{
id: "center-pressure",
title: "Pre-stage for center pressure",
body: "If scoring concentrates mid-board, pre-measure charge lanes and anchor with durable units.",
phase: "movement",
window: "my",
importance: 2,
conditions: { requireAnyTags: { tags: ["center"] } }
},
{
id: "vs-indirect-hide-setup",
title: "Mitigate indirect fire",
body: "Use ruins/LOS blocks to stage; force them to move for angles before you expose key units.",
phase: "movement",
window: "my",
importance: 2,
conditions: { requireAnyTags: { tags: ["indirect"] } }
},
{
id: "long-range-at-priority",
title: "Prioritize long-range anti-tank",
body: "Trade early to remove their long-range AT so your Dreads and transports can play the board.",
phase: "shooting",
window: "my",
importance: 3,
conditions: { requireAnyTags: { tags: ["long-range-at"] } }
},
{
id: "brace-melee-brick",
title: "Bait or slow the melee brick",
body: "Tag with throwaways, force awkward charges, and keep counter-charge ready behind your screen.",
phase: "charge",
window: "both",
importance: 2,
conditions: { requireAnyTags: { tags: ["melee-brick"] } }
},
{
id: "thin-horde-oc",
title: "Thin OC hordes early",
body: "Chip wide OC units before end-round scoring; deny easy flips on open objectives.",
phase: "shooting",
window: "my",
importance: 2,
conditions: { requireAnyTags: { tags: ["horde-oc"] } }
},
{
id: "stealth-angles",
title: "Create cross-angles vs stealth",
body: "Spread firing positions to deny a single piece of cover/stealth from blanketing your key targets.",
phase: "movement",
window: "my",
importance: 1,
conditions: { requireAnyTags: { tags: ["stealth"] } }
},
{
id: "late-spike-keep-options",
title: "Keep late-game options for spike missions",
body: "Preserve fast units to contest or complete Actions late where primaries spike.",
phase: "end",
window: "both",
importance: 2,
conditions: { requireAnyTags: { tags: ["late-spike"] } }
}
];

