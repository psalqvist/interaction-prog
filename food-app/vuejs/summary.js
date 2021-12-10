// For components without data, or stateless components, we can use it as a "functional componenent"

const Summary= {
    functional:true,
    render(h, context){
        const {...props}=context.props;
        return SummaryView({
            guests: context.props.model.getNumberOfGuests(),
            dishes: context.props.model.getMenu(),
            nav: context.props.nav,
            ingredients: context.props.model.getIngredients(),
            h
        });
    }
}
