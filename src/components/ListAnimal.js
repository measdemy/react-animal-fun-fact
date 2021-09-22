export const ListAnimal = (animals) => {
  const arrAnimal = [];

  const onClickFacts = (e) => {
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const randomFactIndex = Math.floor(Math.random() * animalInfo.facts.length);
    document.getElementById("fact").innerHTML =
      animalInfo.facts[randomFactIndex];
  };

  for (let oneAnimal in animals) {
    arrAnimal.push(
      <img
        id={oneAnimal}
        key={oneAnimal}
        src={animals[oneAnimal].image}
        alt={oneAnimal}
        onClick={onClickFacts}
      />
    );
  }

  return arrAnimal;
};
