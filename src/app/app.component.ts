import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <div class="navbar">
      <a class="item">About Me</a>
      <a class="item">Work Experience</a>
      <div class="item">
        a thing
        <div class="dropdown">
          <div> 
            <a>MVP Studios</a>
            <a>Others</a>
            <a>Others 2</a>
          </div>
        </div>
      </div>
    </div>


    <div class="header" >
      <img id="profileImage" src="assets/winterPicCropped.png" alt="My face is supposed to be here">   
      <div class="header-details">
        <div id="header-name" class="headerSubComponent">Dylan Ho</div>
        <div id="techStacksHeader" class="headerSubComponent">
          Lorem ipsum
          <div>Web Frameworks:
            <img class ="header-logo" src="assets/techStackImages/angular-logo.png">
            <img class ="header-logo" src="assets/techStackImages/react-logo.png">
            <img class ="header-logo" id="django-logo-header" src="assets/techStackImages/django-logo.png">
          </div>
          <div>Programming Languages:</div>
        </div> 
      </div>  
    </div>

    
    <div class="mainBody">
    <br>

    <!-- Profile header -->

      <div class="card">
        <img class ="header-logo" src="assets/techStackImages/angular-logo.png">
        <div>
          <h2>My Name</h2>
          <h3>A guy that just wants a decent job</h3>
          <ul class="stats">
            <li>
              <var>342</var>
              <label>Posts</label>
            </li>
          </ul>
          <nav class="buttons">
            <button class="primary">Follow</button>
            <button>Message</button>
          </nav>
        </div>
      </div>
    
    <!-- Game Projects -->
      <div class="bodyMainContainer">



        <div class="bodyHeader">Game Development</div>
        <section class="container">
          <div class = "slider-wrapper">
            <div class="slider">
              <img id ="slide-1" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg" alt="Pikachu"/>
              <div>asdasd</div>
              <img id ="slide-2" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="Charmander"/>
              <img id ="slide-3" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur"/>
              <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>                
                <a href="#slide-3"></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      


    </div>

  </main>  
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}