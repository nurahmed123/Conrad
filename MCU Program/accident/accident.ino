#include <SoftwareSerial.h>
#include <Wire.h>
int state = 0;
int mappedAcX = 0;
int mappedAcY = 0;
int mappedAcZ = 0;
const int MPU_addr = 0x68; // I2C address of the MPU-6050
char BlueToothValue;

int leftIRValue = 0;
int rightIRValue = 0;
int leftIRPin = 18;
int rightIRPin = 19;
int TotalOverTaking = 0;
int leftPassing = 0;
int rightPassing = 0;
bool LeftIRtriggered = false;
bool RightIRtriggered = false;
// Motor driver connections
#define ENA_PINA 34   // Enable pin for motor A
#define IN1_PIN 32   // Input pin 1 for motor A
#define IN2_PIN 33   // Input pin 2 for motor A
#define ENB_PINB 35   // Enable pin for motor B
#define IN3_PIN 25   // Input pin 1 for motor B
#define IN4_PIN 26   // Input pin 2 for motor B

// GSM
SoftwareSerial SIM900A(5, 17); // gsm module connected here
String GSMmessage = "Accident!";
String phoneNumber = "+8801716909892";

void setup() {
  Serial.begin(9600);

  //gyro
  Wire.begin(); // Initialize the I2C library
  // Wake up the MPU-6050
  Wire.beginTransmission(MPU_addr);

  Wire.write(0x6B); // PWR_MGMT_1 register
  Wire.write(0); // Set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);

  //TODO: IR
  pinMode(leftIRValue, OUTPUT);
  pinMode(rightIRValue, OUTPUT);

  // TODO: GSM
  SIM900A.begin(9600);
}

//TODO: for IR value 
void readIR(){
  leftIRValue = digitalRead(leftIRPin);
  rightIRValue = digitalRead(rightIRPin);

  if (rightIRValue == LOW && !RightIRtriggered) {
    RightIRtriggered = true;
    rightPassing++;
    
  }else if (rightIRValue == HIGH && RightIRtriggered) {
    RightIRtriggered = false;

  }else if (leftIRValue == LOW && !LeftIRtriggered) {
    LeftIRtriggered = true;
    leftPassing++;
    
  }else if (leftIRValue == HIGH && LeftIRtriggered) {
    LeftIRtriggered = false;
  }

  TotalOverTaking = leftPassing + rightPassing;
}


//TODO: For GYRO
void readGyroValue(){
  // Read raw accelerometer data
  int16_t AcX, AcY, AcZ;
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B); // Starting register address for accelerometer data
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr, 6, true); // Request 6 bytes of data

  // Read accelerometer data
  AcX = Wire.read() << 8 | Wire.read();
  AcY = Wire.read() << 8 | Wire.read();
  AcZ = Wire.read() << 8 | Wire.read();

  // Map accelerometer values to range -250 to 250
  mappedAcX = map(AcX, -32768, 32767, -250, 250);
  mappedAcY = map(AcY, -32768, 32767, -250, 250);
  mappedAcZ = map(AcZ, -32768, 32767, -250, 250);
  

  delay(100); // Delay for 100 milliseconds (0.1 seconds)
}

//TODO: Accident
void accident(){
  if(mappedAcX >= 60 or mappedAcX <= -60){
    // makeCall();
    sendMessage();
  }else if(mappedAcY >= 60 or mappedAcY <= -60){
    // sendMessage();
    // makeCall();
  }
}

void makeCall(){
  Serial.println("Making a phone call...");

  // AT commands to call a number
  SIM900A.println("AT");
  delay(500);
  SIM900A.println("ATD" + phoneNumber + ";");
  delay(5000); // Adjust the delay based on your requirements
  SIM900A.println("ATH");

  Serial.println("Phone call completed.");
}

void sendMessage(){
  Serial.println ("Sending Message please wait….");
  SIM900A.println("AT+CMGF=1"); //Text Mode initialisation
  delay(1000);
  Serial.println ("Set SMS Number");
  SIM900A.println("AT+CMGS=\"" + phoneNumber + "\"");
  delay(1000);
  Serial.println ("Set SMS Content");
  SIM900A.println(GSMmessage);// Messsage content
  delay(100);
  Serial.println ("Done");
  SIM900A.println((char)26);
  Serial.println ("Message sent succesfully");

}

// TODO: for car movement 

void left(){
  Serial.println("left");
}

void right(){
  Serial.println("right");
}

void forward(){
  Serial.println("forward");
}

void backward(){
  Serial.println("backward");
}

void stop(){
  Serial.println("Stop");
}

void readBluetoothData(){
  if (Serial.available()) {
    BlueToothValue = Serial.read();
    if(BlueToothValue == 'L'){
      left();
    }else if (BlueToothValue == 'R') {
      right();
    }else if (BlueToothValue == 'F') {
      forward();
    }else if (BlueToothValue == 'B') {
      backward();
    }else if (BlueToothValue == 'S') {
      stop();
    }
  }
}

void testing(){
  // Geyro
  Serial.print("Accelerometer: X = ");
  Serial.print(mappedAcX);
  Serial.print(" | Y = ");
  Serial.println(mappedAcY);
  // Serial.print(" | Z = ");
  // Serial.println(mappedAcZ);

  // IR
  // Serial.println(leftIRValue);
  // Serial.println(rightIRValue);
  // Serial.print("left taking");
  // Serial.println(leftPassing);

  // Serial.print("right taking");
  // Serial.println(rightPassing);
  
  // Serial.print("total taking");
  // Serial.println(TotalOverTaking);

}

void loop() {
  readBluetoothData();
  readGyroValue();
  accident();
  readIR();
  testing();
}