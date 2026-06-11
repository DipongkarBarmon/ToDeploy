##  npm init 
npm init ব্যবহার করা হয় একটি Node.js project initialize করার জন্য।
এটি চালালে একটি package.json ফাইল তৈরি হয়, যেখানে project-এর metadata এবং dependencies সংরক্ষণ করা হয়।

Why use npm init?
1. Project Information Store করতে

         {
           "name": "my-app",
           "version": "1.0.0"
         }


2. Dependencies Track করতে
 
        {
       "dependencies": {
       "express": "^5.1.0"
          }
        }

3. Scripts Define করতে

         {
          "scripts": {
          "start": "node index.js",
          "dev": "nodemon index.js"
            }
        } 

4. Project Share করতে
    অন্য কেউ শুধু:

        npm install

    চালিয়ে package.json দেখে সব dependency install করতে পারবে।


### npm init -y

সব প্রশ্ন skip করে default package.json তৈরি করে:

     npm init -y

এটি সবচেয়ে বেশি ব্যবহার করা হয়।


## npm i -D typescript 

ব্যবহার করা হয় TypeScript compiler project-এ যোগ করার জন্য।

      npm i = install package

      typescript = TypeScript compiler (tsc)
      -D = --save-dev (development dependency)

#কেন devDependency?

TypeScript শুধুমাত্র development-এর সময় লাগে:
a.Type checking

b.Compile করা

c.Error detect করা

Production-এ Node.js শুধু JavaScript চালায়, TypeScript package লাগে না।

সংক্ষেপে

npm i -D typescript ব্যবহার করা হয়:

TypeScript compiler (tsc) install করতে
Type checking করতে
.ts → .js compile করতে
Development dependency হিসেবে project-এ যোগ করতে।


## npx tsc --init

tsc --init কী করে?

এটি project-এর জন্য একটি tsconfig.json file তৈরি করে।
কেন tsconfig.json দরকার?

TypeScript compiler (tsc) কে বলে:

a.কোন JavaScript version target করবে (target)
b.কোন module system ব্যবহার করবে (module)
c.Strict type checking করবে কিনা (strict)
d.Output কোথায় যাবে (outDir)
e.Source code কোথায় আছে (rootDir)

## npm install -D @types/node

এটি Node.js-এর TypeScript type definitions install করে।
 
কেন দরকার?

TypeScript Node.js-এর built-in API (fs, path, process, __dirname, etc.) সম্পর্কে ডিফল্টভাবে জানে না।

উদাহরণ:

    console.log(process.version);

@types/node install না থাকলে TypeScript error দিতে পারে:

     Cannot find name 'process'

@types/node কী দেয়?

Node.js-এর built-in modules-এর type information দেয়:

      import fs from 'fs';
      import path from 'path';

      const data: Buffer = fs.readFileSync('file.txt');
      console.log(path.basename('a/b/c.txt'));

TypeScript এখন জানে:

a.fs.readFileSync() কী return করে
b.path.basename() কী parameter নেয়
c.process, Buffer, setTimeout ইত্যাদির types কী


Then work in project

in package.json

    type :'moudle'

conment out: incompilor option src built

      module : nodenext 
      type : node


create in folder src in root directory
then create server.ts in src folder

     npm i tsx //TypeScript Execute (tsx): The easiest way to run TypeScript in Node.js

then add in package.json file

        "dev": "tsx watch ./src/server.ts",

## express

        npm install express --save 
        npm i --save-dev @types/express

## dotenv form env file
       
       npm i dotenv

## to connect postgres 

      npm install pg 
      npm i --save-dev @types/pg

## for password hashing
      
      npm i bcrypt
      npm i --save-dev @types/bcrypt

## for jwt authentication
      
      npm i jsonwebtoken
      npm i --save-dev @types/jsonwebtoken



# To deploy
 
 in package.json file inter scripts

      "start": "node dist/server.js",
      "dev": "tsx watch ./src/server.ts",
      "build": "tsc",

then run 
    
     npm run build

deploy in vercel
     
       npm i -g vercel
       vercel login
       vercel --prod
