// searchBarStyles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  searchIconContainer: {
    padding: 10,
  },
  searchIcon: {
    fontSize: 24,
  },
  searchContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  examplesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  example: {
    fontSize: 16,
    paddingVertical: 2,
  },
});