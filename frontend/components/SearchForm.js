const SearchForm = () => {
  return (
    <form
      className={classes.form_container}
      onSubmit={handleSubmit(submitHandler)}
    >
      <label htmlFor="dish">Name</label>
      <input type="text" name="dish" />
      <input type="Submit" />
    </form>
  );
};

export default SearchForm;
