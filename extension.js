const vscode = require('vscode');
const { analyzeItems, renderMarkdownReport } = require('./src/core.cjs');

function activate(context) {
  const disposable = vscode.commands.registerCommand('codex-github-context-resume.openReview', () => {
    const sample = { items: [{"id":"codex-context-1","title":"起動・復帰・Codex/GitHub文脈管理 サンプル 1","workspace":"D:\\AI\\VSCodeExtension\\codex-github-context-resume","issue":"#1","branch":"main","resumeNote":"次は検証ログを確認する"}, {"id":"codex-context-missing-required","title":"必須項目不足サンプル","issue":"#1","branch":"main","resumeNote":"次は検証ログを確認する"}] };
    const report = analyzeItems(sample);
    const panel = vscode.window.createWebviewPanel('codex-context', '起動・復帰・Codex/GitHub文脈管理', vscode.ViewColumn.One, {});
    panel.webview.html = `<!doctype html><html lang="ja"><meta charset="utf-8"><body><pre>${escapeHtml(renderMarkdownReport(report))}</pre></body></html>`;
  });
  context.subscriptions.push(disposable);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function deactivate() {}

module.exports = { activate, deactivate };
