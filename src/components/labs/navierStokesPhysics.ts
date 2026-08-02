export type PhysicsScene = {
  tab: string;
  visualLabel: string;
  headline: string;
  story: string;
  equation: string;
  equationNote: string;
  watch: string;
  proof: string;
  proofStatus: "proved" | "active" | "open";
  mode: string;
  control: {
    label: string;
    min: number;
    max: number;
    value: number;
    unit: string;
  };
};

export type PhysicsTopic = {
  id: string;
  nav: string;
  index: string;
  title: string;
  titleAccent: string;
  description: string;
  deck: string;
  physicalQuestion: string;
  proofQuestion: string;
  plainTitle: string;
  plainBody: string;
  bridge: string;
  expertTitle: string;
  expertBody: string;
  expertEquation: string;
  expertTheorem: string;
  symbols: Array<{
    symbol: string;
    name: string;
    meaning: string;
  }>;
  previous?: string;
  next?: string;
  scenes: PhysicsScene[];
};

export const physicsTopics: PhysicsTopic[] = [
  {
    id: "flow-and-spin",
    nav: "Flow & spin",
    index: "01",
    title: "The water moves.",
    titleAccent: "The water also spins.",
    description:
      "Follow a speck of water, then reveal the invisible spinning arrow carried at every point.",
    deck:
      "Velocity tells a speck where to travel. Vorticity tells it which way the surrounding water wants to turn. Navier–Stokes couples those two stories at every point in the fluid.",
    physicalQuestion: "What is actually moving and spinning?",
    proofQuestion: "Can the spin become infinitely strong in finite time?",
    plainTitle: "Motion is not the same thing as spin.",
    plainBody:
      "A leaf can travel around a whirlpool while the water around it also turns. Velocity describes the leaf's trip. Vorticity describes the tiny paddle wheel hidden at each point. The Clay danger is not ordinary turbulence; it is whether that local spin can become literally unbounded in finite time.",
    bridge:
      "Once spin is visible, the next question is what can make it grow—and what pushes back.",
    expertTitle: "Velocity, vorticity, and the blow-up quantity",
    expertBody:
      "For a smooth incompressible field u, vorticity is ω = curl u. A finite-time singularity forces loss of regular control; the physical story tracks the amplification of ω without claiming that the displayed field is a genuine singular trajectory.",
    expertEquation: "∂ₜω + (u·∇)ω = (ω·∇)u + νΔω",
    expertTheorem:
      "Formal scope: the repository supplies an explicit smooth divergence-free Gaussian datum and exact formulas for its vorticity.",
    symbols: [
      { symbol: "x", name: "position", meaning: "the location of one marked speck of water" },
      { symbol: "u", name: "velocity", meaning: "the arrow telling the speck where and how fast to move" },
      { symbol: "ω", name: "vorticity", meaning: "the local axis and strength of spinning" },
      { symbol: "∇ ×", name: "curl", meaning: "the operation that extracts local spin from velocity" },
      { symbol: "ξ", name: "spin direction", meaning: "vorticity with its strength divided away" },
    ],
    next: "stretch-and-smooth",
    scenes: [
      {
        tab: "Follow water",
        visualLabel: "Specks carried by a moving fluid",
        headline: "Velocity is an arrow that says where to go.",
        story:
          "Imagine dropping tiny seeds onto water. Each seed follows the arrow underneath it. A longer arrow carries the seed farther during the same moment.",
        equation: "dx/dt = u(x, t)",
        equationNote: "the velocity u carries each speck x",
        watch:
          "Increase the flow. The pattern stays the same, but every speck travels faster along its local arrow.",
        proof:
          "The formal project starts with smooth velocity fields u whose divergence is zero, so water is rearranged rather than created or destroyed.",
        proofStatus: "proved",
        mode: "flow",
        control: { label: "Flow speed", min: 10, max: 100, value: 54, unit: "%" },
      },
      {
        tab: "Reveal spin",
        visualLabel: "A paddle wheel inside the flow",
        headline: "A tiny paddle wheel reveals the hidden turn.",
        story:
          "Place a toy wheel in the water. If one side is pushed faster than the other, the wheel turns. Vorticity is the arrow that records that turning axis and strength.",
        equation: "ω = ∇ × u",
        equationNote: "curl turns motion into a local spin arrow",
        watch:
          "The bright wheel turns fastest near the center, where neighboring velocity arrows disagree most strongly.",
        proof:
          "The sparse Gaussian witness has an explicit vorticity formula, so its spin can be bounded by exact polynomial inequalities.",
        proofStatus: "proved",
        mode: "spin",
        control: { label: "Spin strength", min: 10, max: 100, value: 62, unit: "%" },
      },
      {
        tab: "Spin arrows",
        visualLabel: "Vorticity direction and intensity",
        headline: "Every point carries its own spinning arrow.",
        story:
          "The arrow points along the axle of the tiny wheel. Its length says how quickly the wheel turns. Nearby arrows can agree, bend, or point against each other.",
        equation: "ξ = ω / |ω|",
        equationNote: "ξ keeps direction and forgets strength",
        watch:
          "Move toward coherence. The arrows line up into a bundle, reducing the geometric leverage they have on one another.",
        proof:
          "Directional alignment is one source of nonlinear depletion, but alignment alone has not yielded a universal regularity estimate.",
        proofStatus: "open",
        mode: "arrows",
        control: { label: "Alignment", min: 0, max: 100, value: 32, unit: "%" },
      },
      {
        tab: "The danger",
        visualLabel: "Spin intensity approaching an unbounded spike",
        headline: "Clay asks whether the arrows can become infinitely long.",
        story:
          "A smooth fluid begins with finite arrows. The danger is a point where their length grows without bound before a finite clock time runs out.",
        equation: "supₓ |ω(x, t)| → ∞ ?",
        equationNote: "a possible singularity is unbounded spin",
        watch:
          "Raise the concentration. The same total pattern squeezes into a smaller region while its central arrow grows.",
        proof:
          "The current Gaussian certificate analyzes one explicit observable. It does not construct a singular Navier–Stokes trajectory.",
        proofStatus: "open",
        mode: "spike",
        control: { label: "Concentration", min: 5, max: 100, value: 48, unit: "%" },
      },
    ],
  },
  {
    id: "stretch-and-smooth",
    nav: "Stretch & smooth",
    index: "02",
    title: "Stretching sharpens.",
    titleAccent: "Viscosity shares.",
    description:
      "Watch a vortex tube lengthen and intensify while viscosity spreads sharp differences into its neighbors.",
    deck:
      "Three-dimensional flow can pull a spinning tube longer and thinner. That concentrates rotation. Viscosity pushes the other way by sharing sharp differences with nearby water.",
    physicalQuestion: "Which effect wins along a real trajectory?",
    proofQuestion: "Can smoothing always pay the stretching bill?",
    plainTitle: "One effect sharpens a swirl; another spreads it out.",
    plainBody:
      "Stretching is like pulling a spinning skater inward: rotation concentrates. Viscosity is like a crowd sharing a sudden shove with its neighbors: sharp differences spread out. A global regularity proof needs a rule showing that smoothing can cover every dangerous stretching event, not just the friendly examples shown here.",
    bridge:
      "To test a proposed rule, the project needs a precise way to measure how much dangerous spin sits near one place and scale.",
    expertTitle: "Nonlinear production versus viscous dissipation",
    expertBody:
      "The vorticity equation separates transport, strain production Sω, and diffusion νΔω. The obstruction program targets a proposed scalar Gaussian maximum-principle closure rather than eliminating the full tensorial stretching mechanism.",
    expertEquation: "Dω/Dt = Sω + νΔω",
    expertTheorem:
      "Formal scope: the geometric stretching identity and selected Gaussian heat-flow estimates are checked; no universal coercive replacement is established.",
    symbols: [
      { symbol: "S", name: "strain", meaning: "the part of the velocity gradient that stretches and squeezes" },
      { symbol: "ν", name: "viscosity", meaning: "how strongly neighboring values are smoothed" },
      { symbol: "Δ", name: "Laplacian", meaning: "a comparison between each value and its neighborhood" },
      { symbol: "D/Dt", name: "material derivative", meaning: "change measured while travelling with the water" },
      { symbol: "α", name: "stretching rate", meaning: "the local multiplier feeding the spin magnitude" },
    ],
    previous: "flow-and-spin",
    next: "gaussian-lens",
    scenes: [
      {
        tab: "Stretch",
        visualLabel: "A vortex tube lengthening and narrowing",
        headline: "Pull the tube longer and its spin grows stronger.",
        story:
          "A vortex tube behaves like a spinning skater. Stretching makes it longer and thinner, concentrating the same turning motion into a smaller cross-section.",
        equation: "(ω · ∇)u = Sω",
        equationNote: "the strain S stretches the spin vector ω",
        watch:
          "Increase stretching. The tube narrows, its internal stripes wind faster, and the central vorticity arrow lengthens.",
        proof:
          "The geometric stretching identity and its corrected singular kernel are formalized for the selected smooth trajectory.",
        proofStatus: "proved",
        mode: "tube",
        control: { label: "Stretching", min: 0, max: 100, value: 58, unit: "%" },
      },
      {
        tab: "Amplify",
        visualLabel: "A stretching multiplier acting on vorticity",
        headline: "Stretching multiplies what is already spinning.",
        story:
          "A weak spin grows slowly. A strong spin gives stretching more material to amplify. That feedback is why the nonlinear term is dangerous.",
        equation: "D|ω|/Dt = α|ω| + viscous terms",
        equationNote: "positive α feeds existing spin",
        watch:
          "Raise α. Each new bar starts from the height of the previous one, so repeated multiplication bends upward.",
        proof:
          "A universal estimate must control this multiplicative growth using quantities whose total budget stays finite.",
        proofStatus: "open",
        mode: "amplify",
        control: { label: "Growth rate α", min: 0, max: 100, value: 46, unit: "%" },
      },
      {
        tab: "Smooth",
        visualLabel: "A rough spin field diffusing into a smoother field",
        headline: "Viscosity lets neighboring arrows share their disagreement.",
        story:
          "A sharp spike has very different arrows sitting side by side. Viscosity spreads the tall arrow outward and pulls the short arrows upward, flattening the difference.",
        equation: "∂tω … = νΔω",
        equationNote: "the Laplacian Δ compares each point with its neighbors",
        watch:
          "Increase viscosity. The narrow peak becomes shorter and wider while its jagged neighboring arrows settle.",
        proof:
          "Exact Gaussian heat-flow identities quantify this smoothing for the explicit sparse witness.",
        proofStatus: "proved",
        mode: "smooth",
        control: { label: "Viscosity ν", min: 0, max: 100, value: 55, unit: "%" },
      },
      {
        tab: "The bill",
        visualLabel: "Stretching demand compared with viscous payment",
        headline: "The unresolved question is whether smoothing always pays enough.",
        story:
          "Think of stretching as a bill and viscosity as the payment. A regularity proof needs a rule guaranteeing that the payment covers every dangerous bill along every smooth solution.",
        equation: "production ≤ dissipation + finite budget",
        equationNote: "the missing inequality must survive every admissible flow",
        watch:
          "Change the demand. The Gaussian witness marks a regime where the proposed scalar payment rule falls short.",
        proof:
          "The current program aims to certify that one proposed closure fails. A replacement payment rule remains open research.",
        proofStatus: "active",
        mode: "balance",
        control: { label: "Stretching demand", min: 0, max: 100, value: 68, unit: "%" },
      },
    ],
  },
  {
    id: "gaussian-lens",
    nav: "Gaussian lens",
    index: "03",
    title: "Measure nearby spin",
    titleAccent: "with a soft lens.",
    description:
      "Move and resize a Gaussian observation bubble to see how the proof turns an entire field into one exact number.",
    deck:
      "A Gaussian lens looks most strongly at its center and gradually less strongly farther away. Moving, resizing, and diffusing that lens produces the observable used by the current obstruction.",
    physicalQuestion: "How does one bubble summarize a whole spin field?",
    proofQuestion: "Where is its largest value across every center and scale?",
    plainTitle: "The soft lens turns a whole neighborhood into one number.",
    plainBody:
      "A hard circle would count everything inside and nothing outside. A Gaussian lens fades smoothly instead: nearby spin counts most, distant spin counts less. Moving and resizing that lens asks where the chosen danger signal is largest without pretending that the lens is a physical object in the water.",
    bridge:
      "The next page turns that smooth measurement into exact algebra that Lean can check one finite piece at a time.",
    expertTitle: "A translated, scaled Gaussian observable",
    expertBody:
      "The witness is probed by a Gaussian convolution F(c,s). Exact center, scale, and heat derivatives connect the analytic observable to closed polynomial-Gaussian formulas, after which spatial and scale regions can be certified separately.",
    expertEquation: "F(c,s) = ∫ Gₛ(x−c) · q(x) dx",
    expertTheorem:
      "Formal scope: the selected sparse observable has compiled center/scale bridges, heat identities, small-scale bounds, and a right-scale center theorem.",
    symbols: [
      { symbol: "Gₛ", name: "Gaussian weight", meaning: "the soft lens at scale s" },
      { symbol: "c", name: "center", meaning: "where the lens is placed" },
      { symbol: "s", name: "scale", meaning: "how broad the lens is" },
      { symbol: "∗", name: "convolution", meaning: "sliding a weighted average across the field" },
      { symbol: "Pₜ", name: "heat flow", meaning: "the smoothing operator after time t" },
    ],
    previous: "stretch-and-smooth",
    next: "radius-and-cancellation",
    scenes: [
      {
        tab: "Place lens",
        visualLabel: "A Gaussian lens weighting nearby spin",
        headline: "The lens listens most closely near its center.",
        story:
          "Put a soft circular lens over the arrows. Arrows near the center count a lot. Farther arrows still count, but their voices fade smoothly instead of stopping at a hard edge.",
        equation: "Gₛ(x) = exp(−|x|² / 4s)",
        equationNote: "distance fades continuously; s sets the lens size",
        watch:
          "Drag inside the picture to move the lens. The weighted arrows brighten and the reading changes.",
        proof:
          "The physical convolution is proved equal to an exact closed polynomial-Gaussian formula for the sparse field.",
        proofStatus: "proved",
        mode: "lens",
        control: { label: "Lens radius", min: 15, max: 100, value: 47, unit: "%" },
      },
      {
        tab: "Move center",
        visualLabel: "The same lens sampling different centers",
        headline: "Moving the lens asks where the field looks most dangerous.",
        story:
          "Slide the same lens across the water. A center near aligned, intense arrows produces a different reading from a center over a quiet region.",
        equation: "F(c, s) = ∫ Gₛ(x−c) · density(x) dx",
        equationNote: "c is the movable center",
        watch:
          "Move the center. The trail compares the current reading with the largest reading seen along the path.",
        proof:
          "Center derivatives and the literal radial derivative bridge are kernel-checked; global center maximality still requires spatial certificates.",
        proofStatus: "active",
        mode: "center",
        control: { label: "Horizontal center", min: 0, max: 100, value: 50, unit: "%" },
      },
      {
        tab: "Change scale",
        visualLabel: "Small and large Gaussian lenses over one field",
        headline: "A small lens sees detail; a large lens sees the neighborhood.",
        story:
          "Shrink the bubble and one sharp feature dominates. Enlarge it and many arrows contribute, but each is averaged with more neighbors.",
        equation: "s ↓: local detail    s ↑: broad average",
        equationNote: "the proof must inspect every positive scale s",
        watch:
          "Change scale. The center reading rises, reaches a stationary size, and then falls as the lens spreads too broadly.",
        proof:
          "The selected center has an exact stationary scale and certified scale bounds, including a completed right-scale center theorem.",
        proofStatus: "proved",
        mode: "scale",
        control: { label: "Scale s", min: 8, max: 100, value: 42, unit: "%" },
      },
      {
        tab: "Apply heat",
        visualLabel: "A sharp Gaussian-weighted pattern spreading under heat",
        headline: "Heat flow is the same smoothing seen through the lens.",
        story:
          "As time passes, a sharp patch spreads. Gaussian convolution describes that spreading exactly, which lets the proof compare measurements at neighboring scales.",
        equation: "Pₜf = Gₜ ∗ f",
        equationNote: "heat evolution equals convolution with a widening Gaussian",
        watch:
          "Increase heat time. The bright central patch lowers while its influence reaches farther outward.",
        proof:
          "The sparse heat-flow profile, derivative, Laplacian bound, and small-scale bias certificate are kernel-checked.",
        proofStatus: "proved",
        mode: "heat",
        control: { label: "Heat time", min: 0, max: 100, value: 36, unit: "%" },
      },
    ],
  },
  {
    id: "radius-and-cancellation",
    nav: "Radius & cancellation",
    index: "04",
    title: "A giant identity",
    titleAccent: "folds into five zeros.",
    description:
      "Turn the active radial certificate into shells, flat contact, and five angular pieces that can be checked one at a time.",
    deck:
      "The proof compares a literal radial polynomial with a positive certificate. Their constant and linear parts agree, so the difference touches zero flatly and contains X². Only a smaller tail remains.",
    physicalQuestion: "What does the polynomial describe in space?",
    proofQuestion: "Can every directional slice of the remaining tail vanish?",
    plainTitle: "The polynomial is bookkeeping for one physical measurement.",
    plainBody:
      "The project has two exact descriptions of the same Gaussian-lens measurement: a literal formula from the spin field and a certificate assembled from pieces whose sign is easy to control. Their difference is called D. The first two radial terms already match. What remains is sorted by five powers of a direction variable—not five cuts through real water.",
    bridge:
      "Closing all five coefficient identities completes this radial bookkeeping step; the compact region and global assembly still remain afterward.",
    expertTitle: "Two-level coefficient elimination",
    expertBody:
      "First, D(0)=D′(0)=0 yields the radial factor X². The quotient T is degree at most four in the angular variable u, so extensionality reduces T=0 to five polynomial identities Tⱼ(w,X)=0. Each leaf is normalized coefficientwise over exact rationals.",
    expertEquation: "D = X² Σ⁴ⱼ₌₀ uʲTⱼ,    Tⱼ ∈ ℚ[w][X]",
    expertTheorem:
      "Current boundary: j=0 and j=1 are validated; the public j=2 bridge exposes the source/certificate difference as one canonical degree-ten polynomial minus itself while the definitive build runs.",
    symbols: [
      { symbol: "D", name: "difference", meaning: "literal measurement minus its sign-controlled certificate" },
      { symbol: "X", name: "radial variable", meaning: "distance from the Gaussian center in the reduced formula" },
      { symbol: "u", name: "angular variable", meaning: "algebraic bookkeeping for direction, not a physical slice" },
      { symbol: "w", name: "remaining direction parameter", meaning: "the second directional coordinate retained by each leaf" },
      { symbol: "Tⱼ", name: "coefficient polynomial", meaning: "the multiplier of uʲ that must vanish identically" },
      { symbol: "certificate", name: "positive certificate", meaning: "an exact expression assembled so the required sign follows from checked pieces" },
    ],
    previous: "gaussian-lens",
    scenes: [
      {
        tab: "Radial shells",
        visualLabel: "Concentric shells around the Gaussian center",
        headline: "Radius asks what changes as the lens walks outward.",
        story:
          "Stand at the lens center and draw rings around yourself. Points on one ring are equally far away, but they can point in different directions.",
        equation: "X = radial coordinate",
        equationNote: "one coordinate moves from the center through nested shells",
        watch:
          "Move outward. The highlighted ring crosses different parts of the sparse spin pattern while its radius remains the only changing distance.",
        proof:
          "The radial module rewrites the literal observable into exact polynomial data on a bounded inner region.",
        proofStatus: "proved",
        mode: "shells",
        control: { label: "Radius X", min: 0, max: 100, value: 34, unit: "%" },
      },
      {
        tab: "Flat contact",
        visualLabel: "Two curves sharing value and slope at the center",
        headline: "Matching value and slope leaves an X²-shaped gap.",
        story:
          "Two paths begin at the same spot and point in the same direction. Their first visible separation bends like a shallow bowl, so the gap contains two copies of distance X.",
        equation: "D(0)=0, D′(0)=0  ⇒  D(X)=X²T(X)",
        equationNote: "constant and linear coefficients are already zero",
        watch:
          "Increase the curvature. The curves still touch flatly at the center while their quadratic separation becomes easier to see.",
        proof:
          "Public coefficient-zero and coefficient-one bridges reduce the degree-twelve identity to the twofold-X tail.",
        proofStatus: "proved",
        mode: "factor",
        control: { label: "Visible curvature", min: 10, max: 100, value: 55, unit: "%" },
      },
      {
        tab: "Five slices",
        visualLabel: "Five directional slices of one angular polynomial",
        headline: "Five directional pieces describe every allowed angle.",
        story:
          "These are five polynomial coefficients: the multipliers of u⁰ through u⁴. They are not physical cuts through the fluid. If every multiplier is the zero polynomial, their sum is zero for every allowed direction.",
        equation: "T(u,w,X) = Σ⁴ⱼ₌₀ uʲ Tⱼ(w,X)",
        equationNote: "degree four means exactly five possible coefficients",
        watch:
          "Choose a coefficient. j=0 and j=1 are validated; j=2 is in its definitive build; j=3 and j=4 remain open.",
        proof:
          "A proved angular degree bound excludes every coefficient above four. Two leaves are validated and the middle leaf is building.",
        proofStatus: "active",
        mode: "slices",
        control: { label: "Angular coefficient j", min: 0, max: 4, value: 2, unit: "" },
      },
      {
        tab: "Erase tail",
        visualLabel: "Five zero slices collapsing the remaining tail",
        headline: "Five checked zeros make the whole tail disappear.",
        story:
          "When all five coefficient polynomials are zero, no power of the direction variable contributes anything. The quotient is zero, so the literal formula equals its sign-controlled certificate.",
        equation: "T₀=⋯=T₄=0  ⇒  D=0",
        equationNote: "leaf theorems assemble into the radial identity",
        watch:
          "Two leaves are kernel-checked. The third is building; it should count only after Lake finishes successfully.",
        proof:
          "The final zero-tail assembly is the bounded milestone before deciding whether more global certificate transfer is necessary.",
        proofStatus: "active",
        mode: "assembly",
        control: { label: "Validated coefficients", min: 0, max: 5, value: 2, unit: " / 5" },
      },
    ],
  },
];

export const physicsTopicById = (id: string) =>
  physicsTopics.find((topic) => topic.id === id);

export const physicsStorySteps = [
  {
    id: "flow-and-spin",
    index: "01",
    label: "See the motion",
    summary: "Water carries specks and local spinning arrows.",
  },
  {
    id: "stretch-and-smooth",
    index: "02",
    label: "Meet the competition",
    summary: "Stretching sharpens spin while viscosity spreads it.",
  },
  {
    id: "gaussian-lens",
    index: "03",
    label: "Measure the danger",
    summary: "A soft lens turns a neighborhood into one number.",
  },
  {
    id: "radius-and-cancellation",
    index: "04",
    label: "Check the certificate",
    summary: "Exact coefficients connect the measurement to a proof object.",
  },
] as const;

export type SceneLegendItem = {
  mark: "arrow" | "dot" | "ring" | "curve" | "bar" | "glow" | "tile";
  label: string;
};

export const sceneLegends: Record<string, SceneLegendItem[]> = {
  flow: [
    { mark: "dot", label: "dot = one carried speck" },
    { mark: "arrow", label: "arrow = local velocity" },
    { mark: "ring", label: "ring = one streamline guide" },
  ],
  spin: [
    { mark: "arrow", label: "small arrows = surrounding velocity" },
    { mark: "ring", label: "wheel = local rotation test" },
    { mark: "arrow", label: "ω = spin axis and strength" },
  ],
  arrows: [
    { mark: "arrow", label: "direction = spin axis" },
    { mark: "bar", label: "length = spin strength" },
    { mark: "glow", label: "alignment = neighboring agreement" },
  ],
  spike: [
    { mark: "curve", label: "curve = spin magnitude across space" },
    { mark: "bar", label: "height = local intensity" },
    { mark: "glow", label: "narrower peak = stronger concentration" },
  ],
  tube: [
    { mark: "curve", label: "outline = vortex tube" },
    { mark: "ring", label: "stripes = rotation around the tube" },
    { mark: "arrow", label: "long arrow = stronger vorticity" },
  ],
  amplify: [
    { mark: "bar", label: "bar = spin after one growth step" },
    { mark: "curve", label: "upward bend = repeated multiplication" },
  ],
  smooth: [
    { mark: "bar", label: "arrow height = local spin" },
    { mark: "curve", label: "profile = distribution across neighbors" },
    { mark: "glow", label: "wider shape = diffusion" },
  ],
  balance: [
    { mark: "bar", label: "warm side = stretching demand" },
    { mark: "bar", label: "cool side = viscous payment" },
    { mark: "curve", label: "gap = missing closure" },
  ],
  lens: [
    { mark: "ring", label: "circle = Gaussian lens scale" },
    { mark: "glow", label: "brightness = weight in the average" },
    { mark: "arrow", label: "arrow = measured spin contribution" },
  ],
  center: [
    { mark: "dot", label: "dot = movable lens center c" },
    { mark: "ring", label: "ring = fixed lens scale s" },
    { mark: "curve", label: "trail = readings along the move" },
  ],
  scale: [
    { mark: "ring", label: "radius = Gaussian scale s" },
    { mark: "glow", label: "brightness = weighted reading" },
  ],
  heat: [
    { mark: "glow", label: "bright patch = concentrated signal" },
    { mark: "ring", label: "spread = later heat time" },
    { mark: "curve", label: "lower peak = smoothing" },
  ],
  shells: [
    { mark: "ring", label: "ring = one fixed radius X" },
    { mark: "arrow", label: "arrows = different directions on that ring" },
    { mark: "glow", label: "bright ring = selected radius" },
  ],
  factor: [
    { mark: "curve", label: "two curves = literal and certificate formulas" },
    { mark: "dot", label: "shared contact = same value and slope" },
    { mark: "bar", label: "gap = X² times a smaller polynomial" },
  ],
  slices: [
    { mark: "tile", label: "tile = coefficient of one power uʲ" },
    { mark: "glow", label: "bright tile = coefficient being inspected" },
    { mark: "ring", label: "not a physical slice of water" },
  ],
  assembly: [
    { mark: "tile", label: "green tile = kernel-checked zero" },
    { mark: "glow", label: "warm tile = building or open" },
    { mark: "curve", label: "all five zeros ⇒ whole tail is zero" },
  ],
};
