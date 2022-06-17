// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Focm":[function(require,module,exports) {
gsap.registerPlugin(ScrollTrigger);
var sections = gsap.utils.toArray("section");
var lastIndex = sections.length - 1;
sections.forEach(function (section, i) {
  section._bg = section.querySelector(".bg");
  section._h1 = section.querySelector("h1");
  section._h3 = section.querySelector("h3");
  section._h4 = section.querySelector("h4"); //   section._car = section.getElementById("car");
  // Give the backgrounds some random images
  //   section._bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight*2}?random=${i})`;
  // Create a standalone ST instance, and use the progress value (0 - 1) to tween the timeline's progress

  ScrollTrigger.create({
    trigger: section,
    start: function start() {
      return i == 0 ? "top top" : "top bottom";
    },
    // The FIRST section will use a different start value than the rest
    end: function end() {
      return i == lastIndex ? "top top" : "bottom top";
    },
    // The LAST section will use a different start value than the rest    
    onRefresh: function onRefresh(self) {
      // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically      
      section._tl = gsap.timeline({
        paused: true,
        defaults: {
          ease: 'none',
          overwrite: 'auto'
        }
      }).fromTo(section._h1, {
        y: function y() {
          return i == 0 ? 0 : innerHeight / 2 * 1.25;
        }
      }, {
        y: function y() {
          return i == lastIndex ? 0 : -innerHeight / 2 * 1.5;
        }
      }, 0).fromTo(section._h3, {
        x: function x() {
          return i == 0 ? 0 : innerHeight / 2 * 1.5;
        }
      }, {
        x: function x() {
          return i == lastIndex ? 0 : -innerHeight / 2 * 1.5;
        }
      }, 0).fromTo(section._h4, {
        y: function y() {
          return i == 0 ? 0 : innerHeight / 2 * 2;
        }
      }, {
        y: function y() {
          return i == lastIndex ? 0 : -innerHeight / 2 * 1.5;
        }
      }, 0).fromTo(section._bg, {
        y: function y() {
          return i == 0 ? -innerHeight / 2 : 0;
        }
      }, {
        y: function y() {
          return i == lastIndex ? -innerHeight / 2 : -innerHeight;
        }
      }, 0).progress(self.progress); //use progress to position the timeline correctly      
    },
    onUpdate: function onUpdate(self) {
      gsap.to(section._tl, {
        duration: 0.75,
        progress: self.progress
      });
    }
  });
});
Vue.createApp({
  data: function data() {
    return {
      name: 'Adel',
      age: 51
    };
  },
  methods: {}
}).mount('#cost-calculation');
gsap.to(".App-logo", {
  duration: 5,
  y: 30,
  ease: 'bounce'
}); // const carDimentionsHover = document.getElementById('car-image')
// carDimentionsHover.addEventListener('mouseover', () => {
//     gsap.to('#car-dimentions', {
//         autoAlpha: 1
//     })
// })
// carDimentionsHover.addEventListener('mouseleave', () => {
//     gsap.to('#car-dimentions', {
//         autoAlpha: 0
//     })
// })
// 

gsap.to("#sfcar", {
  scrollTrigger: "#sfcar",
  // start the animation when ".box" enters the viewport (once)
  duration: 5,
  // ease: 'bounce',
  x: -innerWidth,
  repeat: -1,
  repeatDelay: 2
});
var tl = gsap.timeline();
tl.to("#car1", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200,
  ease: 'circ'
}) // insert 1 second after end of timeline
.to("#car2", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200
}, "+=1") // insert 1 second after end of timeline
.to("#car3", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car4", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car5", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car6", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car7", {
  duration: 1,
  x: document.documentElement.clientWidth / 2 - 200
}, "+=1");
tl.repeat(-1);
gsap.to("#white-logo", 2, {
  rotation: 360,
  repeat: -1
});
},{}]},{},["Focm"], null)