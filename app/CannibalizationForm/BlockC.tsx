import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { PropsWithChildren } from "react";
import CheckBox from "expo-checkbox";
import Button from "@/components/button";
import { db } from "@/src/Firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type Prop = PropsWithChildren<{
  path: string;
}>;

const BlockC: React.FC<Prop> = ({ path }) => {
  const [donorAction, setDonorAction] = React.useState({
    defects: false,
    serviceability: false,
    inspected: false,
    atlbRefNo: "",
    remarks: "",
  });
  const [statusA, setStatusA] = React.useState("Not Verified");
  const [statusB, setStatusB] = React.useState("Not Verified");
  const [statusC, setStatusC] = React.useState("Not Verified");
  const [recipientAction, setRecipientAction] = React.useState({
    offPartNo: "",
    offSerialNo: "",
    onPartNo: "",
    onSerialNo: "",
    offLocation: "",
    onLocation: "",
    otherDetail: "",
    ipcRef: "",
    inspected: false,
    maintenanceHistory: false,
    atlbRefNo: "",
    remarks: "",
  });

  const handleSubmit = async () => {
    try {
      // Gather the form data
      const data = {
        ...donorAction,
        ...recipientAction,
      };

      const docRef = await addDoc(collection(db, `${path}`), data);

      console.log("Document written with ID: ", docRef.id);

      // Simulate a successful submission
      setStatusA("Verified");
      setStatusB("Verified");
      setStatusC("Verified");

      // Optionally, you might want to clear the form or show a success message
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusA("Error");
      setStatusB("Error");
      setStatusC("Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Block C: Post-Permission Action</Text>

      {/* Donor Section Action */}
      <Text style={styles.text}>Donor Section Action</Text>
      <CheckBox
        value={donorAction.defects}
        onValueChange={(value) =>
          setDonorAction({ ...donorAction, defects: value })
        }
      />
      <Text style={styles.label}>
        Last flight operation with the provided component revealed no faults
        including C/F defects
      </Text>

      <CheckBox
        value={donorAction.serviceability}
        onValueChange={(value) =>
          setDonorAction({ ...donorAction, serviceability: value })
        }
      />
      <Text style={styles.label}>
        There has been no unusual event that could affect the aircraft
        component's serviceability
      </Text>

      <CheckBox
        value={donorAction.inspected}
        onValueChange={(value) =>
          setDonorAction({ ...donorAction, inspected: value })
        }
      />
      <Text style={styles.label}>
        Component has been inspected for satisfactory condition, specifically
        for damage, corrosion, or leakage, and Serviceable tag has been issued
      </Text>

      <TextInput
        style={styles.input}
        placeholder="ATLB/Ref No. with Date"
        value={donorAction.atlbRefNo}
        onChangeText={(value) =>
          setDonorAction({ ...donorAction, atlbRefNo: value })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Remarks (if any)"
        value={donorAction.remarks}
        onChangeText={(value) =>
          setDonorAction({ ...donorAction, remarks: value })
        }
      />

      <Text style={styles.status}>{statusA}</Text>
      <View style={styles.line} />
      <Text style={styles.signatureText}>
        Certifying Staff/ Shit In charge{" "}
      </Text>

      {/* Recipient Section Action */}
      <Text style={styles.text}>Recipient Section Action</Text>
      <TextInput
        style={styles.input}
        placeholder="Part Number OFF"
        value={recipientAction.offPartNo}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, offPartNo: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Serial Number OFF"
        value={recipientAction.offSerialNo}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, offSerialNo: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Part/Component Location (NHA) OFF"
        value={recipientAction.offLocation}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, offLocation: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Part Number ON"
        value={recipientAction.onPartNo}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, onPartNo: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Serial Number ON"
        value={recipientAction.onSerialNo}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, onSerialNo: value })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Part/Component Location (NHA) ON"
        value={recipientAction.onLocation}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, onLocation: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Part/Component Location (NHA) ON"
        value={recipientAction.onLocation}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, onLocation: value })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Other Details (if any)"
        value={recipientAction.otherDetail}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, otherDetail: value })
        }
      />
      <Text style={styles.label}>
        Confirmation with applicable Part Number(s) as per effective tpC
      </Text>
      <TextInput
        style={styles.input}
        placeholder="IPC Rererence / Revision / Date"
        value={recipientAction.ipcRef}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, ipcRef: value })
        }
      />

      <CheckBox
        value={recipientAction.inspected}
        onValueChange={(value) =>
          setRecipientAction({ ...recipientAction, inspected: value })
        }
      />
      <Text style={styles.label}>
        Maintenance history record inciuding ( flight hours/cycles/landings as
        applicable of any seruice life-limited parts ) are availab e ln PIACL IT
        System
      </Text>

      <CheckBox
        value={recipientAction.maintenanceHistory}
        onValueChange={(value) =>
          setRecipientAction({ ...recipientAction, maintenanceHistory: value })
        }
      />
      <Text style={styles.label}>
        Component has been inspected for satisfactory condition, specifically
        for damage, corrosion, or leakage, and availability of serviceable tag
      </Text>

      <TextInput
        style={styles.input}
        placeholder="ATLB/Ref No. with Date"
        value={recipientAction.atlbRefNo}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, atlbRefNo: value })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Remarks (if any)"
        value={recipientAction.remarks}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, remarks: value })
        }
      />
      <Button type="secondary" onClick={handleSubmit}>
        Verify
      </Button>
      <Text style={styles.status}>{statusB}</Text>
      <View style={styles.line} />
      <Text style={styles.signatureText}>Certifying Staff</Text>
      <TextInput
        style={styles.input}
        placeholder="Remarks (if any)"
        value={recipientAction.remarks}
        onChangeText={(value) =>
          setRecipientAction({ ...recipientAction, remarks: value })
        }
      />

      <Text style={styles.status}>{statusC}</Text>
      <View style={styles.line} />
      <Text style={styles.signatureText}>Shift In-Charge</Text>
    </View>
  );
};

export default BlockC;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
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
