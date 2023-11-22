test('esta pruieba no debe de fallar', () => {
    
    if (0 === 1) {
        throw new Error('no puede dividir entre cero ')
    }

})