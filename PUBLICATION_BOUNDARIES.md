# Vacay Agent case-study publication boundaries

## Safe to publish

- Product screenshots containing synthetic travel requests
- A short demo recorded against non-production data
- High-level architecture and event-flow diagrams
- Rewritten domain contracts that contain no production identifiers
- Small examples of idempotent projection and targeted patch validation
- Test names and descriptions
- Provider categories and already-public provider names
- Honest limitations and planned evaluation work

## Review line by line before publishing

- Planner-event type definitions
- Trip-node and patch contracts
- Retry and failure-policy examples
- Trace screenshots
- Provider normalization examples
- Prompt fragments
- Database schemas

These may reveal proprietary structure, internal identifiers, user information, or operational assumptions even when they contain no obvious credential.

## Never publish

- `.env` files or secret values
- API keys, connection strings, webhook secrets, or signed URLs
- Production traces, request bodies, or database exports
- Real user conversations or travel documents
- Complete system prompts or provider-specific private instructions
- Partner-contract terms, rate limits obtained privately, or disabled credentials
- Internal deployment identifiers
- Git history that previously contained sensitive material

## Asset plan

| Asset | Contents | Redaction requirements |
| --- | --- | --- |
| `workspace.webp` | Project rail, conversation, and active planning state | Synthetic account and trip |
| `streamed-plan.webp` | Ordered text, cards, status, and sources | No private trace identifiers |
| `trip-artifact.webp` | Versioned itinerary or trip graph projection | Synthetic provider data |
| `planner-demo.mp4` | Request, live progress, grounded response, reload recovery | Test environment only |

All screenshots should use a seeded synthetic account and a deliberately fictional planning session. Provider facts can remain real and attributed, but no private account, booking, or traveller information should appear.
