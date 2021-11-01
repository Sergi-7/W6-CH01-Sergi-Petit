const Form = () => {
  return (
    <form>
      <label for="description">Description</label>
      <input type="text" id="description" />
      <label for="text">Title</label>
      <input type="text" id="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
