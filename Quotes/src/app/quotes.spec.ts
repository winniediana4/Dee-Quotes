import { Quote} from "@angular/compiler/public_api";
import { Quotes } from "./quotes";

describe('Quotes', () => {
  it('should create an instance', () => {
    return expect(new Quotes(Number, String, Quotes, Date)).toBeTruthy();
  });
});
