# Kata: Gestión de Energía Social

## Narrativa

Madrid me va a matar: Mi calendario está lleno... y lo que pensaba que era infinito (mi energía social) estoy descubriendo que tiene un límite.

Esta semana tengo un montón de planes posibles: meetups, afterworks, vermús,... ¡Incluso he planeado, a lo loco, algo de descanso! ¿Cómo me organizarás la semana sin que pete?

## Objetivo

Implementa la función `planWeek(events: Event[])` que decida qué eventos aceptar para equilibrar energía, prioridades y descanso.

## Datos base

Tienes esta lista de eventos con duración, tipo, coste energético, prioridad y día asignado (consulta `events.ts`).

## Reglas (irán apareciendo con los tests)

1. No más de 2 eventos por día.
2. Energía máxima 10 por día.
3. Al menos 2 bloques de descanso en la semana.
4. Prioriza eventos con prioridad ≥ 8.
5. Si hay empate en prioridad, prioriza menor coste energético.

