import { describe, it, expect } from "vitest";
import { planWeek } from "../src/planWeek";
import { events } from "../src/events";
import { extraEvents } from "../src/events-extra";

describe("planWeek con eventos sorpresa", () => {
  const allEvents = [...events, ...extraEvents];

  it("debería priorizar el hackathon si cabe", () => {
    const plan = planWeek(allEvents);
    expect(plan.find(e => e.name === "Hackathon de fin de semana")).toBeDefined();
  });

  it("no debería poner el paseo introspectivo si hay evento el viernes", () => {
    const plan = planWeek(allEvents);
    const friday = plan.find(e => e.day === "Friday");
    if (friday) {
      const includesPaseo = plan.find(e => e.name === "Paseo de introspección (solo si no sales el viernes)");
      expect(includesPaseo).toBeUndefined();
    }
  });

  it("debería seguir respetando la energía máxima por día", () => {
    const plan = planWeek(allEvents);
    const energyPerDay = plan.reduce((acc, e) => {
      acc[e.day] = (acc[e.day] || 0) + e.energyCost;
      return acc;
    }, {});
    for (const day in energyPerDay) {
      expect(energyPerDay[day]).toBeLessThanOrEqual(10);
    }
  });
});