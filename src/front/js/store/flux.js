const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
        currentUserEmail: null,
    },
    actions: {
        getCurrentUserEmail: async () => {
            const response = await fetch(
              "https://3001-spyravis-residenciaapp-k74o53xjsg1.ws-eu85.gitpod.io",
              {
                headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("token"),
                },
              });
              const data = await response.json();
              if (response.ok) setStore({currentUserEmail: data.email});
        },
    },
  };
};

export default getState;
