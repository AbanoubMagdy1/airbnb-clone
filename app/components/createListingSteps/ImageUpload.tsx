'use client'

import React, { useCallback } from 'react'
import { FormValues } from '../Modals/CreateListingModal';
import Heading from '../Heading';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/Tb';

interface Props {
    image: string | undefined;
    setValue: (id: keyof FormValues, value: any) => void;
}

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

function ImageUpload({image, setValue}: Props) {
    const handleUpload = useCallback((result: any) => {
        setValue('imageSrc', result.info.secure_url);
    }, [setValue]);
    

    return (
        <div className='flex flex-col gap-8'>
            <Heading title="Upload your listing image" subtitle='Select an image that expresses your listing'/>
        
            <CldUploadWidget 
                onUpload={handleUpload} 
                uploadPreset={uploadPreset}
                options={{
                    maxFiles: 1
                }}
            >
            {({ open }) => {
                return (
                <div
                    onClick={() => open?.()}
                    className="
                    relative
                    cursor-pointer
                    hover:opacity-70
                    transition
                    border-dashed 
                    border-2 
                    p-20 
                    border-neutral-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    text-neutral-600
                    "
                >
                    <TbPhotoPlus
                        size={50}
                    />
                    <div className="font-semibold text-lg">
                        Click to upload
                    </div>

                    {image && (
                    <div className="
                      absolute inset-0 w-full h-full">
                        <Image
                            fill 
                            style={{ objectFit: 'cover' }} 
                            src={image} 
                            alt="House" 
                        />
                    </div>
                    )}
                </div>
                ) 
            }}
            </CldUploadWidget>

        </div>
  )
}

export default ImageUpload