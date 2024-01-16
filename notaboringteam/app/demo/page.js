import React from 'react'

const page = () => {
    return (
        <div className="w-full max-w-lg mx-auto p-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-medium mb-6">Payment Information</h2>
                <form>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2 sm:col-span-1">
                            <label for="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                            <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label for="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                            <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label for="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                            <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label for="card-holder" className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                            <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page