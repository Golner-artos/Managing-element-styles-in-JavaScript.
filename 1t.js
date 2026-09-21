let heroLevel = 1;
let experience = 0;
let gold = 0;
let health = 100;
let heroClass = "Воин"; // Вы можете изменить класс героя на "Маг" или "Лучник" для тестирования разных сценариев.
 

switch (heroClass) {
  case "Воин":
    health += 50; 
    break;
  case "Маг":
    experience += 20; 
    break;
  case "Лучник":
    gold += 30; 
    break;
  default:
    console.log("Неизвестный класс персонажа!");
}
 
console.log(`Выбранный класс: ${heroClass}`);
console.log(`Стартовые параметры -> Здоровье: ${health}, Опыт: ${experience}, Золото: ${gold}`);


 
let gameOver = false;
 
for (let day = 1; day <= 10; day++) {
  if (gameOver) break;
 
  console.log(`\nДень ${day}:`);
 
  let dailyExp = heroClass === "Маг" ? 25 : 15;
  let dailyGold = heroClass === "Лучник" ? 20 : 10;
 
  experience += dailyExp;
  gold += dailyGold;
 
  console.log(`  Получено опыта: ${dailyExp}, золота: ${dailyGold}`);
 
  let eventChance = Math.random();
  if (eventChance < 0.2) {
    let bonusGold = 50;
    gold += bonusGold;
    console.log(` Случайное событие: найден редкий клад! +${bonusGold} золота.`);
  } else if (eventChance < 0.5) {
    let damage = Math.floor(Math.random() * 20) + 5; 
    health -= damage;
    console.log(` Случайное событие: герой попал в бой и потерял ${damage} здоровья.`);
  } else {
    console.log(" Обычный день без особых событий");
  }
 
 
  if (experience >= 100) {
    heroLevel++;
    experience -= 100; 
    health += 20; 
    console.log(` Уровень повышен! Новый уровень: ${heroLevel}. Здоровье увеличено`);
  }
 
  if (health <= 0) {
    console.log(" Здоровье героя закончилось. Игра заканчивается.");
    gameOver = true;
  }
 
  if (heroLevel >= 10) {
    console.log("  Герой достиг максимального уровня!");
    gameOver = true;
  }
 
 
  console.log(`  Итог дня ${day}: Уровень - ${heroLevel}, Опыт - ${experience}, Здоровье - ${health}, Золото - ${gold}`);
 
  if (gameOver) {
    break;
  }
}
console.log("Игра завершена.");
console.log(`Финальные показатели -> Уровень: ${heroLevel}, Опыт: ${experience}, Здоровье: ${health}, Золото: ${gold}`);