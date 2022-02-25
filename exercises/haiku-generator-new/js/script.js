/**
Exercise 5 - Haiku Generator New
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// symbols for replacement
const symbols = [
  `┕`,
  `┓`,
  `┢`,
  `┮`,
  `╅`,
  `┤`,
  `┱`,
  `┴`,
  `┿`,
  `┰`,
  `┩`,
  `⊤`,
  `┼`,
  `┫`,
];

// a symbol for the click
const clickSymbol = `꙰`;

// text content (from Ovid)
const textLine = `  One impulse art thou conscious of, at best;
  O, never seek to know the other! Two souls, alas!
  reside within my breast,
  And each withdraws from, and repels, its brother.
  One impulse art thou conscious of, at best;
  Not half so swift the trembling dove can fly,
  When the fierce eagle cleaves the liquid sky;
  Not half so swiftly the fierce eagle moves,
  When through the clouds he drives the trembling doves;
  As from the God she flew with furious pace,
  Or as the God more furious urged the chase.
  Now fainting, sinking, pale, the nymph appears;
  Now close behind, his sounding steps she hears;
  And now his shadow reached her as she run,
  His shadow lengthened by the setting sun;
  And now his shorter breath, with sultry air,
  Pants on her neck, and fans her parting hair,
  Such words the bright god Mercury would say;
  But now perceiving Argus' eyes were dimmed in
  Languorous doze, he hushed his voice and touched
  The drooping eyelids with his magic wand, compelling slumber.
  Then without delay he struck the sleeper with his
  Crescent sword, where neck and head unite, and hurled
  His head, blood dripping, down the rocks and rugged cliff.
  Low lies Argus: dark is the light of all his hundred eyes,
  His many orbed lights extinguished in the universal gloom
  That night surrounds; but Saturn's daughter spread their
  Glister on the feathers of her bird, emblazoning its tail
  With starry gems`;

const soundfx = new Audio(`assets/sounds/sfx.mp3`); // load sound file
soundfx.volume = 0.3; // set up the volume
