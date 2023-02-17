const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userdata: {},
      schuddle: {},
    },
    actions: {
      getCurrentUser: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("user", data.response);
          setStore({ userdata: data.response });
        }
      },
      logout: () => {
        try {
          localStorage.removeItem("token");
          setStore({ userdata: {} });
          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      },
      getUserSchuddle: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/schuddle",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("calendar_booking", data.response);
          setStore({ schuddle: data.response });
        }
      },
    },
  };
};

export default getState;
