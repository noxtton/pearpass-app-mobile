import { useLingui } from '@lingui/react/macro'
import { colors } from 'pearpass-lib-ui-theme-provider/native'
import { ActivityIndicator } from 'react-native'

import { EmailInput, ReportProblemContainer, ReportProblemText } from './styles'
import { CardSingleSetting } from '../../../../components/CardSingleSetting'
import { ButtonSecondary, TextAreaReport } from '../../../../libComponents'
/**
 *
 * @param {Object} props
 * @param {string} props.message
 * @param {Function} props.setMessage
 * @param {boolean} props.isLoading
 * @param {Function} props.handleReportProblem
 * @param {string} props.email
 * @param {Function} props.onEmailChange
 */
export const ReportSection = ({
  message,
  setMessage,
  isLoading,
  handleReportProblem,
  email,
  onEmailChange
}) => {
  const { t } = useLingui()

  return (
    <CardSingleSetting title={t`Report a problem`}>
      <ReportProblemContainer>
        <ReportProblemText>
          {t`Tell us what’s going wrong and leave your email so we can follow up with you.`}
        </ReportProblemText>
        <TextAreaReport
          placeholder={t`Write your issue...`}
          value={message}
          onChange={(text) => setMessage(text)}
        />
        <EmailInput
          placeholder={t`Write your email...`}
          value={email}
          onChange={(text) => onEmailChange(text)}
        />
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.primary400.mode1} />
        ) : (
          <ButtonSecondary size="sm" onPress={handleReportProblem}>
            {t`Send`}
          </ButtonSecondary>
        )}
      </ReportProblemContainer>
    </CardSingleSetting>
  )
}
