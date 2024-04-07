import { useForm } from 'react-hook-form';
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-4 lg:p-24 protection" id="contact-form">
      <div className="text-center">
        <h2 className="text-3xl lg:text-8xl font-semibold my-4">
          BECOME A DEALER
        </h2>
        <p className="text-lg">
          Please complete the form below. A member of our team will be in touch
          ​with you shortly, but if you have any questions please contact us on
          0208 ​332 0121 or info@metatrak.co.uk. Unrivalled hardware. Smaller.
          Smarter. Easier to install. Quick and easy ​commissioning, 24/7 online
          and via app.
        </p>
      </div>
      <div className="bg-slate-200 p-5 my-5 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2">Full company name *</label>
            <input
              className="w-full p-2 rounded border"
              {...register('companyName', {
                required: 'Company name is required',
              })}
            />
            <p className="text-red-600">{errors.companyName?.message}</p>
          </div>

          <div>
            <label className="block mb-2">Trading as *</label>
            <input
              className="w-full p-2 rounded border"
              {...register('tradingAs', {
                required: 'Trading as is required',
              })}
            />
            <p className="text-red-600">{errors.tradingAs?.message}</p>
          </div>

          <div className="lg:flex lg:space-x-4">
            <div className="lg:w-1/2">
              <label className="block mb-2">VAT number *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('vatNumber', {
                  required: 'Vat number is required',
                })}
              />
              <p className="text-red-600">{errors.vatNumber?.message}</p>
            </div>
            <div className="lg:w-1/2">
              <label className="block mb-2">Reg number *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('regNumber', {
                  required: 'Reg number is required',
                })}
              />
              <p className="text-red-600">{errors.regNumber?.message}</p>
            </div>
          </div>
          <div>
            <label className="block mb-2">Type of business *</label>
            <select
              className="w-full p-2 rounded border"
              {...register('businessType', {
                required: 'Business type is required',
              })}
            >
              <option value="">Select business type</option>
              <option value="sole_trader">Sole Trader</option>
              <option value="partnership">Partnership</option>
              <option value="ltd">Limited Company</option>
              <option value="other">Other</option>
            </select>
            <p className="text-red-600">{errors.businessType?.message}</p>
          </div>

          {/* First Name & Last Name Fields */}
          <div className="lg:flex lg:space-x-4">
            <div className="lg:w-1/2">
              <label className="block mb-2">First name *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('firstName', {
                  required: 'First name is required',
                })}
              />
              <p className="text-red-600">{errors.firstName?.message}</p>
            </div>
            <div className="lg:w-1/2">
              <label className="block mb-2">Last name *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('lastName', {
                  required: 'Last name is required',
                })}
              />
              <p className="text-red-600">{errors.lastName?.message}</p>
            </div>
          </div>

          {/* Email & Phone Number Fields */}
          <div className="lg:flex lg:space-x-4">
            <div className="lg:w-1/2">
              <label className="block mb-2">Email *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="lg:w-1/2">
              <label className="block mb-2">Phone number *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('phoneNumber', {
                  required: 'Phone number is required',
                })}
              />
              <p className="text-red-600">{errors.phoneNumber?.message}</p>
            </div>
          </div>

          {/* Address Field */}
          <div>
            <label className="block mb-2">Address *</label>
            <input
              className="w-full p-2 rounded border"
              {...register('address', {
                required: 'Address is required',
              })}
            />
            <p className="text-red-600">{errors.address?.message}</p>
          </div>

          {/* City & Postcode Fields */}
          <div className="lg:flex lg:space-x-4">
            <div className="lg:w-1/2">
              <label className="block mb-2">City *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('city', {
                  required: 'City is required',
                })}
              />
              <p className="text-red-600">{errors.city?.message}</p>
            </div>
            <div className="lg:w-1/2">
              <label className="block mb-2">Postcode *</label>
              <input
                className="w-full p-2 rounded border"
                {...register('postcode', {
                  required: 'Postcode is required',
                })}
              />
              <p className="text-red-600">{errors.postcode?.message}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">
                Delivery address (if different)
              </label>
              <input
                className="w-full p-2 rounded border"
                {...register('deliveryAddress')}
              />
            </div>
            <div className="lg:flex lg:space-x-4">
              <div className="lg:w-1/2">
                <label className="block mb-2">City</label>
                <input
                  className="w-full p-2 rounded border"
                  {...register('deliveryCity')}
                />
              </div>
              <div className="lg:w-1/2">
                <label className="block mb-2">Postcode</label>
                <input
                  className="w-full p-2 rounded border"
                  {...register('deliveryPostcode')}
                />
              </div>
            </div>
          </div>

          {/* Selling Tracking Solutions Radio Buttons */}
          <div className="mt-4">
            <label className="block mb-2">
              Are you selling tracking solutions at the moment? *
            </label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  className="form-radio"
                  value="Yes"
                  {...register('sellingTrackingSolutions', {
                    required: 'This field is required',
                  })}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="No"
                  {...register('sellingTrackingSolutions', {
                    required: 'This field is required',
                  })}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            <p className="text-red-600">
              {errors.sellingTrackingSolutions?.message}
            </p>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#e30613] text-white font-bold py-2 px-6 rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
