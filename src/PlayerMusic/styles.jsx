import styled from "styled-components";

export const Container = styled.div(( ) => ({
  display: "flex",
  backgroundColor: "#16171a",
  width: "100%",
  height: "14vh",
  position: "fixed",
  zIndex: 1,
  alignItems: "center",
  boxShadow: "0px -1px 7px #16171aa0",

  ".musicDiv": {
    width: "400px",
    marginTop: "5px",
    cursor: "pointer",
  },

  ".test": {
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",

    input: {
      appearance: "none",
      borderRadius: "10px",
      width: "120px",
      backgroundColor: "#494A4D",
      height: "5px",
      outline: "none",
      marginRight: "15px",
    },
    "input::-webkit-slider-thumb": {
      appearance: "none",
      height: "14px",
      width: "14px",
      backgroundColor: "#fff",
      borderRadius: "50%",
    },
    ".volumeButton": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      cursor: "pointer",
    },
  },
  ".playPause": {
    margin: "0 5px",
  },
  ".music": {
    display: "flex",
    color: "#fff",
    alignItems: "center",
    marginLeft: "5px",

    h1: {
      fontSize: "18px",
      marginBottom: "2px",
    },
    h3: {
      marginTop: "0px",
      fontSize: "14px",
      color: "#b5b5b5",
    },

    div: {
      marginLeft: "8px",
    },
    img: {
      width: "70px",
      height: "65px",
    },
  },

  ".player": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",

    button: {
      border: "none",
      outline: "none",
      borderRadius: "50%",
      backgroundColor: "transparent",
      cursor: "pointer",
    },

    ".randomMusicsButton": {
      position: "relative",
      right: "25px",
    },
  },

  ".inputButtons": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".buttons": {
    display: "flex",
    width: "225px",
    position: "relative",
    bottom: "18px",
  },

  ".progressBar": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "relative",
    bottom: "8px",
    right: "10px",

    ".Pduration": {
      position: "relative",
      left: "15px",
      color: "#fff",
      fontSize: "14px",
    },
    ".PcurrentTime": {
      position: "relative",
      right: "10px",
      color: "#fff",
      width: "35px",
      fontSize: "14px",
    },
  },
  ".currentProgress": {
    "--seek-before-width": "0px",
    appearance: "none",
    borderRadius: "10px",
    width: "380px",
    margin: "auto",
    backgroundColor: "#494A4D",
    height: "5px",
    outline: "none",

    "::-webkit-slider-thumb": {
      appearance: "none",
      height: "14px",
      width: "14px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      position: "relative",
      zIndex: 3,
      boxSizing: "border-box",
    },
    ":active::-webkit-slider-thumb": {
      transform: "scale(1.2)",
    },
  },

  "@media only screen and (max-width: 820px)": {
    ".buttons": {
      top: 0,
      right: "5%",
    },
    ".progressBar": {
      display: "flex",
      alignItems: "center",
      width: "88vw",
      position: "relative",
      bottom: "0px",
      right: "-10%",

      input: {
        margin: 0,
      },
    },
  },

  "@media only screen and (max-width: 575px)": {
    ".progressBar": {
      right: "30px",
    },
    ".buttons": {
      width: "147px",
      top: "0px",
      right: "0",
      left: "0%",
    },
  },
}));
