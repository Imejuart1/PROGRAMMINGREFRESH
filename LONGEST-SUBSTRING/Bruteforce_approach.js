// Helper function to check if a substring has all unique characters
function AllUnique(s, start, end) {
    let set = new Set(); // Set to store unique characters in the substring
    for (let i = start; i < end; i++) {
        let ch = s[i]; // Get the current character
        // If the current character is already in the set, return false
        if (set.has(ch)) return false;
        // Otherwise, add the current character to the set
        set.add(ch);
    }
    // Return true if all characters in the substring are unique
    return true;
}

// Main function to find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    let maxLength = 0; // Variable to store the length of the longest substring
    let longestSubstring = ''; // Variable to store the longest substring
    
    // Loop through all possible substrings of the input string
    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            // Check if the current substring has all unique characters
            if (AllUnique(s, i, j)) {
                // Update maxLength if the current substring is longer
                if (j - i > maxLength) {
                    maxLength = j - i;
                    longestSubstring = s.substring(i, j);
                }
            }
        }
    }
    
    // Return the length of the longest substring without repeating characters
    // and the longest substring itself
    return [maxLength, longestSubstring];
}

// Example usage:
console.log(lengthOfLongestSubstring("abcdeafvrhbcbbmmabcdefghzk256"));
