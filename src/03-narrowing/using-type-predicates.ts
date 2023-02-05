type TFish = {
  name: string;
  swim(): void;
}

type TBird = {
  name: string;
  fly(): void;
}

function isFish(pet: TFish | TBird): pet is TFish {
  return (pet as TFish).swim !== undefined;
}

function getSmallPet(): TFish | TBird {
  let bird: TBird = {
    name: '麻雀',
    fly: () => { }
  }

  let fish: TFish = {
    name: '鲨鱼',
    swim: () => { }
  }

  return Math.random() > 0.5 ? bird : fish;
}

const pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (TFish | TBird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater: TFish[] = zoo.filter(isFish);

