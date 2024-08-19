# HurdleRateEditType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code for which the hurdle rate belongs to. | [optional] 
**HurdleDate** | Pointer to **string** | Hurdle date for which the hurdle rate is scheduled. | [optional] 
**LengthOfStay** | Pointer to **float32** | Length of stay for which the hurdle rate applies to. | [optional] 
**NewHurdleRate** | Pointer to [**HurdleRateType**](HurdleRateType.md) |  | [optional] 
**RoomCategory** | Pointer to **string** | Internal room category of the room type for which the hurdle rate applies to. | [optional] 
**RoomType** | Pointer to **string** | Room type for which the hurdle rate applies to. | [optional] 
**YieldCategory** | Pointer to **string** | Yield category for which the hurdle rate applies to. | [optional] 
**YieldMarketCode** | Pointer to **string** | Yield market code for which the hurdle rate applies to. | [optional] 

## Methods

### NewHurdleRateEditType

`func NewHurdleRateEditType() *HurdleRateEditType`

NewHurdleRateEditType instantiates a new HurdleRateEditType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHurdleRateEditTypeWithDefaults

`func NewHurdleRateEditTypeWithDefaults() *HurdleRateEditType`

NewHurdleRateEditTypeWithDefaults instantiates a new HurdleRateEditType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HurdleRateEditType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HurdleRateEditType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HurdleRateEditType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HurdleRateEditType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHurdleDate

`func (o *HurdleRateEditType) GetHurdleDate() string`

GetHurdleDate returns the HurdleDate field if non-nil, zero value otherwise.

### GetHurdleDateOk

`func (o *HurdleRateEditType) GetHurdleDateOk() (*string, bool)`

GetHurdleDateOk returns a tuple with the HurdleDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHurdleDate

`func (o *HurdleRateEditType) SetHurdleDate(v string)`

SetHurdleDate sets HurdleDate field to given value.

### HasHurdleDate

`func (o *HurdleRateEditType) HasHurdleDate() bool`

HasHurdleDate returns a boolean if a field has been set.

### GetLengthOfStay

`func (o *HurdleRateEditType) GetLengthOfStay() float32`

GetLengthOfStay returns the LengthOfStay field if non-nil, zero value otherwise.

### GetLengthOfStayOk

`func (o *HurdleRateEditType) GetLengthOfStayOk() (*float32, bool)`

GetLengthOfStayOk returns a tuple with the LengthOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLengthOfStay

`func (o *HurdleRateEditType) SetLengthOfStay(v float32)`

SetLengthOfStay sets LengthOfStay field to given value.

### HasLengthOfStay

`func (o *HurdleRateEditType) HasLengthOfStay() bool`

HasLengthOfStay returns a boolean if a field has been set.

### GetNewHurdleRate

`func (o *HurdleRateEditType) GetNewHurdleRate() HurdleRateType`

GetNewHurdleRate returns the NewHurdleRate field if non-nil, zero value otherwise.

### GetNewHurdleRateOk

`func (o *HurdleRateEditType) GetNewHurdleRateOk() (*HurdleRateType, bool)`

GetNewHurdleRateOk returns a tuple with the NewHurdleRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewHurdleRate

`func (o *HurdleRateEditType) SetNewHurdleRate(v HurdleRateType)`

SetNewHurdleRate sets NewHurdleRate field to given value.

### HasNewHurdleRate

`func (o *HurdleRateEditType) HasNewHurdleRate() bool`

HasNewHurdleRate returns a boolean if a field has been set.

### GetRoomCategory

`func (o *HurdleRateEditType) GetRoomCategory() string`

GetRoomCategory returns the RoomCategory field if non-nil, zero value otherwise.

### GetRoomCategoryOk

`func (o *HurdleRateEditType) GetRoomCategoryOk() (*string, bool)`

GetRoomCategoryOk returns a tuple with the RoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCategory

`func (o *HurdleRateEditType) SetRoomCategory(v string)`

SetRoomCategory sets RoomCategory field to given value.

### HasRoomCategory

`func (o *HurdleRateEditType) HasRoomCategory() bool`

HasRoomCategory returns a boolean if a field has been set.

### GetRoomType

`func (o *HurdleRateEditType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *HurdleRateEditType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *HurdleRateEditType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *HurdleRateEditType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetYieldCategory

`func (o *HurdleRateEditType) GetYieldCategory() string`

GetYieldCategory returns the YieldCategory field if non-nil, zero value otherwise.

### GetYieldCategoryOk

`func (o *HurdleRateEditType) GetYieldCategoryOk() (*string, bool)`

GetYieldCategoryOk returns a tuple with the YieldCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldCategory

`func (o *HurdleRateEditType) SetYieldCategory(v string)`

SetYieldCategory sets YieldCategory field to given value.

### HasYieldCategory

`func (o *HurdleRateEditType) HasYieldCategory() bool`

HasYieldCategory returns a boolean if a field has been set.

### GetYieldMarketCode

`func (o *HurdleRateEditType) GetYieldMarketCode() string`

GetYieldMarketCode returns the YieldMarketCode field if non-nil, zero value otherwise.

### GetYieldMarketCodeOk

`func (o *HurdleRateEditType) GetYieldMarketCodeOk() (*string, bool)`

GetYieldMarketCodeOk returns a tuple with the YieldMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldMarketCode

`func (o *HurdleRateEditType) SetYieldMarketCode(v string)`

SetYieldMarketCode sets YieldMarketCode field to given value.

### HasYieldMarketCode

`func (o *HurdleRateEditType) HasYieldMarketCode() bool`

HasYieldMarketCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


