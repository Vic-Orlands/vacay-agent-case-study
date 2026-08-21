# Testing and evaluation

Vacay currently has conventional automated tests around orchestration and product-state boundaries. A formal LLM evaluation suite remains planned work and is not presented as completed evidence.

## Current automated test areas

- Planner event ordering and terminal-state policy
- Structured response parsing
- Agent-message execution
- Provider research and document extraction
- Semantic recall
- Project persistence
- Targeted trip patches and graph integrity

These tests focus on deterministic contracts surrounding model behaviour. They catch duplicate events, invalid patch targets, malformed structured output, persistence failures, and unsupported state transitions.

## Planned evaluation dataset

The first evaluation dataset should contain representative travel requests across destination discovery, constraint-heavy planning, live inventory, and existing-trip edits.

Each case should record:

1. Required constraints and acceptable trade-offs
2. Claims that require current sources
3. Expected tool categories
4. Allowed trip-graph mutation scope
5. Human grading criteria

## Candidate metrics

- Constraint satisfaction
- Source coverage and unsupported-claim rate
- Provider success and fallback rate
- Targeted-patch correctness
- Resume, cancellation, and duplicate-event failures
- First meaningful response and completion latency
- Token and provider cost per completed task
- Human preference between itinerary alternatives

## Release gate

A model, prompt, tool, or orchestration change should not ship based on a few hand-tested conversations. It should run against the fixed dataset, compare with the current baseline, and fail the release gate when reliability or grounding regresses beyond an agreed threshold.

