import * as vscode from 'vscode';

/** 支持的语言类型 */
const LANGUAGES = ['typescriptreact', 'typescript', 'javascript', 'javascriptreact'];

export function activate(context: vscode.ExtensionContext) {
	/** 触发推荐的字符列表 */
	const triggers = [' '];
	const completionProvider = vscode.languages.registerCompletionItemProvider(LANGUAGES, {
		async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const completionItem: vscode.CompletionItem = {
				label: '<LButton />',
        documentation: 'Hello VsCode',
			};
			return [completionItem];
		}
	}, ...triggers);

	context.subscriptions.push(completionProvider);
}
