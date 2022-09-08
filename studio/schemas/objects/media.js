import React from 'react';

export default {
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    {
      name: 'isVideo',
      title: 'Do you want to add a Video',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Add Image',
      type: 'image',
      hidden: ({ document }) => document?.isVideo,
    },
    {
      name: 'isVideoUrl',
      title: 'Do you want to add a Video as Url',
      type: 'boolean',
      hidden: ({ document }) => !document?.isVideo,
    },
    {
      name: 'video',
      title: 'Add Video',
      type: 'file',
      hidden: ({ document }) => !document?.isVideo || document?.isVideoUrl,
    },
    {
      name: 'videoUrl',
      title: 'Add Video',
      type: 'url',
      hidden: ({ document }) => !document?.isVideo || !document?.isVideoUrl,
    },
    {
      name: 'videoThumbnail',
      title: 'Add Video Thumbnail',
      type: 'image',
      hidden: ({ document }) => !document?.isVideo,
    },
  ],
  initialValue: {
    isVideo: false,
    isVideoUrl: false,
  },
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      thumbnailImageUrl: 'videoThumbnail.asset.url',
    },
    prepare(value) {
      const { imageUrl,thumbnailImageUrl } = value;
       
      return {
        title:  'Dashboard Media',
        media: <img src={imageUrl ? imageUrl : thumbnailImageUrl} alt={`img`} />,
      };
    },
  },
};
