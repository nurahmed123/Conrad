#include <SoftwareSerial.h>
SoftwareSerial SIM900A(25, 26);  // gsm module connected here

String Massage = "mgs";
String phoneNumber = "+8801716909892";

String input;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  SIM900A.begin(9600);
  sendSMS("fakkkkkk u");
  make_call();
}

void make_call() {
  Serial.println("Making a phone call...");

  // AT commands to call a number
  SIM900A.println("AT");
  delay(500);
  SIM900A.println("ATD" + phoneNumber + ";");
  delay(5000);  // Adjust the delay based on your requirements
  SIM900A.println("ATH");
  
  Serial.println("Phone call completed.");
}


void sendSMS(String message) {
  Serial.println("Sending Message please wait….");
  SIM900A.println("AT+CMGF=1");  //Text Mode initialisation
  delay(1000);
  Serial.println("Set SMS Number");
  SIM900A.println("AT+CMGS=\"" + phoneNumber + "\"");
  delay(1000);
  Serial.println("Set SMS Content");
  SIM900A.println(message);  // Messsage content
  delay(100);
  Serial.println("Done");
  SIM900A.println((char)26);  // delay(1000);
  Serial.println("Message sent succesfully");
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available()) {
    input = Serial.readString();
    Serial.print("You typed: ");
    Serial.println(input);
    
    if(input == "call"){
      make_call();
    }
    else{
      sendSMS(input);
      make_call();
    }
  }

}
