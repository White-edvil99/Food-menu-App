const Errormsg = ({food}) => {
    
  return (
    <>
      {food.length === 0 && (
        <h3>I am Hungry</h3>
      )}
    </>
  );
};
export default Errormsg;
