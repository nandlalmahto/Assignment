import java.util.HashSet;

public class PanagramProgram {

    public static boolean isPangram(String input) {
        
        input = input.toLowerCase();    // Converting the input string to lowercase to handle case-insensitivity

        HashSet<Character> letters = new HashSet<>();    // Create a HashSet to store unique lowercase letters
        
        for (int i = 0; i < input.length(); i++) {      // Iterate through the characters in the input string
            char c = input.charAt(i);

            if (c >= 'a' && c <= 'z') {     // Check if the character is a lowercase letter
                letters.add(c);
            }
        }

        return letters.size() == 26;    // Check if the size of the HashSet is 26 (all alphabet letters)
    }

    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence);

        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }
}
