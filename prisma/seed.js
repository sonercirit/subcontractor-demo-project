import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const subcontractors = await prisma.subcontractor.createMany({
    data: [
      {
        name: 'Hagenes and Sons',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg',
        address: '7951 Chyna Ranch',
        state: 'MA',
        zipcode: '90014',
        speciality: 'Frozen',
        email: 'Grayson18@hotmail.com',
        phone: '1-956-692-6015 x6083',
        city: 'Johnson City',
      },
      {
        name: 'Lindgren - Volkman',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1154.jpg',
        address: '2839 Cary Lights',
        state: 'NY',
        zipcode: '64490-0925',
        speciality: 'Granite',
        email: 'Lizeth.Howe@hotmail.com',
        phone: '443.303.7642 x35034',
        city: 'Indianapolis',
      },
      {
        name: 'Walker Group',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/676.jpg',
        address: '715 Lizeth Villages',
        state: 'OR',
        zipcode: '96961',
        speciality: 'Rubber',
        email: 'Aaron.OHara56@hotmail.com',
        phone: '1-592-532-5072 x12410',
        city: 'Beaverton',
      },
      {
        name: 'Zieme, Schroeder and Feil',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
        address: '29629 Darion Rest',
        state: 'CO',
        zipcode: '83145',
        speciality: 'Cotton',
        email: 'Susana_Brakus66@hotmail.com',
        phone: '(235) 907-2573 x131',
        city: 'Pleasanton',
      },
      {
        name: 'Conn, Wuckert and Crooks',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/700.jpg',
        address: '51846 McKenzie River',
        state: 'IL',
        zipcode: '57771',
        speciality: 'Steel',
        email: 'Giovanni.Gaylord91@yahoo.com',
        phone: '(425) 807-3245',
        city: 'Sioux City',
      },
      {
        name: "Cronin - O'Kon",
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg',
        address: '444 Roberts Junctions',
        state: 'NE',
        zipcode: '45068',
        speciality: 'Soft',
        email: 'Murl56@gmail.com',
        phone: '1-420-305-0078',
        city: 'Waterloo',
      },
      {
        name: 'Davis Inc',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1172.jpg',
        address: '1337 Homenick Expressway',
        state: 'NM',
        zipcode: '95234-5149',
        speciality: 'Frozen',
        email: 'Nikko.Walter84@hotmail.com',
        phone: '(308) 674-4352',
        city: 'Altamonte Springs',
      },
      {
        name: 'Mann - Muller',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/31.jpg',
        address: '92669 Timmy Flats',
        state: 'AR',
        zipcode: '39117-7389',
        speciality: 'Rubber',
        email: 'Eulah.Harber@yahoo.com',
        phone: '958-228-1435',
        city: 'Lehi',
      },
      {
        name: 'Kohler, Sauer and Stokes',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/101.jpg',
        address: '108 Marks Trace',
        state: 'MA',
        zipcode: '36669-7446',
        speciality: 'Cotton',
        email: 'Karina74@yahoo.com',
        phone: '(743) 405-9234 x371',
        city: 'Lawrence',
      },
      {
        name: 'Collier - Bergnaum',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/166.jpg',
        address: '769 Gerhold Vista',
        state: 'NC',
        zipcode: '64174-8890',
        speciality: 'Wooden',
        email: 'Lexus.Frami@gmail.com',
        phone: '(491) 530-1267 x31342',
        city: 'Meridian',
      },
      {
        name: 'Ward - Grady',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg',
        address: "18161 O'Hara Run",
        state: 'TX',
        zipcode: '43036',
        speciality: 'Frozen',
        email: 'Mario_Farrell38@hotmail.com',
        phone: '574-432-6950 x08396',
        city: 'Fairfield',
      },
      {
        name: 'Ebert - Denesik',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1063.jpg',
        address: '034 Hilpert Greens',
        state: 'HI',
        zipcode: '22412-1670',
        speciality: 'Wooden',
        email: 'Daphnee73@gmail.com',
        phone: '772-874-2044 x9690',
        city: 'Guaynabo',
      },
      {
        name: 'Kuvalis - Waters',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/791.jpg',
        address: '95062 McClure Plains',
        state: 'IA',
        zipcode: '68568-5922',
        speciality: 'Steel',
        email: 'Savanah_Goyette@hotmail.com',
        phone: '(428) 485-9132',
        city: 'Garland',
      },
      {
        name: 'Shanahan and Sons',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg',
        address: '90007 Elizabeth Spring',
        state: 'VT',
        zipcode: '38550',
        speciality: 'Fresh',
        email: 'Ed.Bartoletti@hotmail.com',
        phone: '546.495.2268 x47328',
        city: 'Pine Bluff',
      },
      {
        name: 'Lueilwitz - Turner',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/670.jpg',
        address: '13663 Stracke Turnpike',
        state: 'NC',
        zipcode: '69082-3866',
        speciality: 'Metal',
        email: 'Dianna5@yahoo.com',
        phone: '294-354-0454',
        city: 'Columbia',
      },
      {
        name: 'Herman Inc',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1139.jpg',
        address: '15911 Boyer Way',
        state: 'NJ',
        zipcode: '17941-6059',
        speciality: 'Concrete',
        email: 'Eldred.Champlin@gmail.com',
        phone: '413.264.3627 x7720',
        city: 'San Mateo',
      },
      {
        name: 'Grimes, Zieme and Ernser',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg',
        address: '91546 Quitzon Canyon',
        state: 'UT',
        zipcode: '28318',
        speciality: 'Wooden',
        email: 'Susie.Murazik@yahoo.com',
        phone: '516.351.8518',
        city: 'Wellington',
      },
      {
        name: 'Conroy - Ruecker',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg',
        address: '1052 Swaniawski Drives',
        state: 'TX',
        zipcode: '33231',
        speciality: 'Cotton',
        email: 'Leonora_Macejkovic@yahoo.com',
        phone: '(329) 866-1888 x3058',
        city: 'Knoxville',
      },
      {
        name: 'Veum - Bahringer',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/248.jpg',
        address: '36057 Parker Circle',
        state: 'MA',
        zipcode: '85857-6456',
        speciality: 'Steel',
        email: 'Wayne39@gmail.com',
        phone: '(534) 707-9319 x5217',
        city: 'Hacienda Heights',
      },
      {
        name: 'Cronin and Sons',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/732.jpg',
        address: '667 Cronin Spring',
        state: 'IA',
        zipcode: '75300',
        speciality: 'Frozen',
        email: 'Alexandra96@gmail.com',
        phone: '1-705-939-7407 x54290',
        city: 'Lehigh Acres',
      },
      {
        name: 'Herman Inc',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/979.jpg',
        address: '0798 Barrows Squares',
        state: 'NY',
        zipcode: '83320',
        speciality: 'Fresh',
        email: 'Wayne.Champlin75@gmail.com',
        phone: '(420) 914-3504',
        city: 'Hillsboro',
      },
      {
        name: 'Auer, Balistreri and Johns',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1071.jpg',
        address: '794 Tomasa Way',
        state: 'LA',
        zipcode: '97591-6599',
        speciality: 'Rubber',
        email: 'Roslyn_Howe46@yahoo.com',
        phone: '592-241-9284 x32812',
        city: 'Hillsboro',
      },
      {
        name: 'McLaughlin, Becker and Brown',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg',
        address: '6632 Elnora Street',
        state: 'WY',
        zipcode: '68478-4601',
        speciality: 'Concrete',
        email: 'Monserrat42@yahoo.com',
        phone: '1-265-234-8112',
        city: 'Paramount',
      },
      {
        name: 'DuBuque, Leffler and Aufderhar',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/501.jpg',
        address: '538 Marie Isle',
        state: 'GA',
        zipcode: '91093-7369',
        speciality: 'Granite',
        email: 'Theodora.Powlowski@gmail.com',
        phone: '681.542.1779 x484',
        city: 'Pine Bluff',
      },
    ],
  });

  console.log(subcontractors);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
