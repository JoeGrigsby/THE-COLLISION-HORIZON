import { useState } from "react";

const timeline = [
  {
    year: "2026",
    label: "STABILISE",
    quarter: "Now",
    wpp: [
      "Elevate28 launches: WPP transitions from holding company to single integrated company with four units — WPP Media, WPP Creative, WPP Production, WPP Enterprise Solutions",
      "WPP Production goes live (Feb): 10,000 people unified under one AI-powered platform, Hogarth brand retired",
      "InfoSum fully integrated into Choreograph/GroupM — 'Open Intelligence' data layer activates",
      "£250m gross run-rate cost savings targeted by year-end",
      "WPP Open reaches 85%+ adoption across client-facing staff",
    ],
    ai: [
      "AI agents begin genuinely automating junior coding, research and adaptation roles across industries",
      "OpenBrain releases Agent-1 publicly — capable of autonomous multi-step tasks",
      "AI takes measurable share of junior white-collar jobs; 10,000-person anti-AI protest in DC",
      "Agent-1-mini: 10x cheaper model floods market; B2B AI wrapper startups explode",
    ],
    collision: "WPP's consolidation play is rational — but the AI wave is already eroding the junior workforce the consolidation assumed it still had.",
    risk: "high",
  },
  {
    year: "2027",
    label: "BUILD",
    quarter: "12 months",
    wpp: [
      "Return to organic growth targeted — new integrated go-to-market model fully embedded",
      "WPP Creative (Ogilvy, VML, AKQA unified) proves or disproves its integrated value proposition",
      "GroupM/WPP Media forced to demonstrate AI-era value beyond media buying aggregation",
      "Portfolio rationalisation accelerates — disposal of non-core assets to reduce leverage",
      "Global Client Leader model replaces agency P&L silos as primary commercial unit",
    ],
    ai: [
      "March: Superhuman coder milestone — AI does any coding task faster and cheaper than best human engineers",
      "Agent-2 weights stolen by China — geopolitical AI arms race goes hot",
      "Agent-3 released internally at OpenBrain: 200,000 copies running at 30x human speed",
      "AGI announced publicly mid-year; Agent-3-mini released — blows competing models away",
      "DOD integrates AI into cyber and intelligence operations; government oversight tightens",
    ],
    collision: "WPP targets growth return precisely as AI crosses the superhuman coder threshold. Every production efficiency argument WPP makes to clients is now also available to clients themselves.",
    risk: "critical",
  },
  {
    year: "2028",
    label: "ACCELERATE",
    quarter: "18 months",
    wpp: [
      "£500m gross annualised savings delivered — reinvested into AI, data, commerce",
      "WPP Open matures into full agentic marketing platform: plan, create, publish, optimise in one system",
      "InfoSum network effect either compounds (platform wins) or stalls (clients build in-house)",
      "WPP Production either pivots to creative direction layer or faces commoditisation pressure",
      "First serious M&A or partnership activity targeting AI infrastructure rather than agency capabilities",
    ],
    ai: [
      "Agent-4: superhuman AI researcher — qualitatively better than any human at AI research",
      "AI R&D progress multiplier hits 50x — a year of algorithmic progress every week",
      "Alignment concerns go public: whistleblower leak, congressional hearings, international summits",
      "White House establishes oversight committee over OpenBrain — government-AI entanglement deepens",
      "China operating parallel AI development at scale; geopolitical flashpoints around Taiwan intensify",
    ],
    collision: "WPP's 'Accelerate' phase assumes a stable enough environment to grow into. Instead it arrives into an economy being restructured in real-time by superhuman AI researchers. The clients WPP is selling to are themselves in crisis.",
    risk: "critical",
  },
  {
    year: "2029",
    label: "RECKONING",
    quarter: "2–3 years",
    wpp: [
      "GroupM faces existential question: if AI optimises media spend better than humans, what does WPP sell?",
      "First wave of senior strategic talent hollowing-out — mid-level planners and strategists displaced",
      "WPP Production headcount begins second structural reduction as generative production democratises",
      "Pitch economics collapse — clients generate competitive strategic alternatives with AI in hours",
      "InfoSum either becomes industry standard infrastructure or gets replicated by tech platforms",
    ],
    ai: [
      "Artificial superintelligence (ASI) threshold approaches — AI better than best humans at most cognitive tasks",
      "Regulatory environment around AI marketing data, automated campaigns and AI-generated content tightens sharply",
      "Major brands begin building serious in-house AI marketing capability — bypass agency layer for execution",
      "Global economic disruption from job displacement reaches political crisis point in multiple markets",
    ],
    collision: "The clients who most need WPP are the ones most capable of not needing it. Large sophisticated brands build in-house. WPP's remaining value concentrates in judgment, accountability and relationships — which are hard to price.",
    risk: "critical",
  },
  {
    year: "2030",
    label: "REINVENTION OR DECLINE",
    quarter: "3–4 years",
    wpp: [
      "Holding company model formally dead — WPP operates as integrated operating company or not at all",
      "Revenue mix shifts: service fees shrink, platform/data/software revenue must replace them",
      "China operations reach decision point — geopolitical decoupling forces explicit structural choice",
      "WPP either acquires AI infrastructure company (transformative bet) or faces valuation compression",
      "Talent model inverts: fewer but higher-paid senior practitioners; AI handles all execution",
    ],
    ai: [
      "AI systems managing most white-collar cognitive work autonomously",
      "Governments across major markets implement AI regulation frameworks affecting marketing and media",
      "Winners and losers in AI arms race becoming clear — compute concentration decisive",
      "New economic models emerging: human value increasingly in accountability, creativity, relationships",
    ],
    collision: "WPP's survival depends on whether it has successfully repositioned as platform/infrastructure rather than labour arbitrage. Companies that didn't make that transition by 2028 are being absorbed or wound down.",
    risk: "existential",
  },
  {
    year: "2031–2032",
    label: "NEW EQUILIBRIUM FORMING",
    quarter: "4–6 years",
    wpp: [
      "WPP either a smaller, high-margin platform business or a significantly smaller service business",
      "Brand equity of Ogilvy, VML, AKQA either leveraged into something new or dissolved",
      "New revenue model: outcome-based fees, data licensing, AI infrastructure access",
      "Possible acquisition target: tech platform, consultancy, or private equity roll-up",
      "Workforce likely 40–60% smaller than 2025 peak; remaining talent fundamentally different in profile",
    ],
    ai: [
      "Post-AGI economic models stabilising — some industries restructured, others still in transition",
      "Marketing itself fundamentally changed: personalisation at individual scale, real-time, AI-directed",
      "Brand relationships more direct: AI intermediates between brand and consumer, not agencies",
      "Regulatory frameworks clearer but constantly contested as AI capabilities continue advancing",
    ],
    collision: "The question is no longer whether WPP survives disruption. It's what WPP is. The brand, the relationships and the institutional knowledge are the only non-replicable assets. Whether they've been successfully repackaged determines the outcome.",
    risk: "high",
  },
  {
    year: "2033",
    label: "DESTINATION",
    quarter: "End state",
    wpp: [
      "WPP is either: (A) a high-margin data/platform business with <40,000 people, or (B) a much-diminished traditional services firm, or (C) no longer independent",
      "Clients who stayed with WPP did so for judgment, accountability and proprietary data — not execution",
      "InfoSum-derived data infrastructure: either WPP's most valuable asset or sold to a tech platform",
      "WPP Production: either the world's most efficient creative direction company, or commoditised",
      "The Elevate28 plan is a distant memory — what matters is what WPP became after it",
    ],
    ai: [
      "AI has restructured most knowledge-work industries — marketing among the most transformed",
      "The advertising market itself is radically different: AI-to-AI negotiation, real-time personalisation at scale",
      "Human creativity, cultural judgment and ethical accountability are the premium products",
      "Winners are companies that own data, infrastructure, or trust — not labour",
    ],
    collision: "By 2033, WPP's fate is already written in decisions made between 2026 and 2029. The window to choose what kind of company it becomes is open now and closes fast.",
    risk: "resolved",
  },
];

const riskColors = {
  high: { bg: "#FFF3E0", border: "#FF9800", dot: "#FF9800", label: "HIGH PRESSURE" },
  critical: { bg: "#FCE4EC", border: "#E91E63", dot: "#E91E63", label: "CRITICAL" },
  existential: { bg: "#4A0010", border: "#FF1744", dot: "#FF1744", label: "EXISTENTIAL", dark: true },
  resolved: { bg: "#E8F5E9", border: "#43A047", dot: "#43A047", label: "RESOLVED" },
};

export default function WPPTimeline() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("wpp");

  const item = timeline[active];
  const rc = riskColors[item.risk];

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      background: "#0A0A0F",
      minHeight: "100vh",
      color: "#E8E6E1",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #222",
        padding: "28px 32px 20px",
        background: "#0A0A0F",
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#666", marginBottom: 6, textTransform: "uppercase" }}>
          Strategic Intelligence Brief · WPP Group
        </div>
        <h1 style={{
          fontSize: 22,
          fontWeight: 700,
          margin: 0,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}>
          WPP 2026–2033: The Collision Timeline
        </h1>
        <p style={{ margin: "6px 0 0", fontSize: 13, color: "#888", maxWidth: 560 }}>
          What WPP plans to do — and what AI forces on it. The gap between those two tracks is the risk.
        </p>
      </div>

      {/* Year selector */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        borderBottom: "1px solid #1a1a1a",
        background: "#0D0D12",
        padding: "0 32px",
        gap: 0,
      }}>
        {timeline.map((t, i) => {
          const rc2 = riskColors[t.risk];
          const isActive = i === active;
          return (
            <button
              key={t.year}
              onClick={() => { setActive(i); setTab("wpp"); }}
              style={{
                background: "none",
                border: "none",
                borderBottom: isActive ? `2px solid ${rc2.dot}` : "2px solid transparent",
                color: isActive ? "#fff" : "#555",
                padding: "14px 18px 12px",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: isActive ? 700 : 400,
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              <span style={{ display: "block", fontSize: 14, fontWeight: 700 }}>{t.year}</span>
              <span style={{ fontSize: 9, letterSpacing: "0.12em", color: isActive ? rc2.dot : "#444" }}>
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div style={{ padding: "28px 32px", maxWidth: 900 }}>

        {/* Status badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: rc.dark ? "#1a0008" : rc.bg,
          border: `1px solid ${rc.border}`,
          borderRadius: 4,
          padding: "5px 12px",
          marginBottom: 20,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: rc.dot }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: rc.dot }}>
            {rc.label}
          </span>
          <span style={{ fontSize: 11, color: "#888", marginLeft: 4 }}>
            {item.quarter} · {item.year}
          </span>
        </div>

        {/* Collision callout */}
        <div style={{
          background: "#111116",
          border: "1px solid #2a2a2a",
          borderLeft: `3px solid ${rc.dot}`,
          borderRadius: 6,
          padding: "14px 18px",
          marginBottom: 24,
          fontSize: 13,
          color: "#C8C4BE",
          lineHeight: 1.6,
        }}>
          <span style={{ fontSize: 10, letterSpacing: "0.14em", color: rc.dot, fontWeight: 700, display: "block", marginBottom: 6 }}>
            ⚡ COLLISION POINT
          </span>
          {item.collision}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: "1px solid #1a1a1a" }}>
          {[
            { key: "wpp", label: "WPP Roadmap" },
            { key: "ai", label: "AI Pressure" },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                background: "none",
                border: "none",
                borderBottom: tab === t.key ? "2px solid #fff" : "2px solid transparent",
                color: tab === t.key ? "#fff" : "#555",
                padding: "10px 20px 8px",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: tab === t.key ? 700 : 400,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {(tab === "wpp" ? item.wpp : item.ai).map((point, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                background: "#111116",
                border: "1px solid #1e1e24",
                borderRadius: 6,
                padding: "13px 16px",
              }}
            >
              <div style={{
                minWidth: 20,
                height: 20,
                borderRadius: "50%",
                background: tab === "wpp" ? "#1a2a4a" : "#2a1a1a",
                border: `1px solid ${tab === "wpp" ? "#2a4a8a" : "#8a2a2a"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: tab === "wpp" ? "#6699cc" : "#cc6666",
                marginTop: 1,
                flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#C8C4BE", lineHeight: 1.6 }}>
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Progress strip */}
        <div style={{ marginTop: 32, display: "flex", gap: 4 }}>
          {timeline.map((t, i) => {
            const rc2 = riskColors[t.risk];
            return (
              <div
                key={i}
                onClick={() => { setActive(i); setTab("wpp"); }}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background: i <= active ? rc2.dot : "#1e1e24",
                  cursor: "pointer",
                  opacity: i === active ? 1 : 0.5,
                  transition: "background 0.2s",
                }}
              />
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 10, color: "#444", letterSpacing: "0.06em" }}>
          <span>2026</span>
          <span>2033</span>
        </div>

        {/* Legend */}
        <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
          {Object.entries(riskColors).map(([key, val]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: val.dot }} />
              <span style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em" }}>{val.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
