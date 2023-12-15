#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 53
#define RST_PIN 5
int card_pin = 6;
int ring_pin = 7;


#define card "A3 90 15 FF"
#define tag "F0 58 C0 80"

MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.



void setup() 
{
  Serial.begin(9600);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  Serial.println("Approximate your card to the reader...");
  Serial.println();
  pinMode(card_pin,OUTPUT);
  pinMode(ring_pin,OUTPUT); 

}

void readRFID(){
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
   //Show UID on serial monitor
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
  if (content.substring(1) == card) //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Authorized access to this card");
    Serial.println();
    digitalWrite(6,HIGH);
    delay(3000);
    digitalWrite(6,LOW);
  }
  else if(content.substring(1) == tag)
  {
    Serial.println("Authorized access to this tag");
    Serial.println();
    digitalWrite(7,HIGH);
    delay(3000);
    digitalWrite(7,LOW);
  }
 else   
 {
    Serial.println(" Access denied");
    delay(3000);
  }
}

void loop() 
{
  readRFID();
} 


