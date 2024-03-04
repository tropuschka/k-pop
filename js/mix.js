const { render } = ReactDOM;
const Ref = props => <div class="group_container">
                    <div class="rotate">
                        <div class="face"><img src={props.img} alt={props.name}></img><h2>{props.name}</h2></div>
                        <div class="back">
                            <h2>{props.name}</h2>
                            <p>Кол-во участников: {props.amount}</p>
                            <p>Лидер: {props.leader}</p>
                            <p>Дебют: {props.debute}</p>
                            <p>Жанры: {props.ganres}</p>
                            <p>Фандом: {props.fandom}</p>
                            <p>Агенство: {props.agency}</p>
							<a href={props.link}>Подробнее</a>
                        </div>
                    </div>
                </div>;

render(<div><Ref 
	img="pics/min/mix/KARD.png"
	name="KARD"
	amount="4"
	leader="-"
	debute="19 июля 2017"
	ganres="поп, тропикал-хаус, EDM, хип-хоп"
	fandom="Hidden Kard"
	agency="DSP Media"
	link="detail#KARD"/>
	<Ref
	img="pics/min/mix/Triple_H.jpg" 
	name="Triple H"
	amount="3"
	leader="ХёнА (현아)"
	debute="1 мая 2017"
	ganres="поп"
	fandom="-"
	agency="Cube Entertainment"
	link="detail#TRIPLEH"/></div>,
	document.querySelector('.group_all'));