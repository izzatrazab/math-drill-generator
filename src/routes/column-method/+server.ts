import ColumnMethod from '$lib/server/ColumnMethod';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	
	const operation_symbol = url.searchParams.get('operation') ?? '+';
	const difficulty = url.searchParams.get('difficulty') ?? 'easy';

	const doc = new ColumnMethod(operation_symbol, difficulty);

	let buffers: any[] = [];

	// Collect data as the PDF is being generated
	doc.on('data', (chunk) => buffers.push(chunk));

	// Return a promise that resolves when the PDF is fully generated
	await new Promise((resolve) => {
		doc.on('end', resolve);
		doc.end();
	});

	// Concatenate all the chunks into a single buffer
	const pdfData = Buffer.concat(buffers);

	// Return the PDF as a response
	return new Response(pdfData, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline' // open in page
			// 'Content-Disposition': 'attachment' // direct download
		}
	});
};