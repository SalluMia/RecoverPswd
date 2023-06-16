import React from 'react'

function Registration() {
  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-5 mt-5">
            <div id="spacer">
              <h2 className="text-center">Registration Page</h2>
              {errorMessage && <p>{errorMessage}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    name="cpassword"
                    value={cpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Password
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Registration
