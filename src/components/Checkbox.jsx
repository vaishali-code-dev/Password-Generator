const Checkbox = ({ item, onChange }) => {
  return (
    <span>
      <input
        type="checkbox"
        checked={item?.checked}
        name={item.title}
        onChange={onChange}
      />
      <label>{item.title}</label>
    </span>
  );
};

export default Checkbox;
