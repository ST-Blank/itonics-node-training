function add(a:number,b:number){
    return a+b;
    }
    
    fdescribe('test calculation',()=>{
        it('should add values and return add value',()=>{
            expect(add(5,5)).toBe(10)
        });
    });
    
    describe('test calculation',()=>{
        it('should add values and return add value',()=>{
            expect(add(10,10)).toEqual(20)
        });
    });