import React from 'react'
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

const scrollbarStyles = `
  .aib-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .aib-scrollbar::-webkit-scrollbar-track {
    background: #0a1628;
    border-radius: 4px;
  }
  .aib-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00d4ff 0%, #1e3a5f 100%);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }
  .aib-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #00d4ff 0%, #00d4ff 100%);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
  }
`

export default function UI({ lessonId }) {
  const lesson = LESSONS.find(l => l.id === lessonId)
  const completedCourses = useGameStore(s => s.completedCourses)
  const completeCourse = useGameStore(s => s.completeCourse)
  const resetProgress = useGameStore(s => s.resetProgress)
  
  const handleMarkComplete = () => {
    if (lessonId && !completedCourses.includes(lessonId)) {
      completeCourse(lessonId)
    }
  }

  if (!lesson) return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      fontFamily: "'Orbitron', sans-serif",
    }}>
      <style>{scrollbarStyles}</style>
      <div style={{
        background: 'rgba(10, 22, 40, 0.9)',
        border: '1px solid #1e3a5f',
        borderRadius: '12px',
        padding: '15px 25px',
        color: '#607080',
        fontSize: '0.9rem',
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
      }}>
        ♦ Walk near a lesson to learn Python!
      </div>
    </div>
  )

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      fontFamily: "'Orbitron', sans-serif",
    }}>
      <style>{scrollbarStyles}</style>
      <div style={{
        background: 'rgba(10, 22, 40, 0.95)',
        border: `2px solid ${lesson.color}`,
        borderRadius: '4px',
        padding: '0',
        width: '450px',
        boxShadow: `0 0 40px ${lesson.color}30, inset 0 0 60px rgba(0, 0, 0, 0.5)`,
        overflow: 'hidden',
      }}>
        {/* Card Header - Alice In Borderland Style */}
        <div style={{
          background: `linear-gradient(90deg, ${lesson.color}20 0%, ${lesson.color}40 50%, ${lesson.color}20 100%)`,
          borderBottom: `2px solid ${lesson.color}`,
          padding: '15px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: lesson.color,
            textShadow: `0 0 20px ${lesson.color}`,
            letterSpacing: '2px',
          }}>
            {lesson.title.toUpperCase()}
          </div>
          <div style={{
            width: '30px',
            height: '30px',
            border: `2px solid ${lesson.color}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: lesson.color,
            fontSize: '1rem',
            boxShadow: `0 0 15px ${lesson.color}`,
          }}>
            ♦
          </div>
        </div>
        
        {/* Card Content with Custom Scrollbar */}
        <div style={{
          padding: '20px',
          maxHeight: '350px',
          overflowY: 'auto',
        }} className="aib-scrollbar">
          <pre style={{
            background: 'linear-gradient(180deg, #0d1a2e 0%, #0a1428 100%)',
            padding: '18px',
            borderRadius: '8px',
            color: '#e8f4f8',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            margin: 0,
            border: '1px solid #1e3a5f',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {lesson.content}
          </pre>
        </div>
        
        {/* Card Footer */}
        <div style={{
          background: `linear-gradient(90deg, ${lesson.color}10 0%, ${lesson.color}20 50%, ${lesson.color}10 100%)`,
          borderTop: `1px solid ${lesson.color}40`,
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            color: '#607080',
            fontSize: '0.75rem',
            letterSpacing: '1px',
          }}>
            PATI PADHAYE PYTHON
          </div>
          <div style={{
            color: lesson.color,
            fontSize: '0.75rem',
            textShadow: `0 0 10px ${lesson.color}`,
          }}>
            {completedCourses.length} / 9 COURSES
          </div>
        </div>
      </div>
      
      {/* Progress Controls */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '10px',
      }}>
        <button 
          onClick={handleMarkComplete}
          style={{
            background: completedCourses.includes(lessonId) 
              ? `linear-gradient(180deg, #6bcb77 0%, #4aa85a 100%)`
              : `linear-gradient(180deg, ${lesson.color} 0%, ${lesson.color}80 100%)`,
            border: 'none',
            borderRadius: '4px',
            padding: '10px 15px',
            color: '#fff',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.75rem',
            cursor: 'pointer',
            boxShadow: `0 0 15px ${lesson.color}50`,
          }}
        >
          {completedCourses.includes(lessonId) ? '✓ COMPLETED' : 'MARK COMPLETE'}
        </button>
        <button 
          onClick={resetProgress}
          style={{
            background: 'linear-gradient(180deg, #ff4757 0%, #c0392b 100%)',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 15px',
            color: '#fff',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.75rem',
            cursor: 'pointer',
            boxShadow: '0 0 15px #ff475750',
          }}
        >
          RESET
        </button>
      </div>
    </div>
  )
}