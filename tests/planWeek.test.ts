import { describe, it, expect } from "vitest";
import { planWeek } from "../src/planWeek";
import { events } from "../src/events";

describe("planWeek", () => {
  it("debería incluir al menos un bloque de descanso si hay espacio", () => {
    const plan = planWeek(events);
    expect(plan.some(e => e.type === "rest")).toBe(true);
  });

  it("no debería permitir más de dos eventos por día", () => {
    const plan = planWeek(events);
    const daysCount = plan.reduce((acc, e) => {
      acc[e.day] = (acc[e.day] || 0) + 1;
      return acc;
    }, {});
    for (const day in daysCount) {
      expect(daysCount[day]).toBeLessThanOrEqual(2);
    }
  });

  it("la energía por día no debe superar 10", () => {
    const plan = planWeek(events);
    const energyPerDay = plan.reduce((acc, e) => {
      acc[e.day] = (acc[e.day] || 0) + e.energyCost;
      return acc;
    }, {});
    for (const day in energyPerDay) {
      expect(energyPerDay[day]).toBeLessThanOrEqual(10);
    }
  });

  it("debería priorizar eventos con prioridad >= 8", () => {
    const plan = planWeek(events);
    const highPriorityEvents = events.filter(e => e.priority >= 8);
    const included = highPriorityEvents.every(hp => plan.find(e => e.name === hp.name));
    expect(included).toBe(true);
  });
});