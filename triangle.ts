export class Triangle {
  isTriangle: boolean;
  a: number;
  b: number;
  c: number;

  constructor(...sides: [number, number, number]) {
    [this.a, this.b, this.c] = [...sides];
    this.isTriangle =
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a;
  }
  get isEquilateral(): boolean {
    return this.isTriangle && this.a == this.b && this.a == this.c;
  }
  get isIsosceles(): boolean {
    return (
      this.isTriangle &&
      (this.a == this.b || this.b == this.c || this.a == this.c)
    );
  }
  get isScalene(): boolean {
    return this.isTriangle && !this.isIsosceles;
  }
}
