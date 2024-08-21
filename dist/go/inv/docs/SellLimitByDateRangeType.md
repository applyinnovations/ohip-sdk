# SellLimitByDateRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CodeCategory** | Pointer to [**RoomCodeCategoryType**](RoomCodeCategoryType.md) |  | [optional] 
**CodeValue** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**SellLimitDateRanges** | Pointer to [**[]SellLimitDateRangeType**](SellLimitDateRangeType.md) | Collection of date ranges and sell limit amount. | [optional] 

## Methods

### NewSellLimitByDateRangeType

`func NewSellLimitByDateRangeType() *SellLimitByDateRangeType`

NewSellLimitByDateRangeType instantiates a new SellLimitByDateRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellLimitByDateRangeTypeWithDefaults

`func NewSellLimitByDateRangeTypeWithDefaults() *SellLimitByDateRangeType`

NewSellLimitByDateRangeTypeWithDefaults instantiates a new SellLimitByDateRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodeCategory

`func (o *SellLimitByDateRangeType) GetCodeCategory() RoomCodeCategoryType`

GetCodeCategory returns the CodeCategory field if non-nil, zero value otherwise.

### GetCodeCategoryOk

`func (o *SellLimitByDateRangeType) GetCodeCategoryOk() (*RoomCodeCategoryType, bool)`

GetCodeCategoryOk returns a tuple with the CodeCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeCategory

`func (o *SellLimitByDateRangeType) SetCodeCategory(v RoomCodeCategoryType)`

SetCodeCategory sets CodeCategory field to given value.

### HasCodeCategory

`func (o *SellLimitByDateRangeType) HasCodeCategory() bool`

HasCodeCategory returns a boolean if a field has been set.

### GetCodeValue

`func (o *SellLimitByDateRangeType) GetCodeValue() string`

GetCodeValue returns the CodeValue field if non-nil, zero value otherwise.

### GetCodeValueOk

`func (o *SellLimitByDateRangeType) GetCodeValueOk() (*string, bool)`

GetCodeValueOk returns a tuple with the CodeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeValue

`func (o *SellLimitByDateRangeType) SetCodeValue(v string)`

SetCodeValue sets CodeValue field to given value.

### HasCodeValue

`func (o *SellLimitByDateRangeType) HasCodeValue() bool`

HasCodeValue returns a boolean if a field has been set.

### GetHotelId

`func (o *SellLimitByDateRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SellLimitByDateRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SellLimitByDateRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SellLimitByDateRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSellLimitDateRanges

`func (o *SellLimitByDateRangeType) GetSellLimitDateRanges() []SellLimitDateRangeType`

GetSellLimitDateRanges returns the SellLimitDateRanges field if non-nil, zero value otherwise.

### GetSellLimitDateRangesOk

`func (o *SellLimitByDateRangeType) GetSellLimitDateRangesOk() (*[]SellLimitDateRangeType, bool)`

GetSellLimitDateRangesOk returns a tuple with the SellLimitDateRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitDateRanges

`func (o *SellLimitByDateRangeType) SetSellLimitDateRanges(v []SellLimitDateRangeType)`

SetSellLimitDateRanges sets SellLimitDateRanges field to given value.

### HasSellLimitDateRanges

`func (o *SellLimitByDateRangeType) HasSellLimitDateRanges() bool`

HasSellLimitDateRanges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


