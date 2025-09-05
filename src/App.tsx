import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import MissionWizard from "@/pregame/MissionWizard";
import EnemySelector from "@/pregame/EnemySelector";
import GameplayShell from "@/gameplay/GameplayShell";
import { getJSON, setJSON } from "@/lib/storage";
import {
  MISSION_RULES,
  PRIMARY_MISSIONS,
  DEPLOYMENTS,
} from "@/data/missions";
import { TAG_META } from "@/data/tags";

interface CurrentMatchRecord {
  matchKey: string;
  mission?: {
    ruleName: string;
    primaryName: string;
    deploymentName: string;
    tags: string[];
  };
  units?: { tags: string[] };
  started?: boolean;
}

import type {
  MissionRule,
  Primary,
  Deployment,
  MissionTag,
  EnemyTag,
} from "@/data/types";

function App() {
  const [step, setStep] = useState(0);
  const [matchKey, setMatchKey] = useState("");

  const [mission, setMission] = useState<{
    rule: MissionRule;
    primary: Primary;
    deployment: Deployment;
    tags: MissionTag[];
  } | null>(null);

  const [enemyTags, setEnemyTags] = useState<EnemyTag[]>([]);

  useEffect(() => {
    const record = getJSON<CurrentMatchRecord | null>(
      "smcg.match.current",
      null,
    );

    if (record && record.matchKey) {
      setMatchKey(record.matchKey);

      const rule = MISSION_RULES.find(
        (r) => r.name === record.mission?.ruleName,
      );
      const primary = PRIMARY_MISSIONS.find(
        (p) => p.name === record.mission?.primaryName,
      );
      const deployment = DEPLOYMENTS.find(
        (d) => d.name === record.mission?.deploymentName,
      );

      if (rule && primary && deployment && record.mission) {
        const tags = (record.mission.tags || []).filter(
          (t): t is MissionTag => typeof t === "string",
        );
        setMission({ rule, primary, deployment, tags });
        setStep(1);
      }

      if (record.units?.tags) {
        const validTags = record.units.tags.filter(
          (t): t is EnemyTag => typeof t === "string" && t in TAG_META,
        );
        setEnemyTags(validTags);
      }

      if (record.started && rule && primary && deployment) {
        setStep(2);
      }
    }
  }, []);

  const handleMissionNext = (missionData: {
    rule: MissionRule;
    primary: Primary;
    deployment: Deployment;
    tags: MissionTag[];
  }) => {
    const key = matchKey || Date.now().toString();
    setMatchKey(key);
    setMission(missionData);
    setEnemyTags([]);
    setStep(1);

    setJSON("smcg.match.current", {
      matchKey: key,
      mission: {
        ruleName: missionData.rule.name,
        primaryName: missionData.primary.name,
        deploymentName: missionData.deployment.name,
        tags: missionData.tags,
      },
      units: { tags: [] },
      started: false,
    });
  };

  const handleEnemyStart = (tags: EnemyTag[]) => {
    const key = matchKey || Date.now().toString();
    setMatchKey(key);
    setEnemyTags(tags);
    setStep(2);

    const current =
      getJSON<CurrentMatchRecord | null>("smcg.match.current", null) ||
      ({ matchKey: key } as CurrentMatchRecord);
    setJSON("smcg.match.current", {
      ...current,
      matchKey: key,
      units: { tags },
      started: true,
    });
  };

  const handleReset = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("smcg.match.current");
      if (matchKey) {
        localStorage.removeItem(`smcg.match.${matchKey}.game`);
        const prefix = `smcg.match.${matchKey}.advice.`;
        const keys: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(prefix)) keys.push(k);
        }
        keys.forEach((k) => localStorage.removeItem(k));
      }
    }
    setMission(null);
    setEnemyTags([]);
    setMatchKey("");
    setStep(0);
  };

  const Stepper = () => (
    <div className="mb-4 flex items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
            step >= 0
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 text-gray-500"
          }`}
        >
          1
        </div>
        <span className={step >= 0 ? "font-medium text-blue-600" : "text-gray-500"}>
          Mission
        </span>
      </div>
      <div className={`h-px w-8 ${step > 0 ? "bg-blue-600" : "bg-gray-300"}`} />
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
            step >= 1
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 text-gray-500"
          }`}
        >
          2
        </div>
        <span className={step >= 1 ? "font-medium text-blue-600" : "text-gray-500"}>
          Enemy
        </span>
      </div>
    </div>
  );

  return (
    <main className="p-8">
      {step < 2 ? (
        <Card className="mx-auto max-w-xl space-y-4 p-6">
          <Stepper />
          {step === 0 ? (
            <MissionWizard onNext={handleMissionNext} />
          ) : (
            <EnemySelector onStart={handleEnemyStart} />
          )}
        </Card>
      ) : (
        mission && (
          <GameplayShell
            mission={mission}
            unitTags={enemyTags}
            matchKey={matchKey}
            onReset={handleReset}
          />
        )
      )}
    </main>
  );
}

export default App;