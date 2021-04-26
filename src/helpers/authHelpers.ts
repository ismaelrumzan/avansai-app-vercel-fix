type MaybeValidEmail = {
  valid: boolean
  reason?: 'Required' | 'Invalid'
}

/**
 * Validate email
 * @param value - email to validate
 * @returns { MaybeValidEmail } - is for telling whether or not email is required and valid
 */
export const validateEmail = (value: string): MaybeValidEmail => {
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  if (!value.trim().length) {
    return { valid: false, reason: 'Required' }
  } else if (!pattern.test(value)) {
    return { valid: false, reason: 'Invalid' }
  } else {
    return { valid: true }
  }
}

/**
 * Checks if the field is required
 * @param value
 * @returns { boolean } - is for telling whether a field is required or not
 */
export const validateRequiredField = (value: string): boolean => !!value.trim().length

export const trimAndLower = (str: string): string => str.trim().toLowerCase()
