import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Die Another Day",
      rating: 5,
      body: "The final Pierce Brosnan James Bond film may have introduced the invisible car, but critics think of this 2002 film as a retread, not an innovator. Co-starring then-reigning Oscar winner Halle Berry as Bond girl Jinx Johnson, with Monty Python's John Cleese as Q, and featuring the hit title track by Madonna, Die Another Day grossed more money than any other Pierce Brosnan 007 film: $431.9 million worldwide.",
      key: "1",
    },
    {
      title: "The World Is Not Enough",
      rating: 5,
      body: "The World Is Not Enough grossed a solid $361.7 million at the worldwide box office. It co-stars Robert Carlyle as the villain Renard, who feels no pain; Sophie Marceau as the strikingly conflicted Elektra King; and Denise Richards as a nuclear physicist. ",
      key: "2",
    },
    {
      title: "Quantum of Solace",
      rating: 5,
      body: "On one hand, Quantum of Solace, co-starring Mathieu Amalric as Bond villain Dominic Greene, is the fourth-biggest-grossing James Bond movie of all time, with $591.7 million in worldwide ticket sales. On the other hand, the film is the lowest-grossing James Bond film starring Daniel Craig. ",
      key: "3",
    },
    {
      title: "Octopussy",
      rating: 3,
      body: "Despite a couple of electrifying action sequences, Octopussy is a formulaic, anachronistic Bond outing.",
      key: "4",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => [...prevReviews, review]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
