#include <LiquidCrystal.h>

// Define LCD object
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Define the button pin
const int buttonPin = 7;

void setup() {
  // Set up the LCD
  lcd.begin(16, 2);

  // Begin serial communication
  Serial.begin(9600);

  // Set up the button pin as input
  pinMode(buttonPin, INPUT);
}

void loop() {
  // Countdown from 10 to 0
  for (int i = 10; i >= 0; i--) {
    // Check if the button is pressed
    if (digitalRead(buttonPin) == HIGH) {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Button pressed!");
      Serial.println("Button pressed!");
      delay(2000);  // Wait for a moment
      exit(0);  // Exit the program
    }

    // Display on LCD
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Countdown: ");
    lcd.setCursor(0, 1);
    lcd.print(i);

    // Print on Serial Monitor
    Serial.print("Countdown: ");
    Serial.println(i);

    // Wait for one second
    delay(1000);
  }

  // Display a message after countdown
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Countdown done!");

  // Print on Serial Monitor
  Serial.println("Countdown done!");

  // Print "Hello" on LCD and Serial Monitor
  lcd.setCursor(0, 1);
  lcd.print("Hello");
  Serial.println("Hello");

  // Wait for a moment
  delay(2000);

  // Close the program
  while (1) {
    // You can add any additional cleanup code here if needed
  }
}
