import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";
import EditHabit from "../../Components/Home/EditHabit";

export default function Home() {
  //navegação de paginas
  const navigation = useNavigation();
  //controle da bara de status
  const [mindHabit, setMindHabit] = useState("Habito Preenchido");
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();

  function handleNavExplanation() {
    navigation.navigate("AppExplanation");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>

          <LifeStatus />
          <StatusBar />

          {mindHabit ? (
            <EditHabit
              habit={"Habito 01"}
              frequency={"Todo dia de 10:30"}
              habitArea={"Mente"}
              checkColor="#90B7F3"
            />
          ) : (
            <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
          )}

          <CreateHabit habitArea="Financeiro" borderColor="#85bb65" />

          <CreateHabit habitArea="Corpo" borderColor="#ff0044" />

          <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
        </View>

        <Text
          style={styles.explanationText}
          onPress={() => {
            handleNavExplanation();
          }}
        >
          Ver explicações novamente
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  dailyChecks: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
  explanationText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25,
  },
});
