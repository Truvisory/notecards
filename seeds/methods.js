
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      // Inserts seed entries
      return knex('methods').insert([
          {
          id: 1,
          name: '.map',
          description: 'creates a new array with the results of calling a provided function on every element in the calling array.',
          example: '',
          tags: ["array", "medium"],
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
          },
          {
          id: 2,
          name: '.filter',
          description: 'creates a new array with all elements that pass the test implemented by the provided function.',
          example: "ar words = ['spray', 'limit' 'elite', 'exuberant', 'destruction' 'present'] const result = words.filter(word => word.length > 6) console.log(result) // expected output: Array ['exuberant', 'destruction', 'present']",
          tags: ["array", "medium"],
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
          },
          {
          id: 3,
          name: '.reduce',
          description: 'executes a reducer function (that you provide) on each member of the array resulting in a single output value.',
          example: '',
          tags: ["array", "hard"],
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
          }
      ]);
    });
};
