# ImageSetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Language** | Pointer to **string** | Language identification. | [optional] 
**ImageSet** | Pointer to **string** | The image set name. | [optional] 
**SequenceId** | Pointer to **int32** | The image set sequence ID. | [optional] 
**ImageStyle** | Pointer to [**ImageStyleType**](ImageStyleType.md) |  | [optional] 
**ImageType** | Pointer to **string** | The image set type. | [optional] 
**HotelId** | Pointer to **string** | The image set hotel code. | [optional] 
**ChainCode** | Pointer to **string** | The image set chain code. | [optional] 
**ImageURL** | Pointer to **string** | The image set URL. | [optional] 
**Description** | Pointer to **string** | The image set description. | [optional] 
**ImageOrder** | Pointer to **int32** | The image set order. | [optional] 
**Website** | Pointer to **string** | The image set website. | [optional] 

## Methods

### NewImageSetType

`func NewImageSetType() *ImageSetType`

NewImageSetType instantiates a new ImageSetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImageSetTypeWithDefaults

`func NewImageSetTypeWithDefaults() *ImageSetType`

NewImageSetTypeWithDefaults instantiates a new ImageSetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLanguage

`func (o *ImageSetType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ImageSetType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ImageSetType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ImageSetType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetImageSet

`func (o *ImageSetType) GetImageSet() string`

GetImageSet returns the ImageSet field if non-nil, zero value otherwise.

### GetImageSetOk

`func (o *ImageSetType) GetImageSetOk() (*string, bool)`

GetImageSetOk returns a tuple with the ImageSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageSet

`func (o *ImageSetType) SetImageSet(v string)`

SetImageSet sets ImageSet field to given value.

### HasImageSet

`func (o *ImageSetType) HasImageSet() bool`

HasImageSet returns a boolean if a field has been set.

### GetSequenceId

`func (o *ImageSetType) GetSequenceId() int32`

GetSequenceId returns the SequenceId field if non-nil, zero value otherwise.

### GetSequenceIdOk

`func (o *ImageSetType) GetSequenceIdOk() (*int32, bool)`

GetSequenceIdOk returns a tuple with the SequenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequenceId

`func (o *ImageSetType) SetSequenceId(v int32)`

SetSequenceId sets SequenceId field to given value.

### HasSequenceId

`func (o *ImageSetType) HasSequenceId() bool`

HasSequenceId returns a boolean if a field has been set.

### GetImageStyle

`func (o *ImageSetType) GetImageStyle() ImageStyleType`

GetImageStyle returns the ImageStyle field if non-nil, zero value otherwise.

### GetImageStyleOk

`func (o *ImageSetType) GetImageStyleOk() (*ImageStyleType, bool)`

GetImageStyleOk returns a tuple with the ImageStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageStyle

`func (o *ImageSetType) SetImageStyle(v ImageStyleType)`

SetImageStyle sets ImageStyle field to given value.

### HasImageStyle

`func (o *ImageSetType) HasImageStyle() bool`

HasImageStyle returns a boolean if a field has been set.

### GetImageType

`func (o *ImageSetType) GetImageType() string`

GetImageType returns the ImageType field if non-nil, zero value otherwise.

### GetImageTypeOk

`func (o *ImageSetType) GetImageTypeOk() (*string, bool)`

GetImageTypeOk returns a tuple with the ImageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageType

`func (o *ImageSetType) SetImageType(v string)`

SetImageType sets ImageType field to given value.

### HasImageType

`func (o *ImageSetType) HasImageType() bool`

HasImageType returns a boolean if a field has been set.

### GetHotelId

`func (o *ImageSetType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ImageSetType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ImageSetType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ImageSetType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetChainCode

`func (o *ImageSetType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *ImageSetType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *ImageSetType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *ImageSetType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetImageURL

`func (o *ImageSetType) GetImageURL() string`

GetImageURL returns the ImageURL field if non-nil, zero value otherwise.

### GetImageURLOk

`func (o *ImageSetType) GetImageURLOk() (*string, bool)`

GetImageURLOk returns a tuple with the ImageURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageURL

`func (o *ImageSetType) SetImageURL(v string)`

SetImageURL sets ImageURL field to given value.

### HasImageURL

`func (o *ImageSetType) HasImageURL() bool`

HasImageURL returns a boolean if a field has been set.

### GetDescription

`func (o *ImageSetType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ImageSetType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ImageSetType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ImageSetType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetImageOrder

`func (o *ImageSetType) GetImageOrder() int32`

GetImageOrder returns the ImageOrder field if non-nil, zero value otherwise.

### GetImageOrderOk

`func (o *ImageSetType) GetImageOrderOk() (*int32, bool)`

GetImageOrderOk returns a tuple with the ImageOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageOrder

`func (o *ImageSetType) SetImageOrder(v int32)`

SetImageOrder sets ImageOrder field to given value.

### HasImageOrder

`func (o *ImageSetType) HasImageOrder() bool`

HasImageOrder returns a boolean if a field has been set.

### GetWebsite

`func (o *ImageSetType) GetWebsite() string`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *ImageSetType) GetWebsiteOk() (*string, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *ImageSetType) SetWebsite(v string)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *ImageSetType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


