console.log('js das boot');

$(document).ready(function() {
    var allTheDoggos = [
        {
            name: 'Petunia',
            age: 1,
            photo: 'https://fortunedotcom.files.wordpress.com/2017/08/512536165-e1510081190643.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Boris',
            age: 2,
            photo: 'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/10/Teacup-Pomeranian-White-e1446515202248.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Millie',
            age: 1,
            photo: 'https://www.babble.com/wp-content/uploads/2013/09/puppy5-624x398.jpg',
            city: 'LA',
            state: 'CA'
        },
        {
            name: 'Panda',
            age: 3,
            photo: 'https://tailandfur.com/wp-content/uploads/2016/11/40-Fluffy-Pictures-of-Puppies-that-Looks-like-Pandas-3.jpg',
            city: 'SD',
            state: 'CA'
        },
        {
            name: 'Phoebe',
            age: 4,
            photo: 'http://www.astro.cornell.edu/~derg/style/3864733873_57e2aae81c_o.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Ian',
            age: 8,
            photo: 'https://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fb8e4b048f0ef614dae/1414356922235/Shake+Puppies-1_Mixbreed.jpg',
            city: 'SF',
            state: 'CA'
        }
    ];

    var allPuppies = allTheDoggos.filter(function(dog){
      if (dog.age <= 2) {
        return true;
      }
    }); // filter allTheDoggos for just the puppies (< 2 years)
    console.log(allPuppies)
    allPuppies.forEach (function(dog) {
      var dogImageUrl = dog.photo;
      // var image = `<img class="card-img-top" src="${ dogImageUrl }" />`;
      var dogName = dog.name;
      // var name = `<div class="card-body"> <h4 class="card-title">${ dogName }</h4>`
      $('#puppies').append(
        // `<div class="card" style="width: 18rem;">`,
        // image,
        // name,
        // `</div>`);
      `<div class="card" style="width: 200px;">
        <img class="card-img-top" src="${ dogImageUrl }" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-body"> <h4 class="card-title">${ dogName }</h4>
        </div>
      </div>`);
    });

    var doggosWithPNames = allTheDoggos.filter(function(dog){
      if (dog.name[0] === 'P') {
      return true;
    }
  }); // fillter allTheDoggos for those whose names start with P

    console.log(doggosWithPNames)
    doggosWithPNames.forEach (function(dog) {
      var dogImageUrl = dog.photo;
      var image = `<img src="${ dogImageUrl }" />`;
      var dogName = dog.name;
      $('#p-name').append(dogName).append(image);
    });


    var doggosInSf = allTheDoggos.filter(function(dog){
      if (dog.city === 'SF') {
      return true;
      }
    }); // etc
    console.log(doggosInSf)
    doggosInSf.forEach (function(dog) {
      var dogImageUrl = dog.photo;
      var image = `<img src="${ dogImageUrl }" />`;
      var dogName = dog.name;
      $('#sf').append(dogName).append(image);
    });


    var seniorDoggos = allTheDoggos.filter(function(dog){
      if (dog.age > 7) {
      return true;
      }
    }); // etc
    console.log(seniorDoggos)
    seniorDoggos.forEach (function(dog) {
      var dogImageUrl = dog.photo;
      var image = `<img src="${ dogImageUrl }"/>`;
      var dogName = dog.name;
      $('#senior').append(dogName).append(image);
    });


    var californiaDoggos = allTheDoggos.filter(function(dog){
      if (dog.state === 'CA') {
      return true;
      }
    }); // etc
    console.log(californiaDoggos)
    californiaDoggos.forEach (function(dog) {
      var dogImageUrl = dog.photo;
      var image = `<img src="${ dogImageUrl }" />`;
      var dogName = dog.name;
      $('#ca').append(dogName).append(image);
    });

    // 1. Figure out where each array of doggos should be displayed in the index.html
    // 2. Iterate through each array and append the doggo's name and photo to the HTML
    // 3. Use Bootstrap to style these dogs (Check out Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/)
});
