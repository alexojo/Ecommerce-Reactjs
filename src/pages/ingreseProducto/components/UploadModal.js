/**
 * Modal that shows progress of upload
 */

import React from "react"

const UploadModal = ({
    uploadModalRef,
    uploadRef,
    progressRef,
    uploadedImageURL,
}) => {
    const closeUploadModal = () => {
        uploadModalRef.current.style.display = "none"
    }
    return (
        <div>
            <div className='upload-modal' ref={uploadModalRef}>
                                
                <div className='uploaded-image-container'>
                    {uploadedImageURL && (
                        <img
                            src={uploadedImageURL}
                            alt='uploaded result'
                            width='100px'
                            height='100px'
                            loading='eager'
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default UploadModal
