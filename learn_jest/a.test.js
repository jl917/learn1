/*
toBe //精确匹配 === 
toEqual //模糊匹配 == 

not
resolves
rejects
*/



test('sum', ()=> {
    expect(2+2).toBe(4) 
    expect(1+2).not.toBe()

    expect(typeof {a:1}).toBe('object')
})

test('resolve', ()=>{
    expect(Promise.resolve('cg')).resolves.toBe('cg')
})