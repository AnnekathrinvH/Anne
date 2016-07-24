var spicedPerson = {
    type: 'student',
    sayHi: function(punctuation) {
        console.log('Hi, I am a ' + this.type + ' at SPICED Academy' + punctuation);
    }
};

var spicedInstructor = {
    type: 'instructor',
    sayHi: function() {
        console.log('I am about to call sayHi from spicedPerson');
        spicedPerson.sayHi.apply(this, arguments);
    }
};

spicedInstructor.sayHi('!!!');
