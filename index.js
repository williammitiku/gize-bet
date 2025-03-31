class EthiopianCalendar {
    constructor() {
      this.oneHour = 60 * 60 * 1000;
      this.oneDay = 24 * this.oneHour;
      this.oneYear = 365 * this.oneDay;
      this.oneLeapYear = 366 * this.oneDay;
      this.fourYears = 3 * this.oneYear + this.oneLeapYear;
  
      this.weekdaysGregorian = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      this.weekdaysEthiopian = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ቅዳሜ", "ቅዳሜ"];
    }
  
    getEthiopianTime(date) {
      let ethiopianHours = date.getHours() + 6;
      if (ethiopianHours >= 24) ethiopianHours -= 24;
  
      let minutes = date.getMinutes().toString().padStart(2, '0');
      let seconds = date.getSeconds().toString().padStart(2, '0');
  
      let period = ethiopianHours >= 12 ? 'PM' : 'AM';
      if (ethiopianHours > 12) ethiopianHours -= 12;
      if (ethiopianHours === 0) ethiopianHours = 12;
  
      return {
        hours: ethiopianHours,
        minutes: minutes,
        seconds: seconds,
        period: period,
        stringTime: `${ethiopianHours}:${minutes}:${seconds} ${period}`
      };
    }
  
    getEthiopianDateTime(date) {
      let difference = date.getTime() - new Date(Date.UTC(1971, 8, 12)).getTime();
      let fourYearsPassed = Math.floor(difference / this.fourYears);
      let remainingYears = Math.floor((difference - fourYearsPassed * this.fourYears) / this.oneYear);
      if (remainingYears === 4) remainingYears = 3;
  
      let remainingMonths = Math.floor((difference - fourYearsPassed * this.fourYears - remainingYears * this.oneYear) / (30 * this.oneDay));
      let remainingDays = Math.floor((difference - fourYearsPassed * this.fourYears - remainingYears * this.oneYear - remainingMonths * 30 * this.oneDay) / this.oneDay);
  
      if (remainingDays + 1 > 30) throw new Error('Invalid Ethiopian Date');
  
      const weekdayIndex = date.getDay();
      const gregorianWeekday = this.weekdaysGregorian[weekdayIndex];
      const ethiopianWeekday = this.weekdaysEthiopian[weekdayIndex];
  
      const ethiopianYear = remainingYears + 4 * fourYearsPassed + 1964;
      const ethiopianMonth = remainingMonths + 1;
      const ethiopianDay = remainingDays + 1;
  
      return {
        ethiopianDate: `${ethiopianWeekday}, ${ethiopianDay}/${ethiopianMonth}/${ethiopianYear}`,
        gregorianWeekday: gregorianWeekday,
        ethiopianWeekday: ethiopianWeekday,
        ...this.getEthiopianTime(date)
      };
    }
  }
  
  module.exports = EthiopianCalendar;
  