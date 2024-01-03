import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

import './cards.css'; // Import your external stylesheet

const zeroTickItem = [
  'Single user',
  '50GB Storage',
  'Unlimited Public Projects',
  'Community Access'
];
const PlusTickItem = [
  'Single user',
  '50GB Storage',
  'Unlimited Public Projects',
  'Community Access',
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Free Subdomain',
];
const PlusCrossItem = [
  'Monthly Status Report'
];
const zeroCrossItem = [
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Free Subdomain',
  'Monthly Status Report'
];
const ProTickItem = [
  'Single user',
  '50GB Storage',
  'Unlimited Public Projects',
  'Community Access',
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Free Subdomain',
  'Monthly Status Report'
];

// eslint-disable-next-line react/prop-types
function SingleCard({ cardText, cardTitle }) {
  return (
    <Card className="card" style={{ width: '10rem' }}>
      <Card.Text id='mode'>
        {cardText}
      </Card.Text>
      <Card.Body>
        {cardText === "FREE" ? (
          <>
            <Card.Title className="card-title">{cardTitle}</Card.Title>
            {zeroTickItem.map((text, index) => (
              <Card.Text key={index} className="card-text-small">{text}</Card.Text>
            ))}
            {zeroCrossItem.map((text, index) => (
              <Card.Text key={index} className="card-text-cross">{text}</Card.Text>
            ))}
            <Button variant="primary">B U T T O N</Button>
          </>
        ) : cardText === "PLUS" ? (
          <>
            <Card.Title className="card-title">{cardTitle}</Card.Title>
            {PlusTickItem.map((text, index) => (
              <Card.Text key={index} className="card-text-small">{text}</Card.Text>
            ))}
            {PlusCrossItem.map((text, index) => (
              <Card.Text key={index} className="card-text-cross">{text}</Card.Text>
            ))}
            <Button variant="primary">B U T T O N</Button>
          </>
        ) : (
          <>
            <Card.Title className="card-title">{cardTitle}</Card.Title>
            {ProTickItem.map((text, index) => (
              <Card.Text key={index} className="card-text-small">{text}</Card.Text>
            ))}
            <Button variant="primary">B U T T O N</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

function BasicExample() {
  return (
    <div>
      <SingleCard cardText="FREE" cardTitle="$0/month" />
      <SingleCard cardText="PLUS" cardTitle="$9/month" />
      <SingleCard cardText="PRO" cardTitle="$49/month" />
    </div>
  );
}

export default BasicExample;
