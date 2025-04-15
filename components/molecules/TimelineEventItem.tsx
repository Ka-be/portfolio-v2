"use client";

import React from 'react';
import { TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from "@mui/lab";
import Typography from "@mui/material/Typography";

interface TimelineEventItemProps {
  id: number;
  period: string;
  title: string;
  place: string;
  description: string;
  foregroundColor: string;
  isYear?: boolean;
  activeItemId: number | null;
  setActiveItemId: (id: number | null) => void;
}

const TimelineEventItem: React.FC<TimelineEventItemProps> = ({
  id,
  period,
  title,
  place,
  description,
  foregroundColor,
  isYear = false,
  activeItemId,
  setActiveItemId
}) => {
  const isActive = activeItemId === id;

  const descriptionStyle = {
    overflow: 'hidden',
    maxHeight: isActive ? '500px' : '0',
    opacity: isActive ? 1 : 0,
    transform: `translateY(${isActive ? '0' : '-5px'})`,
    transition: 'max-height 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease, transform 0.4s ease, margin 0.4s ease',
    marginTop: isActive ? '0.5rem' : '0',
    willChange: 'max-height, opacity, transform',
  };


  const dotTransition = {
    transition: 'background-color 0.6s ease, border-color 0.6s ease'
  };

  const handleClick = () => {
    setActiveItemId(isActive ? null : id);
  };

  if (isYear) {
    return (
      <TimelineItem>
        <TimelineOppositeContent className="hidden" />
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: foregroundColor, transition: 'background-color 0.6s ease' }} />
          {isActive || isYear ? (
            <TimelineDot sx={{ 
              bgcolor: foregroundColor, 
              borderRadius: 0, 
              width: '0.5rem', 
              height: '0.5rem',
              ...dotTransition
            }} />
          ) : (
            <TimelineDot variant="outlined" sx={{ 
              borderRadius: 0, 
              borderColor: foregroundColor, 
              width: '0.5rem', 
              height: '0.5rem',
              ...dotTransition
            }} />
          )}
          <TimelineConnector sx={{ bgcolor: foregroundColor, transition: 'background-color 0.6s ease' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '1.5rem', px: 2, mx: 2 }} className="md:px-3 flex align-center">
          <Typography variant="h6" component="span" className="text-background bg-foreground px-2 py-1 shadow-none flex items-center justify-center" sx={{ fontFamily: 'Lexend', fontWeight: 'light', fontSize: '1rem' }}>
            {period}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  }

  return (
    <TimelineItem>
      <TimelineOppositeContent className="hidden" />
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: foregroundColor, transition: 'background-color 0.6s ease' }} />
        {isActive ? (
          <TimelineDot sx={{ 
            bgcolor: foregroundColor, 
            borderRadius: 0, 
            width: '0.5rem', 
            height: '0.5rem',
            ...dotTransition
          }} />
        ) : (
          <TimelineDot variant="outlined" sx={{ 
            borderRadius: 0, 
            borderColor: foregroundColor, 
            width: '0.5rem', 
            height: '0.5rem',
            ...dotTransition
          }} />
        )}
        <TimelineConnector sx={{ bgcolor: foregroundColor, transition: 'background-color 0.6s ease' }} />
      </TimelineSeparator>
      <TimelineContent 
        sx={{ py: '1rem', px: 2, mx: 2 }} 
        className={`md:px-3 hover:bg-foreground/10 transition-all duration-500 cursor-pointer ${isActive ? 'bg-foreground/5' : ''}`}
        onClick={handleClick}
      >
        <Typography component="span" className="text-foreground" sx={{ fontFamily: 'Lexend', fontWeight: 'medium', fontSize: '0.9rem'}}>
          {period}
        </Typography>
        <Typography className="text-foreground" sx={{ fontFamily: 'Lexend', fontWeight: 'light', fontSize: '0.8rem' }}>
          {title}
        </Typography>
        <Typography className="text-foreground/60" sx={{ fontFamily: 'Inter', fontSize: '0.7rem' }}>
          {place}
        </Typography>
        <div style={descriptionStyle}>
          <Typography className="text-foreground/90" sx={{ fontFamily: 'Inter', fontSize: '0.7rem' }}>
            {description}
          </Typography>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineEventItem;
