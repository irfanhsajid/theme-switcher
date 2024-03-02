import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Back } from "../../../../icon";
import Error from "../../../../typography/Error";
import { countries, selectGender } from "../../../../utils/config";
import AutocompleteInput from "../../../shared/AutocompleteInput";
import PhoneInputComponent from '../../../shared/PhoneInputComponent';

export default function ClientInfoForm({ register, errors, watch, setValue, clearErrors, setError, disabled }) {
  const navigate = useNavigate();
  return (
    <div className="sectionContainer">
      <div className="sectionTitle" style={{ padding: '0 8px' }}>
        <div className="section-heading">
          <div className="flex justify-between items-center w-full">
            <h3 className="title">CLIENT INFORMATION</h3>
            {
              !disabled &&
              <button onClick={() => navigate(-1)} className="actionBtn !bg-white">
                <Back className='text-blue' />
                <p className="text-blue">Back</p>
              </button>
            }
          </div>
        </div>
        <div className="greenDivider"></div>
      </div>
      <div className="bg-white p-3 grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-col gap-4">
          <div className="inputContainer">
            <label className="min-w-[120px]">
              <label >Full Name</label><span className="text-red">*</span>
            </label>
            <span>:</span>
            <div className="w-full">
              <input
                disabled={disabled}
                type="text"
                name="full_name"
                {...register("full_name", { required: "Full Name is required" })}
                value={watch("full_name")}
                data-error={errors?.full_name?.message}
              />
              <Error>{errors?.full_name?.message}</Error>
            </div>
          </div>
          <div className="inputContainer">
            <label className="min-w-[120px]">
              <label>Email</label><span className="text-red">*</span>
            </label>
            <span>:</span>
            <div className="w-full">
              <input
                disabled={disabled}
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
                value={watch("email")}
                data-error={errors?.email?.message}
              />
              <Error>{errors?.email?.message}</Error>
            </div>
          </div>
          <div className="inputContainer">
            <label className="min-w-[120px]">
              Phone Number<span className="text-red">*</span>
            </label>
            <span>:</span>
            <div className="w-full">
              <PhoneInputComponent
                disabled={disabled}
                country={'us'}
                enableSearch={true}
                dataError={errors?.phone_number?.message}
                value={watch("country_code") + watch("phone_number")}
                onChange={value => {
                  setValue('phone_number', value.phone_number);
                  setValue('country_code', value.country.dialCode);
                  setValue('country', value.country.name);
                  clearErrors('phone_number');
                }}
              />
            </div>
          </div>
          <div className="lg:flex md:flex-col gap-4">
            <div className="inputContainer">
              <label className="min-w-[120px]">
                Date Of Birth
              </label>
              <span>:</span>
              <div className="w-full">
                <input
                  disabled={disabled}
                  type="date"
                  {...register("birth_date")}
                  value={watch("birth_date")}
                  data-error={errors?.birth_date?.message}
                />
                <Error>{errors?.birth_date?.message}</Error>
              </div>
            </div>
            <div className="inputContainer">
              <label className="min-w-[120px]">
                Gender<span className="text-red">*</span>
              </label>
              <span>:</span>
              <div className="w-full">
                <select
                  disabled={disabled}
                  name="gender"
                  {...register('gender', { required: 'gender is required' })}
                  value={watch("gender")}
                  data-error={errors?.gender?.message}
                >
                  {
                    selectGender.map((item, index) => (
                      <option disabled={item?.value === ''} key={index} value={item?.value}>{item?.name}</option>
                    ))
                  }
                </select>
                <Error>{errors?.gender?.message}</Error>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="inputContainer">
            <label className="min-w-[120px]">
              <label>Address one</label><span className="text-red">*</span>
            </label>
            <span>:</span>
            <div className="w-full">
              <input
                disabled={disabled}
                type="text"
                {...register('address_one', {
                  required: 'address_one is required',
                  validate: (value) => {
                    if (value?.length > 255) {
                      return 'Maximum 255 characters allowed';
                    }
                    return;
                  }
                })}
                value={watch("address_one")}
                data-error={errors?.address_one?.message}
              />
              <Error>{errors?.address_one?.message}</Error>
            </div>
          </div>
          <div className="inputContainer">
            <label className="min-w-[120px]">
              <label>Address two</label>
            </label>
            <span>:</span>
            <div className="w-full">
              <input
                disabled={disabled}
                type="text"
                {...register('address_two', {
                  validate: (value) => {
                    if (value?.length > 255) {
                      return 'Maximum 255 characters allowed';
                    }
                    return;
                  }
                })}
                value={watch("address_two")}
                data-error={errors?.address_two?.message}
              />
              <Error>{errors?.address_two?.message}</Error>
            </div>
          </div>
          <div className="inputContainer">
            <label className="min-w-[120px]" >
              <label>City</label><span className="text-red">*</span></label>
            <span>:</span>
            <div className="w-full">
              <input
                disabled={disabled}
                type="text"
                {...register('city', { required: 'city is required' })}
                value={watch("city")}
                data-error={errors?.city?.message}
              />
              <Error>{errors?.city?.message}</Error>
            </div>
          </div>
          <div className="lg:flex md:flex-col gap-4">
            <div className="inputContainer">
              <label className="min-w-[120px]">
                <label>Zip Code</label><span className="text-red">*</span>
              </label>
              <span>:</span>
              <div className="w-full">
                <input
                  disabled={disabled}
                  type="text"
                  {...register('zipcode', {
                    required: 'Zip code is required',
                    validate: (value) => {
                      if (value?.length == 1) {
                        return 'Minimum 2  digits allowed';
                      }
                      return;
                    }
                  }
                  )}
                />
                <Error>{errors?.zipcode?.message}</Error>
              </div>
            </div>
            <div className="inputContainer">
              <label className="min-w-[120px]">
                Country<span className="text-red">*</span>
              </label>
              <span>:</span>
              <AutocompleteInput
                disabled={disabled}
                getValue={(value) => {
                  if (value) {
                    setValue('country', value?.label);
                    clearErrors('country');
                  } else {
                    setValue('country', '');
                    setError('country', { type: "required", message: "Country is required" })
                  }
                }}
                renderOption={(option) => <p>{option.label}</p>}
                value={watch("country") ? countries.find(item => item.label === watch("country")) : ''}
                errorData={errors?.country?.message}
                options={countries.map(item => ({ label: item.label }))}
                optionLabelName="label"
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
ClientInfoForm.propTypes = {
  disabled: PropTypes.bool,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
}
