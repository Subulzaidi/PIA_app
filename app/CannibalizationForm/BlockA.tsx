import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Button from "@/components/button";
import { db } from "@/src/Firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import messaging from "@react-native-firebase/messaging";

type Prop = {
  path: string;
};

const BlockA: React.FC<Prop> = ({ path }) => {
  const [nemonclature, SetNemonclature] = React.useState("");
  const [recipientReg, setRecipientReg] = React.useState("");
  const [recipientStation, setRecipientStation] = React.useState("");
  const [partNo, SetPartNo] = React.useState("");
  const [voucherNo, setVoucherNo] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [ATLB, setATLB] = React.useState("");
  const [status, setStatus] = React.useState("Not Verified");

  const handleSubmit = async () => {
    try {
      const data = {
        nemonclature,
        partNo,
        recipientReg,
        recipientStation,
        voucherNo,
        reason,
        ATLB,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, path), data);
      console.log("Document written with ID: ", docRef.id);
      setStatus("Verified");

      const token = "FCM_TOKEN_OF_INCHARGE";

      const message = {
        to: token,
        notification: {
          title: "New Cannibalization Request",
          body: `Request from ${recipientReg} at ${recipientStation}`,
        },
        data: {
          docId: docRef.id,
          path,
        },
      };

      const response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_SERVER_KEY", 
        },
        body: JSON.stringify(message),
      });

      const result = await response.json();
      console.log("Notification sent!", result);
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatus("Error");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Block A : Cannibalization Request</Text>
        <TextInput
          style={styles.input}
          onChangeText={SetNemonclature}
          value={nemonclature}
          placeholder="Nemonclature"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={SetPartNo}
          value={partNo}
          placeholder="Part no"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRecipientReg}
          value={recipientReg}
          placeholder="Recipient Aircraft Registration"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRecipientStation}
          value={recipientStation}
          placeholder="Recipient Station"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setVoucherNo}
          value={voucherNo}
          placeholder="Proof OF NIL-lN-STOCK: (Voucher No.)"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setReason}
          value={reason}
          placeholder="Reason(s) of Cannibalization"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setATLB}
          value={ATLB}
          placeholder="ATLB Ref no with date"
          keyboardType="default"
        />
        {status !== "Verified" ? (
          <Button type="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button type="secondary" disable={true}>
            Verified
          </Button>
        )}
        <Text style={styles.status}>{status}</Text>
        <View style={styles.line} />
        <Text style={styles.incharge}>Shift Incharge/ Certifying staff</Text>
      </View>
    </View>
  );
};

export default BlockA;

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
  status: {
    textAlign: "center",
    color: "#b59906",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  incharge: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#034c2e",
    marginBottom: 20,
    textAlign: "center",
  },
});
