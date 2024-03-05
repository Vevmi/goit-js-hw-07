const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`);

categories.forEach((e) => {
    console.log(`Category: ${e.firstElementChild.textContent}`);
    console.log(`Elements: ${e.lastElementChild.children.length}`);
})