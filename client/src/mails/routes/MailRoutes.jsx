import React, { Suspense, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/*
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
*/
import {
  TypeProvider,
  RequestProvider,
  GroupProvider,
  MailProvider,
  UserProvider,
  DepartamentProvider,
} from "../context";

import { getMe } from "../auth/authSlice";
import Loader from "../views/layouts/loader/Loader";
import { Navbar, Footer } from "../views/layouts/nav";

const TypePage = lazy(() => import("../views/pages/TypePage"));
const DepartPage = lazy(() => import("../views/pages/DepartamentPage"));
const RequestPage = lazy(() => import("../views/pages/RequestPage"));
const GroupPage = lazy(() => import("../views/pages/GroupPage"));
const GroupUserPage = lazy(() => import("../views/pages/GroupUserPage"));
const MailPage = lazy(() => import("../views/pages/MailPage"));
const Home = lazy(() => import("../views/pages/Home"));
const NotFound = lazy(() => import("../views/pages/NotFound"));
const UserPage = lazy(() => import("../views/pages/UserPage"));

const TypeForm = lazy(() => import("../views/forms/TypeForm"));
const DepartamentForm = lazy(() => import("../views/forms/DepartamentForm"));
const GroupForm = lazy(() => import("../views/forms/GroupForm"));
const MailForm = lazy(() => import("../views/forms/MailForm"));
const RequestForm = lazy(() => import("../views/forms/RequestForm"));
const FormAddUser = lazy(() => import("../views/forms/AddUser"));
const FormEditUser = lazy(() => import("../views/forms/EditUser"));

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
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Footer />
      <UserProvider>
        <MailProvider>
          <GroupProvider>
            <RequestProvider>
              <DepartamentProvider>
                <TypeProvider>
                  <Routes>
                    <Route index path="/home" element={<Home />} />
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
                </TypeProvider>
              </DepartamentProvider>
            </RequestProvider>
          </GroupProvider>
        </MailProvider>
      </UserProvider>
    </Suspense>
  );
}
export default MailRoutes;
