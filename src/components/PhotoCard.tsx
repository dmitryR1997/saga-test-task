import React from "react";

// @ts-ignore
const PhotoCard = ({ thumbnailUrl, title, url, albumId }) => {
    return (
        <div className="photo-card">
            <div className="photo-card__image">
                <img src={thumbnailUrl} alt="Photo Card" />
            </div>

            <div className="photo-card__info">
                <div className="photo-card__info-title">
                    {title} (Album: {albumId})
                </div>
                <div className="photo-card__info-description">
                    {url}
                </div>
            </div>
        </div>
    )
}

export default PhotoCard
