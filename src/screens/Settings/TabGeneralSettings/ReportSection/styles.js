import styled from 'styled-components/native'

export const ReportProblemContainer = styled.View`
  gap: 15px;
`

export const ReportProblemText = styled.Text`
  font-size: 12px;
  font-family: 'Inter';
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white.mode1};
`

export const EmailInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grey100.mode1
}))`
  padding: 11px 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary400.mode1 : theme.colors.grey100.mode1};
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ theme }) => theme.colors.white.mode1};
`
