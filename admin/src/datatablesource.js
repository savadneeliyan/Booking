export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350.jpg"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  
];


export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },

  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },

  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
  
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "type",
    headerName: "Type",
    width: 100,
  },

  {
    field: "title",
    headerName: "Title",
    width: 200,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  
];

