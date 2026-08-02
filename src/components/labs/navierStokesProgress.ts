export type AngularSliceStatus = "proved" | "building" | "open";

export type AngularSliceProgress = {
  index: number;
  status: AngularSliceStatus;
  statusLabel: string;
  title: string;
  plain: string;
  expert: string;
  evidence: string;
};

export const angularSliceProgress: AngularSliceProgress[] = [
  {
    index: 0,
    status: "proved",
    statusLabel: "KERNEL-CHECKED",
    title: "Angular coefficient zero",
    plain:
      "The first possible directional coefficient has been reduced to identical exact polynomials, so its difference is zero.",
    expert:
      "The source and certificate normalize to the same 37-coefficient canonical polynomial through the public opacity bridge.",
    evidence: "Definitive Lean target previously passed.",
  },
  {
    index: 1,
    status: "proved",
    statusLabel: "KERNEL-CHECKED",
    title: "Angular coefficient one",
    plain:
      "The second directional coefficient has also been checked all the way through Lean.",
    expert:
      "The coefficient-one source and certificate paths share exact rational normal forms and passed the persistent target build.",
    evidence: "Validated in the clean j=0/j=1 prefix.",
  },
  {
    index: 2,
    status: "building",
    statusLabel: "BUILDING",
    title: "Angular coefficient two",
    plain:
      "The middle coefficient is written and is now being replayed through the complete Lean file.",
    expert:
      "Eleven source rows and eleven certificate rows reduce to one degree-ten canonical polynomial. The public theorem sparseGaussianLowPolynomial0TailInUStaged_coeff_two_eq_canonical_sub exposes the coefficient as canonical minus itself.",
    evidence: "Source review clean; definitive persistent Lake target still running.",
  },
  {
    index: 3,
    status: "open",
    statusLabel: "OPEN",
    title: "Angular coefficient three",
    plain:
      "The fourth possible directional coefficient still needs its own exact Lean bridge.",
    expert:
      "No compiled coefficient-three canonical equality is recorded in the current snapshot.",
    evidence: "Separate proof leaf remains.",
  },
  {
    index: 4,
    status: "open",
    statusLabel: "OPEN",
    title: "Angular coefficient four",
    plain:
      "The last possible coefficient remains before the five leaves can be assembled.",
    expert:
      "The proved degree-four angular bound excludes every higher coefficient once this final leaf is closed.",
    evidence: "Last leaf before zero-tail assembly.",
  },
];

export const validatedAngularSlices = angularSliceProgress.filter(
  (slice) => slice.status === "proved",
).length;

export const buildingAngularSlice = angularSliceProgress.find(
  (slice) => slice.status === "building",
);

export const radialProgressSummary = {
  observedAt: "2026-08-02",
  validated: validatedAngularSlices,
  total: angularSliceProgress.length,
  building: buildingAngularSlice?.index,
  label: `${validatedAngularSlices} validated · j=${buildingAngularSlice?.index ?? "—"} building`,
};
