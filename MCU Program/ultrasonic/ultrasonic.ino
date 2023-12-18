// Define pin numbers for the first ultrasonic sensor
const int trigPin1 = 2;
const int echoPin1 = 3;
const int ledPin1 = 8;  // Pin for the first LED

// Define pin numbers for the second ultrasonic sensor
const int trigPin2 = 4;
const int echoPin2 = 5;
const int ledPin2 = 9;  // Pin for the second LED

void setup() {
  Serial.begin(9600);
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(ledPin1, OUTPUT);

  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);
  pinMode(ledPin2, OUTPUT);
}

void loop() {
  // Measure distance using the first sensor
  long duration1, distance1;
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);
  duration1 = pulseIn(echoPin1, HIGH);
  distance1 = (duration1 / 2) * 0.0343;

  // Measure distance using the second sensor
  long duration2, distance2;
  digitalWrite(trigPin2, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin2, LOW);
  duration2 = pulseIn(echoPin2, HIGH);
  distance2 = (duration2 / 2) * 0.0343;

  // Print the distances to the serial monitor
  Serial.print("Distance Sensor 1: ");
  Serial.print(distance1);
  Serial.println(" cm");

  Serial.print("Distance Sensor 2: ");
  Serial.print(distance2);
  Serial.println(" cm");

  // Check distances and control LEDs
  if (distance1 < 10) {
    digitalWrite(ledPin1, HIGH);  // Turn on the first LED
    Serial.println("There are objects in front");
  } else {
    digitalWrite(ledPin1, LOW);   // Turn off the first LED
  }

  if (distance2 < 10) {
    digitalWrite(ledPin2, HIGH);  // Turn on the second LED
    Serial.println("There are objects behind");
  } else {
    digitalWrite(ledPin2, LOW);   // Turn off the second LED
  }

  delay(1000); // Adjust the delay as needed
}
