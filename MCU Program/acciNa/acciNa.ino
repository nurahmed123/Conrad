
#include <SoftwareSerial.h>
#include <TinyGPS.h>
const int MPU_addr = 0x68;  // I2C address of the MPU-6050

int state = 0;
const int pin = 23;
float gpslat, gpslon;

TinyGPS gps;
SoftwareSerial sgps(17, 16);
SoftwareSerial sgsm(25, 26);

#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);


void setup() {
  pinMode(pin, INPUT);
  sgsm.begin(9600);
  sgps.begin(9600);
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("ALERT SYSTEM FOR");
  lcd.setCursor(0, 1);
  lcd.print("VEHICLE ACCIDENT");

  sgsm.listen();
  // sgsm.print("\r");
  // delay(500);
  sgsm.print("AT+CMGF=1\r");
  // delay(500);
  sgsm.print("AT+CMGS=\"+8801716909892\"\r");
  // delay(1000);
  sgsm.println("VEHICLE ACCIDENT ALERT PROJECT CONNECTED");
  delay(1000);
  sgsm.write(0x1A);
  delay(1000);





  // Wake up the MPU-6050
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // Set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
}

void accidentDetect() {
  // Read raw accelerometer data
  int16_t AcX, AcY, AcZ;
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B);  // Starting register address for accelerometer data
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr, 6, true);  // Request 6 bytes of data

  // Read accelerometer data
  AcX = Wire.read() << 8 | Wire.read();
  AcY = Wire.read() << 8 | Wire.read();
  AcZ = Wire.read() << 8 | Wire.read();

  // Map accelerometer values to range -250 to 250
  int mappedAcX = map(AcX, -32768, 32767, -250, 250);
  int mappedAcY = map(AcY, -32768, 32767, -250, 250);
  int mappedAcZ = map(AcZ, -32768, 32767, -250, 250);

  // Print the values
  Serial.print("Accelerometer: X = ");
  Serial.print(mappedAcX);
  Serial.print(" | Y = ");
  Serial.print(mappedAcY);
  Serial.print(" | Z = ");
  Serial.println(mappedAcZ);

  if (mappedAcX) {
    sendMessage();
  }

  // delay(100);  // Delay for 100 milliseconds (0.1 seconds)
}

void sendMessage() {
  sgps.listen();
  while (sgps.available()) {
    int c = sgps.read();
    if (gps.encode(c)) {
      gps.f_get_position(&gpslat, &gpslon);
    }
    // Serial.println("gps");
  }
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("VEHICLE ACCIDENT");
  lcd.setCursor(0, 1);
  lcd.print(" DETECTED");
  sgsm.listen();
  sgsm.print("\r");
  delay(1000);
  sgsm.print("AT+CMGF=1\r");
  delay(1000);
  /*Replace XXXXXXXXXX to 10 digit mobile number &
      ZZ to 2 digit country code*/
  sgsm.print("AT+CMGS=\"+8801716909892\"\r");
  delay(1000);
  sgsm.println("VEHICLE ACCIDENT. LOCATION :");
  sgsm.print("https://www.google.com/maps?q=");
  sgsm.print(gpslat, 6);
  sgsm.print(",");
  sgsm.print(gpslon, 6);
  delay(1000);
  sgsm.write(0x1A);
  delay(1000);
  state = 1;
}

void loop() {

  if (digitalRead(pin) == HIGH && state == 0) {
    sendMessage();
    Serial.println("yeahhhhhhhh");
  }
  // delay(100);





  accidentDetect();
}