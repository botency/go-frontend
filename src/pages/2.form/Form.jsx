import React from "react";

const Form = () => {
    return (
        <div className="max-w-3xl mx-auto p-12">
            <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-900"
            >
                Upload Image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                <div className="mt-4 flex text-sm text-gray-600 text-center">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none hover:underline"
                    >
                        <span>Upload a file (PNG or JPG up to 10MB)</span>
                        <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                        />
                    </label>
                </div>
            </div>
            <br />
            <label
                htmlFor="caption"
                className="block text-sm font-medium text-gray-900"
            >
                Add caption
            </label>
            <div className="mt-2">
                <textarea
                    id="caption"
                    name="caption"
                    rows={3}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    defaultValue={""}
                />
            </div>
            <p className="mt-3 text-sm text-gray-600">
                Write a few sentences about the image.
            </p>
            <div className="flex justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Form;
