import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FitnessClub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="/aboutus">About</a>
        <a class="nav-link" href="/login">Login</a>
        <a class="nav-link" href="/registration">Register</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;