const app = require('../../app');
const request = require('supertest');

let userId;
let houseid;
// test service api
describe('testing service crud operations', function () {
  it('get house data', async () => {
    // let Id;
    const resp = await request(app).get('/service');
    expect(resp.statusCode).toBe(200);
  });
  it('insert service', async () => {
    const reqs = await request(app).post('/service').send({
      Title: 'eey',
      Icon: 'ehghgdadfgafd',
      Decribtion: 'dhgfshghdd',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.servicedata._id;
  });
  it('get service by id', async () => {
    // let Id;
    const resp = await request(app).get(`/service/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update service', async () => {
    const Update = await request(app).put(`/service/${userId}`).send({
      Title: 'ahmedian',
      Icon: 'ehghgdadfgafd',
      Decribtion: 'dhgfshghdd',
    });

    expect(Update.statusCode).toBe(200);
  });
  //   it('delete service', async () => {
  //     const Delete = await request(app).delete(`/service/${userId}`);
  //     expect(Delete.statusCode).toBe(200);
  //   });
});

// test ourclient api
describe('testing ourclient crud operations', function () {
  it('get ourclient data', async () => {
    // let Id;
    const resp = await request(app).get('/client');
    expect(resp.statusCode).toBe(200);
  });
  it('insert ourclient api', async () => {
    const reqs = await request(app).post('/client').send({
      ClientName: 'somnet ',
      Logo: 'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.clientdata._id;
  });
  it('get ourclient by id', async () => {
    // let Id;
    const resp = await request(app).get(`/client/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update ourclient', async () => {
    const Update = await request(app).put(`/client/${userId}`).send({
      ClientName: 'hormuud ',
      Logo: 'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    });

    expect(Update.statusCode).toBe(200);
  });
});
// test house api
describe('testing house api crud operations', function () {
  it('get house data', async () => {
    // let Id;
    const resp = await request(app).get('/house');
    expect(resp.statusCode).toBe(200);
  });
  it('insert house api', async () => {
    const reqs = await request(app).post('/house').send({
      typeHouse: 'apartment',
      area: 'arjantin',
      address: 'karaan',
      rent: '250',
      deposit: '250',
      parking: 'false',
      imagespriview:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      isAvailable: 'true',
      Rooms: 3,
      toilets: '2',
      MasterRoom: 1,
      faafaahin: 'wuu iqanciyey',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.housepost._id;
    // MyHomeId = reqs.body.housepost._id;
    //   console.log('MyHomeId', MyHomeId);
  });
  it('get house by id', async () => {
    // let Id;
    const resp = await request(app).get(`/house/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update house', async () => {
    const Update = await request(app).put(`/house/${userId}`).send({
      typeHouse: 'apartment',
      area: 'nasiibunde',
      address: 'shipis',
      rent: '250',
      deposit: '250',
      parking: 'false',
      imagespriview:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      isAvailable: 'true',
      Rooms: 3,
      toilets: '2',
      MasterRoom: 1,
      faafaahin: 'wuu iqanciyey',
    });

    expect(Update.statusCode).toBe(200);
  });
  it('delete house ', async () => {
    const Delete = await request(app).delete(`/house/${userId}`);
    expect(Delete.statusCode).toBe(200);
  });
});

// test images schema wax yar cilad aya jirta
// describe('testing image model crud operations', function () {
//   it('get house data', async () => {
//     // let Id;
//     const respi = await request(app).get('/images');
//     expect(respi.statusCode).toBe(200);
//   });
//   it('create image api', async () => {
//     const reqs = await request(app).post('/images').send({
//       HouseID: '648dedd3fb3e15f2b5094b0d',
//       pathImage:
//         'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
//     });
//     //   console.log('hh', reqs.body);
//     expect(reqs.statusCode).toBe(201);
//     userId = reqs.body.imagedata._id;
//   });
//   it('get image by id', async () => {
//     // let Id;
//     const resp = await request(app).get(`/images/${userId}`);
//     expect(resp.statusCode).toBe(200);
//   });
//   it('update image', async () => {
//     const Update = await request(app).put(`/images/${userId}`).send({
//       HouseID: '648dedd3fb3e15f2b5094b0d',
//       pathImage:
//         'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
//     });

//     expect(Update.statusCode).toBe(200);
//   });
//   it('delete image', async () => {
//     const Delete = await request(app).delete(`/images/${userId}`);
//     expect(Delete.statusCode).toBe(200);
//   });
// });

// homesitting api test

describe('testing homesitting api api crud operations', function () {
  it('get homesittting  data', async () => {
    // let Id;
    const resp = await request(app).get('/homesitting');
    expect(resp.statusCode).toBe(200);
  });
  it('insert homesitting api', async () => {
    const reqs = await request(app).post('/homesitting').send({
      Title: 'sgdshgdshgd',
      name: 'betahouse',
      location: 'boondheere',
      logo: 'https://images.unsplash.com/photo-1687162703228-63155c83dd05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      email: 'beta@gmail.com',
      Com_Plane_Email: 'ahmed@gmail.com',
      Com_Plane_Phone: 612681775,
      facebook: 'betahouse',
      tiktok: 'betahouse143',
      twitter: 'beta1323',
      instagram: 'betahouseinfo',
      HeroTitle: 'tyidhd',
      HeroDecribtion: 'hejjewhwj',
      heroImage:
        'https://images.unsplash.com/photo-1687162703228-63155c83dd05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      footerText: 'dgshgdsdhshs',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.postdata._id;
  });
  it('get house by id', async () => {
    // let Id;
    const resp = await request(app).get(`/homesitting/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update homesitting', async () => {
    const Update = await request(app).put(`/homesitting/${userId}`).send({
      Title: 'here is ',
      name: 'betahouse',
      location: 'shipis',
      logo: 'hhhhhhhhhh',
      email: 'beta@gmail.com',
      Com_Plane_Email: 'ahmed@gmail.com',
      Com_Plane_Phone: 612681775,
      facebook: 'betahouse',
      tiktok: 'betahouse12',
      twitter: 'beta1323',
      instagram: 'betahouseinfo',
      HeroTitle: 'tyidhd',
      HeroDecribtion: 'hejjewhwj',
      heroImage: 'hwjshdgsh',
      footerText: 'dgshgdsdhshs',
    });

    expect(Update.statusCode).toBe(200);
  });
});

// galry test api calls
describe('testing gallry api calls crud operations', function () {
  it('get gallery data', async () => {
    // let Id;
    const resp = await request(app).get('/gallery');
    expect(resp.statusCode).toBe(200);
  });
  it('insert gallery api', async () => {
    const reqs = await request(app).post('/gallery').send({
      ImageTitle: 'logo ',
      Image:
        'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.gallerydata._id;
  });
  it('get gallery by id', async () => {
    // let Id;
    const resp = await request(app).get(`/gallery/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update gallery', async () => {
    const Update = await request(app).put(`/gallery/${userId}`).send({
      ImageTitle: 'logo ',
      Image:
        'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    });

    expect(Update.statusCode).toBe(200);
  });
});

// contact api calls test
describe('testing contact  api calls crud operations', function () {
  it('get contact api data', async () => {
    // let Id;
    const resp = await request(app).get('/contact');
    expect(resp.statusCode).toBe(200);
  });
  it('insert contact  api', async () => {
    const reqs = await request(app).post('/contact').send({
      Name: 'ahmed ali',
      Phone: 6245525,
      message: 'welcome to',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.contactdata._id;
  });
  it('get contact api by id', async () => {
    // let Id;
    const resp = await request(app).get(`/contact/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
});

// about api call
describe('testing about api calls crud operations', function () {
  it('get about api data', async () => {
    // let Id;
    const resp = await request(app).get('/about');
    expect(resp.statusCode).toBe(200);
  });
  it('insert about api', async () => {
    const reqs = await request(app).post('/about').send({
      FaahFaahin: 'kusoo dhawaaw shirkada guryaha kireeso ee beta house compny',
      FaahFaaahinYar: 'welcome to beta house',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.postabout._id;
  });
  it('get about api by id', async () => {
    // let Id;
    const resp = await request(app).get(`/about/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
});

// image api calls
describe('testing image api api crud operations', function () {
  it('get image  data', async () => {
    // let Id;
    const resp = await request(app).get('/images');
    expect(resp.statusCode).toBe(200);
  });
  it('insert image api', async () => {
    const reqs = await request(app).post('/images').send({
      HouseID: '649610d0d80e7c5d04d8ef7e',
      pathImage:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.imagedata._id;
  });
  it('get image by id', async () => {
    // let Id;
    const resp = await request(app).get(`/images/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update image', async () => {
    const Update = await request(app).put(`/images/${userId}`).send({
      HouseID: '648dedd3fb3e15f2b5094b0d',
      pathImage:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    });

    expect(Update.statusCode).toBe(200);
  });
});
