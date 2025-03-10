import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Pantalla from "../../components/Pantalla";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { ancho, alto } from "../../helpers/dimensiones";
import { tema } from "../../constants/tema";
import { useRouter } from "expo-router";
import { useState } from "react";
import Icon from "../../assets/icons"
import Boton from "../../components/Boton";
import Avatar from "../../components/Avatar";

const Inicio = () => {
  const { user, setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  return (
    <Pantalla>
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={{fontFamily:"monospace", fontSize:ancho(8)}}>Bienvenido</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => router.push("notificaciones")}>
              <Icon
                name="subir" 
                size={alto(4)}
                strokeWidth={2}
                color={tema.colors.text}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("nuevaPublicacion");
              }}
            >
              <Icon
                name="campana"
                size={alto(4)}
                strokeWidth={2}
                color={tema.colors.text}
              />
            </Pressable>
            <Pressable onPress={() => {router.push("perfil")}}>
              <Avatar
                uri={user?.image}
                style={{borderWidth:2}}
              />
              <Icon
                name="perfil"
                size={alto(4)}
                strokeWidth={2}
                color={tema.colors.primary}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Pantalla>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeImage: {
    height: alto(60),
    width: ancho(100),
    alignSelf: "center",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: ancho(4),
    marginBottom: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    marginTop:20
  },
  listStyle: {
    paddingTop: 20,
    paddingBottom: ancho(4),
  },
  noPosts: {
    fontSize: alto(2),
    textAlign: "center",
    color: tema.colors.text,
  },
  avatarImage: {
    height: alto(40),
    width: ancho(40),
    borderRadius: tema.radius.sm,
    borderCurve: "continuous",
    borderColor: tema.colors.gray,
    borderWidth: 3,
  },
  pill: {
    position: "absolute",
    right: -10,
    top: -4,
  },
  titulo: {
    color: tema.colors.text,
    fontSize: alto(5),
    fontWeight: tema.fonts.bold,
  },
  punchLine: {
    textAlign: "center",
    paddingHorizontal: ancho(8),
    fontSize: alto(3),
    color: tema.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  loginText: {
    textAlign: "center",
    color: tema.colors.text,
    fontSize: alto(4),
  },
});
