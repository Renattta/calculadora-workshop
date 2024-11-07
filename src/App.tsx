import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrow from './assets/leftarrow.png';
import { useState } from 'react';

import { levels, calcularOuro, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {
	const [height, setHeight] = useState<number>(0);
	const [weight, setWeight] = useState<number>(0);
	const [showItem, setShowItem] = useState<Level | null>(null);

	const handleCalculate = () => {
		if (height && weight) {
            setShowItem(calcularOuro(height, weight))
		} else {
			alert('Digite todos os campos!');
		}
	}

	const handleBackButton = () => {
		setShowItem(null);
		setHeight(0);
		setWeight(0);
	}

	return (
		<div className={styles.main}>
			<header>
				<div className={styles.headerContainer}>
					<img src={poweredImage} alt="" width={150}/>
				</div>
			</header>

			<div className={styles.container}>
				<div className={styles.leftSide}>
					<h1>Workshop Galvanoplastia</h1>
					<p>
					Calculadora para calcular a quantidade de ouro (em gramas) aplicada nas peças, com base no peso total e na espessura de deposição (milésimos).
					</p>

					<input 
						type="number"
						placeholder='Digite o peso das peças Ex: 340,52 (g (gramas))'
						value={height > 0 ? height : ''}
						onChange={e => setHeight(parseFloat(e.target.value))}
						disabled={showItem ? true : false}
					/>

					<input 
						type="number"
						placeholder='Digite quantos milésimos. Ex: 3 - 10 (mg/g)'
						value={weight > 0 ? weight : ''}
						onChange={e => setWeight(parseFloat(e.target.value))}
						disabled={showItem ? true : false}
					/>

					<button 
						onClick={handleCalculate}
					 	disabled={showItem ? true : false}>
							Calcular
					</button>
				</div>

				<div className={styles.rightSide}>
					{!showItem &&
						<div className={styles.grid}>
							{	
								levels.map((item, key)=>(
									<GridItem key={key} item={item}/>
								))
							}
						</div>
					}
					{showItem &&
						<div className={styles.levelContainer}>
							<div className={styles.arrow} onClick={handleBackButton}>
								<img src={leftArrow} alt="" width={25}/>
							</div>
							<GridItem item={showItem} />
						</div>
					}

				</div>
			</div>
		</div>
	)
}

export default App;