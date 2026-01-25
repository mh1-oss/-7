const List = ({ Text, onDelete }) => {
    // تم حذف دالة deleteItem من هنا لأن المنطق يجب أن يكون في الأب

    return (
        <div className="list container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#F6F6F6", borderRadius: "10px", maxWidth: "574px", margin: "10px auto" }}>
            <p>{Text}</p>
            {/* عند الضغط، نستدعي الدالة التي جاءت من الأب */}
            <button className="btn" type="button" onClick={onDelete}>x</button>
        </div>
    );
}

export default List;