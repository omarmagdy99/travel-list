
// Stats
let Stats = ({ items }) => {
    let countItems = items.length;
    let packedItems = items.filter((item) => item.packed);
    let packedPre = packedItems.length / countItems * 100
    return (
        <footer className="stats">
            <em>
                {
                    items.length < 1 ? `add all items you want to take with you 😃` :
                        packedPre < 100 ? `You have ${countItems} items on your list, and you already packed ${packedItems.length} (${packedPre.toFixed(1)}%)`
                            : `nice all items are done you can travel NOW 🚀🚁 `}
            </em>
        </footer>
    );
};
// Stats

export default Stats;