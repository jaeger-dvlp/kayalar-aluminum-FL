import React from 'react';

type Props = {
  error?: string;
};

function FormError({ error }: Props) {
  return error ? (
    <span className="font-theme text-xs text-red-500">{error}</span>
  ) : null;
}

FormError.defaultProps = {
  error: undefined,
};

export default FormError;
