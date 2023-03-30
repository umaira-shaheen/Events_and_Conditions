const  Conditional_rendring=()=>
{
   
     
}

   function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}
    
export function PackingList() {
    
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <MyItem 
            isPacked={true} 
            name="Space suit" 
          />
          <MyItem 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <MyItem 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  function MyItem({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
  }
  export default Conditional_rendring;