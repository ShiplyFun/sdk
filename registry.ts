import { Agent } from "./agent";

export const AgentRegistry: Agent[] = [];

export function registerAgent(agent: Agent) {
  AgentRegistry.push(agent);
}
