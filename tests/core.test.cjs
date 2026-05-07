const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeItems, renderMarkdownReport } = require('../src/core.cjs');

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "codex-github-context-resume-1",
  "title": "Codex/GitHub文脈再開支援 サンプル1",
  "status": "ready",
  "workspace": "D:\\AI\\VSCodeExtension\\codex-github-context-resume",
  "issue": "#1",
  "branch": "main",
  "resumeNote": "次回は検証ログから再開する"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "codex-github-context-resume-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "issue": "#1",
  "branch": "main",
  "resumeNote": "次回は検証ログから再開する"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
