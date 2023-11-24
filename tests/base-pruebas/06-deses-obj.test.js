import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto con los valores esperados', () => {
    const usuario = usContext({
      clave: 'Ironman',
      nombre: 'Tony Stark',
      edad: 45,
      rango: 'Capitán'
    });

    expect(usuario).toEqual({
      nombreClave: 'Ironman',
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });
  });

  test('usContext debe retornar un objeto con rango por defecto si no se proporciona', () => {
    const usuario = usContext({
      clave: 'Spiderman',
      nombre: 'Peter Parker',
      edad: 20
    });

    expect(usuario).toEqual({
      nombreClave: 'Spiderman',
      anios: 20,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });
  });
});