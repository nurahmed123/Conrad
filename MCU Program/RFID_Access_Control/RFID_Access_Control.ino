/*
****************
Linuxhint.com
****************
Linuxhint.com 90 09 09 13
****************
*/
#include <SPI.h>
#include <MFRC522.h>
#define SS_PIN  21  /*Slave Select Pin*/
#define RST_PIN 22  /*Reset Pin for RC522*/
#define Relay_Pin   12  /*Pin 8 for LED*/
MFRC522 mfrc522(SS_PIN, RST_PIN); 
int relayCondition = 1;
 /*Create MFRC522 initialized*/
void setup()
{
  Serial.begin(9600);   /*Serial Communication begin*/
  SPI.begin();          /*SPI communication initialized*/
  mfrc522.PCD_Init();   /*RFID sensor initialized*/
  pinMode(Relay_Pin, OUTPUT);  /*LED Pin set as output*/
  Serial.println("Put your card to the reader...");
  Serial.println();

}
void loop()
{
  /*Look for the RFID Card*/
  if ( ! mfrc522.PICC_IsNewCardPresent())
  {
    return;
  }
  /*Select Card*/
  if ( ! mfrc522.PICC_ReadCardSerial())
  {
    return;
  }
  /*Show UID for Card/Tag on serial monitor*/
  Serial.print("UID tag :");
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++)
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
  Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "A3 90 15 FF") /*UID for the Card/Tag we want to give access Replace with your card UID*/
  {
    Serial.println("Authorized access");  /*Print message if UID match with the 
    database*/
    // if()
    digitalWrite(Relay_Pin, HIGH);
    // if(relayCondition == 0){
    //   relayCondition = 1;
    // }else{
    //   relayCondition = 0;
    // }
    
  }
 else   {
    Serial.println(" Access denied"); /*If UID do not match print message*/
    digitalWrite(Relay_Pin, LO);
  }

  // if(relayCondition == 1){
  //   digitalWrite(Relay_Pin, LOW);
  // }else{
  //   digitalWrite(Relay_Pin, HIGH);
  // }
}