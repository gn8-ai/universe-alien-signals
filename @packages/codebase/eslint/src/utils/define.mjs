/**
 * @template {string} MessageIds
 * @template {unknown[]} Options
 * @template {unknown} Docs
 *
 * @param   {import('@typescript-eslint/utils').TSESLint.RuleModule<MessageIds, Options, Docs>} rule Rule module to define.
 *
 * @returns {import('@typescript-eslint/utils').TSESLint.RuleModule<MessageIds, Options, Docs>}      Rule module.
 */
export function defineRule(rule) {
  return rule;
}
