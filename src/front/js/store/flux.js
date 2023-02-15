const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUserEmail: {},
      userdata: {},
    },
    actions: {
      getCurrentUserEmail: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user",
          {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const data = await response.json();
        if (response.ok) {
          setStore({ currentUserEmail: data.response.email });
          localStorage.setItem("user", data.response);
          setStore({ userdata: data.response });
        }
      },
    },
  };
};

export default getState;
