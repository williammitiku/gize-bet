
# **Gize Bet - Ethiopian Calendar Converter**

A JavaScript library for converting **Gregorian dates** to **Ethiopian dates** and times (based on the Ethiopian calendar).

---

## **Installation**

To install the package via NPM:

```bash
npm install gize-bet
```

---

## **Usage**

Once installed, you can start using `gize-bet` to convert Gregorian dates to Ethiopian dates and time.

### **Importing the Library**

```javascript
const EthiopianCalendar = require("gize-bet");
```

### **Getting the Ethiopian Date and Time**

To get the Ethiopian date and time for the current date and time:

```javascript
const calendar = new EthiopianCalendar();
const currentDate = new Date();
const ethiopianDateTime = calendar.getEthiopianDateTime(currentDate);

console.log(ethiopianDateTime);
```

#### **Output Example:**

```javascript
{
  ethiopianDate: "ሐሙስ, 1/4/2025",
  gregorianWeekday: "Sunday",
  ethiopianWeekday: "እሁድ",
  hours: 7,
  minutes: "00",
  seconds: "00",
  period: "AM",
  stringTime: "7:00:00 AM"
}
```

---

## **Methods**

### **`getEthiopianDateTime(date)`**

This method converts a given Gregorian date (JavaScript `Date`) into the Ethiopian date and time format.

#### **Parameters**:
- `date` (Date): The Gregorian date you wish to convert.

#### **Returns**:
An object containing the following:
- **ethiopianDate**: The Ethiopian date string in the format `"Day, Day/Month/Year"`.
- **gregorianWeekday**: The corresponding weekday in the Gregorian calendar.
- **ethiopianWeekday**: The corresponding weekday in the Ethiopian calendar.
- **hours**: Ethiopian hour (12-hour format).
- **minutes**: Minutes of the time.
- **seconds**: Seconds of the time.
- **period**: "AM" or "PM".
- **stringTime**: The Ethiopian time in the format `hh:mm:ss AM/PM`.

---

### **`getEthiopianTime(date)`**

This method returns only the time part (Ethiopian time) for a given Gregorian `Date`.

#### **Parameters**:
- `date` (Date): The Gregorian date you want to get the Ethiopian time for.

#### **Returns**:
An object containing:
- **hours**: Ethiopian hour (12-hour format).
- **minutes**: Minutes in two digits.
- **seconds**: Seconds in two digits.
- **period**: AM/PM.
- **stringTime**: The Ethiopian time in the format `hh:mm:ss AM/PM`.

---

## **Example Usage**

Here’s an example of using the library to get Ethiopian dates and time for specific dates:

```javascript
const EthiopianCalendar = require("gize-bet");

const calendar = new EthiopianCalendar();

// Example 1: Get Ethiopian date and time for now
const now = new Date();
const ethiopianDateTime = calendar.getEthiopianDateTime(now);

console.log("Ethiopian Date and Time:", ethiopianDateTime);

// Example 2: Get Ethiopian time for now
const ethiopianTime = calendar.getEthiopianTime(now);
console.log("Ethiopian Time:", ethiopianTime.stringTime);
```

---

## **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## **Contributing**

If you would like to contribute, feel free to fork this repository and create a pull request. Contributions, bug reports, and feature requests are welcome.

---

## **Acknowledgements**

- This library was inspired by the need to provide a JavaScript solution to convert Gregorian dates into Ethiopian calendar dates.
- Special thanks to all contributors and users who make this package better.

---

### **Support**

If you encounter any issues or have questions, feel free to open an issue in the [GitHub repository](https://github.com/williammitiku/gize-bet).
