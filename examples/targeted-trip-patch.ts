type TripNode = {
  id: string;
  section: "destination" | "stay" | "activity" | "transport";
  revision: number;
  data: Record<string, unknown>;
};

type ReplaceOperation = {
  type: "replace";
  targetId: string;
  expectedRevision: number;
  data: Record<string, unknown>;
};

export function applyReplace(
  nodes: TripNode[],
  operation: ReplaceOperation,
): TripNode[] {
  const target = nodes.find((node) => node.id === operation.targetId);
  if (!target) throw new Error("Target node does not exist");
  if (target.revision !== operation.expectedRevision) {
    throw new Error("Target node changed before this operation was applied");
  }

  return nodes.map((node) =>
    node.id === operation.targetId
      ? {
          ...node,
          revision: node.revision + 1,
          data: operation.data,
        }
      : node,
  );
}
