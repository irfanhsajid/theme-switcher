/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 8 ;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectCheckmarks({ options, value, onChange, className, placeholder }) {
    const handleChange = (event) => {
        const {
            target: { value: selectedValue },
        } = event;
        onChange(selectedValue);
    };

    return (
        <div className={className}>
            <FormControl className={className}>
                <Select
                    multiple
                    displayEmpty
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <p>{placeholder}</p>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    input={<OutlinedInput notched={false} />}
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: ' 1px solid inherit',
                        },
                        //focus
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: '1px solid var(--green)',
                            },
                        },
                        height:'48px',
                        borderRadius: '3px',
                    }}
                >
                    <MenuItem disabled value="">
                        <p>{placeholder}</p>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            <Checkbox checked={value.indexOf(option) > -1} />
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

MultipleSelectCheckmarks.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string, // New prop for custom class names
};
