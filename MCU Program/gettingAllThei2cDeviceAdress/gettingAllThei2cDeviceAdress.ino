#include <Wire.h>
#include <MPU6050.h>
#include <LiquidCrystal_I2C.h>

MPU6050 mpu;

// Set the LCD address to 0x27 for a 16 chars and 2 line display
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(115200);
  Wire.begin();

  // Initialize MPU6050
  mpu.initialize();

  // Check if MPU6050 connection is successful
  if (!mpu.testConnection()) {
    Serial.println("MPU6050 connection failed. Please check your connections.");
    while (1);
  }

  // Initialize LCD
  lcd.begin(16, 2);
  lcd.backlight();
}

void loop() {
  // Read accelerometer data
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);

  // Read gyroscope data
  int16_t gx, gy, gz;
  mpu.getRotation(&gx, &gy, &gz);

  // Print the values on Serial Monitor
  Serial.print("Accel: ");
  Serial.print("x = "); Serial.print(ax); Serial.print(", ");
  Serial.print("y = "); Serial.print(ay); Serial.print(", ");
  Serial.print("z = "); Serial.print(az); Serial.print(" | ");

  Serial.print("Gyro: ");
  Serial.print("x = "); Serial.print(gx); Serial.print(", ");
  Serial.print("y = "); Serial.print(gy); Serial.print(", ");
  Serial.print("z = "); Serial.println(gz);

  // Print "Hello" on the LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Hello");

  delay(1000); // Adjust delay based on your needs
}
