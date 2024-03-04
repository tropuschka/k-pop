const { render } = ReactDOM;
const Ref = props => <div class="group_container">
                    <div class="rotate">
                        <div class="face"><img src={props.img} alt={props.alias}></img><h2>{props.alias}</h2></div>
                        <div class="back">
                            <h2>{props.alias}</h2>
                            <p>Имя, псевдонимы: {props.names}</p>
                            <p>Сольный дебют: {props.debute}</p>
                            <p>Фандом: {props.fandom}</p>
                            <p>Агенство: {props.agency}</p>
							<a href={props.link}>Подробнее</a>
                        </div>
                    </div>
                </div>;

render(<div>
	<Ref 
	img="pics/min/solo/RM.jpg"
	alias="RM"
	names="Ким Намджун (김남준)"
	debute="2 декабря 2022"
	fandom="-"
	agency="BigHit Music"
	link="detail#RM"/>
	<Ref 
	img="pics/min/solo/Jessi.jpg"
	alias="Джесси"
	names="Джессика Хёнджу Хо, Ынби (은비)"
	debute="1 декабря 2005"
	fandom="Jebbies"
	agency="MORE VISION"
	link="detail#JESSI"/>
	<Ref 
	img="pics/min/solo/Jin.jpeg"
	alias="Джин"
	names="Ким Сокджин (김석진)"
	debute="28 октября 2022"
	fandom="-"
	agency="BigHit Music"
	link="detail#JIN"/>
	<Ref 
	img="pics/min/solo/ROSE.jpg"
	alias="Розэ"
	names="Розанна Пак, Пак Чэён (박채영)"
	debute="12 марта 2021"
	fandom="-"
	agency="YG Entertainment"
	link="detail#ROSE"/>
	<Ref 
	img="pics/min/solo/hyuna.jpg"
	alias="ХёнА"
	names="Ким Хёна (김현아)"
	debute="4 января 2010"
	fandom="A-ing"
	agency="-"
	link="detail#HYUNA"/>
	<Ref 
	img="pics/min/solo/Hwasa.jpeg"
	alias="Хваса (화사)"
	names="Ан Хеджин (안혜진), Мария"
	debute="13 февраля 2019"
	fandom="-"
	agency="P NATION"
	link="detail#HWASA"/>
	<Ref 
	img="pics/min/solo/ZICO.jpg"
	alias="ZICO"
	names="У Чжихо (우지호)"
	debute="4 ноября 2014"
	fandom="-"
	agency="KOZ Entertainment"
	link="detail#ZICO"/>
	</div>,
	document.querySelector('.group_all'));