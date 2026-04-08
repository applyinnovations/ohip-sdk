# HurdleRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HurdleDate** | Pointer to **string** | Hurdle date for which the hurdle rate is scheduled. | [optional] 
**RoomType** | Pointer to **string** | Room type for which the hurdle rate applies to. | [optional] 
**RoomCategory** | Pointer to **string** | Internal room category of the room type for which the hurdle rate applies to. | [optional] 
**YieldCategory** | Pointer to **string** | Yield category for which the hurdle rate applies to. | [optional] 
**LengthOfStay** | Pointer to **float32** | Length of stay for which the hurdle rate applies to. | [optional] 
**YieldMarketCode** | Pointer to **string** | Yield market code for which the hurdle rate applies to. | [optional] 
**Hurdle** | Pointer to **float32** | Defines the amount to be reached before rate code or room type is made available. | [optional] 
**Delta** | Pointer to **float32** | Defines the amount to be added to hurdle rate for each additional rooms sold up to the ceiling. | [optional] 
**Ceiling** | Pointer to **float32** | Maximum number of rooms to sell for which the delta is applicable to be aded to hurdle rate. | [optional] 
**MaximumSolds** | Pointer to **float32** | Maximum number of rooms to sell. | [optional] 
**RoomsSold** | Pointer to **float32** | Defines the actual number of rooms sold. | [optional] 
**Override** | Pointer to **bool** | Specifies whether to override hurdle rate or not. | [optional] 

## Methods

### NewHurdleRateType

`func NewHurdleRateType() *HurdleRateType`

NewHurdleRateType instantiates a new HurdleRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHurdleRateTypeWithDefaults

`func NewHurdleRateTypeWithDefaults() *HurdleRateType`

NewHurdleRateTypeWithDefaults instantiates a new HurdleRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHurdleDate

`func (o *HurdleRateType) GetHurdleDate() string`

GetHurdleDate returns the HurdleDate field if non-nil, zero value otherwise.

### GetHurdleDateOk

`func (o *HurdleRateType) GetHurdleDateOk() (*string, bool)`

GetHurdleDateOk returns a tuple with the HurdleDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHurdleDate

`func (o *HurdleRateType) SetHurdleDate(v string)`

SetHurdleDate sets HurdleDate field to given value.

### HasHurdleDate

`func (o *HurdleRateType) HasHurdleDate() bool`

HasHurdleDate returns a boolean if a field has been set.

### GetRoomType

`func (o *HurdleRateType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *HurdleRateType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *HurdleRateType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *HurdleRateType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomCategory

`func (o *HurdleRateType) GetRoomCategory() string`

GetRoomCategory returns the RoomCategory field if non-nil, zero value otherwise.

### GetRoomCategoryOk

`func (o *HurdleRateType) GetRoomCategoryOk() (*string, bool)`

GetRoomCategoryOk returns a tuple with the RoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCategory

`func (o *HurdleRateType) SetRoomCategory(v string)`

SetRoomCategory sets RoomCategory field to given value.

### HasRoomCategory

`func (o *HurdleRateType) HasRoomCategory() bool`

HasRoomCategory returns a boolean if a field has been set.

### GetYieldCategory

`func (o *HurdleRateType) GetYieldCategory() string`

GetYieldCategory returns the YieldCategory field if non-nil, zero value otherwise.

### GetYieldCategoryOk

`func (o *HurdleRateType) GetYieldCategoryOk() (*string, bool)`

GetYieldCategoryOk returns a tuple with the YieldCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldCategory

`func (o *HurdleRateType) SetYieldCategory(v string)`

SetYieldCategory sets YieldCategory field to given value.

### HasYieldCategory

`func (o *HurdleRateType) HasYieldCategory() bool`

HasYieldCategory returns a boolean if a field has been set.

### GetLengthOfStay

`func (o *HurdleRateType) GetLengthOfStay() float32`

GetLengthOfStay returns the LengthOfStay field if non-nil, zero value otherwise.

### GetLengthOfStayOk

`func (o *HurdleRateType) GetLengthOfStayOk() (*float32, bool)`

GetLengthOfStayOk returns a tuple with the LengthOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLengthOfStay

`func (o *HurdleRateType) SetLengthOfStay(v float32)`

SetLengthOfStay sets LengthOfStay field to given value.

### HasLengthOfStay

`func (o *HurdleRateType) HasLengthOfStay() bool`

HasLengthOfStay returns a boolean if a field has been set.

### GetYieldMarketCode

`func (o *HurdleRateType) GetYieldMarketCode() string`

GetYieldMarketCode returns the YieldMarketCode field if non-nil, zero value otherwise.

### GetYieldMarketCodeOk

`func (o *HurdleRateType) GetYieldMarketCodeOk() (*string, bool)`

GetYieldMarketCodeOk returns a tuple with the YieldMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldMarketCode

`func (o *HurdleRateType) SetYieldMarketCode(v string)`

SetYieldMarketCode sets YieldMarketCode field to given value.

### HasYieldMarketCode

`func (o *HurdleRateType) HasYieldMarketCode() bool`

HasYieldMarketCode returns a boolean if a field has been set.

### GetHurdle

`func (o *HurdleRateType) GetHurdle() float32`

GetHurdle returns the Hurdle field if non-nil, zero value otherwise.

### GetHurdleOk

`func (o *HurdleRateType) GetHurdleOk() (*float32, bool)`

GetHurdleOk returns a tuple with the Hurdle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHurdle

`func (o *HurdleRateType) SetHurdle(v float32)`

SetHurdle sets Hurdle field to given value.

### HasHurdle

`func (o *HurdleRateType) HasHurdle() bool`

HasHurdle returns a boolean if a field has been set.

### GetDelta

`func (o *HurdleRateType) GetDelta() float32`

GetDelta returns the Delta field if non-nil, zero value otherwise.

### GetDeltaOk

`func (o *HurdleRateType) GetDeltaOk() (*float32, bool)`

GetDeltaOk returns a tuple with the Delta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelta

`func (o *HurdleRateType) SetDelta(v float32)`

SetDelta sets Delta field to given value.

### HasDelta

`func (o *HurdleRateType) HasDelta() bool`

HasDelta returns a boolean if a field has been set.

### GetCeiling

`func (o *HurdleRateType) GetCeiling() float32`

GetCeiling returns the Ceiling field if non-nil, zero value otherwise.

### GetCeilingOk

`func (o *HurdleRateType) GetCeilingOk() (*float32, bool)`

GetCeilingOk returns a tuple with the Ceiling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCeiling

`func (o *HurdleRateType) SetCeiling(v float32)`

SetCeiling sets Ceiling field to given value.

### HasCeiling

`func (o *HurdleRateType) HasCeiling() bool`

HasCeiling returns a boolean if a field has been set.

### GetMaximumSolds

`func (o *HurdleRateType) GetMaximumSolds() float32`

GetMaximumSolds returns the MaximumSolds field if non-nil, zero value otherwise.

### GetMaximumSoldsOk

`func (o *HurdleRateType) GetMaximumSoldsOk() (*float32, bool)`

GetMaximumSoldsOk returns a tuple with the MaximumSolds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumSolds

`func (o *HurdleRateType) SetMaximumSolds(v float32)`

SetMaximumSolds sets MaximumSolds field to given value.

### HasMaximumSolds

`func (o *HurdleRateType) HasMaximumSolds() bool`

HasMaximumSolds returns a boolean if a field has been set.

### GetRoomsSold

`func (o *HurdleRateType) GetRoomsSold() float32`

GetRoomsSold returns the RoomsSold field if non-nil, zero value otherwise.

### GetRoomsSoldOk

`func (o *HurdleRateType) GetRoomsSoldOk() (*float32, bool)`

GetRoomsSoldOk returns a tuple with the RoomsSold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsSold

`func (o *HurdleRateType) SetRoomsSold(v float32)`

SetRoomsSold sets RoomsSold field to given value.

### HasRoomsSold

`func (o *HurdleRateType) HasRoomsSold() bool`

HasRoomsSold returns a boolean if a field has been set.

### GetOverride

`func (o *HurdleRateType) GetOverride() bool`

GetOverride returns the Override field if non-nil, zero value otherwise.

### GetOverrideOk

`func (o *HurdleRateType) GetOverrideOk() (*bool, bool)`

GetOverrideOk returns a tuple with the Override field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverride

`func (o *HurdleRateType) SetOverride(v bool)`

SetOverride sets Override field to given value.

### HasOverride

`func (o *HurdleRateType) HasOverride() bool`

HasOverride returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


