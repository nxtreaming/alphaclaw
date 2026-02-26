import { h } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";

const html = htm.bind(h);

export const WelcomeHeader = ({
  groups,
  step,
  isSetupStep,
  stepNumber,
  activeStepLabel,
  vals,
  hasAi,
}) => {
  const progressSteps = [...groups, { id: "setup", title: "Setting up" }];

  return html`
  <div class="text-center mb-1">
    <img
      src="./img/logo.svg"
      alt="alphaclaw"
      class="mx-auto mb-3"
      width="32"
      height="33"
    />
    <h1 class="text-2xl font-semibold mb-2">Setup</h1>
    <p style="color: var(--text-muted)" class="text-sm">
      Let's get your agent running
    </p>
    <p class="text-xs my-2" style="color: var(--text-dim)">
      Step ${stepNumber} of ${progressSteps.length} - ${activeStepLabel}
    </p>
  </div>

  <div class="flex items-center gap-2">
    ${progressSteps.map((group, idx) => {
      const isFinalStep = idx === progressSteps.length - 1;
      const isActive = idx === step;
      const isComplete = isFinalStep
        ? isSetupStep
        : idx < step && group.validate(vals, { hasAi });
      const bg = isActive
        ? "rgba(99, 235, 255, 0.9)"
        : isComplete
          ? "rgba(99, 235, 255, 0.55)"
          : "rgba(82, 94, 122, 0.45)";
      return html`
        <div
          class="h-1 flex-1 rounded-full transition-colors"
          style=${{ background: bg }}
          title=${group.title}
        ></div>
      `;
    })}
  </div>
`;
};
