import Link from "next/link";
import IconSection from '../components/HomePage/IconSection'

function _error() {

  return (
    <div>
      <div class="mt-4 container d-flex justify-content-center align-items-center">
        <div class="row">
          {/* <div class="mt-md-4 mt-sm-4 col-sm-12 col-md-6">
            <img
              class="img-fluid"
              src="https://zuhairabs.github.io/shajra-html/tree.png"
              alt="tree-vector"
            />
          </div> */}
          <IconSection />
          <div class="mx-auto spaceTop mb-4 col-sm-12 col-md-6">
            <div class="card contact">
              <div class="card-body">
                <h1 class="mt-4 mb-4 text-center card-title">
                  404 - Page Not Found
                </h1>
                <button
                  class="btn-block btn btn-primary contact-btn"
                >
                  <Link href="/">
                    <div>
                      Go Home &nbsp; <i class="linearicons-arrow-right"></i>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default _error;
