const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUserEmail: null,
    },
    actions: {
      getCurrentUserEmail: async () => {
        const response = await fetch(
          "https://3001-spyravis-residenciaapp-a54c0x6wdii.ws-eu86.gitpod.io/api/user",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (response.ok) setStore({ currentUserEmail: data.email });
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
      },
    },
  };
};

export default getState;
