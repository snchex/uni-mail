import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../auth/authSlice";
import {
  TypePage,
  DepartPage,
  RequestPage,
  GroupPage,
  GroupUserPage,
  MailPage,
  Home,
  NotFound,
  UserPage,
} from "../views/pages";
import {
  TypeForm,
  DepartamentForm,
  GroupForm,
  MailForm,
  RequestForm,
  FormAddUser,
  FormEditUser,
} from "../views/forms";
import {
  DepartamentProvider,
  TypeProvider,
  RequestProvider,
  GroupProvider,
  MailProvider,
  UserProvider,
} from "../context";

import { Navbar, Footer } from "../views/layouts/nav";

export function MailRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    dispatch(getMe());
  }, [dispatch, isError, navigate]);
  
  return (
    <UserProvider>
      <MailProvider>
        <GroupProvider>
          <RequestProvider>
            <DepartamentProvider>
              <TypeProvider>
                <Navbar />
                <Footer />
                <div className="container-fluid">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/mail/create" element={<MailForm />} />
                    <Route path="/mail/edit/:id" element={<MailForm />} />
                    <Route path="/mail/list" element={<MailPage />} />

                    <Route path="/mailtype/create" element={<TypeForm />} />
                    <Route path="/mailtype/edit/:id" element={<TypeForm />} />
                    <Route path="/mailtype/list" element={<TypePage />} />

                    <Route
                      path="/departament/create"
                      element={<DepartamentForm />}
                    />
                    <Route
                      path="/departament/edit/:id"
                      element={<DepartamentForm />}
                    />
                    <Route path="/departament/list" element={<DepartPage />} />

                    <Route path="/request/create" element={<RequestForm />} />
                    <Route path="/request/edit/:id" element={<RequestForm />} />
                    <Route path="/request/list" element={<RequestPage />} />

                    <Route path="/group/create" element={<GroupForm />} />
                    <Route path="/group/edit/:id" element={<GroupForm />} />
                    <Route path="/group/list" element={<GroupPage />} />
                    <Route
                      path="/group/list/user"
                      element={<GroupUserPage />}
                    />

                    <Route path="/users" element={<UserPage />} />
                    <Route path="/users/add" element={<FormAddUser />} />
                    <Route path="/users/edit/:id" element={<FormEditUser />} />

                    <Route path="/*" element={<NotFound />} />
                  </Routes>
                </div>
              </TypeProvider>
            </DepartamentProvider>
          </RequestProvider>
        </GroupProvider>
      </MailProvider>
    </UserProvider>
  );
}
export default MailRoutes;
