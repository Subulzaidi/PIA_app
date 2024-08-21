import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import BlockA from "./BlockA";
import BlockB from "./BlockB";
import BlockC from "./BlockC";

const CannibalizationForm = () => {
  const [id, setId] = React.useState(0);
  const [path, setPath] = React.useState("");

  useEffect(() => {
    // Increment id and update path
    setId((prevId) => {
      const newId = prevId + 1;
      const newPath = `/pia_app/CannibalizationForm/Form${newId}`;
      setPath(newPath);
      console.log("New id:", newId);
      console.log("New path:", newPath);
      return newId;
    });
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <BlockA path={path} />
      <BlockB path={path} />
      <BlockC path={path} />
    </ScrollView>
  );
};

export default CannibalizationForm;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
