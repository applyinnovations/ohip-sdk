# ImageUploadType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the image. | [optional] 
**FileExtension** | Pointer to **string** | File extension of the Image, e.g. JPG, PNG, BMP, etc. | [optional] 
**Image** | Pointer to **string** | Image file to upload. | [optional] 
**ImageCode** | Pointer to [**ImageCodeType**](ImageCodeType.md) |  | [optional] 
**ImageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ImageParameters** | Pointer to [**[]ImageParameterType**](ImageParameterType.md) | Collection of image parameters code / value pairs. | [optional] 
**ImageStyle** | Pointer to [**ImageStyleType**](ImageStyleType.md) |  | [optional] 
**LanguageCode** | Pointer to **string** |  | [optional] 
**LinkId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewImageUploadType

`func NewImageUploadType() *ImageUploadType`

NewImageUploadType instantiates a new ImageUploadType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImageUploadTypeWithDefaults

`func NewImageUploadTypeWithDefaults() *ImageUploadType`

NewImageUploadTypeWithDefaults instantiates a new ImageUploadType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ImageUploadType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ImageUploadType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ImageUploadType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ImageUploadType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFileExtension

`func (o *ImageUploadType) GetFileExtension() string`

GetFileExtension returns the FileExtension field if non-nil, zero value otherwise.

### GetFileExtensionOk

`func (o *ImageUploadType) GetFileExtensionOk() (*string, bool)`

GetFileExtensionOk returns a tuple with the FileExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExtension

`func (o *ImageUploadType) SetFileExtension(v string)`

SetFileExtension sets FileExtension field to given value.

### HasFileExtension

`func (o *ImageUploadType) HasFileExtension() bool`

HasFileExtension returns a boolean if a field has been set.

### GetImage

`func (o *ImageUploadType) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *ImageUploadType) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *ImageUploadType) SetImage(v string)`

SetImage sets Image field to given value.

### HasImage

`func (o *ImageUploadType) HasImage() bool`

HasImage returns a boolean if a field has been set.

### GetImageCode

`func (o *ImageUploadType) GetImageCode() ImageCodeType`

GetImageCode returns the ImageCode field if non-nil, zero value otherwise.

### GetImageCodeOk

`func (o *ImageUploadType) GetImageCodeOk() (*ImageCodeType, bool)`

GetImageCodeOk returns a tuple with the ImageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageCode

`func (o *ImageUploadType) SetImageCode(v ImageCodeType)`

SetImageCode sets ImageCode field to given value.

### HasImageCode

`func (o *ImageUploadType) HasImageCode() bool`

HasImageCode returns a boolean if a field has been set.

### GetImageId

`func (o *ImageUploadType) GetImageId() UniqueIDType`

GetImageId returns the ImageId field if non-nil, zero value otherwise.

### GetImageIdOk

`func (o *ImageUploadType) GetImageIdOk() (*UniqueIDType, bool)`

GetImageIdOk returns a tuple with the ImageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageId

`func (o *ImageUploadType) SetImageId(v UniqueIDType)`

SetImageId sets ImageId field to given value.

### HasImageId

`func (o *ImageUploadType) HasImageId() bool`

HasImageId returns a boolean if a field has been set.

### GetImageParameters

`func (o *ImageUploadType) GetImageParameters() []ImageParameterType`

GetImageParameters returns the ImageParameters field if non-nil, zero value otherwise.

### GetImageParametersOk

`func (o *ImageUploadType) GetImageParametersOk() (*[]ImageParameterType, bool)`

GetImageParametersOk returns a tuple with the ImageParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageParameters

`func (o *ImageUploadType) SetImageParameters(v []ImageParameterType)`

SetImageParameters sets ImageParameters field to given value.

### HasImageParameters

`func (o *ImageUploadType) HasImageParameters() bool`

HasImageParameters returns a boolean if a field has been set.

### GetImageStyle

`func (o *ImageUploadType) GetImageStyle() ImageStyleType`

GetImageStyle returns the ImageStyle field if non-nil, zero value otherwise.

### GetImageStyleOk

`func (o *ImageUploadType) GetImageStyleOk() (*ImageStyleType, bool)`

GetImageStyleOk returns a tuple with the ImageStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageStyle

`func (o *ImageUploadType) SetImageStyle(v ImageStyleType)`

SetImageStyle sets ImageStyle field to given value.

### HasImageStyle

`func (o *ImageUploadType) HasImageStyle() bool`

HasImageStyle returns a boolean if a field has been set.

### GetLanguageCode

`func (o *ImageUploadType) GetLanguageCode() string`

GetLanguageCode returns the LanguageCode field if non-nil, zero value otherwise.

### GetLanguageCodeOk

`func (o *ImageUploadType) GetLanguageCodeOk() (*string, bool)`

GetLanguageCodeOk returns a tuple with the LanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguageCode

`func (o *ImageUploadType) SetLanguageCode(v string)`

SetLanguageCode sets LanguageCode field to given value.

### HasLanguageCode

`func (o *ImageUploadType) HasLanguageCode() bool`

HasLanguageCode returns a boolean if a field has been set.

### GetLinkId

`func (o *ImageUploadType) GetLinkId() UniqueIDType`

GetLinkId returns the LinkId field if non-nil, zero value otherwise.

### GetLinkIdOk

`func (o *ImageUploadType) GetLinkIdOk() (*UniqueIDType, bool)`

GetLinkIdOk returns a tuple with the LinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkId

`func (o *ImageUploadType) SetLinkId(v UniqueIDType)`

SetLinkId sets LinkId field to given value.

### HasLinkId

`func (o *ImageUploadType) HasLinkId() bool`

HasLinkId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


