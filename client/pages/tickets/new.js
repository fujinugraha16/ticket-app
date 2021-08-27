const NewTicket = () => {
  return (
    <div>
      <h1>Created Ticket</h1>
      <form>
        <div className="mb-3">
          <label>Title</label>
          <input className="form-control" />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
