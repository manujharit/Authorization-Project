import React from 'react';
import styled from 'styled-components';
import profileImage from '../../assets/profileLogo.png';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const WelcomeMessage = styled.h2`
  font-size: 24px;
  color: #333;
`;

const DashboardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DashboardCard = styled.div`
  width: 300px;
  padding: 20px;
  margin: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #666;
`;

const LoggedIn = ({ user }) => {
  return (
    <DashboardContainer>
      <ProfileHeader>
        <ProfileImage src={profileImage} alt="Profile" />
        <WelcomeMessage>Welcome, {user}!</WelcomeMessage>
      </ProfileHeader>
      <DashboardContent>
        <DashboardCard>
          <CardTitle>Profile Information</CardTitle>
          <CardContent>
            <p>Name: {user}</p>
            <p>Email: {user}@example.com</p>
            <p>Role: User</p>
          </CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Recent Activity</CardTitle>
          <CardContent>
            <p>Last Login: 2023-06-08 10:30 AM</p>
            <p>Total Logins: 10</p>
            <p>Last Updated: 2023-06-07</p>
          </CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Notifications</CardTitle>
          <CardContent>
            <p>You have 3 unread messages.</p>
            <p>New feature updates available.</p>
            <p>Reminder: Complete your profile.</p>
          </CardContent>
        </DashboardCard>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default LoggedIn;