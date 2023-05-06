import { useGetSessionUserQuery } from '@/redux/users/checkRegisterSlice';


const UserName = () => {
  const { data } = useGetSessionUserQuery();
  return <div>{data.session?.user.email}</div>;
};

export default UserName;
