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

render(<div>
	<Ref 
	img="pics/min/boy/ASTRO.jpg"
	name="ASTRO"
	amount="4"
	leader="ДжинДжин (진진)"
	debute="23 февраля 2016"
	ganres="поп"
	fandom="AROHA"
	agency="Fantagio Music"
	link="detail#ASTRO"/>
	<Ref 
	img="pics/min/boy/ATEEZ.jpg"
	name="ATEEZ"
	amount="8"
	leader="Хонджун (홍중)"
	debute="24 октября 2018"
	ganres="поп"
	fandom="ATINY"
	agency="KQ Entertainment"
	link="detail#ATEEZ"/>
	<Ref 
	img="pics/min/boy/Block_B.jpg"
	name="Block B"
	amount="7"
	leader="ZICO"
	debute="23 июня 2011"
	ganres="поп, хип-хоп"
	fandom="BBC"
	agency="Seven Seasons"
	link="detail#BLOCKB"/>
	<Ref 
	img="pics/min/boy/BTOB.jpg"
	name="BTOB"
	amount="6"
	leader="Ынкван (서은광)"
	debute="21 марта 2012"
	ganres="поп, баллада"
	fandom="Melody"
	agency="-"
	link="detail#BTOB"/>
	<Ref 
	img="pics/min/boy/EXO.jpg"
	name="EXO"
	amount="9"
	leader="Сухо (수호)"
	debute="8 апреля 2012"
	ganres="K-pop, C-pop, J-pop"
	fandom="EXO-L"
	agency="SM Entertainment"
	link="detail#EXO"/>
	<Ref 
	img="pics/min/boy/INFINITE.jpg"
	name="INFINITE"
	amount="6"
	leader="Сонгю (성규)"
	debute="9 июня 2010"
	ganres="поп, поп-рок, танцевальный, электропоп, R&B"
	fandom="INSPIRIT"
	agency="INFINITE Company"
	link="detail#INFINITE"/>
	<Ref 
	img="pics/min/boy/ONEUS.jpg"
	name="ONEUS"
	amount="5"
	leader="-"
	debute="9 января 2019"
	ganres="танцевальный, рэп, хип-хоп, поп"
	fandom="TO MOON"
	agency="RBW"
	link="detail#ONEUS"/>
	<Ref 
	img="pics/min/boy/The_Rose.jpg"
	name="The Rose"
	amount="4"
	leader="Усон (우성)"
	debute="3 августа 2017"
	ganres="поп, рок"
	fandom="Black Rose"
	agency="-"
	link="detail#THEROSE"/>
	<Ref 
	img="pics/min/boy/VANNER.jpeg"
	name="VANNER"
	amount="5"
	leader="Тэхван (태환)"
	debute="14 февраля 2019"
	ganres="поп"
	fandom="VVS"
	agency="KLAP Entertainment"
	link="detail#VANNER"/>
	<Ref 
	img="pics/min/boy/VIXX.jpg"
	name="VIXX"
	amount="5"
	leader="N"
	debute="24 мая 2012"
	ganres="K-pop, j-pop"
	fandom="Starlight"
	agency="Jellyfish Entertainment"
	link="detail#VIXX"/>
	<Ref 
	img="pics/min/boy/WINNER.jpg"
	name="WINNER"
	amount="4"
	leader="Юн (윤)"
	debute="15 августа 2014"
	ganres="поп"
	fandom="InnerCircle"
	agency="YG Entertainment"
	link="detail#WINNER"/>
	</div>,
	document.querySelector('.group_all'));