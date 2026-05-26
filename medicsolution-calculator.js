const TRIALS = 3500;
const DAYS = 365;

const scenarioDefinitions = [
  {
    key: "natural",
    title: "Natural disaster response",
    meta: "hurricanes, floods, tornadoes",
    frequency: 0.18,
    duration: 12,
    units: 6,
    variation: 45
  },
  {
    key: "massCasualty",
    title: "Mass casualty event",
    meta: "surge trauma and surgery",
    frequency: 0.08,
    duration: 4,
    units: 5,
    variation: 35
  },
  {
    key: "homeland",
    title: "Homeland security attack",
    meta: "coordinated high-severity response",
    frequency: 0.025,
    duration: 14,
    units: 9,
    variation: 60
  },
  {
    key: "hospitalLoss",
    title: "Hospital capacity replacement",
    meta: "facility damage or infrastructure loss",
    frequency: 0.05,
    duration: 40,
    units: 6,
    variation: 55
  },
  {
    key: "eventStandby",
    title: "Large event standby",
    meta: "planned events and congregations",
    frequency: 0.12,
    duration: 3,
    units: 4,
    variation: 25
  }
];

const presets = {
  launch: {
    customers: 16,
    guaranteedUnits: 6,
    fleetUnits: 52,
    confidenceLevel: 0.9,
    slaHours: 72,
    reservePct: 38,
    correlationStress: 35,
    commercialUtilization: 42,
    hubs: 2,
    scenarios: {}
  },
  state: {
    customers: 10,
    guaranteedUnits: 7,
    fleetUnits: 44,
    confidenceLevel: 0.9,
    slaHours: 72,
    reservePct: 50,
    correlationStress: 55,
    commercialUtilization: 30,
    hubs: 2,
    scenarios: {
      natural: { frequency: 0.26, duration: 14, units: 7, variation: 52 },
      massCasualty: { frequency: 0.08, duration: 4, units: 5, variation: 35 },
      homeland: { frequency: 0.03, duration: 15, units: 10, variation: 62 },
      hospitalLoss: { frequency: 0.07, duration: 42, units: 7, variation: 58 },
      eventStandby: { frequency: 0.04, duration: 3, units: 4, variation: 25 }
    }
  },
  fema: {
    customers: 32,
    guaranteedUnits: 8,
    fleetUnits: 130,
    confidenceLevel: 0.95,
    slaHours: 72,
    reservePct: 48,
    correlationStress: 65,
    commercialUtilization: 28,
    hubs: 4,
    scenarios: {
      natural: { frequency: 0.22, duration: 16, units: 8, variation: 56 },
      massCasualty: { frequency: 0.05, duration: 5, units: 6, variation: 38 },
      homeland: { frequency: 0.035, duration: 16, units: 12, variation: 65 },
      hospitalLoss: { frequency: 0.055, duration: 45, units: 8, variation: 60 },
      eventStandby: { frequency: 0.02, duration: 3, units: 5, variation: 25 }
    }
  },
  hospital: {
    customers: 22,
    guaranteedUnits: 4,
    fleetUnits: 48,
    confidenceLevel: 0.9,
    slaHours: 120,
    reservePct: 25,
    correlationStress: 22,
    commercialUtilization: 62,
    hubs: 2,
    scenarios: {
      natural: { frequency: 0.09, duration: 9, units: 4, variation: 42 },
      massCasualty: { frequency: 0.04, duration: 3, units: 4, variation: 30 },
      homeland: { frequency: 0.012, duration: 10, units: 7, variation: 52 },
      hospitalLoss: { frequency: 0.1, duration: 30, units: 4, variation: 48 },
      eventStandby: { frequency: 0.04, duration: 2, units: 3, variation: 22 }
    }
  },
  event: {
    customers: 8,
    guaranteedUnits: 5,
    fleetUnits: 28,
    confidenceLevel: 0.8,
    slaHours: 48,
    reservePct: 32,
    correlationStress: 18,
    commercialUtilization: 55,
    hubs: 1,
    scenarios: {
      natural: { frequency: 0.04, duration: 8, units: 4, variation: 35 },
      massCasualty: { frequency: 0.08, duration: 3, units: 5, variation: 35 },
      homeland: { frequency: 0.015, duration: 9, units: 7, variation: 52 },
      hospitalLoss: { frequency: 0.02, duration: 24, units: 4, variation: 45 },
      eventStandby: { frequency: 0.9, duration: 5, units: 5, variation: 24 }
    }
  }
};

const defaultEconomics = {
  monthlySubscription: 200000,
  unitCost: 2000000,
  deploymentFee: 9500,
  rentalRate: 7500,
  capitalCharge: 14,
  maintenanceRate: 4,
  unitDayCost: 2400,
  storageInsurance: 45000,
  hubCost: 1200000,
  shortfallPenalty: 75000
};

const AUTH_STORAGE_KEY = "medicsolution-calculator-unlocked";
const AUTH_HASH = "18ce790d527c9299c254275cf3cc83f02e072fef5c7bb5e42c1fa90fac569acf";
const moneyInputIds = new Set([
  "monthly-subscription",
  "unit-cost",
  "deployment-fee",
  "rental-rate",
  "unit-day-cost",
  "storage-insurance",
  "hub-cost",
  "shortfall-penalty"
]);

const tourSteps = [
  {
    target: "#model-thesis",
    title: "The strategic idea",
    copy: "This is not just a unit sales spreadsheet. It tests the capacity-as-a-service thesis: customers pay for guaranteed access to hospital-grade mobile surgical capacity, while MedicSolution operates a pooled fleet.",
    points: [
      "The model asks two questions at the same time: can the fleet meet promised emergency demand, and can the subscription economics pay for the readiness burden?",
      "The outputs are illustrative planning signals. They are meant to pressure-test assumptions before turning this into a board model or customer pricing sheet."
    ]
  },
  {
    target: "#portfolio-controls",
    title: "Portfolio assumptions",
    copy: "This panel defines the promise being sold and the physical fleet used to back it.",
    points: [
      "Subscribed customers are governments, agencies, hospital systems, or event planners with access contracts.",
      "Guaranteed units per customer is the access promise, not necessarily the number of units MedicSolution must own for every customer.",
      "Owned fleet units is the real asset pool. The business works if pooled demand requires fewer units than standalone ownership."
    ]
  },
  {
    target: "#portfolio-controls",
    title: "Readiness and correlation risk",
    copy: "These controls describe how much of the fleet can be delivered within the SLA and how likely customers are to need units at the same time.",
    points: [
      "Fleet held immediately ready is the portion not already committed to ordinary commercial utilization.",
      "The SLA controls how much non-reserve fleet can be recalled quickly enough.",
      "Regional correlation stress simulates clustered events, such as hurricanes or multi-state attacks, where demand is not independent."
    ]
  },
  {
    target: "#economics-controls",
    title: "Economic assumptions",
    copy: "This section translates the business model into revenue, capital burden, operating cost, and shortfall risk.",
    points: [
      "Monthly subscription per 10 units is the recurring readiness fee.",
      "Deployment fees and commercial rentals add usage-based revenue on top of subscription ARR.",
      "Capital charge, maintenance, storage, hubs, operating costs, and shortfall penalties represent the costs MedicSolution absorbs by owning and operating the fleet."
    ]
  },
  {
    target: "#kpi-grid",
    title: "Top-line outputs",
    copy: "The KPI row is the quick read on whether the scenario is serviceable and financeable.",
    points: [
      "Fulfillment probability is the share of simulated years where SLA-accessible capacity covers peak emergency demand.",
      "Peak demand and required fleet show the capacity needed at the selected confidence target.",
      "ARR, risk-adjusted margin, and capex avoided connect the subscription case to buyer value and provider economics."
    ]
  },
  {
    target: "#decision-band",
    title: "Decision signal",
    copy: "This band converts the model into a planning recommendation.",
    points: [
      "Green means the fleet clears the confidence target and the economics are positive.",
      "Yellow means either capacity or pricing needs work.",
      "Red means the package is underpriced, under-reserved, over-promised, or exposed to too much correlated risk."
    ]
  },
  {
    target: "#demand-panel",
    title: "Demand distribution",
    copy: "This chart shows the simulated peak emergency load across thousands of possible years.",
    points: [
      "Each bar groups simulated annual peak unit demand.",
      "The SLA marker shows what the fleet can access within the promised response time.",
      "The confidence marker shows the target peak demand, such as P90 or P95. You want SLA capacity to meet or exceed this marker."
    ]
  },
  {
    target: "#capacity-panel",
    title: "Fleet stack",
    copy: "The stack explains why owned fleet and usable emergency capacity are not always the same number.",
    points: [
      "Owned fleet is the full physical pool.",
      "Held immediately ready is what can move fastest.",
      "SLA-accessible capacity includes reserve fleet plus the fraction that can be recalled in time. Any target shortfall points to a service risk."
    ]
  },
  {
    target: "#economics-panel",
    title: "Revenue and risk bridge",
    copy: "The bridge shows how the business gets from recurring revenue to risk-adjusted margin.",
    points: [
      "Subscription ARR is the base that pays for readiness.",
      "Deployment and commercial rental revenue add utilization upside.",
      "Capital, maintenance, hubs, operations, and expected shortfall penalties pull the model back toward breakeven."
    ]
  },
  {
    target: "#efficiency-panel",
    title: "Why pooling matters",
    copy: "This is the core subscription logic: customers want access to readiness, but they do not all need their full allocation at the same time.",
    points: [
      "Standalone ownership is what every customer would buy if they owned their guaranteed capacity.",
      "Pooled requirement is the modeled fleet needed at the chosen confidence target.",
      "The efficiency number is the economic opening for a shared-capacity platform."
    ]
  },
  {
    target: "#scenario-panel",
    title: "Event assumptions",
    copy: "This table is where you shape the actuarial story behind the model.",
    points: [
      "Annual frequency is the expected number of each event type per customer per year.",
      "Duration and units per event determine the base unit-day load.",
      "Severity variation widens the distribution, which is important because emergency medicine is driven by tail events, not just averages."
    ]
  },
  {
    target: "#financial-panel",
    title: "Financial trace",
    copy: "This section gives the audit trail behind the headline margin.",
    points: [
      "Use it to explain what is included in revenue, opex, capital cost, shortfall reserve, and breakeven pricing.",
      "If the top-line KPI looks too good or too weak, this is where to see which assumption is driving the result.",
      "For customer discussions, the most useful metrics are often capex avoided, breakeven subscription, fulfillment probability, and fleet efficiency."
    ]
  }
];

let lastResults = null;
let updateFrame = 0;
let tourIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseNumber(value) {
  const cleaned = String(value ?? "").replace(/[^0-9.-]/g, "");
  return Number(cleaned || 0);
}

function readNumber(id) {
  const node = document.getElementById(id);
  return parseNumber(node?.value);
}

function writeValue(id, value) {
  const node = document.getElementById(id);
  if (!node) return;
  node.value = moneyInputIds.has(id) ? formatMoneyInput(value) : String(value);
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatMoneyInput(value) {
  return formatMoney(parseNumber(value));
}

function formatNumber(value, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits
  }).format(value);
}

function formatPercent(value, digits = 0) {
  return `${(value * 100).toFixed(digits)}%`;
}

function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function hashText(value) {
  const payload = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", payload);
  return bufferToHex(digest);
}

async function passwordMatches(value) {
  if (!window.crypto?.subtle) return false;
  return (await hashText(value.trim())) === AUTH_HASH;
}

function setAuthenticated(isAuthenticated) {
  const app = $(".scenario-app");
  const accessScreen = $("#access-screen");
  const passwordInput = $("#access-password");

  document.body.classList.toggle("is-locked", !isAuthenticated);
  if (app) app.hidden = !isAuthenticated;
  if (accessScreen) accessScreen.hidden = isAuthenticated;

  if (isAuthenticated) {
    activatePage($(".menu-tab.is-active")?.dataset.pageTab || "overview");
    window.requestAnimationFrame(() => window.scrollTo({ top: 0 }));
    return;
  }

  if ($("#tour-panel") && !$("#tour-panel").hidden) closeTour();
  window.requestAnimationFrame(() => passwordInput?.focus());
}

function initAccessGate() {
  const form = $("#access-form");
  const input = $("#access-password");
  const error = $("#access-error");
  const lockButton = $("#lock-app");

  setAuthenticated(window.sessionStorage.getItem(AUTH_STORAGE_KEY) === "true");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) submitButton.disabled = true;

    const valid = await passwordMatches(input.value);
    if (valid) {
      window.sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      input.value = "";
      if (error) error.hidden = true;
      setAuthenticated(true);
    } else {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
      if (error) error.hidden = false;
      input.select();
    }

    if (submitButton) submitButton.disabled = false;
  });

  lockButton?.addEventListener("click", () => {
    window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setAuthenticated(false);
  });
}

function activatePage(pageName, shouldScroll = false) {
  $$(".menu-page").forEach((page) => {
    const active = page.dataset.page === pageName;
    page.hidden = !active;
    page.classList.toggle("is-active", active);
  });

  $$("[data-page-tab]").forEach((tab) => {
    const active = tab.dataset.pageTab === pageName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  if (shouldScroll) {
    $(".page-shell")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initPageTabs() {
  const tabs = $$("[data-page-tab]");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activatePage(tab.dataset.pageTab, true));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;

      const nextTab = tabs[nextIndex];
      activatePage(nextTab.dataset.pageTab, true);
      nextTab.focus();
    });
  });
}

function initMoneyInputs() {
  moneyInputIds.forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;

    input.addEventListener("focus", () => {
      input.value = String(parseNumber(input.value) || "");
      input.select();
    });

    input.addEventListener("blur", () => {
      input.value = formatMoneyInput(input.value);
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashAssumptions(assumptions) {
  const stable = JSON.stringify(assumptions);
  let hash = 2166136261;
  for (let i = 0; i < stable.length; i += 1) {
    hash ^= stable.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0 || 1;
}

function normalSample(random) {
  const u = Math.max(random(), Number.EPSILON);
  const v = Math.max(random(), Number.EPSILON);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function poissonSample(lambda, random) {
  if (lambda <= 0) return 0;
  if (lambda > 35) {
    return Math.max(0, Math.round(lambda + Math.sqrt(lambda) * normalSample(random)));
  }

  const limit = Math.exp(-lambda);
  let k = 0;
  let product = 1;
  do {
    k += 1;
    product *= random();
  } while (product > limit);
  return k - 1;
}

function lognormalSample(mean, cvPercent, random) {
  const cv = Math.max(0.01, cvPercent / 100);
  const sigma = Math.sqrt(Math.log(1 + cv * cv));
  const mu = Math.log(Math.max(0.01, mean)) - (sigma * sigma) / 2;
  return Math.exp(mu + sigma * normalSample(random));
}

function percentile(sortedValues, p) {
  if (!sortedValues.length) return 0;
  const index = (sortedValues.length - 1) * p;
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) return sortedValues[lower];
  const weight = index - lower;
  return sortedValues[lower] * (1 - weight) + sortedValues[upper] * weight;
}

function recallFactor(hours) {
  if (hours <= 24) return 0.35;
  if (hours <= 48) return 0.55;
  if (hours <= 72) return 0.72;
  if (hours <= 120) return 0.88;
  return 1;
}

function renderScenarioRows() {
  const body = $("#scenario-body");
  body.innerHTML = scenarioDefinitions.map((scenario) => `
    <tr data-scenario="${scenario.key}">
      <td>
        <label class="scenario-name">
          <input class="scenario-enabled" type="checkbox" checked aria-label="${scenario.title}" />
          <span>
            <strong>${scenario.title}</strong>
            <span>${scenario.meta}</span>
          </span>
        </label>
      </td>
      <td>
        <input class="scenario-input scenario-frequency" type="number" min="0" max="5" step="0.005" value="${scenario.frequency}" aria-label="${scenario.title} annual frequency" />
      </td>
      <td>
        <input class="scenario-input scenario-duration" type="number" min="1" max="180" step="1" value="${scenario.duration}" aria-label="${scenario.title} average duration" />
      </td>
      <td>
        <input class="scenario-input scenario-units" type="number" min="1" max="60" step="1" value="${scenario.units}" aria-label="${scenario.title} units per event" />
      </td>
      <td>
        <div class="variation-cell">
          <input class="scenario-variation" type="range" min="5" max="120" step="1" value="${scenario.variation}" aria-label="${scenario.title} severity variation" />
          <output>${scenario.variation}%</output>
        </div>
      </td>
      <td class="unit-days-cell" id="unit-days-${scenario.key}">0</td>
    </tr>
  `).join("");
}

function scenarioInputs() {
  return scenarioDefinitions.map((definition) => {
    const row = document.querySelector(`[data-scenario="${definition.key}"]`);
    return {
      key: definition.key,
      title: definition.title,
      enabled: row.querySelector(".scenario-enabled").checked,
      frequency: Number(row.querySelector(".scenario-frequency").value || 0),
      duration: Number(row.querySelector(".scenario-duration").value || 0),
      units: Number(row.querySelector(".scenario-units").value || 0),
      variation: Number(row.querySelector(".scenario-variation").value || 0)
    };
  });
}

function readAssumptions() {
  return {
    customers: readNumber("customers"),
    guaranteedUnits: readNumber("guaranteed-units"),
    fleetUnits: readNumber("fleet-units"),
    confidenceLevel: readNumber("confidence-level"),
    slaHours: readNumber("sla-hours"),
    reservePct: readNumber("reserve-pct") / 100,
    correlationStress: readNumber("correlation-stress") / 100,
    commercialUtilization: readNumber("commercial-utilization") / 100,
    monthlySubscription: readNumber("monthly-subscription"),
    unitCost: readNumber("unit-cost"),
    deploymentFee: readNumber("deployment-fee"),
    rentalRate: readNumber("rental-rate"),
    capitalCharge: readNumber("capital-charge") / 100,
    maintenanceRate: readNumber("maintenance-rate") / 100,
    unitDayCost: readNumber("unit-day-cost"),
    storageInsurance: readNumber("storage-insurance"),
    hubs: readNumber("hubs"),
    hubCost: readNumber("hub-cost"),
    shortfallPenalty: readNumber("shortfall-penalty"),
    scenarios: scenarioInputs()
  };
}

function addLoad(days, start, duration, units) {
  const last = Math.min(DAYS, start + duration);
  for (let day = start; day < last; day += 1) {
    days[day] += units;
  }
  return Math.max(0, last - start) * units;
}

function runSimulation(assumptions) {
  const seed = hashAssumptions({
    customers: assumptions.customers,
    guaranteedUnits: assumptions.guaranteedUnits,
    fleetUnits: assumptions.fleetUnits,
    confidenceLevel: assumptions.confidenceLevel,
    slaHours: assumptions.slaHours,
    reservePct: assumptions.reservePct,
    correlationStress: assumptions.correlationStress,
    scenarios: assumptions.scenarios
  });

  const random = mulberry32(seed);
  const peaks = [];
  const unitDays = [];
  const shortfallUnitDays = [];
  const scenarioTotals = Object.fromEntries(assumptions.scenarios.map((scenario) => [scenario.key, 0]));
  let activationTotal = 0;
  let correlatedShockDaysTotal = 0;

  const reservedUnits = assumptions.fleetUnits * assumptions.reservePct;
  const slaCapacity = reservedUnits + (assumptions.fleetUnits - reservedUnits) * recallFactor(assumptions.slaHours);
  const clusterProbability = 0.012 + assumptions.correlationStress * 0.16;
  const clusterAffectedShare = 0.03 + assumptions.correlationStress * 0.24;
  const clusterMeanDuration = 5 + assumptions.correlationStress * 34;

  for (let trial = 0; trial < TRIALS; trial += 1) {
    const dailyLoad = new Float64Array(DAYS);
    let trialUnitDays = 0;
    let trialActivations = 0;

    assumptions.scenarios.forEach((scenario) => {
      if (!scenario.enabled || scenario.frequency <= 0) return;
      const eventCount = poissonSample(assumptions.customers * scenario.frequency, random);
      trialActivations += eventCount;

      for (let eventIndex = 0; eventIndex < eventCount; eventIndex += 1) {
        const start = Math.floor(random() * DAYS);
        const duration = clamp(Math.round(lognormalSample(scenario.duration, Math.max(15, scenario.variation * 0.75), random)), 1, 180);
        const units = clamp(Math.round(lognormalSample(scenario.units, scenario.variation, random)), 1, 120);
        const eventUnitDays = addLoad(dailyLoad, start, duration, units);
        trialUnitDays += eventUnitDays;
        scenarioTotals[scenario.key] += eventUnitDays;
      }
    });

    if (random() < clusterProbability) {
      const start = Math.floor(random() * DAYS);
      const affectedCustomers = clamp(
        Math.round(lognormalSample(assumptions.customers * clusterAffectedShare, 42, random)),
        1,
        assumptions.customers
      );
      const units = Math.round(affectedCustomers * assumptions.guaranteedUnits * lognormalSample(0.85, 28, random));
      const duration = clamp(Math.round(lognormalSample(clusterMeanDuration, 50, random)), 2, 90);
      const shockUnitDays = addLoad(dailyLoad, start, duration, units);
      trialUnitDays += shockUnitDays;
      correlatedShockDaysTotal += shockUnitDays;
      trialActivations += 1;
    }

    let peak = 0;
    let shortfall = 0;
    for (let day = 0; day < DAYS; day += 1) {
      const load = dailyLoad[day];
      if (load > peak) peak = load;
      if (load > slaCapacity) shortfall += load - slaCapacity;
    }

    peaks.push(peak);
    unitDays.push(trialUnitDays);
    shortfallUnitDays.push(shortfall);
    activationTotal += trialActivations;
  }

  peaks.sort((a, b) => a - b);
  unitDays.sort((a, b) => a - b);
  shortfallUnitDays.sort((a, b) => a - b);

  const fulfillmentCount = peaks.filter((value) => value <= slaCapacity).length;
  const expectedUnitDays = average(unitDays);
  const expectedShortfallUnitDays = average(shortfallUnitDays);
  const requiredFleet = Math.ceil(percentile(peaks, assumptions.confidenceLevel));
  const p50Peak = percentile(peaks, 0.5);
  const p90Peak = percentile(peaks, 0.9);
  const p95Peak = percentile(peaks, 0.95);
  const p99Peak = percentile(peaks, 0.99);
  const subscriptionArr = assumptions.customers * (assumptions.guaranteedUnits / 10) * assumptions.monthlySubscription * 12;
  const deploymentRevenue = expectedUnitDays * assumptions.deploymentFee;
  const reservedFleet = assumptions.fleetUnits * assumptions.reservePct;
  const commercialFleet = Math.max(0, assumptions.fleetUnits - reservedFleet);
  const commercialUnitDays = commercialFleet * DAYS * assumptions.commercialUtilization;
  const commercialRevenue = commercialUnitDays * assumptions.rentalRate;
  const totalRevenue = subscriptionArr + deploymentRevenue + commercialRevenue;
  const fleetCapitalCost = assumptions.fleetUnits * assumptions.unitCost * assumptions.capitalCharge;
  const maintenanceCost = assumptions.fleetUnits * assumptions.unitCost * assumptions.maintenanceRate;
  const storageCost = assumptions.fleetUnits * assumptions.storageInsurance;
  const hubCost = assumptions.hubs * assumptions.hubCost;
  const emergencyOpsCost = expectedUnitDays * assumptions.unitDayCost;
  const commercialOpsCost = commercialUnitDays * assumptions.unitDayCost * 0.55;
  const shortfallRiskCost = expectedShortfallUnitDays * assumptions.shortfallPenalty;
  const totalCost = fleetCapitalCost + maintenanceCost + storageCost + hubCost + emergencyOpsCost + commercialOpsCost + shortfallRiskCost;
  const margin = totalRevenue - totalCost;
  const subscriptionDenominator = Math.max(1, assumptions.customers * (assumptions.guaranteedUnits / 10) * 12);
  const breakevenMonthly = Math.max(0, (totalCost - deploymentRevenue - commercialRevenue) / subscriptionDenominator);
  const standaloneOwnership = assumptions.customers * assumptions.guaranteedUnits;
  const avoidedCapex = standaloneOwnership * assumptions.unitCost;

  return {
    assumptions,
    seed,
    peaks,
    unitDays,
    shortfallUnitDays,
    p50Peak,
    p90Peak,
    p95Peak,
    p99Peak,
    requiredFleet,
    slaCapacity,
    reservedUnits,
    commercialFleet,
    fulfillmentProbability: fulfillmentCount / TRIALS,
    expectedUnitDays,
    expectedShortfallUnitDays,
    expectedActivations: activationTotal / TRIALS,
    correlatedShockUnitDays: correlatedShockDaysTotal / TRIALS,
    scenarioUnitDays: Object.fromEntries(
      Object.entries(scenarioTotals).map(([key, value]) => [key, value / TRIALS])
    ),
    subscriptionArr,
    deploymentRevenue,
    commercialRevenue,
    totalRevenue,
    commercialUnitDays,
    fleetCapitalCost,
    maintenanceCost,
    storageCost,
    hubCost,
    emergencyOpsCost,
    commercialOpsCost,
    shortfallRiskCost,
    totalCost,
    margin,
    breakevenMonthly,
    standaloneOwnership,
    avoidedCapex,
    efficiencyRatio: requiredFleet / Math.max(1, standaloneOwnership)
  };
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
}

function updateRangeOutputs() {
  const ranges = [
    ["customers", (value) => formatNumber(value)],
    ["guaranteed-units", (value) => formatNumber(value)],
    ["fleet-units", (value) => formatNumber(value)],
    ["reserve-pct", (value) => `${value}%`],
    ["correlation-stress", (value) => `${value}%`],
    ["commercial-utilization", (value) => `${value}%`]
  ];

  ranges.forEach(([id, formatter]) => {
    const value = readNumber(id);
    const output = document.getElementById(`${id}-output`);
    if (output) output.textContent = formatter(value);
  });

  $$(".scenario-variation").forEach((input) => {
    const output = input.closest(".variation-cell").querySelector("output");
    output.textContent = `${input.value}%`;
  });
}

function clearTourFocus() {
  $$(".tour-focus").forEach((node) => node.classList.remove("tour-focus"));
}

function renderTourStep() {
  const step = tourSteps[tourIndex];
  const panel = $("#tour-panel");
  const target = $(step.target);
  clearTourFocus();

  const targetPage = target?.closest(".menu-page");
  if (targetPage?.dataset.page) {
    activatePage(targetPage.dataset.page);
  }

  $("#tour-progress").textContent = `Step ${tourIndex + 1} of ${tourSteps.length}`;
  $("#tour-title").textContent = step.title;
  $("#tour-copy").textContent = step.copy;
  $("#tour-points").innerHTML = step.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
  $("#tour-prev").disabled = tourIndex === 0;
  $("#tour-next").textContent = tourIndex === tourSteps.length - 1 ? "Finish" : "Next";

  if (target) {
    target.classList.add("tour-focus");
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  panel.focus({ preventScroll: true });
}

function startTour() {
  tourIndex = 0;
  $("#tour-panel").hidden = false;
  $("#tour-scrim").hidden = false;
  document.body.classList.add("tour-active");
  renderTourStep();
}

function closeTour() {
  clearTourFocus();
  $("#tour-panel").hidden = true;
  $("#tour-scrim").hidden = true;
  document.body.classList.remove("tour-active");
}

function moveTour(direction) {
  if (direction > 0 && tourIndex === tourSteps.length - 1) {
    closeTour();
    return;
  }
  tourIndex = clamp(tourIndex + direction, 0, tourSteps.length - 1);
  renderTourStep();
}

function setScenarioValues(valuesByKey = {}) {
  scenarioDefinitions.forEach((definition) => {
    const values = { ...definition, ...(valuesByKey[definition.key] || {}) };
    const row = document.querySelector(`[data-scenario="${definition.key}"]`);
    row.querySelector(".scenario-enabled").checked = values.enabled !== false;
    row.querySelector(".scenario-frequency").value = values.frequency;
    row.querySelector(".scenario-duration").value = values.duration;
    row.querySelector(".scenario-units").value = values.units;
    row.querySelector(".scenario-variation").value = values.variation;
  });
}

function applyPreset(name) {
  const preset = presets[name] || presets.launch;
  writeValue("customers", preset.customers);
  writeValue("guaranteed-units", preset.guaranteedUnits);
  writeValue("fleet-units", preset.fleetUnits);
  writeValue("confidence-level", preset.confidenceLevel);
  writeValue("sla-hours", preset.slaHours);
  writeValue("reserve-pct", preset.reservePct);
  writeValue("correlation-stress", preset.correlationStress);
  writeValue("commercial-utilization", preset.commercialUtilization);
  writeValue("hubs", preset.hubs);

  Object.entries(defaultEconomics).forEach(([key, value]) => {
    const id = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    writeValue(id, value);
  });

  setScenarioValues(preset.scenarios);
  updateRangeOutputs();
  scheduleUpdate();
}

function scheduleUpdate() {
  window.cancelAnimationFrame(updateFrame);
  updateFrame = window.requestAnimationFrame(updateModel);
}

function updateModel() {
  updateRangeOutputs();
  const assumptions = readAssumptions();
  const results = runSimulation(assumptions);
  lastResults = results;
  renderKpis(results);
  renderDecision(results);
  renderHistogram(results);
  renderCapacityStack(results);
  renderEconomicsChart(results);
  renderScenarioOutputs(results);
  renderFinancialGrid(results);
  renderEfficiencyStats(results);
}

function renderKpis(results) {
  const pValue = Math.round(results.assumptions.confidenceLevel * 100);
  $("#kpi-fulfillment").textContent = formatPercent(results.fulfillmentProbability, 1);
  $("#kpi-fulfillment-note").textContent = `${formatNumber(results.slaCapacity, 1)} units accessible inside SLA`;
  $("#kpi-peak-label").textContent = `P${pValue} peak demand`;
  $("#kpi-peak").textContent = formatNumber(results.requiredFleet);
  $("#kpi-required").textContent = formatNumber(results.requiredFleet);
  $("#kpi-required-note").textContent = `${formatNumber(Math.max(0, results.requiredFleet - results.slaCapacity), 1)} unit gap at target`;
  $("#kpi-arr").textContent = formatMoney(results.subscriptionArr);
  $("#kpi-margin").textContent = formatMoney(results.margin);
  $("#kpi-capex").textContent = formatMoney(results.avoidedCapex);
}

function renderDecision(results) {
  const band = $("#decision-band");
  const target = results.assumptions.confidenceLevel;
  const adequacy = results.slaCapacity / Math.max(1, results.requiredFleet);
  band.className = "decision-band";

  let title;
  let copy;
  if (results.fulfillmentProbability >= target && results.margin >= 0) {
    band.classList.add("strong");
    title = "Capacity and economics clear the target";
    copy = `The pool meets the ${formatPercent(target)} confidence target with ${formatNumber(results.slaCapacity, 1)} SLA-accessible units and produces ${formatMoney(results.margin)} of risk-adjusted annual margin.`;
  } else if (results.fulfillmentProbability >= target) {
    band.classList.add("warning");
    title = "Capacity clears, pricing does not";
    copy = `The fleet clears the ${formatPercent(target)} service target, but annual economics are short by ${formatMoney(Math.abs(results.margin))}. Breakeven subscription pricing is ${formatMoney(results.breakevenMonthly)} per month per 10 units.`;
  } else if (results.margin >= 0) {
    band.classList.add("warning");
    title = "Profitable but under-reserved";
    copy = `The model is profitable, but fulfillment is only ${formatPercent(results.fulfillmentProbability, 1)}. Add about ${formatNumber(Math.max(0, results.requiredFleet - results.slaCapacity), 1)} SLA-accessible units or relax the SLA.`;
  } else {
    band.classList.add("danger");
    title = "The package misses both tests";
    copy = `Adequacy is ${formatPercent(adequacy, 1)} of the target requirement and annual margin is ${formatMoney(results.margin)}. The plan needs more price, more fleet, lower recall risk, or a narrower SLA promise.`;
  }

  $("#decision-title").textContent = title;
  $("#decision-copy").textContent = copy;
}

function renderHistogram(results) {
  const histogram = $("#peak-histogram");
  const bins = 22;
  const maxPeak = Math.max(1, results.peaks[results.peaks.length - 1], results.slaCapacity, results.requiredFleet);
  const axisMax = Math.ceil(maxPeak * 1.08);
  const counts = Array.from({ length: bins }, () => 0);
  results.peaks.forEach((peak) => {
    const index = clamp(Math.floor((peak / axisMax) * bins), 0, bins - 1);
    counts[index] += 1;
  });
  const maxCount = Math.max(...counts, 1);

  histogram.innerHTML = counts.map((count, index) => {
    const height = Math.max(2, (count / maxCount) * 100);
    const label = index % 4 === 0 ? Math.round((axisMax / bins) * index) : "";
    return `<div class="histogram-bar" style="height:${height}%"><span>${label}</span></div>`;
  }).join("");

  const markers = [
    { kind: "fleet", value: results.slaCapacity, label: "SLA" },
    { kind: "target", value: results.requiredFleet, label: `P${Math.round(results.assumptions.confidenceLevel * 100)}` }
  ];

  markers.forEach((marker) => {
    const node = document.createElement("i");
    node.className = `histogram-marker ${marker.kind}`;
    node.dataset.label = `${marker.label} ${formatNumber(marker.value, 0)}`;
    node.style.left = `${clamp((marker.value / axisMax) * 100, 0, 100)}%`;
    histogram.appendChild(node);
  });

  $("#histogram-caption").textContent = `${formatNumber(TRIALS)} trials | P50 ${formatNumber(results.p50Peak, 1)} | P95 ${formatNumber(results.p95Peak, 1)}`;
}

function renderCapacityStack(results) {
  const max = Math.max(results.assumptions.fleetUnits, results.requiredFleet, results.slaCapacity, 1);
  const shortfall = Math.max(0, results.requiredFleet - results.slaCapacity);
  const items = [
    ["Owned fleet", results.assumptions.fleetUnits, "blue"],
    ["Held immediately ready", results.reservedUnits, "teal"],
    ["SLA-accessible capacity", results.slaCapacity, "green"],
    [`P${Math.round(results.assumptions.confidenceLevel * 100)} requirement`, results.requiredFleet, "amber"],
    ["Target shortfall", shortfall, "rust"]
  ];

  $("#capacity-stack").innerHTML = items.map(([label, value, color]) => `
    <div class="stack-item">
      <header><span>${label}</span><strong>${formatNumber(value, 1)}</strong></header>
      <div class="meter"><span class="${color}" style="width:${clamp((value / max) * 100, 0, 100)}%"></span></div>
    </div>
  `).join("");
}

function renderEconomicsChart(results) {
  const rows = [
    ["Subscription ARR", results.subscriptionArr, "revenue"],
    ["Deployment fees", results.deploymentRevenue, "revenue"],
    ["Commercial rental", results.commercialRevenue, "revenue"],
    ["Fleet capital charge", -results.fleetCapitalCost, "cost"],
    ["Maintenance, storage, hubs", -(results.maintenanceCost + results.storageCost + results.hubCost), "cost"],
    ["Operating costs", -(results.emergencyOpsCost + results.commercialOpsCost), "cost"],
    ["Shortfall risk reserve", -results.shortfallRiskCost, "cost"],
    ["Risk-adjusted margin", results.margin, "margin"]
  ];

  const maxAbs = Math.max(...rows.map(([, value]) => Math.abs(value)), 1);
  $("#economics-chart").innerHTML = rows.map(([label, value, kind]) => {
    const width = clamp((Math.abs(value) / maxAbs) * 48, 1, 48);
    const negative = value < 0;
    const classes = ["bridge-fill", negative ? "negative" : "", kind === "cost" ? "cost" : "", kind === "margin" ? "margin" : ""].filter(Boolean).join(" ");
    return `
      <div class="bridge-row">
        <span class="bridge-label">${label}</span>
        <div class="bridge-track"><span class="${classes}" style="width:${width}%"></span></div>
        <span class="bridge-value">${formatMoney(value)}</span>
      </div>
    `;
  }).join("");

  $("#breakeven-caption").textContent = `${formatMoney(results.breakevenMonthly)} monthly breakeven per 10 units`;
}

function renderScenarioOutputs(results) {
  results.assumptions.scenarios.forEach((scenario) => {
    const node = document.getElementById(`unit-days-${scenario.key}`);
    node.textContent = scenario.enabled ? formatNumber(results.scenarioUnitDays[scenario.key] || 0, 0) : "off";
  });
}

function renderFinancialGrid(results) {
  const opex = results.maintenanceCost + results.storageCost + results.hubCost + results.emergencyOpsCost + results.commercialOpsCost;
  const marginClass = results.margin >= 0 ? "positive" : "negative";
  const cards = [
    ["Total revenue", formatMoney(results.totalRevenue)],
    ["Subscription ARR", formatMoney(results.subscriptionArr)],
    ["Deployment revenue", formatMoney(results.deploymentRevenue)],
    ["Commercial rental revenue", formatMoney(results.commercialRevenue)],
    ["Annualized fleet capital", formatMoney(results.fleetCapitalCost)],
    ["Opex and logistics", formatMoney(opex)],
    ["Shortfall risk reserve", formatMoney(results.shortfallRiskCost)],
    ["Breakeven monthly per 10", formatMoney(results.breakevenMonthly)],
    ["Risk-adjusted margin", formatMoney(results.margin), marginClass],
    ["Margin on revenue", formatPercent(results.margin / Math.max(1, results.totalRevenue), 1), marginClass],
    ["Expected shortfall unit-days", formatNumber(results.expectedShortfallUnitDays, 1)],
    ["Correlated shock unit-days", formatNumber(results.correlatedShockUnitDays, 1)]
  ];

  $("#financial-grid").innerHTML = cards.map(([label, value, className = ""]) => `
    <article class="financial-card">
      <span>${label}</span>
      <strong class="${className}">${value}</strong>
    </article>
  `).join("");
}

function renderEfficiencyStats(results) {
  const fleetSavings = 1 - results.efficiencyRatio;
  $("#stat-standalone").textContent = `${formatNumber(results.standaloneOwnership)} units`;
  $("#stat-pooled").textContent = `${formatNumber(results.requiredFleet)} units`;
  $("#stat-efficiency").textContent = fleetSavings >= 0
    ? `${formatPercent(fleetSavings, 1)} fewer than standalone`
    : `${formatPercent(Math.abs(fleetSavings), 1)} above standalone`;
  $("#stat-activations").textContent = `${formatNumber(results.expectedActivations, 1)} / yr`;
  $("#stat-unit-days").textContent = formatNumber(results.expectedUnitDays, 0);
}

function modelSummary(results) {
  const p = Math.round(results.assumptions.confidenceLevel * 100);
  return [
    "MedicSolution actuarial scenario summary",
    `Customers: ${results.assumptions.customers}`,
    `Guaranteed units/customer: ${results.assumptions.guaranteedUnits}`,
    `Owned fleet: ${results.assumptions.fleetUnits}`,
    `SLA: ${results.assumptions.slaHours} hours`,
    `SLA-accessible capacity: ${formatNumber(results.slaCapacity, 1)} units`,
    `P${p} peak demand: ${formatNumber(results.requiredFleet, 0)} units`,
    `Fulfillment probability: ${formatPercent(results.fulfillmentProbability, 1)}`,
    `Expected activations/year: ${formatNumber(results.expectedActivations, 1)}`,
    `Expected emergency unit-days/year: ${formatNumber(results.expectedUnitDays, 0)}`,
    `Subscription ARR: ${formatMoney(results.subscriptionArr)}`,
    `Total annual revenue: ${formatMoney(results.totalRevenue)}`,
    `Risk-adjusted annual margin: ${formatMoney(results.margin)}`,
    `Breakeven monthly subscription per 10 units: ${formatMoney(results.breakevenMonthly)}`,
    `Customer capex avoided: ${formatMoney(results.avoidedCapex)}`
  ].join("\n");
}

async function copySummary() {
  if (!lastResults) return;
  const button = $("#copy-summary");
  const original = button.textContent;
  const text = modelSummary(lastResults);
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    button.textContent = "Copied";
  }
  window.setTimeout(() => {
    button.textContent = original;
  }, 1400);
}

function bindEvents() {
  $("#preset").addEventListener("change", (event) => applyPreset(event.target.value));
  $("#reset-model").addEventListener("click", () => applyPreset($("#preset").value));
  $("#copy-summary").addEventListener("click", copySummary);
  $("#start-walkthrough").addEventListener("click", startTour);
  $("#tour-close").addEventListener("click", closeTour);
  $("#tour-prev").addEventListener("click", () => moveTour(-1));
  $("#tour-next").addEventListener("click", () => moveTour(1));

  document.addEventListener("keydown", (event) => {
    if ($("#tour-panel").hidden) return;
    if (event.key === "Escape") closeTour();
    if (event.key === "ArrowLeft") moveTour(-1);
    if (event.key === "ArrowRight") moveTour(1);
  });

  $$(".scenario-app input, .scenario-app select").forEach((node) => {
    if (node.id === "preset") return;
    node.addEventListener("input", scheduleUpdate);
    node.addEventListener("change", scheduleUpdate);
  });
}

function boot() {
  renderScenarioRows();
  initPageTabs();
  initMoneyInputs();
  bindEvents();
  applyPreset("launch");
  initAccessGate();
}

boot();
