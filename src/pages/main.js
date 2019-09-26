
import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JS Hunt',
  };

  state = {
    productInfo: {    
      total: 13,
      limit: 10,
      page: 1,
      pages: 2
    },

    docs: [
       {
        _id: "1d2dd4dd",
        title: "Raphael Real",
        description: "Acessor Jurídico",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "2d2dd4dd",
        title: "Danillo Filho",
        description: "Técnico de Enfermagem",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "3d2dd4dd",
        title: "Gustavo de Almeida",
        description: "Caixa",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "4d2dd4dd",
        title: "Kaio Figueredo",
        description: "Representante Comercial",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "5d2dd4dd",
        title: "Umberto Rodrigues",
        description: "Deputado Federal",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "6d2dd4dd",
        title: "Renato Borges",
        description: "Gerente de Farmácia",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "7d2dd4dd",
        title: "Isabelly Castro",
        description: "Assistente de RH",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "8d2dd4dd",
        title: "Amanda Souza",
        description: "Defensora Pública",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "9d2dd4dd",
        title: "Maria Rosa",
        description: "Atriz",
        url: "https://github.com/renan-sn"
      },
       {
        _id: "10dd4dd",
        title: "Bruna Santos",
        description: "Administradora",
        url: "https://github.com/renan-sn"
      } 
    ],
    page: 1,
  };

  // este componente funciona como um "ready" do jQuery
  componentDidMount() {
    //console.log(this.state.docs);
    this.loadProducts();
  }

  loadProducts = async () => {
    //const response = await api.get('/users/renan-sn');
    
    //const { name, bio, id, avatar_url, html_url } = response.data;
    
    //this.state.user.push({ name, bio, id, avatar_url, html_url });

    //console.log(this.state.user);
    
  };


  //loadMore = () => {
    //const { page, productInfo } = this.state;

    //if (page === productInfo.pages) return;

    //const pageNumber = page + 1;

    //console.log(page, productInfo.pages);
    
  //}; 

  // parametros da funcão com desestruturação
  // pode-se usar parenteses na função quando for retornar algo
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}> {item.title} </Text>
      <Text style={styles.description}> {item.description} </Text>

      <TouchableOpacity style={styles.button} 
        onPress={() => {
          this.props.navigation.navigate("Products", { product: item });
        }}
        >

        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        contentContainerStyle={styles.list}
        data={this.state.docs} 
        keyExtractor={item => item.id} 
        renderItem={this.renderItem}
        //onEndReached={this.loadMore}
        //onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  description: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24
  },
  button: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  buttonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold'
  }
});