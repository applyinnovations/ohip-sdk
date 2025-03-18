# ImageResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImageSet** | Pointer to **string** | Image set describing path of image. | [optional] 
**MimeType** | Pointer to **string** | Mime type of the Image. | [optional] 
**Image** | Pointer to **string** | Image file to upload. | [optional] 
**ImageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**LinkId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ImageLinkId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Base64Image** | Pointer to **string** | Base64Image image content of the file. | [optional] 

## Methods

### NewImageResultType

`func NewImageResultType() *ImageResultType`

NewImageResultType instantiates a new ImageResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImageResultTypeWithDefaults

`func NewImageResultTypeWithDefaults() *ImageResultType`

NewImageResultTypeWithDefaults instantiates a new ImageResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImageSet

`func (o *ImageResultType) GetImageSet() string`

GetImageSet returns the ImageSet field if non-nil, zero value otherwise.

### GetImageSetOk

`func (o *ImageResultType) GetImageSetOk() (*string, bool)`

GetImageSetOk returns a tuple with the ImageSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageSet

`func (o *ImageResultType) SetImageSet(v string)`

SetImageSet sets ImageSet field to given value.

### HasImageSet

`func (o *ImageResultType) HasImageSet() bool`

HasImageSet returns a boolean if a field has been set.

### GetMimeType

`func (o *ImageResultType) GetMimeType() string`

GetMimeType returns the MimeType field if non-nil, zero value otherwise.

### GetMimeTypeOk

`func (o *ImageResultType) GetMimeTypeOk() (*string, bool)`

GetMimeTypeOk returns a tuple with the MimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMimeType

`func (o *ImageResultType) SetMimeType(v string)`

SetMimeType sets MimeType field to given value.

### HasMimeType

`func (o *ImageResultType) HasMimeType() bool`

HasMimeType returns a boolean if a field has been set.

### GetImage

`func (o *ImageResultType) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *ImageResultType) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *ImageResultType) SetImage(v string)`

SetImage sets Image field to given value.

### HasImage

`func (o *ImageResultType) HasImage() bool`

HasImage returns a boolean if a field has been set.

### GetImageId

`func (o *ImageResultType) GetImageId() UniqueIDType`

GetImageId returns the ImageId field if non-nil, zero value otherwise.

### GetImageIdOk

`func (o *ImageResultType) GetImageIdOk() (*UniqueIDType, bool)`

GetImageIdOk returns a tuple with the ImageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageId

`func (o *ImageResultType) SetImageId(v UniqueIDType)`

SetImageId sets ImageId field to given value.

### HasImageId

`func (o *ImageResultType) HasImageId() bool`

HasImageId returns a boolean if a field has been set.

### GetLinkId

`func (o *ImageResultType) GetLinkId() UniqueIDType`

GetLinkId returns the LinkId field if non-nil, zero value otherwise.

### GetLinkIdOk

`func (o *ImageResultType) GetLinkIdOk() (*UniqueIDType, bool)`

GetLinkIdOk returns a tuple with the LinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkId

`func (o *ImageResultType) SetLinkId(v UniqueIDType)`

SetLinkId sets LinkId field to given value.

### HasLinkId

`func (o *ImageResultType) HasLinkId() bool`

HasLinkId returns a boolean if a field has been set.

### GetImageLinkId

`func (o *ImageResultType) GetImageLinkId() UniqueIDType`

GetImageLinkId returns the ImageLinkId field if non-nil, zero value otherwise.

### GetImageLinkIdOk

`func (o *ImageResultType) GetImageLinkIdOk() (*UniqueIDType, bool)`

GetImageLinkIdOk returns a tuple with the ImageLinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageLinkId

`func (o *ImageResultType) SetImageLinkId(v UniqueIDType)`

SetImageLinkId sets ImageLinkId field to given value.

### HasImageLinkId

`func (o *ImageResultType) HasImageLinkId() bool`

HasImageLinkId returns a boolean if a field has been set.

### GetBase64Image

`func (o *ImageResultType) GetBase64Image() string`

GetBase64Image returns the Base64Image field if non-nil, zero value otherwise.

### GetBase64ImageOk

`func (o *ImageResultType) GetBase64ImageOk() (*string, bool)`

GetBase64ImageOk returns a tuple with the Base64Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBase64Image

`func (o *ImageResultType) SetBase64Image(v string)`

SetBase64Image sets Base64Image field to given value.

### HasBase64Image

`func (o *ImageResultType) HasBase64Image() bool`

HasBase64Image returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


