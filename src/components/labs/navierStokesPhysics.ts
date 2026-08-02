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
          "Think of the remaining shape as five transparent pictures stacked together. If each picture is blank, their entire stack is blank for every direction.",
        equation: "T(u,w,X) = Σ⁴ⱼ₌₀ uʲ Tⱼ(w,X)",
        equationNote: "degree four means exactly five possible coefficients",
        watch:
          "Choose a slice. Slice zero has a public bridge; the other four remain separate proof leaves.",
        proof:
          "A proved angular degree bound excludes every coefficient above four. The current file exposes slice zero.",
        proofStatus: "active",
        mode: "slices",
        control: { label: "Angular slice", min: 0, max: 4, value: 0, unit: "" },
      },
      {
        tab: "Erase tail",
        visualLabel: "Five zero slices collapsing the remaining tail",
        headline: "Five checked zeros make the whole tail disappear.",
        story:
          "When every transparent picture is blank, stacking them cannot create a mark. The quotient is zero, so the original literal polynomial equals its positive certificate.",
        equation: "T₀=⋯=T₄=0  ⇒  D=0",
        equationNote: "leaf theorems assemble into the radial identity",
        watch:
          "Advance the assembly. The first slice is available; the remaining pieces stay visible until their theorems exist.",
        proof:
          "The final zero-tail assembly is the bounded milestone before deciding whether more global certificate transfer is necessary.",
        proofStatus: "active",
        mode: "assembly",
        control: { label: "Slices proved", min: 0, max: 5, value: 1, unit: " / 5" },
      },
    ],
  },
];

export const physicsTopicById = (id: string) =>
  physicsTopics.find((topic) => topic.id === id);
