import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import Error from '../../typography/Error';
export default function AutocompleteInput({ options, getValue, optionLabelName, errorData, value, renderOption, disabled, getSearchValue }) {
  return (
    <div className="w-full">
      <Autocomplete
        disabled={disabled}
        sx={{
          "& .MuiInputBase-root": {
            ".MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${errorData ? 'var(--red)' : 'var(--stroke)'}`,
            },
            //hover
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: `1px solid ${disabled ? 'inherit' : errorData ? 'var(--red)' : 'var(--green)'}`,
              },
            },
            //focus
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: '1px solid var(--green)',
              },
            },
            borderRadius: '3px',
          },
          "& .css-ig4gz7-MuiAutocomplete-root.MuiOutlinedInput-root.MuiAutocomplete-input": {
            padding: 0,
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: 'var(--white)',
            padding: '8px',
            color: 'var(--body-text)',
            height: '38px',
            width: '100%',
          }
        }}
        value={value || null}
        isOptionEqualToValue={(option, value) => option[optionLabelName] === value[optionLabelName]}
        options={options}
        autoHighlight
        onChange={(_, value) => getValue(value)}
        getOptionLabel={(option) => optionLabelName ? option[optionLabelName] : option}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            {renderOption(option)}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            sx={{
              "& .MuiOutlinedInput-input": {
                padding: '0 !important',
              },
            }}
            label=""
            {...params}
            onChange={(e) => getSearchValue && getSearchValue(e.target.value)}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
              // disable autocomplete and autofill
              sx: {
                "& .MuiOutlinedInput-root": {
                  padding: 0,
                },
                "& .MuiAutocomplete-input": {
                  padding: 0,
                },
              }
            }}
          />
        )}
      />
      <Error>{errorData}</Error>
    </div>
  );
}
AutocompleteInput.propTypes = {
  options: PropTypes.array.isRequired,
  getValue: PropTypes.func.isRequired,
  optionLabelName: PropTypes.string.isRequired,
  errorData: PropTypes.string,
  value: PropTypes.any,
  renderOption: PropTypes.func,
  getSearchValue: PropTypes.func,
  disabled: PropTypes.bool,
}