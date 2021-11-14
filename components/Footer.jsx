import React from "react";

export default function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <footer className="footer-sticky">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <p className="mt-2 text-center">
                &copy; Developed By{" "}
                <a target="_blank" href="https://zuhairabs.github.io/">
                  Zuhair Abbas Abidi
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
