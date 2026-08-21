export type PlannerEvent =
  | { runId: string; sequence: number; type: "status"; message: string }
  | { runId: string; sequence: number; type: "text"; delta: string }
  | { runId: string; sequence: number; type: "card"; card: GroundedCard }
  | { runId: string; sequence: number; type: "sources"; sources: Source[] }
  | {
      runId: string;
      sequence: number;
      type: "completed" | "failed" | "cancelled";
    };

export type GroundedCard = {
  id: string;
  entityId: string;
  title: string;
  provider: string;
  sourceUrl: string;
};

export type Source = {
  title: string;
  url: string;
  provider: string;
};

export function eventKey(event: PlannerEvent) {
  return `${event.runId}:${event.sequence}`;
}

