import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 20 },
})`
  flex-grow: 1;
`;

export const Header = styled.View`
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const Form = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SnackbarText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  text-align: center;
`;


export const CardContainer = styled.View`
  height: 200px;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  perspective: 1000px;
`;

export const AnimatedCard = styled(Animated.View)`
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 20px;
  justify-content: space-between;
  height: 100%;
  backface-visibility: hidden;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 6px;
  elevation: 6;
  position: absolute;
  width: 100%;
`;

export const CardType = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const CardNumber = styled.Text`
  color: white;
  font-size: 20px;
  letter-spacing: 2px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardHolder = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Expiry = styled.Text`
  color: white;
  font-size: 16px;
`;

export const CVVLabel = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CVVBox = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
`;

export const CVVText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const SnackbarWrapper = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl}px;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 10;
`;
