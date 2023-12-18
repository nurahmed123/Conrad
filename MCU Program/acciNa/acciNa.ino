
#include <SoftwareSerial.h>
#include <TinyGPS.h>

int state = 0;
const int pin = 23;
float gpslat, gpslon;

TinyGPS gps;
SoftwareSerial sgps(17, 16);
SoftwareSerial sgsm(25, 26);

#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); 


void setup()
{
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
  delay(500);
  sgsm.print("AT+CMGF=1\r");
  delay(500);
  sgsm.print("AT+CMGS=\"+8801716909892\"\r");
  delay(1000);
  sgsm.println("VEHICLE ACCIDENT ALERT PROJECT CONNECTED");
  delay(1000);
  sgsm.write(0x1A);
  delay(1000);
}

void loop() {
  sgps.listen();
  while (sgps.available())
  {
    int c = sgps.read();
    if (gps.encode(c))
    {
      gps.f_get_position(&gpslat, &gpslon);
    }
    // Serial.println("gps");
  }
  if (digitalRead(pin) == HIGH && state == 0) {
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
    // Serial.println("ok2");
  }
// if (digitalRead(pin) == LOW) {
// state = 0;
// }
  delay(100);
}