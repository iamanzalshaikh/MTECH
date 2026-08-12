import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Placed Students at Top Companies | M-Tech Computers',
  description:
    'Meet M-Tech Computers alumni placed at top companies. 100+ hiring partners, placement assistance, and career support for CAD, CAM & IT students.',
};

export default function PlacedStudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
