const SidebarView = ({guests, setGuests}) =>
    <div>
       <button onClick={() => setGuests(guests - 1)}
               disabled={guests===1}>-</button>
       <span> number of guests: {guests} </span>
       <button onClick={() => setGuests(guests + 1)}>+</button>
    </div>

export default SidebarView;
