import { YellowErrorIcon } from 'pearpass-lib-ui-react-native-components'
import { colors } from 'pearpass-lib-ui-theme-provider/native'
import { View, Text, StyleSheet } from 'react-native'

/**
 * @param {{
 *  testID?: string,
 *  warning: string,
 *  containerStyles: object,
 *  textStyles: object
 * }} props
 * @returns
 */
export const AppWarning = ({ testID, warning, containerStyles, textStyles }) => (
  <View
    testID={testID}
    nativeID={testID}
    accessibilityLabel={testID}
    style={[styles.warningContainer, containerStyles]}>
    <YellowErrorIcon width={14} height={14} />
    <Text 
    testID={testID ? `${testID}-text` : undefined}
    nativeID={testID ? `${testID}-text` : undefined}
    accessibilityLabel={testID ? `${testID}-text` : undefined}
    style={[styles.warningText, textStyles]}>{warning}</Text>
  </View>
)
const styles = StyleSheet.create({
  warningContainer: {
    width: '100%',
    backgroundColor: 'rgb(47, 38, 14)',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.errorYellow.mode1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  warningText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white.mode1,
    marginLeft: 5,
    flex: 1
  }
})
