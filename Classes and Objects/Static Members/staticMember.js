"use strict";
class Shery {
    static getRandomNumber() {
        return Math.random();
    }
}
// if we add static before any value then we can access that value without making it from new keyword
Shery.version = 1.0;
// we dont need to write new 
