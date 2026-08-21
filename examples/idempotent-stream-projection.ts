import type { PlannerEvent } from "./planner-event-contract";

type Projection = {
  applied: Set<string>;
  text: string;
  events: PlannerEvent[];
  terminal: boolean;
};

export function applyPlannerEvent(
  current: Projection,
  event: PlannerEvent,
): Projection {
  const key = `${event.runId}:${event.sequence}`;
  if (current.applied.has(key)) return current;

  const applied = new Set(current.applied).add(key);
  const text = event.type === "text" ? current.text + event.delta : current.text;
  const terminal =
    event.type === "completed" ||
    event.type === "failed" ||
    event.type === "cancelled";

  return {
    applied,
    text,
    events: [...current.events, event],
    terminal: current.terminal || terminal,
  };
}

