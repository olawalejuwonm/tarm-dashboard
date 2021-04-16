import React from 'react';

export const baseLink = 'https://tarmwebapi.herokuapp.com/api/v1/';
// export const baseLink = "http://localhost:3003/";

export const Loader = () => {
  return <div className="loader" />;
};

export const Affect = ({load, cref, effect}) => {
  console.log(load, effect, cref)
  //   console.log(cref);
  if (load) {
    return <Loader />;
  }
  if (cref) {
    // if (load) {
    //   return <Loader />;
    // }
    // else {
    //   cref.style.display = '';
    // }

    if (effect) {

      if (!effect.error) {
        cref.className = 'text-success text-center';
        cref.innerHTML = effect.message;
      } else {
        cref.className = 'text-danger text-center';
        cref.innerHTML = effect.message;
      }
    } else {
      cref.style.display = '';
    }
  }

  return <div style={{display: 'none'}} />;
};

export const api = (method, path, data) => {
  const dofetch = async () => {
    try {
      let token = localStorage.getItem('token');
      // console.log(token)
      const r = await fetch(baseLink + path, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: data ? JSON.stringify(data) : undefined,
        credentials: 'same-origin',
      });
      // console.log(r);
      const result = await r.json();
      if (result.status === 422) {
        let err = new Error(result.data[Object.keys(result.data)[0]])
        throw err;
      }
      if (result.status !== 200) {
        throw result;
      }
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return dofetch();
};

export const postfile = (path, data) => {
  const dofetch = async () => {
    try {
      let token = localStorage.getItem('token');
      // console.log(token)
      const r = await fetch(baseLink + path, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: data,
      });
      // console.log(r);
      const result = await r.json();
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return dofetch();
};

export function wrapPromise(promise) {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    (res) => {
      console.log('success', res);
      status = 'success';
      response = res;
    },
    (err) => {
      console.log('err', err.message);

      status = 'error';
      response = err.message;
    }
  );
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        return response;
      default:
        return response;
    }
  };

  return {read};
}
