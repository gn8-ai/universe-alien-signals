/**
 * @template {string} MessageIds
 * @template {unknown[]} Options
 * @template {unknown} Docs
 * @template {import('@typescript-eslint/utils').TSESLint.RuleListener} Listener
 *
 * @param   {import('@typescript-eslint/utils').TSESLint.RuleModule<MessageIds, Options, Docs, Listener>} rule Rule module to define.
 *
 * @returns {import('@typescript-eslint/utils').TSESLint.RuleModule<MessageIds, Options, Docs, Listener>}      Rule module.
 */
export function defineRule(rule) {
  return rule;
}
