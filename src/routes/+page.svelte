<script>
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<title>Column Method Drills</title>
	<meta name="description" content="Generate column method drills." />
</svelte:head>
<div class="container">
	{#if dev}
		<div>
			<hgroup>
				<h1>Long Division Method</h1>
				<p>test</p>
			</hgroup>
			<article>
				<header>Generate Long Division Method Drills</header>

				<form
					action="./long-division-method"
					method="GET"
					id="generate-long-division-drill"
					target="_blank"
				>
					<fieldset class="grid">
						<label for="difficulty"
							>Difficulty
							<select
								name="difficulty"
								placeholder="Select difficulty"
								aria-label="Select difficulty"
							>
								<option selected value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</select>
						</label>
						<fieldset>
							<legend>Remainder</legend>
							<input type="radio" id="has-remainder" name="remainder" value='true' checked />
							<label for="has-remainder">Has Remainder</label>
							<input type="radio" id="no-remainder" name="remainder" value='false' />
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
					<button type="submit" form="generate-long-division-drill" aria-label="Generate"
						>Generate Drill</button
					>
				</footer>
			</article>
		</div>
	{/if}

	<div>
		<hgroup>
			<h1>Column Method</h1>
			<p>
				The column method is a mathematical technique for performing calculations by writing numbers
				in columns with their place values aligned vertically. It's used for addition, subtraction,
				and multiplication.
			</p>
		</hgroup>
		<article>
			<header>Generate Column Method Drills</header>
			<form action="./column-method" method="GET" id="generate-column-method-drill" target="_blank">
				<fieldset class="grid">
					<label for="operation"
						>Operation
						<select name="operation" placeholder="Select operation" aria-label="Select operation">
							<option selected value="addition">Addition</option>
							<option value="subtraction">Subtraction</option>
							<option value="multiplication">Multiplication</option>
						</select>
					</label>
					<label for="difficulty"
						>Difficulty
						<select
							name="difficulty"
							placeholder="Select difficulty"
							aria-label="Select difficulty"
						>
							<option selected value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</label>
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
				<button type="submit" form="generate-column-method-drill" aria-label="Generate"
					>Generate Drill</button
				>
			</footer>
		</article>
	</div>
</div>
