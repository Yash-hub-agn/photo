$(document).ready(function() {
  // Get the text from the .glow element
  let myString = "Photographer";
  let charArray = myString.split('');
  let string = charArray;
  var outputContainer = $(".glow");

  // Function to display characters one by one
  function typeText(index) {
    if (index < charArray.length) {
      var charElement = $("<span>").text(charArray[index]);
      if (index === 0) {
        charElement.addClass("large");
      }
      outputContainer.append(charElement);
      setTimeout(function() {
        typeText(index + 1);
      }, 500);
    } else {
      // Start erasing text after displaying
      EraseText(charArray.length - 1);
    }
  }

  function EraseText(index) {
    if (index >= 0) {
      outputContainer.children().last().remove();
      setTimeout(function() {
        EraseText(index - 1);
      }, 500);
    } else {
      // After erasing, restart the animation
      setTimeout(runAnimation, 1000); // Wait for 1 second before restarting
    }
  }

  function runAnimation() {
    // Clear the container before starting
    outputContainer.empty();
    charArray = string;
    typeText(0);
  }

  runAnimation();
});


$(document).ready(() => {
  $('.image-container img').on('click', () => {
    // Toggle the "social-icons" and "social-icons-back" classes immediately
    $('.social').removeClass('hide')
    $('.social').toggleClass('social-icons social-icons-back');
  });
});

$(document).ready(() => {
  $('.circle-container-img').on('mouseover', function () {
    const collectionNumber = $(this).data('collection');
    $('.collection-info').addClass('hide');
    $(`.collection-info${collectionNumber}`).removeClass('hide');
  });

  $('.circle-container-img').on('mouseleave', () => {
    $('.collection-info').addClass('hide');
  });
});


  