# HotelAttractionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Class** | Pointer to **string** | The class of the attraction. | [optional] 
**Code** | Pointer to **string** |  | [optional] 
**DisplaySeq** | Pointer to **int32** | Display sequence of the attraction. | [optional] 
**GeneralDirections** | Pointer to **string** | Directions to the attraction from the hotel. | [optional] 
**Name** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**OperationHours** | Pointer to **string** | Price range for the attraction. | [optional] 
**PriceRange** | Pointer to **string** | Price range for the attraction. | [optional] 
**RelativePosition** | Pointer to [**RelativePositionType**](RelativePositionType.md) |  | [optional] 
**Type** | Pointer to **string** | The type of the attraction. | [optional] 
**Website** | Pointer to [**URLType**](URLType.md) |  | [optional] 

## Methods

### NewHotelAttractionType

`func NewHotelAttractionType() *HotelAttractionType`

NewHotelAttractionType instantiates a new HotelAttractionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelAttractionTypeWithDefaults

`func NewHotelAttractionTypeWithDefaults() *HotelAttractionType`

NewHotelAttractionTypeWithDefaults instantiates a new HotelAttractionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *HotelAttractionType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *HotelAttractionType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *HotelAttractionType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *HotelAttractionType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetClass

`func (o *HotelAttractionType) GetClass() string`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *HotelAttractionType) GetClassOk() (*string, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *HotelAttractionType) SetClass(v string)`

SetClass sets Class field to given value.

### HasClass

`func (o *HotelAttractionType) HasClass() bool`

HasClass returns a boolean if a field has been set.

### GetCode

`func (o *HotelAttractionType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelAttractionType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelAttractionType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelAttractionType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDisplaySeq

`func (o *HotelAttractionType) GetDisplaySeq() int32`

GetDisplaySeq returns the DisplaySeq field if non-nil, zero value otherwise.

### GetDisplaySeqOk

`func (o *HotelAttractionType) GetDisplaySeqOk() (*int32, bool)`

GetDisplaySeqOk returns a tuple with the DisplaySeq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySeq

`func (o *HotelAttractionType) SetDisplaySeq(v int32)`

SetDisplaySeq sets DisplaySeq field to given value.

### HasDisplaySeq

`func (o *HotelAttractionType) HasDisplaySeq() bool`

HasDisplaySeq returns a boolean if a field has been set.

### GetGeneralDirections

`func (o *HotelAttractionType) GetGeneralDirections() string`

GetGeneralDirections returns the GeneralDirections field if non-nil, zero value otherwise.

### GetGeneralDirectionsOk

`func (o *HotelAttractionType) GetGeneralDirectionsOk() (*string, bool)`

GetGeneralDirectionsOk returns a tuple with the GeneralDirections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralDirections

`func (o *HotelAttractionType) SetGeneralDirections(v string)`

SetGeneralDirections sets GeneralDirections field to given value.

### HasGeneralDirections

`func (o *HotelAttractionType) HasGeneralDirections() bool`

HasGeneralDirections returns a boolean if a field has been set.

### GetName

`func (o *HotelAttractionType) GetName() TranslationTextType2000`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *HotelAttractionType) GetNameOk() (*TranslationTextType2000, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *HotelAttractionType) SetName(v TranslationTextType2000)`

SetName sets Name field to given value.

### HasName

`func (o *HotelAttractionType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOperationHours

`func (o *HotelAttractionType) GetOperationHours() string`

GetOperationHours returns the OperationHours field if non-nil, zero value otherwise.

### GetOperationHoursOk

`func (o *HotelAttractionType) GetOperationHoursOk() (*string, bool)`

GetOperationHoursOk returns a tuple with the OperationHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationHours

`func (o *HotelAttractionType) SetOperationHours(v string)`

SetOperationHours sets OperationHours field to given value.

### HasOperationHours

`func (o *HotelAttractionType) HasOperationHours() bool`

HasOperationHours returns a boolean if a field has been set.

### GetPriceRange

`func (o *HotelAttractionType) GetPriceRange() string`

GetPriceRange returns the PriceRange field if non-nil, zero value otherwise.

### GetPriceRangeOk

`func (o *HotelAttractionType) GetPriceRangeOk() (*string, bool)`

GetPriceRangeOk returns a tuple with the PriceRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceRange

`func (o *HotelAttractionType) SetPriceRange(v string)`

SetPriceRange sets PriceRange field to given value.

### HasPriceRange

`func (o *HotelAttractionType) HasPriceRange() bool`

HasPriceRange returns a boolean if a field has been set.

### GetRelativePosition

`func (o *HotelAttractionType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *HotelAttractionType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *HotelAttractionType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *HotelAttractionType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetType

`func (o *HotelAttractionType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HotelAttractionType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HotelAttractionType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *HotelAttractionType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetWebsite

`func (o *HotelAttractionType) GetWebsite() URLType`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *HotelAttractionType) GetWebsiteOk() (*URLType, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *HotelAttractionType) SetWebsite(v URLType)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *HotelAttractionType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


