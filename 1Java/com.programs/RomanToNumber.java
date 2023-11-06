//  A Roman Number as input and convert it to an integer. (ex IX = 9) 

import java.util.HashMap;

public class RomanToNumber {

    public static int romanToNumber(String s) {
        HashMap <Character, Integer> romanNumerals = new HashMap<>();
        romanNumerals.put('I', 1);      // For Capital character/Roman Number
        romanNumerals.put('V', 5);
        romanNumerals.put('X', 10);
        romanNumerals.put('L', 50);
        romanNumerals.put('C', 100);
        romanNumerals.put('D', 500);
        romanNumerals.put('M', 1000);
        // romanNumerals.put('i', 1);       // For small character/Roman Number 
        // romanNumerals.put('v', 5);
        // romanNumerals.put('x', 10);
        // romanNumerals.put('l', 50);
        // romanNumerals.put('c', 100);
        // romanNumerals.put('d', 500);
        // romanNumerals.put('m', 1000);

        int total = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int value = romanNumerals.get(s.charAt(i));
            if (value < prevValue) {
                total -= value;
            } else {
                total += value;
            }
            prevValue = value;
        }

        return total;
    }

    public static void main(String[] args) {
        String romanNumeral = "XV";
        int integerVal = romanToNumber(romanNumeral);
        System.out.println(romanNumeral + " = " + integerVal);
    }
}
