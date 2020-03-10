class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGLutenFree,
    isVegetarian,
    isLactoseFree
  ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGLutenFree = isGLutenFree;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
  }
}


export default Meal;