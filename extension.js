const vscode = require('vscode');
const { analyzeItems, buildReviewModel, renderHtmlReport } = require('./src/core.cjs');

function activate(context) {
  const disposable = vscode.commands.registerCommand('codex-github-context-resume.openReview', () => {
    const sample = { items: [{"id":"codex-github-context-resume-1","title":"起動・復帰・Codex/GitHub文脈管理 サンプル 1","status":"ready","workspace":"D:\\AI\\VSCodeExtension\\codex-github-context-resume","issue":"#1","branch":"main","resumeNote":"次は検証ログを確認する"}, {"id":"codex-github-context-resume-missing-required","title":"必須項目不足サンプル","status":"ready","issue":"#1","branch":"main","resumeNote":"次は検証ログを確認する"}] };
    const report = analyzeItems(sample);
    const model = buildReviewModel(report);
    const panel = vscode.window.createWebviewPanel('codex-github-context-resume', '起動・復帰・Codex/GitHub文脈管理', vscode.ViewColumn.One, { enableScripts: false });
    panel.webview.html = renderHtmlReport(report);
    vscode.window.setStatusBarMessage('起動・復帰・Codex/GitHub文脈管理: ' + model.statusLabel, 5000);
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
