import { RepeatDataPipe } from './repeat-data.pipe';

describe('RepeatDataPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatDataPipe();
    expect(pipe).toBeTruthy();
  });

  it('should repeat text with given number of times',()=>{
    const pipe=new RepeatDataPipe();
    const result=pipe.transform('abc',2);

    expect(result).toEqual('abcabc');
  })
});
