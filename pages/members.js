import React from "react";
import gql from "graphql-tag";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import Layout from "../components/layout";

const SAMPLE_DATA = {
  data: {
    mixxer_db_accessids: [
      {
        accessidsdateupdated: "2018-01-01T20:09:31+00:00",
        accessidsemail: "dpellett@triad.rr.com",
        accessidsstatusid: 1,
        accessidsroleid: 2,
        accessidspswd: "d26ae77bdb88fdc18fe46409729b8154",
        accessidsphone: "",
        accessidsloginupdatedid: 1,
        accessidsloginaddedid: 1,
        accessidslogin: "clogin",
        accessidslastname: "Customer",
        accessidsid: 6,
        accessidsfirstname: "Customer",
        accessidsdateadded: "2018-01-01T20:09:31+00:00"
      },
      {
        accessidsdateupdated: "2018-04-28T03:16:29+00:00",
        accessidsemail: "bkensey@gmail.com",
        accessidsstatusid: 3,
        accessidsroleid: 1,
        accessidspswd: "",
        accessidsphone: "",
        accessidsloginupdatedid: 1,
        accessidsloginaddedid: 1,
        accessidslogin: "brent",
        accessidslastname: "Kensey",
        accessidsid: 4,
        accessidsfirstname: "Brent",
        accessidsdateadded: "2017-12-03T05:42:19+00:00"
      },
      {
        accessidsdateupdated: "2017-10-30T17:34:25+00:00",
        accessidsemail: "dpellett@triad.rr.com",
        accessidsstatusid: 1,
        accessidsroleid: 1,
        accessidspswd: "c454d6dfbed11e46fa2bcc2eab98b8ac",
        accessidsphone: "3367673585",
        accessidsloginupdatedid: 1,
        accessidsloginaddedid: 1,
        accessidslogin: "dpellett",
        accessidslastname: "Pellett",
        accessidsid: 1,
        accessidsfirstname: "Donna",
        accessidsdateadded: "2017-10-30T17:34:25+00:00"
      },
      {
        accessidsdateupdated: "2018-06-03T19:05:33+00:00",
        accessidsemail: "gpellett@triad.rr.com",
        accessidsstatusid: 1,
        accessidsroleid: 1,
        accessidspswd: "62577af459ec11c41562ef91807bae85",
        accessidsphone: "donnal89",
        accessidsloginupdatedid: 1,
        accessidsloginaddedid: 1,
        accessidslogin: "gpellett",
        accessidslastname: "Pellett",
        accessidsid: 2,
        accessidsfirstname: "Gary",
        accessidsdateadded: "2017-10-31T03:26:06+00:00"
      },
      {
        accessidsdateupdated: "2018-04-28T03:16:40+00:00",
        accessidsemail: "shelton.nc@gmail.com",
        accessidsstatusid: 1,
        accessidsroleid: 1,
        accessidspswd: "02558a70324e7c4f269c69825450cec8",
        accessidsphone: "",
        accessidsloginupdatedid: 1,
        accessidsloginaddedid: 1,
        accessidslogin: "alan",
        accessidslastname: "Shelton",
        accessidsid: 5,
        accessidsfirstname: "Alan",
        accessidsdateadded: "2017-12-03T05:43:25+00:00"
      },
      {
        accessidsdateupdated: "2018-04-08T02:58:13+00:00",
        accessidsemail: "mspmatiassilva@gmail.com",
        accessidsstatusid: 1,
        accessidsroleid: 1,
        accessidspswd: "5ecc4aa302d527a68a6538d72190310d",
        accessidsphone: "n/a",
        accessidsloginupdatedid: 1,
        accessidsloginaddedid: 1,
        accessidslogin: "matias",
        accessidslastname: "Silva",
        accessidsid: 3,
        accessidsfirstname: "Matias",
        accessidsdateadded: "2017-11-09T01:09:16+00:00"
      }
    ]
  }
};

const GET_MEMBERS = gql`
  query GetUsers {
    user {
      name
      created_at
    }
  }
`;

const MemberListItem = ({ member }) => {
  const { name, created_at } = member;

  return (
    <li>
      <a
        href="#"
        className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex items-center flex-1 min-w-0">
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                  {name}
                </div>
                <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="truncate"></span>
                </div>
              </div>
              <div className="hidden md:block">
                <div>
                  <div className="text-sm leading-5 text-gray-900">
                    Joined
                    <time dateTime="2020-01-07">{created_at}</time>
                  </div>
                  <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Completed phone screening
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
};

const MemberListHeader = () => {
  return (
    <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <div className="flex flex-wrap items-center justify-between -mt-2 -ml-4 sm:flex-no-wrap">
        <div className="mt-2 ml-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Members
          </h3>
        </div>
        <div className="flex-shrink-0 mt-2 ml-4">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md bg-mixxer-positive-red hover:bg-mixxer-cherry-red focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
            >
              Create user
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const MemberList = ({ members }) => {
  return (
    <div className="max-w-5xl overflow-hidden bg-white shadow sm:rounded-md sm:mx-5">
      <MemberListHeader />
      <ul>
        {members &&
          members.map(member => (
            <MemberListItem member={member} key={member.name} />
          ))}
      </ul>
    </div>
  );
};

const MemberListQuery = () => {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  return (
    <Layout>
      {(loading || !data) && <p>Loading members...</p>}

      {error && <p>Error!</p>}

      {data && <MemberList members={data.user} />}
    </Layout>
  );
};

export default withApollo(MemberListQuery, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: false
});
