import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import CheckBox from "expo-checkbox";
import Button from "@/components/button";

const SerialNumberForm = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>ENGINEERING & MAINTENANCE</Text>
        <Text style={styles.subHeader}>SERIAL NUMBER TRACEABILITY REQUEST</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Part Number</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>
            Additional Information/Remarks (If any)
          </Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Submitted By</Text>
          <TextInput style={styles.input} placeholder="AE (Production)" />
          <TextInput style={styles.input} placeholder="DCE (Production)" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            COMPONENT QUARANTINE AND REVIEW (ACTION BY P&PC)
          </Text>
          <View style={styles.row}>
            <CheckBox value={false} />
            <Text style={styles.label}>Component has been Quarantined</Text>
          </View>

          <View style={styles.row}>
            <CheckBox value={false} />
            <Text style={styles.label}>
              Serial Number has been traced through Inventory Status / PAMMIS /
              WINGS
            </Text>
          </View>

          <Text style={styles.label}>Serial Number</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Remarks (If any)</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            SERIAL NUMBER CONFIRMATION FROM AWM / TSE
          </Text>
          <View style={styles.row}>
            <CheckBox value={false} />
            <Text style={styles.label}>
              Serial Number has been traced, through:
            </Text>
          </View>

          <Text style={styles.label}>AIR</Text>
          <Text style={styles.label}>ARL</Text>
          <Text style={styles.label}>COMPONENT HISTORY</Text>

          <Text style={styles.label}>Ref</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Serial Number</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            ASSIGNMENT OF LOCAL SERIAL NUMBER (ACTION BY P&PC)
          </Text>
          <View style={styles.row}>
            <CheckBox value={false} />
            <Text style={styles.label}>Local Serial Number Assigned</Text>
          </View>

          <Text style={styles.label}>PIA-STR-______</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>APPROVAL & CLOSURE</Text>
          <Text style={styles.label}>Remarks (if any)</Text>
          <TextInput style={styles.input} />

          <Button type="secondary" onClick={() => {}}>
            Verify
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default SerialNumberForm;
