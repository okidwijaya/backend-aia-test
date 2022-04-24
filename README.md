# AIA Backend
Test project based on [AIA] using flickr API

## Deployment


## Documentation

API documentation:<br/>
1. Feed API:<br/>
`GET /`
example: `GET /` will get public Flickr feed images<br/>
based on `https://api.flickr.com/services/feeds/photos_public.gne?format=json` API

2. Search API:<br/>
`GET /[keyword]/[image number per page]/[page]`<br/>
example: `GET /${text}/${displayData}/${page}` example get url/mountain/5/1<br/>
based on `https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search` API

3. Show Image Details:<br/>
example from feed URL link following response : `https://www.flickr.com/photos/${owner}/${id}/`,

example from search URL link: `https://www.flickr.com/photos/${owner}/${id}/`,

## Related ( Frontend )


