const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeItems, renderMarkdownReport } = require('../src/core.cjs');

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "codex-context-1",
  "title": "起動・復帰・Codex/GitHub文脈管理 サンプル 1",
  "workspace": "D:\\AI\\VSCodeExtension\\codex-github-context-resume",
  "issue": "#1",
  "branch": "main",
  "resumeNote": "次は検証ログを確認する"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "codex-context-missing-required",
  "title": "必須項目不足サンプル",
  "issue": "#1",
  "branch": "main",
  "resumeNote": "次は検証ログを確認する"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
