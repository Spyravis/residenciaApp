const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUserEmail: null,
      userdata: null
    },
    actions: {
      getCurrentUserEmail: async () => {
        const response = await fetch("https://3001-spyravis-residenciaapp-k74o53xjsg1.ws-eu85.gitpod.io/api/user",
          {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const data = await response.json();
        if (response.ok) {
          setStore({ currentUserEmail: data.response.email });
          setStore({ userdata: data.response });
        }
      },
    },
  };
};

export default getState;
