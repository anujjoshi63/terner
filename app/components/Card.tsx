import { StyleSheet, View } from 'react-native';

interface IProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const Card: React.FC<IProps> = ({ children, backgroundColor }) => {
  return (
    <View
      style={[styles.card, { backgroundColor: backgroundColor || '#4BEED1' }]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {}
});
