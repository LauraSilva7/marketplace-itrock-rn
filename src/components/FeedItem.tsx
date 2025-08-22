import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type FeedItemProps = {
  fullName: string;
  avatarUrl?: string;
  timestamp: string;
  comment: string;
};

export default function FeedItem({ fullName, avatarUrl, timestamp, comment }: FeedItemProps) {
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <View style={styles.container}>
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.timestamp}>{new Date(timestamp).toLocaleString("es-AR")}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10, borderBottomWidth: 0.5, borderColor: "#ccc" },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  avatarFallback: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2e7d32",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  content: { marginLeft: 10, flex: 1 },
  name: { fontWeight: "bold" },
  timestamp: { fontSize: 12, color: "#555" },
  comment: { marginTop: 2 },
});
