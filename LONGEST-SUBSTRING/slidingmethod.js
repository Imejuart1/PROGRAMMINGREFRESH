 function longestSubstringWithoutRepeating(s) {
 // Length of the input string
    let n = s.length;
    // Variable to store the length of the longest substring without repeating characters
    let maxLength = 0;
    // Variable to store the longest substring without repeating characters
    let longestSubstring = "";
    // Object to store the index of the most recent occurrence of each character
    let seen = {};
    // Left pointer of the sliding window
    let left = 0;
    // Start index of the longest substring
    let start = 0;

    // Loop through the string using the right pointer
    for (let right = 0; right < n; right++) {
        // Current character
        let currentChar = s[right];
        
        // If the current character is seen before and its last occurrence is within the current substring,
        // move the left pointer to the right of the last occurrence of the current character.
  
        if (seen[currentChar] !== undefined && seen[currentChar] >= left) {
            left = seen[currentChar] + 1;
        }

        // Store the index of the current character
        seen[currentChar] = right;
        
        // Update maxLength and start index if the current substring is longer
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            start = left;
        }
    }

    // Extract the longest substring without repeating characters
    console.log(start, start + maxLength)
    longestSubstring = s.substring(start, start+maxLength);
    
    // Print the longest substring without repeating characters
    console.log("Longest Substring Without Repeating Characters:", longestSubstring);
    
    // Return the length of the longest substring without repeating characters
    return maxLength;
}

// Example usage:
console.log(longestSubstringWithoutRepeating("abcdeafvrhbcbbmmabcdefghzk256")); 

