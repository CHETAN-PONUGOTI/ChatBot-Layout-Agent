export function validateLayout(layout) {
  if (!layout) return false;
  if (!Array.isArray(layout.rootNodes) || layout.rootNodes.length === 0) return false;
  if (typeof layout.nodes !== 'object' || layout.nodes === null) return false;
  return true;
}