Navigate = {
  to: function ({ path }) {
    path = path.split("/").filter((entry) => entry != "");
    if (path != undefined) {
      $("[path]").css("display", "none");
      let query = "";
      for (let i = 0; i < path.length; i++) {
        i == 0
          ? (query += `[path=${path[i]}]:first`)
          : (query += ` [path=${path[i]}]:first`);
        $(query).css("display", "block");
      }
    }
  },
  setDefault: function ({ path }) {
    $(document).ready(() => {
      Navigate.to({
        path: path,
      });
    });
  },
};

$("[routerLink]").on("click", function () {
  Navigate.to({
    path: $(this).attr("routerLink"),
  });
});
