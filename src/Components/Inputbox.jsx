import styles from "./Inputbox.module.css";
const Inputbox = ({handleonkeydown}) => {
   
  return (
    <>
      <input
        onKeyDown={handleonkeydown}
        className={styles.textbox}
        placeholder="Enter Fooditems here"
        type="text"
      />
    </>
  );
};
export default Inputbox;
