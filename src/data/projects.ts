export type Project = {
  name: string;
  question: string;
  summary: string;
  mechanism: string;
  boundary: string;
  technologies: string[];
  repository: string;
  documentation?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Auths",
    question: "Who acted?",
    summary:
      "Decentralized identity and signing for developers, software supply chains, and budgeted agents.",
    mechanism:
      "KERI key-event histories, Git-carried attestations, and signed receipts make identity state and agent spend independently verifiable.",
    boundary:
      "Verification establishes continuity from deliberately trusted roots; it does not reveal or require a legal identity.",
    technologies: ["Rust", "KERI", "Git", "MCP"],
    repository: "https://github.com/auths-dev/auths",
    documentation: "https://docs.auths.dev",
    accent: "identity",
  },
  {
    name: "Auths Proof",
    question: "What were they allowed to do?",
    summary:
      "A strictly offline reference kernel for proof-carrying authorization.",
    mechanism:
      "A sealed, effect-free pipeline turns untrusted bytes into a non-constructible VerifiedAction while every authority dimension can only attenuate.",
    boundary:
      "Time, trust anchors, status, registries, and resource limits are explicit inputs; the kernel deliberately owns no ambient effects.",
    technologies: ["Rust", "CBOR", "Wasm", "Formal refinement"],
    repository: "https://github.com/auths-dev/auths-proof",
    accent: "authority",
  },
  {
    name: "capsec",
    question: "What can the code do?",
    summary:
      "Behavioral safety for Rust through auditing, capability types, and runtime control.",
    mechanism:
      "Zero-sized proof tokens expose permissions in signatures; static analysis finds ambient I/O; runtime capabilities can expire or be revoked.",
    boundary:
      "Direct standard-library calls, unsafe code, and FFI remain explicit escape hatches surfaced by auditing rather than wished away.",
    technologies: ["Rust", "Lean 4", "MIR", "Type systems"],
    repository: "https://github.com/auths-dev/capsec",
    accent: "behavior",
  },
  {
    name: "recurve",
    question: "What makes a claim trustworthy?",
    summary:
      "A framework that turns promises into falsifiable claims and drives agents behind an executable gate.",
    mechanism:
      "Every probe must reject a retained known-bad trap before it may certify work; GREEN, RED, and BROKEN remain distinct verdicts.",
    boundary:
      "Assurance is graded by the strength of each probe and its underlying oracle, never by the confidence of the agent.",
    technologies: ["Python", "Agents", "Mutation testing", "Evidence"],
    repository: "https://github.com/bordumb/recurve",
    documentation: "https://bordumb.github.io/recurve/",
    accent: "evidence",
  },
  {
    name: "Navier–Stokes proof map",
    question: "How far can the discipline reach?",
    summary:
      "A machine-checked map of what a proof or disproof of the Clay problem would require.",
    mechanism:
      "Lean declarations, dependency ledgers, kernel-clean probes, and tamper traps keep proved, open, and unmeasurable claims honest.",
    boundary:
      "It does not claim a solution to the Millennium problem. Clay-side nodes remain open; proved model results validate the method, not the apex.",
    technologies: ["Lean 4", "Mathlib", "PDE", "recurve"],
    repository: "https://github.com/bordumb/navier_stokes",
    accent: "formal",
  },
];
