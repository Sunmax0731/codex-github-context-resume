const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeItems, buildReviewModel, renderHtmlReport } = require('../src/core.cjs');

test('review model exposes status cards and next actions', () => {
  const report = analyzeItems({ items: [{
  "id": "codex-github-context-resume-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "issue": "#1",
  "branch": "main",
  "resumeNote": "次回は検証ログから再開する"
}] });
  const model = buildReviewModel(report);
  assert.equal(model.statusLabel, '修正が必要');
  assert.ok(model.completionRate < 100);
  assert.ok(model.cards.length >= 4);
  assert.match(renderHtmlReport(report), /Next Actions/);
});
