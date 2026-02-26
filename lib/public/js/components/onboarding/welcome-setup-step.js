import { h } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";

const html = htm.bind(h);

export const WelcomeSetupStep = ({ error, loading, onRetry }) => html`
  <div class="py-10 flex flex-col items-center text-center gap-4">
    <svg
      class="animate-spin h-8 w-8 text-white"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <h3 class="text-lg font-semibold text-white">Initializing OpenClaw...</h3>
    <p class="text-sm text-gray-500">This could take 10-15 seconds</p>
  </div>

  ${error
    ? html`<div class="bg-red-900/30 border border-red-800 rounded-xl p-3 text-red-300 text-sm">
        ${error}
      </div>
      <button
        onclick=${onRetry}
        disabled=${loading}
        class="w-full text-sm font-medium px-4 py-3 rounded-xl transition-all ${loading
          ? "bg-gray-800 text-gray-500 cursor-not-allowed"
          : "bg-white text-black hover:opacity-85"}"
      >
        ${loading ? "Retrying..." : "Retry"}
      </button>`
    : null}
`;
