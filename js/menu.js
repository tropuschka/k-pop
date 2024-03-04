const { render } = ReactDOM;
const Ref = props => <a href={props.link}><div class={props.class}><h2>{props.text}</h2></div></a>;

render(<div>
	<Ref 
	link="search"
	class="group search"
	text="Поиск групп и исполнителей"/>
	<Ref 
	link="boy"
	class="group boy"
	text="Мужские группы"/>
	<Ref 
	link="girl"
	class="group girl"
	text="Женские группы"/>
	<Ref 
	link="mix"
	class="group mix"
	text="Смешанные группы"/>
	<Ref 
	link="solo"
	class="group solo"
	text="Соло"/>
	</div>,
	document.querySelector('.group_all'));