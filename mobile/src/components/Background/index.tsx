import { ImageBackground } from "react-native";

import { styles } from "./styles";
import backgroundImage from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage} //defaultsource vai memorizar a imagem padrão e acelear o carregamento
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}

// 1:28h
