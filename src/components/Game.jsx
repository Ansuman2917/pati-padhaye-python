import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, PointerLockControls, Text, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { useGameStore } from '../store/gameStore'

const LESSONS = [
  { 
    id: 1, 
    title: 'Variables', 
    content: `# VARIABLES - Containers for storing data!

Think of a variable like a labeled box where you can store information.

# Creating variables:
name = "Alice"        # A text (String)
age = 18               # A whole number (Integer)
height = 5.9            # A decimal (Float)
is_student = True       # True/False (Boolean)

# Using variables:
print(name)              # Shows: Alice
print(age + 1)          # Shows: 19

# Key point: The equals sign (=) means "put in the box"`,
    position: [-15, 0, -15], 
    color: '#00d4ff' 
  },
  { 
    id: 2, 
    title: 'Data Types', 
    content: `# DATA TYPES - What kind of data?

1. STRINGS - Text in quotes:
   "Hello World"  or  'Hi there'

2. INTEGERS - Whole numbers:
   42, -7, 1000

3. FLOATS - Decimal numbers:
   3.14, -0.5, 99.9

4. BOOLEANS - True or False:
   True (yes)
   False (no)

# Example:
message = "Hello"      # String
count = 10            # Integer
price = 19.99         # Float
is_active = True       # Boolean

print(type(message))   # Shows: <class 'str'>`,
    position: [0, 0, -15], 
    color: '#ff6b6b' 
  },
  { 
    id: 3, 
    title: 'Operators', 
    content: `# OPERATORS - Doing math & comparisons!

MATHEMATICAL (+ - * / // % **):
   5 + 3     = 8       (add)
   10 - 4    = 6       (subtract)
   3 * 4     = 12      (multiply)
   15 / 3    = 5       (divide)
   17 // 5    = 3       (divide, floor)
   2 ** 3    = 8       (power)

COMPARISON (returns True/False):
   5 == 5         True     (equal)
   10 != 5        True     (not equal)
   3 < 5         True     (less than)
   7 > 2         True     (greater than)

LOGICAL (combine True/False):
   True and False   = False
   True or False  = True
   not True     = False`,
    position: [15, 0, -15], 
    color: '#ffd93d' 
  },
  { 
    id: 4, 
    title: 'Conditionals', 
    content: `# CONDITIONALS - Making decisions!

Use if/elif/else to choose what to do:

# Basic example:
score = 75

if score >= 90:
    print("Excellent!")
elif score >= 50:
    print("Keep trying!")
else:
    print("Need practice")

# How it works:
# 1. Check if score >= 90
# 2. If not, check if score >= 50
# 3. If neither, do else

# Comparison operators: == != < > <= >=

# Multiple conditions:
age = 20
has_id = True

if age >= 18 and has_id:
    print("You can enter!")`,
    position: [-15, 0, 0], 
    color: '#6bcb77' 
  },
  { 
    id: 5, 
    title: 'Loops', 
    content: `# LOOPS - Doing things repeatedly!

FOR LOOP - Repeat a set number of times:
# Print 0 to 4:
for i in range(5):
    print(i)

# Output: 0, 1, 2, 3, 4

# Loop through a list:
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

WHILE LOOP - Repeat until condition false:
# Count from 5 to 1:
count = 5
while count > 0:
    print(count)
    count = count - 1
print("Blast off!")

# Important: Always have a way to stop!`,
    position: [15, 0, 0], 
    color: '#9b59b6' 
  },
  { 
    id: 6, 
    title: 'Functions', 
    content: `# FUNCTIONS - Reusable code blocks!

# Define a function:
def greet(name):
    return "Hello, " + name

# Call the function:
message = greet("Alice")
print(message)           # Shows: Hello, Alice

# Function with multiple parts:
def add(a, b):
    result = a + b
    return result

# Default values:
def welcome(name="Guest"):
    return "Welcome, " + name

# Why use functions?
# - Write once, use many times
# - Easy to update
# - Organizes code`,
    position: [-15, 0, 15], 
    color: '#e74c3c' 
  },
  { 
    id: 7, 
    title: 'Lists', 
    content: `# LISTS - Storing multiple items!

# Creating a list:
fruits = ["apple", "banana", "cherry"]

# Access items (starts at 0!):
print(fruits[0])        # apple
print(fruits[1])        # banana

# Add items:
fruits.append("orange")
fruits.insert(0, "mango")

# Remove items:
fruits.remove("banana")
last = fruits.pop()

# List functions:
len(fruits)           # How many items?
fruits.sort()         # Put in order

# Create empty list:
numbers = []`,
    position: [0, 0, 15], 
    color: '#3498db' 
  },
  { 
    id: 8, 
    title: 'Dictionaries', 
    content: `# DICTIONARIES - Key-Value pairs!

# Creating a dictionary:
person = {
    "name": "Alice",
    "age": 18,
    "city": "New York"
}

# Access values:
print(person["name"])       # Alice
print(person.get("age"))     # 18

# Add new key-value:
person["email"] = "a@b.com"

# Check if key exists:
if "name" in person:
    print("Name exists!")

# Get all keys/values:
print(person.keys())         # name, age, city
print(person.values())      # Alice, 18, New York

# Great for storing related data!`,
    position: [15, 0, 15], 
    color: '#1abc9c' 
  },
  { 
    id: 9, 
    title: 'Classes', 
    content: `# CLASSES - Blueprints for objects!

# Create a class:
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def study(self):
        return self.name + " is studying"
    
    def introduction(self):
        return "I am " + self.name

# Create an object:
student1 = Student("Alice", 18)

# Use the object:
print(student1.name)          # Alice
print(student1.study())      # Alice is studying

# Multiple objects:
student2 = Student("Bob", 20)

# Why classes?
# - Group related data
# - Reuse code
# - Model real things`,
    position: [30, 0, 0], 
    color: '#e67e22' 
  },
]

function Model() {
  const { scene } = useGLTF('/AIB_King_Of_Diamonds.glb')
  return <primitive object={scene} />
}

function LessonPlatform({ lesson }) {
  const ref = useRef()
  const setCurrentArena = useGameStore(s => s.setCurrentArena)
  
  const handleClick = (e) => {
    e.stopPropagation()
    setCurrentArena(lesson.id)
  }
  
  return (
    <group position={lesson.position}>
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <circleGeometry args={[2.5, 6]} />
        <meshStandardMaterial color={lesson.color} transparent opacity={0.6} emissive={lesson.color} emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 1.5, 0]} onClick={handleClick}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial color={lesson.color} emissive={lesson.color} emissiveIntensity={0.8} />
      </mesh>
      <Text position={[0, 3, 0]} fontSize={0.5} color={lesson.color} anchorX="center">
        {lesson.title}
      </Text>
      <pointLight position={[0, 1.5, 0]} color={lesson.color} intensity={1} distance={5} />
    </group>
  )
}

function Player({ onNearLesson }) {
  const { camera } = useThree()
  const [keys, setKeys] = useState({ w: false, a: false, s: false, d: false, space: false })
  const position = useRef(new THREE.Vector3(0, 3.9, 20))
  const verticalVelocity = useRef(0)
  const isGrounded = useRef(true)
  const speed = 10
  const jumpForce = 8
  const gravity = -20
  const roomBounds = { minX: -24, maxX: 40, minZ: -24, maxZ: 24 }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      if (['w', 'a', 's', 'd'].includes(key)) {
        setKeys(prev => ({ ...prev, [key]: true }))
      }
      if (e.code === 'Space' || e.key === ' ') {
        setKeys(prev => ({ ...prev, space: true }))
      }
    }
    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase()
      if (['w', 'a', 's', 'd'].includes(key)) {
        setKeys(prev => ({ ...prev, [key]: false }))
      }
      if (e.code === 'Space' || e.key === ' ') {
        setKeys(prev => ({ ...prev, space: false }))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame((state, delta) => {
    const direction = new THREE.Vector3()
    const front = new THREE.Vector3(0, 0, Number(keys.s) - Number(keys.w))
    const side = new THREE.Vector3(Number(keys.a) - Number(keys.d), 0, 0)

    direction.subVectors(front, side).normalize()

    if (direction.length() > 0) {
      direction.applyQuaternion(camera.quaternion)
      direction.y = 0
      direction.normalize()
    }

    let newX = position.current.x + direction.x * speed * delta
    let newZ = position.current.z + direction.z * speed * delta
    
    newX = Math.max(roomBounds.minX, Math.min(roomBounds.maxX, newX))
    newZ = Math.max(roomBounds.minZ, Math.min(roomBounds.maxZ, newZ))
    
    position.current.x = newX
    position.current.z = newZ

    if (keys.space && isGrounded.current) {
      verticalVelocity.current = jumpForce
      isGrounded.current = false
    }

    verticalVelocity.current += gravity * delta
    position.current.y += verticalVelocity.current * delta

    if (position.current.y <= 3.9) {
      position.current.y = 3.9
      verticalVelocity.current = 0
      isGrounded.current = true
    }

    camera.position.copy(position.current)
    
    if (onNearLesson) {
      const playerPos = position.current
      let nearestLesson = null
      let minDist = 5
      
      LESSONS.forEach(lesson => {
        const dist = Math.sqrt(
          Math.pow(playerPos.x - lesson.position[0], 2) +
          Math.pow(playerPos.z - lesson.position[2], 2)
        )
        if (dist < minDist) {
          minDist = dist
          nearestLesson = lesson.id
        }
      })
      
      onNearLesson(nearestLesson)
    }
  })

  return <PointerLockControls />
}

function FallbackShape() {
  return (
    <mesh position={[0, 2, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default function Game({ onLessonChange }) {
  const setCurrentArena = useGameStore(s => s.setCurrentArena)
  const [nearbyLessonId, setNearbyLessonId] = useState(null)
  
  React.useEffect(() => {
    if (onLessonChange) {
      onLessonChange(nearbyLessonId)
    }
  }, [nearbyLessonId, onLessonChange])
  
  return (
    <Canvas camera={{ position: [0, 3.9, 20], fov: 60 }}>
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight position={[5, 15, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[0, 15, 0]} color="#ffffff" intensity={300} distance={80} />
      <hemisphereLight intensity={0.6} color="#ffffff" groundColor="#444444" />
      
      <Suspense fallback={<FallbackShape />}>
        <Model />
      </Suspense>
      
      {LESSONS.map(lesson => (
        <LessonPlatform key={lesson.id} lesson={lesson} />
      ))}
      
      <Player onNearLesson={setNearbyLessonId} />
      <Sparkles count={300} scale={50} size={2} speed={0.3} opacity={0.5} color="#ffffff" />
      <gridHelper args={[50, 50]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#1a2a4a" />
      </mesh>
      
      {/* Additional decorative lights */}
      <pointLight position={[0, 20, 0]} color="#ffffff" intensity={80} distance={50} />
    </Canvas>
  )
}