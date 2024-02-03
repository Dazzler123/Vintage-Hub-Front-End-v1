export class Constants {
  static EMPTY_STRING: string = '';

  static GENDER_MALE: string = 'M';
  static GENDER_FEMALE: string = 'F';
  static GENDER_OTHER: string = 'M';
  static VEHICLE_YOM: string[] = [];
  static VEHICLE_MILEAGE_RANGE: string[] = [];
}

export function initializedYOMs() {
  for (let i = 1810; i <= 2021; i++) {
    Constants.VEHICLE_YOM.push(String(i))
  }
  return Constants.VEHICLE_YOM;
}

export function initializedMileageRanges() {
  Constants.VEHICLE_MILEAGE_RANGE.push("5 to 10 kmpl")
  Constants.VEHICLE_MILEAGE_RANGE.push("10 to 15 kmpl")
  Constants.VEHICLE_MILEAGE_RANGE.push("15 to 20 kmpl")
  Constants.VEHICLE_MILEAGE_RANGE.push("20 to 25 kmpl")
  Constants.VEHICLE_MILEAGE_RANGE.push("25 to 30 kmpl")
  Constants.VEHICLE_MILEAGE_RANGE.push("30 to 35 kmpl")
  Constants.VEHICLE_MILEAGE_RANGE.push("35 to 40 kmpl")
  return Constants.VEHICLE_MILEAGE_RANGE;
}

