import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

const App  = () => {
  return (
    <>
      <ScrollView>

          <View style={{ flexDirection: 'row' }}>
              <Image
                  style={styles.banner}
                  source={ require('./assets/img/bg.jpg') }
              />
          </View>

          <View style={styles.contenedor}>
              <Text style={styles.titulo}>Qué hacer en Paris</Text>
              {/* 3. Para cambiar de vertical a horizontal el ScrollView basta con colocar la palabra horizontal como propiedad */}
              <ScrollView
                horizontal
              >
                  <View>
                      <Image
                          style={styles.ciudad}
                          source={ require('./assets/img/actividad1.jpg') }
                      />
                  </View>
                  <View>
                      <Image
                          style={styles.ciudad}
                          source={ require('./assets/img/actividad2.jpg') }
                      />
                  </View>
                  <View>
                      <Image
                          style={styles.ciudad}
                          source={ require('./assets/img/actividad3.jpg') }
                      />
                  </View>
                  <View>
                      <Image
                          style={styles.ciudad}
                          source={ require('./assets/img/actividad4.jpg') }
                      />
                  </View>
                  <View>
                      <Image
                          style={styles.ciudad}
                          source={ require('./assets/img/actividad5.jpg') }
                      />
                  </View>
              </ScrollView>


              <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
              <View>
                  <View>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/mejores1.jpg') }
                      />
                  </View>
                  <View>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/mejores2.jpg') }
                      />
                  </View>
                  <View>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/mejores3.jpg') }
                      />
                  </View>
              </View>

              <Text style={styles.titulo1}>Hospedajes en LA</Text>

              <View
                style={styles.listado}
              >
                  <View style={styles.listadoItem}>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/hospedaje1.jpg') }
                      />
                  </View>
                  <View style={styles.listadoItem}>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/hospedaje2.jpg') }
                      />
                  </View>
                  <View style={styles.listadoItem}>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/hospedaje3.jpg') }
                      />
                  </View>
                  <View style={styles.listadoItem}>
                      <Image
                          style={styles.mejores}
                          source={ require('./assets/img/hospedaje4.jpg') }
                      />
                  </View>
              </View>


          </View>

      </ScrollView>
    </>
  );
};

/*1. La principal diferencia entre react y ReactNative es que en react native todos sus elementos utilizan 
     flex como display por default y con direccion column por defecto, osea hacia abajo */
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontSize: 24,
    marginVertical: 20,
    fontFamily: 'Lato-Black'
  },
  titulo1: {
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  /*2. - flex: 1 = hara que el view ocupe todo el largo disponible
       - flexDirection: 'row' = Cambiaremos la direccion por defecto de column a row, direccion horizontal
       - justifyContent: 'center' = Con justify content los elementos se alinearan en direccion del eje princpal
       - alignItems: 'center' = Con alignItems los elementos se alinerarn en direccion del eje secundario */
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
});

export default App;
