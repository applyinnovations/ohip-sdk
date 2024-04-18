# CopyHotelDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Hotels** | Pointer to **[]string** |  | [optional] 
**TemplateHotelDetails** | Pointer to [**[]TemplateHotelDetailIDType**](TemplateHotelDetailIDType.md) | Collection of template level hotel detail identifiers. | [optional] 

## Methods

### NewCopyHotelDetailsType

`func NewCopyHotelDetailsType() *CopyHotelDetailsType`

NewCopyHotelDetailsType instantiates a new CopyHotelDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyHotelDetailsTypeWithDefaults

`func NewCopyHotelDetailsTypeWithDefaults() *CopyHotelDetailsType`

NewCopyHotelDetailsTypeWithDefaults instantiates a new CopyHotelDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotels

`func (o *CopyHotelDetailsType) GetHotels() []string`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *CopyHotelDetailsType) GetHotelsOk() (*[]string, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *CopyHotelDetailsType) SetHotels(v []string)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *CopyHotelDetailsType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.

### GetTemplateHotelDetails

`func (o *CopyHotelDetailsType) GetTemplateHotelDetails() []TemplateHotelDetailIDType`

GetTemplateHotelDetails returns the TemplateHotelDetails field if non-nil, zero value otherwise.

### GetTemplateHotelDetailsOk

`func (o *CopyHotelDetailsType) GetTemplateHotelDetailsOk() (*[]TemplateHotelDetailIDType, bool)`

GetTemplateHotelDetailsOk returns a tuple with the TemplateHotelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHotelDetails

`func (o *CopyHotelDetailsType) SetTemplateHotelDetails(v []TemplateHotelDetailIDType)`

SetTemplateHotelDetails sets TemplateHotelDetails field to given value.

### HasTemplateHotelDetails

`func (o *CopyHotelDetailsType) HasTemplateHotelDetails() bool`

HasTemplateHotelDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

