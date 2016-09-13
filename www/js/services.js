angular.module('starter.services', [])
  .factory('Sessions', function () {
    var day1Sessions = [];
    var day2Sessions = [];
    var session = function (topic, speaker, venue, time) {
      this.topic = topic;
      this.speaker = speaker;
      this.venue = venue;
      this.time = time;
    };
    var favorites = [];
    // Day 1 sessions
    day1Sessions.push(new session("Registration", "", "Reception", "08:00-08:30"));
    day1Sessions.push(new session("Welcome to MODS 2016", "", "Main Hall", "08:30-08:45"));
    day1Sessions.push(new session("We are not Scientists; We are not Engineers; We are Storytellers.", "Scott Davis", "Main Hall", "08:45-09:45"));
    day1Sessions.push(new session("techDifferentiateBusiness = convergence(cloud, cognitive, mobile, userXP, iOT)", "AB Vijay Kumar", "Main Hall", "09:45-10:05"));
    day1Sessions.push(new session("Expo visit/Coffee & Refreshments", "", "", "10:05-10:30"));

    day1Sessions.push(new session("Intro to Async Programming in iOS", "Joe Keeley", "Main Hall", "10:30-11:30"));
    day1Sessions.push(new session("The Selfie Developer", "Steve Scott", "Hall A", "10:30-11:30"));
    day1Sessions.push(new session("Developing Cognitive Mobile apps using Watson", "Purushothaman Narayanan, Shubradeep Nandi", "Hall B", "10:30-11:30"));
    day1Sessions.push(new session("Making Friends with Xcode: Tips & Tricks from Beginner to Advanced", "Laura Savino", "SD Hall", "10:30-11:30"));

    day1Sessions.push(new session("Making iOS Applications Accessible", "Adrian Kosmaczewski", "Main Hall", "11:40-12:40"));
    day1Sessions.push(new session("Native iOS and Android Development in C#", "Mayur Tendulkar", "Hall A", "11:40-12:40"));
    day1Sessions.push(new session("Develop, Test, Launch and Track Usage of Mobile Apps on the Cloud", "Anirudh Baskaran", "Hall B", "11:40-12:40"));
    day1Sessions.push(new session("What IoT Means for Mobile Developers", "Rajesh Jeyapaul", "SD Hall", "11:40-12:40"));

    day1Sessions.push(new session("What's New in JavaScript (ECMAScript 6)", "Scott Davis", "Main Hall", "13:30-14:30"));
    day1Sessions.push(new session("Developing Cloud-Connected Native iOS, Android & Windows Apps in Xamarin", "Nish Anil", "Hall A", "13:30-14:30"));
    day1Sessions.push(new session("Make your iPhone See", "Joshua Smith", "Hall B", "13:30-14:30"));
    day1Sessions.push(new session("Testing in Android and Why You Should Care", "Soham Mondal", "SD Hall", "13:30-14:30"));

    day1Sessions.push(new session("Refactoring iOS Projects", "Adrian Kosmaczewski", "Main Hall", "14:40-15:40"));
    day1Sessions.push(new session("Workshop - Building Watch Faces for Android Wear", "Chirag Aggarwal", "Hall A", "14:40-18:10"));
    day1Sessions.push(new session("Extending Content Delivery Networks to Devices", "Vijay Kolli", "Hall B", "14:40-15:40"));
    day1Sessions.push(new session("Pa55W0rd5 $uck!", "Steve Scott", "SD Hall", "14:40-15:40"));

    day1Sessions.push(new session("Neural Networks on iOS", "Joshua Smith", "Main Hall", "16:00-17:00"));
    day1Sessions.push(new session("Continuous Delivery for iOS, Android & Windows Apps using Xamarin, VSTS & HockeyApp", "Nish Anil", "Hall B", "16:00-17:00"));
    day1Sessions.push(new session("Cracking the Chatbot Code", "Elvis Joel D'Souza", "SD Hall", "16:00-17:00"));

    day1Sessions.push(new session("Advanced Beginner Git", "Laura Savino", "Main Hall", "17:10-18:10"));
    day1Sessions.push(new session("Build your Own Bot to Capture VR 360 Images", "Tushar Choudhary", "Hall B", "17:10-17:40"));
    day1Sessions.push(new session("Android and File System Chemistry", "Satish Patel", "Hall B", "17:40-18:10"));
    day1Sessions.push(new session("React Native for Android", "Anirudh Sundararaman", "SD Hall", "17:10-17:40"));
    day1Sessions.push(new session("Android Open Source Libraries", "Anirudh Sundararaman", "SD Hall", "17:40-18:10"));

    // Day 2 sessions
    day2Sessions.push(new session("Registration", "", "Reception", "08:00-08:30"));
    day2Sessions.push(new session("Welcome to MODS 2016", "", "Main Hall", "08:30-08:45"));
    day2Sessions.push(new session("Being a Developer after 40", "Adrian Kosmaczewski", "Main Hall", "08:45-09:45"));
    day2Sessions.push(new session("Reading in a New Language", "Laura Savino", "Main Hall", "09:45-10:30"));
    day2Sessions.push(new session("Expo visit/Coffee & Refreshments", "", "", "10:30-10:50"));

    day2Sessions.push(new session("A Modern Mobile Web Journey: From AMP to PWA", "Paul Bakaus", "Main Hall", "10:50-11:50"));
    day2Sessions.push(new session("Introduction to the Intel® IoT Gateway", "Mohammed Iqbal Ahmed", "Hall A", "10:50-11:50"));
    day2Sessions.push(new session("Make Your Good Apps Great with MobileFirst Foundation", "Ajay Chebbi", "Hall B", "10:50-11:50"));
    day2Sessions.push(new session("Speaking To Your Phone: Beyond Siri", "Joshua Smith", "SD Hall", "10:50-11:50"));

    day2Sessions.push(new session("MEAN 2.0 Architecture", "Scott Davis", "Main Hall", "12:00-13:00"));
    day2Sessions.push(new session("Go From Idea to App Faster with Mobile Services on Bluemix", "Chethan Settipalli", "Hall A", "12:00-13:00"));
    day2Sessions.push(new session("Adding Intelligence to your Apps using Microsoft Cognitive Services", "Mayur Tendulkar", "Hall B", "12:00-13:00"));
    day2Sessions.push(new session("iOS Localization with Modern Xcode Tools", "Laura Savino", "SD Hall", "12:00-13:00"));

    day2Sessions.push(new session("MVVM-C In Practice", "Steve Scott", "Main Hall", "13:50-14:50"));
    day2Sessions.push(new session("SWIFTly, Go Cloud", "Vidyasagar Machupalli", "Hall A", "13:50-14:50"));
    day2Sessions.push(new session("Leverage Angular 2 to Build Native Android/iOS Mobile Apps with Single Code Base", "Lohith G N", "Hall B", "13:50-14:50"));
    day2Sessions.push(new session("Tools for Continuous Delivery in Android", "Leena S N", "SD Hall", "13:50-14:50"));

    day2Sessions.push(new session("Hands on with Material Design", "Scott Davis", "Main Hall", "15:00-16:00"));
    day2Sessions.push(new session("Mutative Design - User, not Users", "Faiz Malkani", "Hall A", "15:00-16:00"));
    day2Sessions.push(new session("Making Smarter Games in iOS", "Joshua Smith", "Hall B", "15:00-16:00"));
    day2Sessions.push(new session("Developing Apps for Android Auto", "Arnav Gupta", "SD Hall", "15:00-16:00"));

    day2Sessions.push(new session("Pro Storyboard Techniques", "Joe Keeley", "Main Hall", "16:10-17:10"));
    day2Sessions.push(new session("Build Kab Milega? Jenkins & Piri to Your Rescue", "Tushar Choudhary", "Hall A", "16:10-17:10"));
    day2Sessions.push(new session("May the #Perf be With You", "Prajyot Mainkar", "Hall B", "16:10-16:40"));
    day2Sessions.push(new session("Gradle on Steroids", "Chirag Aggarwal, Sumit Das", "Hall B", "16:40-17:10"));
    day2Sessions.push(new session("Rapid Mobile App Development using Ionic", "Swaminathan Vetri", "SD Hall", "16:10-17:10"));

    return {
      FirstDaySessions: function () {
        return day1Sessions;
      },
      SecondDaySessions: function () {
        return day2Sessions;
      },
      Favorites: favorites
    };
  })
  .factory('Speakers', function () {
    var speakers = [];
    var speaker = function (name, bio, photo) {
      this.name = name;
      this.bio = bio;
      this.photo = photo;
    }

    speakers.push(new speaker('Scott Davis', "A MODS Veteran, in his seventh straight appearance, Scott Davis is the founder of ThirstyHead.com, a training and consulting company that that specializes in leading-edge technology solutions like HTML 5, mobile development, Node.js, SmartTV development, web mapping, NoSQL, Groovy, and Grails. Scott co-founded the HTML5 Denver User Group in 2011.Scott has been writing about web development for over 10 years. His books include Getting Started with Grails, Groovy Recipes, GIS for Web Developers, The Google Maps API: Adding Where to Your Web Applications, and JBoss at Work. Scott is also the author of three popular article series at IBM developerWorks -- Mastering MEAN, Mastering Grails, and Practically Groovy.", "img/Scott.png"));
    speakers.push(new speaker('AB Vijay Kumar', "AB Vijay is a IBM Distinguished Engineer & CTO for MobileFirst for iOS Garage. MobileFirst for iOS Garage is the prime delivery unit for Apple+IBM partnership. He has more than 18 years experience in IBM. He is a recognised as subject matter expert for his contribution to advanced mobility in automotive, and has led several implementation engagements involving complex industry solutions. He specialises in automotive, mobility, sensor-based machine-to-machine, Internet of Things, and telematics technologies", "img/A-B-Vijay-Kumar.png"));
    speakers.push(new speaker('Adrian Kosmaczewski', "Adrian Kosmaczewski is a writer, a software developer and a teacher. He is the author of two books about mobile software development, and has shipped mobile, web and desktop apps for iOS, Android, Mac OS X, Windows and Linux since 1996. Adrian holds a Master in Information Technology from the University of Liverpool. When not coding or teaching, Adrian likes to spend time with his wife Claudia, his cat Max and his Olivetti Lettera 22 typewriter.", "img/Adrian.png"));
    speakers.push(new speaker('Laura Savino', "Laura is an iOS developer with a penchant for languages, travel, and education. She's worked on all sorts of client apps through mobile agencies, and most recently built apps to transform students' learning at Khan Academy. Twitter: @Savinola", "img/LauraSavino.png"));
    speakers.push(new speaker('Joe Keeley', "Joe Keeley is a Partner and Lead Engineer at MartianCraft. He crafts technical solutions and solves business problems — from enterprise software systems at companies including Apple, AMD, Vistar, Intelligent Electronics, and Ahold USA / Stop and Shop / MAC Risk Management; to iOS solutions for venture-funded startups and Fortune 100 companies. He is the co-author of the books \“Mastering iOS Frameworks” and \"iOS Components and Frameworks, Understanding the Advanced Features of iOS\" from Addison-Wesley. Joe organizes the Denver Cocoaheads group, and frequently presents development topics at conferences and developer meetings. He is the author of two instructional iOS development videos produced by Addison-Wesley Professional.", "img/JoeKeeley.png"));
    speakers.push(new speaker('Joshua Smith', "Josh Smith is a writer, pretend cartographer, and developer with AllTrails. He has 17 years of professional IT experience and has been a sysadmin (and still kinda is), programmer in various languages, consultant, employee and guy who makes sure the pop machine is full. He lives, works, and occasionally builds robots in Pittsburgh, PA", "img/JoshuaSmith.png"));
    speakers.push(new speaker('Steve Scott', "Steve Scott (Scotty) has been a freelance developer since 1992 although he is probably best known for being the host on a number of developer podcasts including The iDeveloper Podcast. He was also the host and creator of NSConference. He has been developer since 1987 when he started writing accounting software using COBOL on a Convergent Unix machine using vi as his IDE. (Sorry Emacs people). Since then he has worked on mainframes (ICL, DEC, &s; IBM), 16bit and 32 bit Windows, .NET and since 2007 OS X and (a little later) iOS . During his career he has learnt (and forgotten) more languages and IDEs than is possibly healthy for one lifetime", "img/SteveScott.png"));
    speakers.push(new speaker('Abhay Kumar Aggarwal', "Abhay Aggarwal is a Senior Principal Consultant at Xebia. He has over 16 years of experience in building engaging user experiences for both web & mobile. He has worked all over the world with startups and big corporations, delivering solutions for airlines, e-commerce, healthcare, financial, & publishing domains. As part of Xebia, he has built passionate teams that deliver exceptional solutions for customers through web & mobiles, and now, on embedded devices.Abhay loves evangelizing about technologies that make it possible to create & deliver interactive experiences, and is a regular speaker at Mobile Developer Summit since 2011. He is passionate about geeking in Mobile & IoT, being Agile, tinkering with code, reading & writing fiction, though not necessarily in any order", "img/AbhayKumarAggarwal.png"));
    speakers.push(new speaker('Abhishek Narain', 'Abhishek started his career with Microsoft as Technical Consultant, and recently joined back Microsoft as a Technical Evangelist, working on the all new Windows platform (Windows 8.1, Windows Phone). He has worked for Infragistics, focusing on Technical Consulting, creating Technology awareness and Evangelism among the Developers. He likes capturing people and their expressions, the beauty of the nature, and scenes that look aesthetically impeccable', 'img/AbhishekNarain.png'));
    speakers.push(new speaker('Ajay Chebbi', 'Ajay is a Senior Architect in the Cloud Division at IBM Software Labs in India where he leads the development of IBM MobileFirst Platform Foundation on IBM Bluemix. He and his team are responsible for Mobile Foundation service on Bluemix and the Windows and Xamarin Mobile development platforms. He is working on bringing cloud deployment patterns to the MobileFirst platform. He has more than 23 years of experience in Software development. He has 4 patents filed in the USPTO. Ajay is very passionate about bringing joy to developers who use the products he builds! He spends his spare time blogging, creating samples, talking at meetups and conferences and other developer forums. ', 'img/AjayChebbi.png'));
    speakers.push(new speaker('Anirudh Baskaran', 'Anirudh predominantly works with startups, helping them architect their workloads on the AWS cloud computing platform. Prior to joining Amazon, Anirudh has held senior roles in the telecom sector at Tata Communications and Sify Technologies. In a career spanning over 11 years, he has worked customers in multiple segments including MNCs, Large & Medium sized Enterprises & Startups. Anirudh earned his Bachelors in Computer Science from Madras University, and his Masters in Business Administration from T.A.Pai Management Institute Manipal.', 'img/AnirudhBaskaran.png'));
    speakers.push(new speaker('Anirudh Sundararaman', 'Anirudh has been part of the mobile development scene since 2011, since his time with WordPress on their Android app as part of the Google Summer of Code program. He has worked at Microsoft in the Visual Studio team where he also wrote a few hobby Windows Phone apps. Anirudh went on to take his mobile development hobby full-time by joining Tenmiles as a Mobile developer. He worked on a couple of Android apps and also maintained HelpStack, an open source Android & iOS library. Recently, Anirudh joined Hasura as a Senior Mobile Platform Engineer where he works on Android & iOS apps and also writes SDKs. Apart from his experienced in Android, iOS and Windows Phone, Anirudh is familiar with React Native and pursues game development as a hobby', 'img/AnirudhSundararaman.png'));
    speakers.push(new speaker('Arnav Gupta', 'A MODS alumni, Arnav teaches Android Application Development at CodingBlocks, a programming bootcamp startup. He has been a developer and device maintainer at CyanogenMod and AOKP, building latest Android images for Sony Xperia devices, and adding awesome usability features that make users fall in love. He has also been a contributor to the Dialer and Phone projects under AOSP and an Open Source community partner with Sony Mobile. Arnav was part of the team that made many contextually smart UI/UX enhacements for the Micromax Canvas A290, A310, A315 series of phones. Arnav is also an open source enthusiast with contributions to Linux, GNOME, Arduino, Android and other open source projects, and a Google Summer of Code alumnus', 'img/ArnavGupta.png'));
    speakers.push(new speaker('Chethan Settipalli', 'Chethan is a passionate mobile and cloud developer, who takes pride in building innovative apps. He currently works for IBM as a lead developer for IBM MobileFirst Platform and Cloud Services. He is credited for some of most loved features in IBM MobileFirst Platform. He is adept at building apps for all major mobile platforms. He is well-known in IBM for his off-beat and innovative solutions for everyday problems.', 'img/ChethanSettipalli.png'));
    speakers.push(new speaker('Chirag Aggarwal', 'Chirag is an Android Developer at GO-JEK India primarily working on scaling the GO-JEK Android App. He is also an Android Nanodegree Scholar and passionate about exploring what Android offers above and beyond.', 'img/Chiraq.png'));
    speakers.push(new speaker('Elvis Joel D\'Souza', 'Elvis is a chatbots enthusiast and a Product Engineer at TV search and remote startup, Sensara. He has worked on applications of search and contextual Discovery. More recently, he has been exploring how search and mobile can be leveraged to improve the TV viewing experience in your living room. Elvis holds a bachelors degree in Computer Science from PES, Bangalore.', 'img/ElvisJoelDSouza.png'));
    speakers.push(new speaker('Faiz Malkani', 'Faiz is a UI/UX Designer and Android/Web developer. He is passionate about creating memorable experiences and delightful interfaces. Faiz currently works at Fastboot Mobile, LLC and XDA-Developers, and is one of the core members of Google Developer Group Mumbai in addition to heading the city\'s UX Labs chapter. He consults with numerous startups from time to time, assisting in the improvization of their software\'s aesthetics and experience, and dabbles in personal projects, the most popular of which is "Keyline Pushing", an Android app that simplifies design testing. A Google Expert nominee, Faiz is ardent about community engagement and growth, driving him to maintain a host of open source projects and evangelize design at events across the country like Google Developer Summit, GDG DevFest, Google Design Sprints, the Prime Minister\'s Office App Contest and IIT Hackathons, among others.', 'img/FaizMalkani.png'));
    speakers.push(new speaker('Leena S N', 'Leena is Co-founder and Head of Engineering at Multunus Software. She is a pragmatic and passionate Programmer, lean thinker and XP evangelist who is hooked onto continuous delivery.', 'img/LeenaSN.png'));
    speakers.push(new speaker('Lohith G N', 'Lohith has over 15 years of Industry experience. He is a Microsoft MVP for Visual Studio Development & Technologies for 5 years in a row. In his day job he works in the capacity of Technical Evangelist for Progress Software in India. He is part of Bangalore DotNet User group. He is an author and has authored 2 books. You can know more about Lohith here: http://about.me/kashyapa. He is available on twitter as @kashyapa', 'img/LohithGN.png'));
    speakers.push(new speaker('Mayur Tendulkar', 'Mayur Tendulkar is Program Manager on Xamarin team at Microsoft India and is a proud Punekar. He proudly calls him MAD – Mobile Application Developer. Before joining Microsoft, he was awarded as Microsoft Most Valuable Professional on Windows Development and worked as Developer Evangelist with Xamarin. He is writing mobile applications since the days of Windows Mobile 5.0 and love to talk about everything mobile. You can find him talking at conferences, user group and working on his hobby apps on Git. His co-ordinates are @mayur_Tendulkar and for git: mayur-tendulkar. You can follow his thoughts on his blog: http://mayurtendulkar.com', 'img/MayurTendulkar.png'));
    speakers.push(new speaker('Mohammed Iqbal Ahmed', 'Mohammed Iqbal Ahmed is a IoT Application Engineer with Intel, He is focused on enabling partners and developers on Intel IoT eco system. He is also actively engaged in helping the startup ISV’s. He is having a 15 years of experience in developing and designing embedded products in multiple domains. Has worked on architecting the IoT solutions for transportation and security domains', 'img/MohammedIqbalAhmed.png'));
    speakers.push(new speaker('Nish Anil', 'Nish is a Senior Program Manager on the Xamarin team at Microsoft. He is a C# fanatic and has been writing softwares for web and desktop platforms for little over a decade. Since 2013, with Xamarin, he majorly focusses his time on writing iOS & Android Apps and evangelizing the joy of Mobile Dev. Working out of Bangalore, India, he\'s passionate about spreading C# and Xamarin love among .NET developers across the world. You will often find him speaking at Xamarin Evolve, Microsoft Conferences (/Build, TechEd, FutureUnleashed, etc.), and other conferences across APAC. Find him on Twitter & GitHub @nishanil', 'img/NishAnil.png'));
    speakers.push(new speaker('Paul Bakaus', 'Paul Bakaus is a Software Engineer at Google, heading up advocacy and outreach for DevTools, AMP and Games. He assists developers, designers, and filmmakers to create better, faster, more immersive and more convincing digital experiences. Prior to joining Google, he created the popular UI library jQuery UI now being used by over 14% of the popular web. Paul also created the Aves Engine, the world\'s first prototype of a fully interactive HTML5 game engine - which he ultimately sold to Zynga', 'img/PaulBakaus.png'));
    speakers.push(new speaker('Prajyot Mainkar', 'Prajyot Mainkar is director of Androcid, an app engineering company based out of Goa. He is chairperson of the Young Entrepreneurship forum at the Goa Chamber of Commerce and Industry. He has been actively involved in Google\'s developer community and has been a speaker at several international conferences such as Droidcon Greece, Android Developer Days Turkey, AppFest Bangalore and Google SEA Summit Sri Lanka. He consults for several startups worldwide', 'img/PrajyotMainkar.png'));
    speakers.push(new speaker('Rajesh Jeyapaul', 'Rajesh K Jeyapaul is a Cloud Solution Architect in the IBM EcoSystem & Developer team. He is focussed on enabling partners and developers on IBM cloud solution especially on Bluemix , IoT, Mobility and Big Data. He is also actively engaged in mentoring the vibrant startup community. He has been with IBM for 16+ years and having the industry experience for around 18 years. He started his carrier on Avionics real time simulation as a Research Fellow in India\'s Defense organization. At IBM , he has worked on various technologies involving: Java virtual machine, Operating System, Server virtualization, Cloud Management etc. He is an IBM Plateau holder with 4 patents and 3 publication. He has co-authored various technical books and is a IBM RedBooks author', 'img/RajeshJeyapaul.png'));
    speakers.push(new speaker('Satish Patel', 'Satish Patel is an Android engineer at Linaro. He has extensive experience across Open Source, Linux drivers, Android porting & internals, EMV L1, Social Network Service Framework and other cutting edge technologies in the embedded domain. He is voluntarily engaged with institutions likes CDAC, IIT Kanpur, and IEEE to provide workshops on Android related topics, including the fundamentals, application and driver development. He is also a member of IEEE, CE chapter at Bangalore. At Linaro, Satish works on Android customization/optimization. Before joining Linaro he has worked with Texas Instruments, Samsung and eInfochips', 'img/SatishPatel.png'));
    speakers.push(new speaker('Shubhradeep Nandi', 'Shubhadeep (shubhra) can connect the math and science as he codes. He is into Data Science Solutioning. He advocates startups, developers and tech enthusiasts to play with Cognitive Computing, Machine Learning, Statistical Computation and various other approaches of Data science solution building. While not working he likes to backpack and get lost in the woods.', 'img/ShubhadeepNandi.png'));
    speakers.push(new speaker('Soham Mondal', 'Soham is the founder of Triveous and the creator of the android app "Skyro Voice Recorder". The app has over 800,000 downloads and has been featured internationally on the Play store. Soham has consulted with multiple startups on Android and UX and is an organiser with Blrdroid, one of the largest Android communities in the world. He is a Google expert on UX and has spoken at various conferences and is a mentor at the Google Launchpad Accelerator.', 'img/SohamMondal.png'));
    speakers.push(new speaker('Swaminathan Vetri', 'Swaminathan is a senior engineer at Target Corporation and an India Microsoft MVP - Visual Studio and Development technologies. He has experience on developing hybrid mobile applications using Apache Cordova, Angular.js, Ionic and Bootstrap. At work, his primary focus is on designing and developing applications using Microsoft technologies. Swaminathan is an avid blogger and speaks at user group meetings', 'img/SwaminathanVetri.png'));
    speakers.push(new speaker('Tushar Choudhary', 'A MODS Alumni, Tushar is a mobile/IoT consultant with solid background in creating complex mobile applications. An Android and IoT expert, trainer and speaker Tushar loves to code against time. He is an avid hackathoner, open source contributor and conference speaker', 'img/TusharChoudhary.png'));
    speakers.push(new speaker('Vidyasagar Machupalli', 'Vidyasagar Machupalli (VMac) is a Polyglot and Pragmatic programmer, who loves technologies changing lives. He is a well-known blogger and speaker in various technical communities. He currently works for IBM as a Developer Advocate promoting the use of IBM Cloud (Bluemix) through talks, articles, blogging, user demonstrations, recorded demonstrations, and by creating sample projects. Vidyasagar is a Microsoft MVP, Intel Software Innovator and DZone MVB. He is passionate about game development and spends his free time developing games and mobile apps', 'img/VidyasagarMachupalli.png'));
    speakers.push(new speaker('Vijay Kolli', 'Vijay is Head of Mobile Strategy and Market Development, Asia Pacific and Japan (APJ) at Akamai Technologies. In this role, Vijay is responsible for establishing business relationships, working closely with mobile network operators across the region and driving Akamai’s thought leadership through out the region. Vijay has been with Akamai for over five years. Prior to this role, he built products focused on mobile experience, responsible for product management, business strategy and operations at Akamai. He has also worked at startups and established companies, including 3Com and Motorola in North America in the mobile ecosystem for the last 16 years. Vijay earned a Masters in Electrical Engineering and a Masters in Business Administration from the University of Chicago.', 'img/VijayKolli.png'));

    var speakersByName = _.sortBy(speakers, function (speaker) {
      return speaker.name;
    });

    return {
      AllSpeakers: function () {
        return speakersByName;
      },
      getSpeaker: function (name) {
        return _.find(speakersByName,['name',name]);
      }
    }
  })
  .factory('Sponsors', function () {
    var sponsors = [];
    var sponsor = function (sponsorType, sponsorNames) {
      this.sponsorType = sponsorType;
      this.sponsorNames = sponsorNames;
    }
    var platinumSponsors = [];
    platinumSponsors.push('img/IBM_Logo.jpg');
    platinumSponsors.push('img/AWSLogo.jpg');
    platinumSponsors.push('img/GoogleLogo.jpg');
    platinumSponsors.push('img/AkamaiLogo.jpg');

    var goldSponsors = [];
    goldSponsors.push('img/Intel.jpg');
    goldSponsors.push('img/MicrosoftLogo.jpg');

    var devSponsors = [];
    devSponsors.push('img/NestAway.jpg');
    devSponsors.push('img/EyeZen.jpg');
    devSponsors.push('img/ProgressLogo.jpg');
    devSponsors.push('img/MobignosisLogo.jpg');
    devSponsors.push('img/TalkativeParentsLogo.jpg');
    devSponsors.push('img/GreyNubo.jpg');

    sponsors.push(new sponsor('Platinum Sponsors', platinumSponsors));
    sponsors.push(new sponsor('Gold Sponsors', goldSponsors));
    sponsors.push(new sponsor('Developmentor Sponsors', devSponsors));

    return {
      All: sponsors
    }
  });
