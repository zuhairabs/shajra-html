import React, { useEffect } from "react";
import dTree from "../../util/dTree";
import data from '../../json/ahlulbayt.json';

export default function Ahlulbayt() {

  const options = {
    target: "#graph",
    debug: true,
    hideMarriageNodes: true,
    marriageNodeSize: 5,
    height: 2500,
    width: 1200,
    callbacks: {
      nodeClick: function (name, extra) {
        alert("Click: " + name);
      },
      nodeRightClick: function (name, extra) {
        alert("Right-click: " + name);
      },
      textRenderer: function (name, extra, textClass) {
        if (extra && extra.nickname) name = name + " (" + extra.nickname + ")";
        if (extra && extra.place)
          return (
            "<p align='center' class='" +
            textClass +
            "'>" +
            name +
            "<br><br><small>" +
            extra.place +
            "</small></p>"
          );
        else
          return "<p align='center' class='" + textClass + "'>" + name + "</p>";
      },
      marriageClick: function (extra, id) {
        alert("Clicked marriage node" + id);
      },
      marriageRightClick: function (extra, id) {
        alert("Right-clicked marriage node" + id);
      },
    },
  };

  useEffect(() => {
    dTree.init(data, options);
  }, []);

  return (
    <div>
      <div id="graph"></div>
    </div>
  );
}