import styles from "./Items.module.css";
const Items = ({ listitem , handleBuybtn, bought }) => {
  
  return (
    <>
      <li className={`${styles.bglist} list-group-item ${
        bought ? "active" : null
      }`}>
        <span className={`${styles.item}`}>{listitem}</span>
        <button
          onClick={handleBuybtn}
          type="button"
          className={`${styles.buybtn} btn btn-warning`}
        >BUY</button>
      </li>
    </>
  );
};
export default Items;
