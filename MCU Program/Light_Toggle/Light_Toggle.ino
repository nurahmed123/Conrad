// Define pins
const int trigPin = 8;
const int echoPin = 9;
const int ldrPin = 7;
const int long_light = 5;
const int short_light = 6;
const int nightValue = 40;
int ldrValue;

// Variables for the duration of the pulse and the distance
long duration;
int distance;
int safeDistance = 15;

void setup() {
  // Initialize serial communication
  Serial.begin(9600);

  // Define pin modes
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(long_light, OUTPUT);
  pinMode(short_light, OUTPUT);
}

int ultraDistance(){
  // LDR read 
  ldrValue = analogRead(ldrPin);
  // Trigger the ultrasonic sensor
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Read the duration of the pulse from the echo pin
  duration = pulseIn(echoPin, HIGH);

  // Calculate the distance in centimeters
  distance = duration * 0.034 / 2;

  // Print the distance to the serial monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");


  if(distance> safeDistance && ldrValue > nightValue){
    digitalWrite(short_light, HIGH);
    digitalWrite(long_light, LOW);
  }
  else{
    digitalWrite(short_light, LOW);
    digitalWrite(long_light, HIGH);
  }

  // Wait for a short time before taking the next measurement
  delay(500);
}

void loop() {
  ultraDistance();
}
