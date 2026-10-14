// Daily quiz and joke banks. They are sent to the browser, so the answers can be read by anyone who looks,
// which is acceptable for a low-stakes practice quiz.
window.PawieQuiz = {
 "PA_SCHEDULE": {
  "ArrayList": {
   "start": "2026-10-09",
   "due": "2026-10-15"
  },
  "LinkedList": {
   "start": "2026-10-16",
   "due": "2026-10-22"
  }
 },
 "QUIZ_DAYS": {
  "ArrayList": [
   [
    {
     "q": "What are the two instance variables of MyArrayList?",
     "opt": [
      "data and size",
      "head and tail",
      "front and rear"
     ],
     "ans": 0,
     "why": "data is the Object array that holds the elements, and size counts how many of them are valid."
    },
    {
     "q": "What does new MyArrayList() create?",
     "opt": [
      "An empty list with capacity 5",
      "An empty list with capacity 0",
      "A list of five nulls whose size is 5"
     ],
     "ans": 0,
     "why": "The no-arg constructor allocates data with the default length 5 and sets size to 0."
    },
    {
     "q": "What happens with new MyArrayList(-1)?",
     "opt": [
      "It throws IllegalArgumentException",
      "It falls back to the default capacity",
      "It throws IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "A capacity strictly less than 0 is invalid. A capacity of 0 is allowed."
    }
   ],
   [
    {
     "q": "A list is {1,2,3}. You call add(2, 4). What is the result?",
     "opt": [
      "{1,2,4,3}",
      "{1,2,3,4}",
      "{1,4,2,3}"
     ],
     "ans": 0,
     "why": "Everything from index 2 shifts one slot right, then 4 goes into slot 2."
    },
    {
     "q": "The size is 3. Which indexes are legal for add(index, e)?",
     "opt": [
      "0 to 3, inclusive",
      "0 to 2, inclusive",
      "1 to 3, inclusive"
     ],
     "ans": 0,
     "why": "add may insert right after the last element, so size itself is allowed. Below 0 or above size throws IndexOutOfBoundsException."
    },
    {
     "q": "append(e) behaves like which call?",
     "opt": [
      "add(size, e)",
      "add(0, e)",
      "set(size, e)"
     ],
     "ans": 0,
     "why": "Appending is adding at index size, so it follows all of add's rules, including growing when the array is full."
    }
   ],
   [
    {
     "q": "The size is 3. Which indexes does get(i) accept?",
     "opt": [
      "0 to 2",
      "0 to 3",
      "1 to 3"
     ],
     "ans": 0,
     "why": "get reads an existing element, so the index must be at least 0 and strictly less than size. Otherwise it throws IndexOutOfBoundsException."
    },
    {
     "q": "The list is {1,2,3}. What does set(1, 4) return?",
     "opt": [
      "2",
      "4",
      "1"
     ],
     "ans": 0,
     "why": "set returns the element it overwrote. It returns 2 and the list becomes {1,4,3}."
    },
    {
     "q": "After remove, what must happen to the old last slot in data?",
     "opt": [
      "It is set to null",
      "It keeps a copy of the last element",
      "The array shrinks by one slot"
     ],
     "ans": 0,
     "why": "Only valid elements may be non-null. Removing never shrinks the array, so the freed slot is cleared to null."
    }
   ],
   [
    {
     "q": "The capacity is 3 and requiredCapacity is 4. What is the capacity after expandCapacity(4)?",
     "opt": [
      "6",
      "4",
      "7"
     ],
     "ans": 0,
     "why": "Doubling 3 gives 6, which is already enough, so the capacity is 6."
    },
    {
     "q": "The capacity is 3 and requiredCapacity is 18. What happens?",
     "opt": [
      "The capacity becomes 18",
      "The capacity becomes 6",
      "It throws IllegalArgumentException"
     ],
     "ans": 0,
     "why": "Doubling gives 6, which is still too small, so the capacity is set to requiredCapacity."
    },
    {
     "q": "When does expandCapacity throw IllegalArgumentException?",
     "opt": [
      "requiredCapacity is strictly less than the current capacity",
      "requiredCapacity equals the current capacity",
      "The list is empty"
     ],
     "ans": 0,
     "why": "Asking for less room than you already have is invalid. Equal is allowed, and it still doubles."
    }
   ],
   [
    {
     "q": "data is [3, 1, null, 5, null, null, null] and size is 5. Is the null at index 4 a valid element?",
     "opt": [
      "Yes, because its index is below size",
      "No, because it is null",
      "No, because the capacity is 7"
     ],
     "ans": 0,
     "why": "Only size decides what is valid. A null below size is a real element, while indexes 5 and 6 are free slots."
    },
    {
     "q": "A list has capacity 5 and holds 2 elements. What do size() and getCapacity() return?",
     "opt": [
      "2 and 5",
      "5 and 2",
      "2 and 2"
     ],
     "ans": 0,
     "why": "size counts valid elements. getCapacity is the length of the underlying array."
    },
    {
     "q": "Which constructor makes a list that is already full?",
     "opt": [
      "MyArrayList(E[] arr)",
      "MyArrayList()",
      "MyArrayList(int capacity)"
     ],
     "ans": 0,
     "why": "The array constructor copies arr, so capacity and size both equal arr.length."
    }
   ],
   [
    {
     "q": "A hidden test calls add at an out-of-bounds index. What should it expect?",
     "opt": [
      "IndexOutOfBoundsException",
      "IllegalArgumentException",
      "NullPointerException"
     ],
     "ans": 0,
     "why": "Bad indexes in add, get, set and remove all throw IndexOutOfBoundsException."
    },
    {
     "q": "Why write a test that appends to a full list?",
     "opt": [
      "It forces the expandCapacity code to run",
      "It checks null handling",
      "It tests the no-arg constructor"
     ],
     "ans": 0,
     "why": "A full list is the only way append triggers growth, so it is a classic place for bugs."
    },
    {
     "q": "After a call to get(i), what should a good test check?",
     "opt": [
      "Size, capacity and every element are unchanged",
      "Only the returned value",
      "That the capacity doubled"
     ],
     "ans": 0,
     "why": "get only reads, so nothing about the list is allowed to change."
    }
   ],
   [
    {
     "q": "What does doing moveTargetToEnd in place forbid?",
     "opt": [
      "Creating new arrays or lists with new",
      "Calling remove",
      "Calling append"
     ],
     "ans": 0,
     "why": "In place means you reuse the list you were given and do not build a temporary copy."
    },
    {
     "q": "After you remove a match at index i, what should the index do?",
     "opt": [
      "Stay at i",
      "Move to i + 1",
      "Go back to 0"
     ],
     "ans": 0,
     "why": "The next element slid left into slot i, so it still needs to be checked."
    },
    {
     "q": "What should moveTargetToEnd throw when nums is null?",
     "opt": [
      "NullPointerException",
      "IllegalArgumentException",
      "IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "The write-up says a null list throws NullPointerException."
    }
   ]
  ],
  "LinkedList": [
   [
    {
     "q": "What are the instance variables of MyLinkedList?",
     "opt": [
      "head, tail and size",
      "data and size",
      "front, rear and capacity"
     ],
     "ans": 0,
     "why": "head and tail are the sentinel nodes at the two ends, and size counts the real nodes between them."
    },
    {
     "q": "What does new MyLinkedList() create?",
     "opt": [
      "head and tail linked to each other, with size 0",
      "head and tail both null, with size 0",
      "One node that holds null, with size 1"
     ],
     "ans": 0,
     "why": "The sentinels exist from the start, so head.next is tail and tail.prev is head. The list is empty because sentinels do not hold data."
    },
    {
     "q": "Does size count the sentinel nodes?",
     "opt": [
      "No, only the nodes that hold data",
      "Yes, it counts head and tail too",
      "Only head, because it sits at index 0"
     ],
     "ans": 0,
     "why": "size does not include the sentinels. Index 0 refers to the first node after head."
    }
   ],
   [
    {
     "q": "The list is head <-> a <-> tail. What does add(0, b) produce?",
     "opt": [
      "head <-> b <-> a <-> tail",
      "head <-> a <-> b <-> tail",
      "head <-> b <-> tail"
     ],
     "ans": 0,
     "why": "Index 0 means right after head, so b goes in front of a."
    },
    {
     "q": "The list has 3 elements. Which indexes are legal for add(index, e)?",
     "opt": [
      "0 to 3, inclusive",
      "0 to 2, inclusive",
      "1 to 3, inclusive"
     ],
     "ans": 0,
     "why": "You may insert right before tail, so size itself is allowed. An index below 0 or above size throws IndexOutOfBoundsException."
    },
    {
     "q": "What does add(null) do?",
     "opt": [
      "It throws NullPointerException",
      "It adds a node that holds null",
      "It does nothing and returns false"
     ],
     "ans": 0,
     "why": "This list never accepts null, unlike Java's built-in LinkedList. A successful add(E) always returns true."
    }
   ],
   [
    {
     "q": "The size is 3. Which indexes does get(i) accept?",
     "opt": [
      "0 to 2",
      "0 to 3",
      "1 to 3"
     ],
     "ans": 0,
     "why": "get reads an existing node, so the index must be at least 0 and less than size. Otherwise it throws IndexOutOfBoundsException."
    },
    {
     "q": "The list is a, b, c. What does set(1, x) return?",
     "opt": [
      "b",
      "x",
      "a"
     ],
     "ans": 0,
     "why": "set returns the element that was stored before. It returns b and the list becomes a, x, c."
    },
    {
     "q": "You call remove(1) on the list a, b, c. What changes?",
     "opt": [
      "a and c are linked to each other and size drops by 1",
      "Only head.next changes",
      "Only size changes"
     ],
     "ans": 0,
     "why": "The neighbors of the removed node must point at each other. The removed data is returned."
    }
   ],
   [
    {
     "q": "What does clear() do?",
     "opt": [
      "It removes every non-sentinel node and leaves head <-> tail",
      "It sets head and tail to null",
      "It removes the sentinels too"
     ],
     "ans": 0,
     "why": "The sentinels stay for the whole life of the list, so an empty list is head <-> tail with size 0."
    },
    {
     "q": "What does isEmpty() check?",
     "opt": [
      "Whether there are no data nodes, so size is 0",
      "Whether head is null",
      "Whether head.next is null"
     ],
     "ans": 0,
     "why": "Even an empty list has both sentinels, so the answer depends on the number of data nodes."
    },
    {
     "q": "A list has exactly one element. What does remove(0) do?",
     "opt": [
      "It returns that element and leaves head <-> tail",
      "It throws IndexOutOfBoundsException",
      "It returns null and changes nothing"
     ],
     "ans": 0,
     "why": "Index 0 is valid when size is 1. After the removal, head and tail point at each other again."
    }
   ],
   [
    {
     "q": "What does the helper getNth(index) return?",
     "opt": [
      "The Node at that index, not its data",
      "The data stored at that index",
      "The index of a given node"
     ],
     "ans": 0,
     "why": "get can call getNth and then read the data. Other methods reuse it to find where to link."
    },
    {
     "q": "The size is 3. What does getNth(3) do?",
     "opt": [
      "It throws IndexOutOfBoundsException",
      "It returns tail",
      "It returns null"
     ],
     "ans": 0,
     "why": "Sentinels have no index. A valid index is at least 0 and less than size."
    },
    {
     "q": "What does set(1, null) do on a list with 3 elements?",
     "opt": [
      "It throws NullPointerException",
      "It stores null at index 1",
      "It throws IndexOutOfBoundsException"
     ],
     "ans": 0,
     "why": "null data is never allowed, whether you add or set. Index 1 is valid here, so the null is the problem."
    }
   ],
   [
    {
     "q": "What does the write-up say about the test headers in MyLinkedListCustomTester.java?",
     "opt": [
      "Do not change them",
      "Rename them to match your tests",
      "Delete the ones you do not need"
     ],
     "ans": 0,
     "why": "The autograder looks for those exact headers. You only fill in the bodies."
    },
    {
     "q": "How are your JUnit tests graded?",
     "opt": [
      "They must pass on a good implementation and fail on bad ones",
      "They must pass on every implementation",
      "They only need to compile"
     ],
     "ans": 0,
     "why": "A test that fails on a good implementation is wrong, and one that passes on a bad implementation is too weak. You earn 2 points for each bad implementation your test fails."
    },
    {
     "q": "A call such as add(-1, null) breaks two rules at once. What must your test do?",
     "opt": [
      "Assert that all the possible exceptions are thrown",
      "Assert only NullPointerException",
      "Skip this case"
     ],
     "ans": 0,
     "why": "A correct implementation may check the rules in any order, so your test must be written to accept every exception it could raise."
    }
   ],
   [
    {
     "q": "What does mergeLists expect as input?",
     "opt": [
      "Two lists that are each sorted in ascending order",
      "Two lists in any order",
      "One list that holds two lists"
     ],
     "ans": 0,
     "why": "left and right are already sorted, and the result must be a new sorted MyLinkedList."
    },
    {
     "q": "left is 1, 2, 2 and right is 2, 3, 4. What does mergeLists return?",
     "opt": [
      "1, 2, 2, 2, 3, 4",
      "1, 2, 3, 4",
      "1, 2, 2, 3, 4"
     ],
     "ans": 0,
     "why": "Duplicates are kept, so all six elements appear in sorted order."
    },
    {
     "q": "Which of these would give you 0 points for MyAlgorithm?",
     "opt": [
      "Referencing head, tail or size",
      "Calling get(i)",
      "Creating a new MyLinkedList"
     ],
     "ans": 0,
     "why": "The write-up forbids head, tail and size in this problem, but you may use any MyLinkedList method."
    }
   ]
  ]
 },
 "JOKES_DAYS": {
  "ArrayList": [
   [
    "Why did the ArrayList never feel crowded? It doubles its capacity whenever things get tight.",
    "An ArrayList asked for a table for five. When a sixth friend showed up, it moved to a table for ten.",
    "Why does add(0, e) tire out an ArrayList? Everybody has to shift over to make room."
   ],
   [
    "I asked the ArrayList how it was doing. It said, I am at index 0 and I feel fine.",
    "What did the full ArrayList say to the new element? Hold on, let me call expandCapacity first.",
    "Why do ArrayLists make great roommates? They know exactly where everything is, index by index."
   ],
   [
    "Size and capacity went to couples therapy. Size said, I only count what is valid. Capacity said, I count the empty seats too.",
    "Why did the null refuse to leave the list? It was a valid element and had the size to prove it.",
    "What is an ArrayList's favorite workout? Shifts."
   ],
   [
    "Why does remove feel so tidy? It always clears the last slot to null before leaving.",
    "get(i) walked into the lobby and found the right room instantly. That is O(1) hospitality.",
    "The ArrayList refused to shrink after remove. It said, I like having room to grow."
   ],
   [
    "Why did the programmer put a 4 at index 2? Everything after it had already booked a seat to the right.",
    "An ArrayList is like a bus. Buying a bigger bus is easy. Making everyone move seats is the real cost.",
    "What do you call an ArrayList with capacity 0? A tiny house waiting for its first expandCapacity."
   ],
   [
    "Capacity 3 met requiredCapacity 18 and learned that doubling to 6 was not going to cut it.",
    "My ArrayList only argues about one thing. Is index size out of bounds? For add, it is not.",
    "IndexOutOfBoundsException shows up uninvited whenever you ask get for index size."
   ],
   [
    "Why did moveTargetToEnd cause a scene? It kept sending every 3 to the back of the line.",
    "Why do ArrayLists love moveTargetToEnd? They finally get to remove and append in the same day.",
    "What is an ArrayList's motto? Same elements, same indices, even after expansion."
   ]
  ],
  "LinkedList": [
   [
    "Why does the linked list never get lost? Every node knows where the next one is.",
    "What did the head sentinel say? I hold no data, but I hold everything together.",
    "A linked list tried to jump straight to index 500. It had to walk there like everyone else."
   ],
   [
    "Why did the node leave the array? It was tired of living in a row house with no room to grow.",
    "Inserting into a linked list is easy once you are there. Getting there is the whole commute.",
    "Why was the tail sentinel always calm? It had nothing after it and nothing to prove."
   ],
   [
    "What do you call a node that lost its next pointer? A very short story.",
    "Why is get(i) slow on a linked list? Every visitor follows the signs one node at a time.",
    "Two nodes got married. They finally agreed on who points to whom."
   ],
   [
    "Removing a node is like leaving a group chat. The neighbors just reconnect around you.",
    "Why do programmers love sentinels? No more special cases for an empty list.",
    "A linked list and a coffee shop have one thing in common. You always join the line from the front."
   ],
   [
    "Rewire in the right order. Set the new node's pointers first, or the rest of the list wanders off.",
    "What does a doubly linked list say at parties? I know who is before me and who is after me.",
    "Why did the garbage collector smile when you called remove? A detached node is a free snack."
   ],
   [
    "A linked list never needs to resize. It just keeps adding rooms like a rambling old house.",
    "I asked a node how far away the tail is. It said, go ask my next, I only know about one step.",
    "Why is a linked list bad at random access? It never learned to teleport."
   ],
   [
    "Why did add at index 0 feel quick? The head was already standing right there.",
    "Where do linked lists keep their memories? One node at a time.",
    "What is the linked list's love language? Pointers that always point back."
   ]
  ]
 }
};
