<script>
	import { base } from '$app/paths';

	const formAction = `${base}/exports/long-division-method`;
</script>

<div>
	<hgroup>
		<h1>Long Division Method</h1>
		<p>
			Long division is a way to divide big numbers by breaking it down into smaller steps. You see
			how many times the divisor (the number you're dividing by) fits into parts of the dividend
			(the number you're dividing), write the result, subtract, and then bring down the next number.
			You keep going until you’ve finished. The result is the answer, and any leftover is the
			remainder.
		</p>
	</hgroup>
	<article>
		<header>Generate Long Division Method Drills</header>

		<form action={formAction} method="GET" id="generate-long-division-drill" target="_blank">
			<fieldset class="grid">
				<label for="difficulty">
					Difficulty
					<select name="difficulty" placeholder="Select difficulty" aria-label="Select difficulty">
						<option selected value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</label>
				<fieldset>
					<legend>Remainder</legend>
					<input type="radio" id="has-remainder" name="remainder" value="true" checked />
					<label for="has-remainder">Has Remainder</label>
					<input type="radio" id="no-remainder" name="remainder" value="false" />
					<label for="no-remainder">No Remainder</label>
				</fieldset>
			</fieldset>

			<fieldset>
				<label for="nop">
					Number of Pages
					<input
						type="number"
						name="nop"
						required
						placeholder="Provide number of pages"
						aria-label="Number of pages"
						min="1"
						list="fibonacci"
						value="1"
					/>
				</label>
				<datalist id="fibonacci">
					<option value="1"></option>
					<option value="2"></option>
					<option value="3"></option>
					<option value="5"></option>
					<option value="8"></option>
				</datalist>
			</fieldset>
		</form>
		<footer>
			<button type="submit" form="generate-long-division-drill" aria-label="Generate">
				Generate Drill
			</button>
		</footer>
	</article>
</div>
