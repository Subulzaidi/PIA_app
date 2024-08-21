import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CheckBox from "expo-checkbox";
import Button from "@/components/button";
import { db } from "@/src/Firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type Prop = PropsWithChildren<{
  path: string;
}>;

const BlockB: React.FC<Prop> = ({ path }) => {
  const [donorReg, setDonorReg] = React.useState("");
  const [preserved, setPreserved] = React.useState(false);
  const [cOfAValid, setCOfAValid] = React.useState(false);
  const [remarks, setRemarks] = React.useState("");
  const [approvalRef, setApprovalRef] = React.useState("");
  const [statusA, setStatusA] = React.useState("Not Verified");
  const [statusB, setStatusB] = React.useState("Not Verified");
  const [statusC, setStatusC] = React.useState("Not Verified");

  const handleSubmit = async () => {
    try {
      const data = {
        donorReg,
        preserved,
        cOfAValid,
        remarks,
        approvalRef,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, `${path}`), data);

      console.log("Document written with ID: ", docRef.id);

      setStatusA("Verified");
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatusA("Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Block B: Cannibalization Permission</Text>

      <TextInput
        style={styles.input}
        onChangeText={setDonorReg}
        value={donorReg}
        placeholder="Donor Aircraft Registration"
        keyboardType="default"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preserved}
          onValueChange={setPreserved}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          Aircraft is adequately preserved, if required
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={cOfAValid}
          onValueChange={setCOfAValid}
          style={styles.checkbox}
        />
        <Text style={styles.label}>C of A is valid</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setRemarks}
        value={remarks}
        placeholder="Remarks (if any)"
        keyboardType="default"
      />
      <Button type="secondary" onClick={handleSubmit}>
        Verify
      </Button>
      <Text style={styles.status}>{statusA}</Text>
      <View style={styles.line} />
      <Text style={styles.signatureText}>DCE(Situation Room) / EMOD </Text>
      <TextInput
        style={styles.input}
        onChangeText={setApprovalRef}
        value={approvalRef}
        placeholder="Approval Ref No"
        keyboardType="default"
      />

      <Text style={styles.status}>{statusB}</Text>
      <View style={styles.line} />
      <Text style={styles.signatureText}>
        Endorsed by: DCE Rotable Planning
      </Text>

      <Text style={styles.status}>{statusC}</Text>
      <View style={styles.line} />
      <Text style={styles.signatureText}>Approved by: Chief Engineer MOC </Text>
    </View>
  );
};

export default BlockB;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 14,
  },
  signatureText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#034c2e",
    textAlign: "center",
  },
  status: {
    textAlign: "center",
    color: "#b59906",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
