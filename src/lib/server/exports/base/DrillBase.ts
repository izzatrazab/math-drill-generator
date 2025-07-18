import { addHeader, displayStarImages, drawOrangeBorder } from '$lib/server/drillvendor';
import PDFDocument from 'pdfkit';
import imgStar8 from '$lib/assets/stars/star-8.png';
import imgStar9 from '$lib/assets/stars/star-9.png';
import imgStar10 from '$lib/assets/stars/star-10.png';
import fontDynaPuffVariable from '$lib/assets/fonts/DynaPuff-VariableFont.ttf';
import { join } from 'path';

export interface DrillLayout {
	row: number;
	column: number;
	rowHeight: number;
	columnWidth: number;
}

export class DrillBase extends PDFDocument {
	/** The number of pages in the document. */
	public num_page: number = 0;
	/** The X coordinate after applying the left margin. */
	public origin_x: number = 0;
	/** The Y coordinate after applying the top margin. */
	public origin_y: number = 0;
	/** The total number of questions. */
	public total_questions: number = 0;
	/** question layout */
	public layout: DrillLayout = {
		row: 12,
		column: 1,
		rowHeight: 0,
		columnWidth: 0
	};
	/** store answers */
	public answers: Array<number> = [];
	/** for question numbers */
	public counter: number = 0;
	public title = {
		eng: '',
		ms: ''
	};

	constructor(info: {
		Producer?: string;
		Creator?: string;
		CreationDate?: Date;
		Title?: string;
		Author?: string;
		Subject?: string;
		Keywords?: string;
		ModDate?: Date;
	}) {
		super({
			size: 'A4',
			margins: {
				top: 50,
				left: 50,
				bottom: 50, // to allow page number
				right: 50
			},
			info,
			bufferPages: true
		});
	}

	addHeader() {
		addHeader(this, this.x, this.y, this.origin_x, this.layout.row * this.num_page);

		this.registerFont('DynaPuff', join(process.cwd(), fontDynaPuffVariable)).font('DynaPuff');

		this.fontSize(16).fillColor('#982cc9').text(this.title.eng, this.x, this.y, {
			continued: true,
			baseline: 'middle'
		});

		this.fontSize(11).fillColor('grey').text(`  ${this.title.ms}`, this.x, this.y, {
			baseline: 'middle'
		});
	}

	drawBorder({ x = 0, y = 0 }: { x?: number; y?: number } = {}) {
		this.strokeColor('orange').lineWidth(2);

		let width = this.getContentWidth();
		let height = this.page.height - 50 - y;
		let radius = 8;

		this.roundedRect(x, y, width, height, radius).stroke();

		let star_size = 30;
		let y_gap = 40;

		let start_3_y = this.page.height - this.page.margins.bottom - star_size;
		this.image(
			join(process.cwd(), imgStar8),
			this.page.width - (this.page.margins.right * 7) / 8,
			start_3_y - y_gap * 3,
			{ align: 'right', width: star_size }
		);
		this.image(
			join(process.cwd(), imgStar9),
			this.page.width - (this.page.margins.right * 7) / 8,
			start_3_y - y_gap * 2,
			{ align: 'right', width: star_size }
		);
		this.image(
			join(process.cwd(), imgStar10),
			this.page.width - (this.page.margins.right * 7) / 8,
			start_3_y - y_gap,
			{ align: 'right', width: star_size }
		);

		return this;
	}

	initDrillLayout() {
		let padding = 10;
		this.layout.columnWidth = (this.getContentWidth() - padding * 2) / this.layout.column;
		let remaining_available_height =
			this.page.height - this.y - this.page.margins.bottom - padding * 2;
		this.layout.rowHeight = remaining_available_height / this.layout.row;
	}

	drawAnswers() {
		this.font('Chilanka')
			.fontSize(14)
			.text('Answer Sheet', {
				align: 'left'
			})
			.fontSize(9)
			.fillColor('grey')
			.text('Kertas Jawapan');

		//reset font and font color
		this.font('Arial').fontSize(12).fillColor('black').moveDown(1);
		let formatted_answers = this.answers.map((answer) => answer.toLocaleString());

		this.moveDown(1);

		let string = formatted_answers.map(function (value, index) {
			return index + 1 + ')  ' + value;
		});

		let final = string.reduce((result, item) => (result += item + '\n'), '');

		this.text(final, {
			columns: 3,
			columnGap: 15,
			align: 'justify',
			wordSpacing: 5,
			characterSpacing: 1,
			lineGap: 20
		});
	}

	/**
	 * @returns width of page minus left and right margins
	 */
	getContentWidth() {
		return this.page.width - this.page.margins.left - this.page.margins.right;
	}

	/**
	 *
	 * @returns height of page minus top and bottom margins
	 */
	getContentHeight() {
		return this.page.height - this.page.margins.top - 50;
	}

	public generatePageNumbers() {
		// see the range of buffered pages
		const range = this.bufferedPageRange(); // => { start: 0, count: 2 }

		for (let index = range.start; index < range.count; index++) {
			this.switchToPage(index);

			this.text(`p. ${index + 1}/${range.count}`, this.origin_x, this.page.margins.top / 2, {
				align: 'right',
				baseline: 'top'
			});
		}
	}
}
