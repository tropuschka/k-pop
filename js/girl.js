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
	img="pics/min/girl/BLACKPINK.jpg"
	name="BLACKPINK"
	amount="4"
	leader="-"
	debute="8 августа 2016"
	ganres="поп, EDM, хип-хоп"
	fandom="BLINK"
	agency="YG Entertainment"
	link="detail#BLACKPINK"/>
	<Ref 
	img="pics/min/girl/ITZY.jpg"
	name="ITZY"
	amount="5"
	leader="Йеджи (예지)"
	debute="12 февраля 2019"
	ganres="EDM, хип-хоп, поп"
	fandom="MIDZY"
	agency="JYP Entertainment"
	link="detail#ITZY"/>
	<Ref 
	img="pics/min/girl/LE_SSERAFIM.jpg"
	name="LE SSERAFIM"
	amount="5"
	leader="Ким Чэвон (김채원)"
	debute="2 мая 2022"
	ganres="поп, танцевальный, R&B, баллада"
	fandom="FEARNOT"
	agency="Source Music"
	link="detail#LESSERAFIM"/>
	<Ref 
	img="pics/min/girl/NewJeans.jpg"
	name="NewJeans"
	amount="5"
	leader="-"
	debute="1 августа 2022"
	ganres="Kpop, Krnb"
	fandom="Bunnies"
	agency="ADOR"
	link="detail#NEWJEANS"/>
	<Ref 
	img="pics/min/girl/Rolling_Quartz.jpg"
	name="Rolling Quartz"
	amount="5"
	leader="-"
	debute="30 декабря 2020"
	ganres="рок, инди"
	fandom="Diadem"
	agency="Rolling Star Entertainment"
	link="detail#ROLLINGQUARTZ"/>
	<Ref 
	img="pics/min/girl/TWICE.jpg"
	name="TWICE"
	amount="9"
	leader="Джихё (지효)"
	debute="20 октября 2015"
	ganres="поп, k-pop, j-pop, EDM, электропоп, бамблгам-поп"
	fandom="ONCE"
	agency="JYP Entertainment"
	link="detail#TWICE"/>
	<Ref 
	img="pics/min/girl/Wonder_Girls.jpg"
	name="Wonder Girls"
	amount="4"
	leader="Еын (예은)"
	debute="10 февраля 2007"
	ganres="k-поп"
	fandom="Wonderful"
	agency="JYP Entertainment"
	link="detail#WONDERGIRLS"/></div>,
	document.querySelector('.group_all'));