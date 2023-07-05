import { useState } from 'react'
import { Stars } from './components/stars/Stars'

function App() {
	const [rates, setRates] = useState<Array<number>>([0, 0, 0, 0])

	const handleRates = (index: number, rate: number) => {
		const newRate = rates.map((r, i) => {
			if (i === index) return rate
			else return r
		})
		setRates(newRate)
	}

	return (
		<>
			<div className="rate-container">
				<div className="stars-container">
					<h3>Responsive</h3>
					<Stars.Rate index={1} onChangeRate={handleRates} />
				</div>
				<div className="stars-container">
					<h3>Code</h3>
					<Stars.Rate index={2} onChangeRate={handleRates} />
				</div>
				<div className="stars-container">
					<h3>Intégration</h3>
					<Stars.Rate index={3} onChangeRate={handleRates} />
				</div>
				<div className="stars-container">
					<h3>Vertu</h3>
					<Stars.Rate index={4} onChangeRate={handleRates} />
				</div>
			</div>
			{rates.every((e) => e !== 0) && (
				<div className="total-rate stars-container">
					<h3>Total</h3>
					<Stars.Display
						className="total-stars"
						value={
							rates.reduce((acc, curr) => acc + curr, 0) /
							rates.length
						}
					/>
				</div>
			)}
		</>
	)
}

export default App
