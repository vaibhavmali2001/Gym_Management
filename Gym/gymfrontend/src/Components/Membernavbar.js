import React from 'react';

function Membernavbar({userInfo}) {
    
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
        <a class="nav-link active" aria-current="page" href="/memberhome">Home</a>
        <a class="nav-link" href="/allmembers">All Members</a>
        <a class="nav-link" href="/">Logout</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Membernavbar;