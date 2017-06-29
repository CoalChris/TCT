app.controller("stories", ["$scope", "$timeout", "$routeParams", "$window", function($scope, $timeout, $routeParams, $window) {
   $scope.articles = [ 
      {
         id: 11,
         title: "UPDATE 26/04/2017",
         image: "../img/maintenance.jpg",
         date: "26 April 2017",
         tag: "website",
         blurb: "Added features.",
         text: "Infinite scrolling.<br>Back to top button.<br>Social sharing buttons."
      },
      {
         id: 10,
         title: "Cherry Blossom Season Ending",
         image: "../img/sakura.jpg",
         date: "26 April 2017",
         tag: "travel",
         blurb: "The cherry blossoms attract thousands of tourists every year in Japan. It's not too late to visit yet! Find out about cherry blossom viewing now!",
         text: "Japan doesn't have a national flower, but the iconic flower would definitely be the cherry blossom, or <i>sakura</i>, due to their popularity and fame overseas. Although, some would argue that the chrysanthemum is the <a href=\"https://en.wikipedia.org/wiki/Imperial_Seal_of_Japan\" target=\"_blank\">emperor's seal</a> and should be the national flower. Regardless, it remains true that flower viewing, or <i>hanami</i>, brings flocks of both domestic and international tourists across the nation. The cherry blossom season starts in February, and sweeps across the country going north due to differing climates, and subsequently differing blooming periods. There are only two weeks left until the end of the season, and the remaining regions are Takayama and Kitakami (current), and all the way up to Sapporo (start of May).<br><br>During the season, you'll find the highest traffic in the smallest towns in Japan. This is attributed to the commercialisation of the flower viewing season, such as local festivals in towns and cities, limited seasonal goods, and an influx of media coverage. For Australian university students, the best time to visit Japan would be at the end of summer break, in February just before the semester starts. There are only a handful of blooming locations at this time, and I decided to visit Kawazu in the Shizuoka region. It's a long trek from Tokyo, and not fully covered by the <a href=\"http://www.japan-guide.com/e/e2361.html\" target=\"_blank\">JR Pass</a>, but one of the best places for viewing cherry blossoms in February. A river runs through the middle of the town, and the riverside is brimming with cherry blossom trees. Tourists travel up and down this hour-long walk, snapping beautiful shots of the flowers and river, stuffing their faces with local treats from food stalls, and stopping to pay tribute to various landmarks around Kawazu.<br><br>If you're planning on visiting Japan, early February is the perfect period for snow festivities and sports in Japan's northern region, Hokkaido, while having the option to head down to the southern regions in mid-February for flower viewing. An easy way to plan for <i>hanami</i> is to follow the <a href=\"http://www.japan-guide.com/sakura/\" target=\"_blank\">forecasted blooming season</a>."
      },
      {
         id: 9,
         title: "Nuclear Fire Instant Ramen",
         image: "../img/spicy-instant-noodles.jpg",
         date: "26 April 2017",
         tag: "food",
         blurb: "Koreans have been producing some of the hottest instant ramen every year. Earlier this year, Samyang released a new pack of hellish instant ramen supposedly twice the spiciness levels of its predecessor. How did it fare?",
         text: "Samyang released it's original Spicy Chicken Ramen back in 2016 and many of the poor souls who attempted the instant noodles gave up if they weren't used to eating spicy. Now the new Samyang 2x Spicy \"Nuclear\" Fire Chicken Ramen is out, and has been said to be the spiciest noodles in Korea. I happened upon a pack of these given to me, but you can purchase them online and at local imports stores in Australia, possibly even local Asian grocers. Deciding to try them out and test my tolerance of hot ramen, these are the results...<br><br>The cooking method is simple and similar to instant stir-fry noodles. Boil for roughly 6 minutes, drain (packaging says leave some water inside), add the included sauce, and mix well. My mother was walking pass and decided to sneak in a few strands of those hot-red noodles while I was throwing out the packaging. As someone who can't deal with spicy foods, she was chugging water down for the next minute or so. Although, she did come back for another few strands after, showing how awesome the flavour of the sauce is. Now onto my own experiences with these deathly instant noodles.<br><br>I've been gradually getting used to spicy foods. Starting at Kettle chilli chips and moving to things like Nongshim's Shin Ramyun instant ramen, traditional Chinese spicy offal soup noodles, and Sichuan chilli dishes, I thought I'd stand a decent chance against these fiery noodles. I was wrong. My confidence backfired against me. Taking my cautious first strands of the ramen noodles, I took in the spicy and salty flavours, the bouncy and chewy texture of the noodles and how it compared to other Korean instant ramen like Nongshim or Paldo. First impressions were that it was only a bit spicier than Shin Ramyun, but was easier to handle because there wasn't spicy soup running down my throat and up my sinus stimulating a cough or a sneeze. Devouring a few mouthfuls because of my premature verdict, I got half-way through before the spiciness really kicked in. Most spicy foods don't start burning until your second or third mouthful, but Samyang takes a bit more. Each bite seems to add on to the previous, and it doesn't just cap at some point, it keeps on going! I was struggling to maintain my composure when I was gasping for fresh, cool air to save me from this burning sensation. I'd been aiming to finish the pack without any drinks in one fell swoop, but by now it was unbearable and I had to get a glass of milk. After a sip of milk, I was ready to get back into the game. One small mouthful of the killer noodles and I was taking another sip of milk. Next mouthful? Two sips of milk. By the time I'd finished, I'd gone through 2 glasses of milk, a glass of water, and some apple juice. They all worked momentarily, but by the next bite the inferno in my mouth just came back even hotter than before. \"Nuclear\" is a good description of the rate at which the spiciness levels explode, but 'napalm' is the word I'd use to depict the unquenchable flames punching at my tastebuds. If you thought it was all over, you'd be in for a surprise. My tongue and lips continued to burn for the next 10 minutes or so after I'd sterilised them with milk and water. My head was still burning from the extreme spiciness and sweat dripped from my forehead. But every bite had been worth it. That sauce was the masterpiece Samyang had produced which kept the delicious salty roast chicken flavour while doubling spiciness into the very gates to hell.<br><br>I have to give it to Samyang, they have really made something special. The noodles are some of the best ones I've had, and perfect for chewy noodle lovers. However, it's the sauce which keeps you wanting more even though you can't feel your tongue or lips anymore."
      },
      {
         id: 8,
         title: "Everyday Brunch",
         image: "../img/cereal.jpg",
         date: "26 April 2017",
         tag: "food lifestyle",
         blurb: "You know how everyone always goes on and on about how amazing and fancy brunch is? Well this is how it looks for me...",
         text: "I'm not studying for any certifications. I work night shifts. It seems like I live in an entirely different world to everyone around me. So how does this affect my daily schedule?<br><br>Well it means that more often than not, I'll be staying up late after work to play games, watch anime, do some programming, or make preparations for various things coming up. The outcome? Sleeping at around 2am-3am <b>every</b> night. That also means waking up late the next morning. In fact, it means I wake up at an average time of 10:30am! I get up, I make myself presentable, it's still only been 10 minutes. I pick up my phone, okay cool a few notifications, I'll check them out - 10 minutes. Flip through a Bible passage to start the 'morning' with some spiritual growth or reflection. Add in some prayer? Easy! It's only been 15 minutes! I still have plenty of time to scroll through my Facebook news feed and laugh at some photos and videos, tag some friends in memes, and reply to all those messages I received at 8am whilst still asleep. UNSW Love Letters? Those broken hearts are singing music to my ears. Click-bait articles? Consider them read! And now it's about time to grab breakfas- WAIT IT'S NOON ALREADY?!<br><br>And thus I have my classic Nutrigrain (or Milo) cereal every day for brunch. Quite fancy, right?<br><br>Next time you see me before noon, remember how much sleep, procrastination and exquisite brunches I've sacrificed for you."
      },
      {
         id: 7,
         title: "My Big Fat Greek Dining",
         image: "../img/platia.jpg",
         date: "26 April 2017",
         tag: "food",
         blurb: "Never tried Greek? Hear about my first impressions of Greek cuisine at Platia, Top Ryde City.",
         text: "Bread and dip? Skewered meat? Yoghurt? That's all I really knew about Greek food. Taking advantage of a recent <a href=\"https://www.groupon.com.au/deals/platia-greek-taverna-1\" target=\"_blank\">Groupon deal for Platia</a>, I had a proper Greek dining experience on Sunday night. This was my very first time visiting a Greek restaurant. I had no idea what they'd serve us because the menu is set by the restaurant depending on available ingredients, but I figured it'd definitely give a taste of various Greek delectables, right?<br><br>Starting off was some pita bread with tamara, tsaziki and tirokafteri (tasted like gherkin, feta cheese and lemon juice). Pretty standard looking Greek starters, I wasn't surprised. The tamara dip was definitely my favourite of the three, with its smooth mix of salted, cured fish roe, olive oil and fresh lemon juice. Next was Greek salad, my worst nemesis, and nothing new. I decided not to eat it. The main course consisted of a huge meat and chips platter. This was what I'd been waiting for all night. Loaded with chicken and lamb souvlaki, sheftalia (onion and parsley-filled sausages), salami, pork belly pancetta, and a bed of crispy golden chips, this was a great sight for an enthusiast of all things meat and chips (fish n' chips, steak n' chips, HSP, you name it). Going through the meats, there were all kinds of textures and meaty flavours to enjoy. I've always been a sucker for souvlaki which is grilled meat on a skewer. Platia had thick, juicy, succuluent pieces of chicken and lamb on the platter, done perfectly. Pork belly pancetta added a familiar taste to the platter, with its tender pork meat and crispy pork skin reminding me of Chinese barbecue pork. The sheftalia turned out to be worse than I expected, with an unusually high ratio of onion and parsley to meat, causing the sausage to be rather crunchy than soft and juicy. The serving was quite large, and by the time I finished the last chip, I was more than happy to sit around in a food coma for the next half an hour chatting.<br><br>What did I learn from this experience? Greek cuisine is everything I expected. Bread, meat, and well the yoghurt was mixed in the tsaziki. Would I go again? I think this is the big question for most European cuisines. They use recipes evolved over the ages, they can taste amazing, they're often very refined and well-presented, but with that luxury comes a hefty price. Just as I'd rather get Domino's pizza over any other Italian restaurant, I wouldn't visit Platia normally with its $50 per person average pricing. I'd stick with my supermarket dips and locally (or home-made) flat bread. I'd consider going just for the wide range of meats available with the platter, for those interested in visiting.<br><br>Note: The Groupon deal has already sold out at time of posting."
      },
      {
         id: 6,
         title: "UPDATE 23/04/2017",
         image: "../img/maintenance.jpg",
         date: "23 April 2017",
         tag: "website",
         blurb: "Added different layouts depending on screen size.",
         text: "Navigation bar.<br>Introduction and articles.<br>Opening screen.<br>Top navigation bar for small screens.<br>Animations."
      },
      {
         id: 5,
         title: "A Silent Voice",
         image: "../img/a-silent-voice.jpg",
         date: "19 April 2017",
         tag: "anime",
         blurb: "A former delinquent and bully, a deaf girl, and the desire to make things right. The premises of the film are highly promising, but did director Naoko Yamada and Kyoto Animation's finest animation artisans deliver?",
         text: "<b>NOTE: THIS CONTAINS SOME SPOILERS</b><br><br>In the lead up to A Silent Voice's western premier, you may have heard that it was the 2016 anime film which was overshadowed by box office record breaker and current top anime (both films and series) Your Name. Seeing as it's currently ranked #14 on MyAnimeList's Top Anime chart, it's no surprise everyone has been looking forward to its premier in other countries. The film hit Sydney cinemas two weeks ago and I took the liberty of organising to visit a screening with some friends. Here are my thoughts on whether the film hit its mark or ricocheted right back.<br><br>As we find out quickly in the film and from all the promotional materials for the film's debut, the basis of the film has Ishida Shouya trying to atone for his past actions of bullying a deaf classmate, Nishimiya Shouko, in elementary school. The opening shots establish the instability Ishida is currently experiencing now in high school. He has given up on making friends because of the 'friends' who betrayed him in the past. He only wishes to repay his family for the trouble he caused as a bully, and selfishly disappear from this world he doesn't belong in. By fate, he bumps into Nishimiya again, and begins his quest of atonement. It's crucial here to understand the point A Silent Voice is making up right from the start. Bullying plagues our society, and as the film later depicts, this plague isn't limited to students, but even adults. Sometimes the bullies feel the repercussions of their actions in guilt, others don't. Here in A Silent Voice we see both, where students who didn't physically bully or did so comparably less than another student would hold a clean conscience and deny participating in these activities. A Silent Voice's stance on bullying is the most powerful message throughout the film and resonates in viewers.<br><br>As the plot unravels, Ishida and Nishimiya continue to understand more about friendship and love. They slowly begin to overcome their struggles and come to face their elementary school classmates and each other head on. Ishida's goal is to reunite them all and create the friendships they never had with Nishimiya. However, as they find out, not everyone is accepting of these ideals. In particular, Ueno never acknowledges a friendship with Nishimiya and instead ridicules her very existence which caused everything to fall apart in elementary school. While this could be interpreted as a continuation of the bullying in the past, or a stubbornness and hatred against Nishimiya even after acknowledging the severity of Ueno's past actions, it serves a greater purpose in Nishimiya's character development. While Ishida and Nishimiya continue to grow closer and rely on each other, Ueno's accusations continue to sink deeper into Nishimiya's mind. She is unable to love herself anymore because of the repercussions of her existence on Ishida and company's lives in elementary school. We watch as the drama of both the protagonist and heroine stretch them to their limits. We laugh with them in their happy times together, we cry for them as they're separated from their friends once again. This film is honestly a rollercoaster ride through every emotion for viewers. The last sprint of the film sees the climax and friendship the main 'couple' have, and what love is capable of.<br><br>Notice how I have been focusing almost entirely on the protagonist and heroine. That is because the director has chosen to remove all back-story from supporting characters during adaption from the manga source, with the exception of what we know from past events in elementary school, and Nishimiya's sister who seems to be the only developed support character. I have been told the manga helps to understand these supporting characters, but from the perspective of someone who simply watched the film, it felt like most of these characters didn't have particular significance. Some appeared once or twice, others throughout the entire duration of the film, but none were properly developed and often the viewer would be confused as to what was happening. For myself, I couldn't help but laugh at the unpredictable and ridiculous actions of these supporting characters. The lack of development here is definitely the bane of A Silent Voice, and what ruined the film for me during the screening.<br><br>Looking at the art style and music, Kyoto Animation has managed to pull off another masterpiece. The art is reminiscient of other Kyoto Animation titles such as K-On! and Tamako Love Story. The background music and sound effects capture the emotions of every scene and deliver it to the audience, heightening the experience and forcing viewers into the shoes of characters. You will notice that Naoko often uses silence or ambient sounds to emphasise character emotions, along with the theme of sign language to communicate through visuals rather than scripted lines. The ending theme, 'Koi wo Shita no wa' sung by aiko, beautifully finishes the tale of adolescent love, friendships and self-worth.<br><br>A Silent Voice is definitely a film with outstanding qualities in most individual aspects. A brilliant blend of deep, real and relatable themes, a protagonist and heroine which strikes us with their development, and brought alive through Naoko's directing and the film's illustrators, animators, sound engineers and musicians. However, I was unable to accept the film for what it is due to the worst support characters in anime film history. By all means watch the film, but expect to be frustrated every time a support character appears on screen."
      },
      {
         id: 4,
         title: "Meet the Halal Snack Pack",
         image: "../img/hsp.jpg",
         date: "18 April 2017",
         tag: "food",
         blurb: "The Halal Snack Pack (otherwise known as the HSP) is one of Australia's greatest food inventions. Taking off in a crazy hype in 2015, the infamous box of Middle-Eastern cuisine mixed with good ol' chips can now be found in just about every local kebab shop across all major cities. You'll want to know what you're looking for before heading out in search of some 'snackies' though!",
         text: "Finding a kebab shop in Sydney isn't too hard. Sydney CBD, Northern Suburbs, North Shore, Inner West, nearly every suburb has a local Mecca serving you piping hot kebabs now. Are Halal Snack Packs any different?<br><br>It turns out that most joints don't make the cut. Using a variety of measurements, Aussies in the <a href=\"https://www.facebook.com/groups/HalalSnackPackAppreciationSociety/\" target=\"_blank\">Halal Snack Pack Appreciation Society</a>, the biggest Facebook group and what started this new HSP movement, have managed to rank HSP-serving shops and weed out those who can't keep up with competition. These measurements include the shop owner's greeting, shop display, halal certification, pricing, HSP packaging, meat quality, chips quality, and finally the choice of sauces, with the 'Holy Trinity' (Chilli, BBQ, Garlic) being the standard choice for HSP fans. Highly rated snack packs are referred to as 'halal' snack packs, whereas low-scoring snack packs will be deemed 'haram'. It's not surprising that individuals who choose to eat the worst snack packs, especially those who choose tomato sauce or add salad, are branded as 'haram dingoes'. A list of the best kebab shops across Australia can be found on the HSP Appreciation Society page.<br><br>Today I visited the esteemed Metro One Kebab, Pizza & Pide in Ashfield, Sydney. It'd been half a year since my last snack pack and I'd been keen for another artery-clogging experience of juicy doner kebab meat and freshly fried hot chips. Together with 5 friends, we entered the open store front to be greeted with a 'What can I get for you?' while gazing at the lit up boards and neon signs reassuring us of the halal certified meat. HSP usually come in a variety of sizes where single person servings come in takeaway styrofoam boxes. A regular is enough for your average bloke and costs about AUD$10 in most places. A large is more than what you'd want and sets you back another $3 or so. Additional cheese? Go for it, another dollar or two. We decided instead to tackle the $55 large 15\" pizza box HSP (refer to the photo above) with cheese and mixed meat, approximately the size of four large HSP. It came with a free 1.25L bottle of soft drink. It was the 6 of us versus the equivalent of 4 large HSP, we figured this way we had the option of going home full instead of sprawled on the ground gasping for breath after a deathly amount of meat, chips and sauce. The meat was about the same as most places (saturated and delicious), but the chips were only slightly crunchy. Crunchy chips are what set apart the best HSP from the mediocre ones. For reference, I think the #1 kebab shop nearby in Campbelltown, King Kebab House, is the only place with golden crunchy chips. The top was lathered with the 'Holy Trinity', finishing the masterpiece of a HSP. All in all, it was a fairly good HSP and great value feed, but it just left me craving for the king in Campbelltown.<br><br>Interestingly enough, NSW Senator Sam Dastyari, known for his comical interactions with One Nation Party's founder and leader Pauline Hanson, was filming some footage on food and multiculturalism in Metro One. I definitely didn't let this opportunity slip away and decided to sneak some hilarious poses in, show off my swag and photo-bombing skills. Sam actually came around and interviewed a few of the tables, including us, and I'm waiting eagerly to see the video uploaded online.<br><br>If you're looking for reliable snack packs, I would definitely stop by each of the HSP Appreciation Society recommendations. Although, any nearby kebab shop should suffice if you don't care about soggy chips. Good luck hunting for the best HSP!"
      },
      {
         id: 3,
         title: "Meaning Behind Easter",
         image: "../img/easter.jpg",
         date: "16 April 2017",
         tag: "religion",
         blurb: "Easter is a time of celebration all across the globe. This festive season is represented by delicious chocolate eggs and bunnies, but what's the back story behind this annual event?",
         text: "The Easter bunny and colourful eggs are familiar to all of us, and they're the focus of Easter in the consumer world. Many people understand Easter is somehow related to a man called Jesus, but aren't sure about the specifics. There is indeed a very deep and complex history behind Easter and various reasons for people celebrating Easter today.<br><br>Some evidence suggests that the word 'Easter' might be taken from the German folklore goddess of spring, Eostre, or the German word for Easter, Ostern, which means 'East'. The bunny, or hare, is a symbol of fertility because of their ability to quickly multiply. The egg is a sign of birth and life. These three things don't seem to be related, but were commonly celebrated in spring fertility rituals during the days of the ancient Roman Catholic Church. Christians celebrate the resurrection of Jesus Christ on the Sunday, and in order to make this celebration more attractive to non-Christians, the Roman Catholic Church decided to adopt Easter as the celebratory day of Christ rising back to life. We see now that Easter's origins have nothing to do with Jesus, but both Christians and non-Christians hold celebrations at the same time of the year!<br><br>Knowing the origins of Easter, should Christians be celebrating Easter? Is it okay to stuff our faces with chocolate? By all means enjoy a bunny (or two), but remember that the true reason that Christians hold celebrations is to express their joy at Jesus Christ' resurrection and the completion of God's plan. Although, this should be on our minds every day, not just during Easter.<br><br><a href=\"http://www.desiringgodchurch.org/web/2009/04/09/why-did-jesus-have-to-die/\" target=\"_blank\">If you are wondering why Jesus needed to die and resurrect, this article explains it in an easily understandable way.</a>"
      },
      {
         id: 2,
         title: "UPDATE 12/04/2017",
         image: "../img/maintenance.jpg",
         date: "12 April 2017",
         tag: "website",
         blurb: "Changed design and added functionality to website.",
         text: "Set homepage image to span height.<br>Added 'Read More' button.<br>Added capacity to include links and media in article text.<br>Added navigation bar.<br>Fixed icons.<br>Moved dynamic content animations to AngularJS module."
      },
      {
         id: 1,
         title: "SETTING UP HOME",
         image: "../img/home.png",
         date: "6 April 2017",
         tag: "website",
         blurb: "The foundations of this website have begun development! Yay!",
         text: "Constructed from another conceptual webpage <a href=\"old.html\" target=\"_blank\">found here</a>."
      }
   ];

   $scope.type = "all";
   $scope.numArticles = 11;
   $scope.maxResults = 5;

   $scope.filterType = function(story) {
      //$window.document.title = "The Chris Times";
      $scope.$parent.seo = {
         pageUrl: "https://thechristimes.herokuapp.com/",
         pageType: "website",
         pageTitle: "The Chris Times",
         pageDescription: "A glimpse into the life of Coal Chris",
         pageImage: "img/profile.jpg"
      };
      if ($scope.type == "all") {
         return true;
      } else {
         if (story.tag.indexOf($scope.type) !== -1) {
            return true;
         }
      }
      return false;
   }

   $scope.filterId = function(story) {
      if (story.id == $routeParams.id) {
         //$window.document.title = story.title;
         $scope.$parent.seo = {
            pageUrl: "https://thechristimes.herokuapp.com/posts/" + story.id, 
            pageType: "article",
            pageTitle: story.title,
            pageDescription: story.blurb,
            pageImage: story.image
         };
         return true;
      } else {
         return false;
      }
   }

   $scope.filter = function(value) {
      if (value != 'more') {
         $scope.type = value;
      }
      $timeout(function () {
         $scope.$apply();
      }, 300);
   }

   $scope.loadMore = function() {
      $scope.maxResults += 5;
      $timeout(function () {
         $scope.$apply();
      }, 300);
   }

   $scope.isActive = false;
   $scope.activate = function() {
      $scope.isActive = !$scope.isActive;
   }
}]);