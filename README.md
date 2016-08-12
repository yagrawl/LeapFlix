# LeapFlix

LeapFlix is a chrome extension that skips through the intros of episodes on Netflix.
The extension aks to be started when the show begins and a counter initiates. Then 
it scraped the URL to find what show was on and looked up the stored database to find 
the length of it's intro. After the user reached the intro, he/she is supposed to hit 
the 'Leap' button to skip the intro. The leap button basically appends the clocked 
time to the intro time and adds a parameter to the URL and refreshes the page.

Update : Netflix has updated it's procedure to store and share content and the outdated way on which this extension
         relied works no more. 

Now since the URL doesn't contain any information about the content, it's not possible to look up the proper show 
and hence this extension is outdated. 
