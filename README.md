# Kata: Gestión de Energía Social

## Narrativa

Eres una persona muy activa que va a muchos eventos de programación y también disfruta de la vida social. Tu calendario está lleno y tu energía social tiene un límite.

Esta semana tienes un montón de planes posibles: meetups, afterworks, vermús, descansos necesarios... ¿Cómo organizarás la semana sin petar?

## Objetivo

Implementa la función `planWeek(events: Event[]): Event[]` que decida qué eventos aceptar para equilibrar energía, prioridades y descanso.

## Datos base

Tienes esta lista de eventos con duración, tipo, coste energético, prioridad y día asignado (consulta `events.ts`).

## Reglas (irán apareciendo con los tests)

1. No más de 2 eventos por día.
2. Energía máxima 10 por día.
3. Al menos 2 bloques de descanso en la semana.
4. Prioriza eventos con prioridad ≥ 8.
5. Si hay empate en prioridad, prioriza menor coste energético.

## Ejecución

- Corre `npm install` para instalar dependencias.
- Ejecuta `npm test` para correr los tests.
- Implementa la función en `src/planWeek.ts`.

## ¿Qué aprenderás?

- A hacer TDD con criterios reales.
- A manejar restricciones y prioridades.
- A planificar soluciones iterativas.

## ¡A divertirse y planificar la mejor semana posible!