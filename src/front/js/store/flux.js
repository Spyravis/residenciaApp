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
        }
      },

      logout: () => {
        try {
          localStorage.removeItem("token");
          setStore({ currentUserEmail: null });
          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
    },
  };
};

export default getState;
