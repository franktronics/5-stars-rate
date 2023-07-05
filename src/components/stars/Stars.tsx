import { ComponentPropsWithoutRef, useState } from 'react'
import './stars.scss'

export type StarsProps = {
	index: number
	onChangeRate?: (i: number, r: number) => void
} & ComponentPropsWithoutRef<'div'>

const Rate = ({ index, onChangeRate, className = '' }: StarsProps) => {
	const [rate, setRate] = useState(0)

	const getColor = (n: number): string => {
		if (n >= 3) return 'var(--color1)'
		else if (n >= 2) return 'var(--color2)'
		else return 'var(--color3)'
	}

	return (
		<div
			className={'stars stars-rate ' + className}
			style={{ '--fill-color': getColor(rate) } as React.CSSProperties}
		>
			{[1, 2, 3, 4, 5].map((a) => {
				return (
					<svg
						width="30"
						height="30"
						viewBox="0 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						key={a}
						className={rate >= a ? 'star reached' : 'star'}
						onClick={() => {
							setRate(a)
							onChangeRate && onChangeRate(index - 1, a)
						}}
						onMouseOver={() => {
							document.documentElement.style.setProperty(
								'--color-hover',
								`${getColor(a)}`
							)
						}}
					>
						<defs>
							<linearGradient
								id={'half-fill-r-' + a}
								x1="0"
								y1="0"
								x2="1"
								y2="0"
							>
								<stop offset="50%" stopColor="var(--color1)" />
								<stop offset="50%" stopColor="var(--color1)" />
							</linearGradient>
						</defs>
						<path
							stroke="#242424"
							strokeLinejoin="round"
							fill={`url(#half-fill-r-${a})`}
							d="M25 4.16667L31.4667 18.1833L46.7958 20.0021L35.4625 30.4812L38.4708 45.6229L25 38.0833L11.5292 45.625L14.5375 30.4833L3.20417 20L18.5354 18.1812L25 4.16667Z"
						/>
					</svg>
				)
			})}
		</div>
	)
}

export type DisplayProps = {
	value: number
} & ComponentPropsWithoutRef<'div'>

const Display = ({ value, className = '' }: DisplayProps) => {
	return (
		<div className={'stars ' + className}>
			{[1, 2, 3, 4, 5].map((a) => {
				const diff = value - a
				const comp = diff >= 0 ? 100 : diff > -1 ? (diff + 1) * 100 : 0

				return (
					<svg
						width="30"
						height="30"
						viewBox="0 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						key={a}
						className="star"
					>
						<defs>
							<linearGradient
								id={'half-fill-d-' + a}
								x1="0"
								y1="0"
								x2="1"
								y2="0"
							>
								<stop
									offset={`${comp}%`}
									stopColor="var(--color1)"
								/>
								<stop
									offset="0%"
									stopColor="var(--default-star-fill)"
								/>
							</linearGradient>
						</defs>
						<path
							stroke="#242424"
							strokeLinejoin="round"
							fill={`url(#half-fill-d-${a})`}
							d="M25 4.16667L31.4667 18.1833L46.7958 20.0021L35.4625 30.4812L38.4708 45.6229L25 38.0833L11.5292 45.625L14.5375 30.4833L3.20417 20L18.5354 18.1812L25 4.16667Z"
						/>
					</svg>
				)
			})}
		</div>
	)
}

export const Stars = {
	Rate: Rate,
	Display: Display,
}
