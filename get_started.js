var reasons =[
    "Trees Provide Shade",
    "Trees Help In Retaining Rainwater",
    "Trees Provide Fruits",
    "Trees Are Natural Medicines"
  ];
  var images =[
    "https://images.unsplash.com/photo-1606823763622-bc22e109414e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDUzMDQzMw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1599998372764-ac8cbb604f21?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDUzMDQ4NQ&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1624339427247-a2a774001d4a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDUzMDUxMg&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1565347824263-be7ccceb634c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDUzMDU1OQ&ixlib=rb-1.2.1&q=85",
  ];
  
  
  var i = 0;
  function nextslide()
  {
    document.getElementById("reason text").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("audio").play();
    }

    function buttonStart(){
    window.location = "login_page.html";
    }