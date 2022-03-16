const Terms = ({data, index}) => {
    return (
        <div>
            {data[index].map(item =>(
                <div className="Context">
                    {item.data}
                </div>
            ))}
        </div>
    );
};

export default Terms;