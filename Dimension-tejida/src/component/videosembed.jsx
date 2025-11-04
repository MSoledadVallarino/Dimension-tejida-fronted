import React from 'react';

const VideoEmbed = ({ videoId, titulo }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        // El 'video-card' será el contenedor pequeño y separado
        <div className="video-card"> 
            
            {/* 💡 Título sobre el video, como solicitaste */}
            <h3 className="video-title">{titulo}</h3> 
            
            {/* El div 'video-responsive' asegura que el video se adapte dentro del card */}
            <div className="video-responsive">
                <iframe
                    // Reducimos el tamaño por defecto, pero el CSS lo hará adaptable
                    width="100%" 
                    height="100%" 
                    src={embedUrl} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen 
                    title={titulo || "Video de YouTube"}
                />
            </div>
        </div>
    );
};

export default VideoEmbed;
