# TieredRateSchedulesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdultOffset** | Pointer to [**RateOffsetType**](RateOffsetType.md) |  | [optional] 
**ChildOffset** | Pointer to [**RateOffsetType**](RateOffsetType.md) |  | [optional] 
**CopyFromTierId** | Pointer to **int32** |  | [optional] 
**CopyToTierId** | Pointer to **int32** |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanSchedulesIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTieredRateSchedulesCopy

`func NewTieredRateSchedulesCopy() *TieredRateSchedulesCopy`

NewTieredRateSchedulesCopy instantiates a new TieredRateSchedulesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTieredRateSchedulesCopyWithDefaults

`func NewTieredRateSchedulesCopyWithDefaults() *TieredRateSchedulesCopy`

NewTieredRateSchedulesCopyWithDefaults instantiates a new TieredRateSchedulesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdultOffset

`func (o *TieredRateSchedulesCopy) GetAdultOffset() RateOffsetType`

GetAdultOffset returns the AdultOffset field if non-nil, zero value otherwise.

### GetAdultOffsetOk

`func (o *TieredRateSchedulesCopy) GetAdultOffsetOk() (*RateOffsetType, bool)`

GetAdultOffsetOk returns a tuple with the AdultOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultOffset

`func (o *TieredRateSchedulesCopy) SetAdultOffset(v RateOffsetType)`

SetAdultOffset sets AdultOffset field to given value.

### HasAdultOffset

`func (o *TieredRateSchedulesCopy) HasAdultOffset() bool`

HasAdultOffset returns a boolean if a field has been set.

### GetChildOffset

`func (o *TieredRateSchedulesCopy) GetChildOffset() RateOffsetType`

GetChildOffset returns the ChildOffset field if non-nil, zero value otherwise.

### GetChildOffsetOk

`func (o *TieredRateSchedulesCopy) GetChildOffsetOk() (*RateOffsetType, bool)`

GetChildOffsetOk returns a tuple with the ChildOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildOffset

`func (o *TieredRateSchedulesCopy) SetChildOffset(v RateOffsetType)`

SetChildOffset sets ChildOffset field to given value.

### HasChildOffset

`func (o *TieredRateSchedulesCopy) HasChildOffset() bool`

HasChildOffset returns a boolean if a field has been set.

### GetCopyFromTierId

`func (o *TieredRateSchedulesCopy) GetCopyFromTierId() int32`

GetCopyFromTierId returns the CopyFromTierId field if non-nil, zero value otherwise.

### GetCopyFromTierIdOk

`func (o *TieredRateSchedulesCopy) GetCopyFromTierIdOk() (*int32, bool)`

GetCopyFromTierIdOk returns a tuple with the CopyFromTierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyFromTierId

`func (o *TieredRateSchedulesCopy) SetCopyFromTierId(v int32)`

SetCopyFromTierId sets CopyFromTierId field to given value.

### HasCopyFromTierId

`func (o *TieredRateSchedulesCopy) HasCopyFromTierId() bool`

HasCopyFromTierId returns a boolean if a field has been set.

### GetCopyToTierId

`func (o *TieredRateSchedulesCopy) GetCopyToTierId() int32`

GetCopyToTierId returns the CopyToTierId field if non-nil, zero value otherwise.

### GetCopyToTierIdOk

`func (o *TieredRateSchedulesCopy) GetCopyToTierIdOk() (*int32, bool)`

GetCopyToTierIdOk returns a tuple with the CopyToTierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToTierId

`func (o *TieredRateSchedulesCopy) SetCopyToTierId(v int32)`

SetCopyToTierId sets CopyToTierId field to given value.

### HasCopyToTierId

`func (o *TieredRateSchedulesCopy) HasCopyToTierId() bool`

HasCopyToTierId returns a boolean if a field has been set.

### GetHotelId

`func (o *TieredRateSchedulesCopy) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TieredRateSchedulesCopy) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TieredRateSchedulesCopy) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TieredRateSchedulesCopy) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *TieredRateSchedulesCopy) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TieredRateSchedulesCopy) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TieredRateSchedulesCopy) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TieredRateSchedulesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *TieredRateSchedulesCopy) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *TieredRateSchedulesCopy) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *TieredRateSchedulesCopy) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *TieredRateSchedulesCopy) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanSchedulesIdList

`func (o *TieredRateSchedulesCopy) GetRatePlanSchedulesIdList() UniqueIDListType`

GetRatePlanSchedulesIdList returns the RatePlanSchedulesIdList field if non-nil, zero value otherwise.

### GetRatePlanSchedulesIdListOk

`func (o *TieredRateSchedulesCopy) GetRatePlanSchedulesIdListOk() (*UniqueIDListType, bool)`

GetRatePlanSchedulesIdListOk returns a tuple with the RatePlanSchedulesIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanSchedulesIdList

`func (o *TieredRateSchedulesCopy) SetRatePlanSchedulesIdList(v UniqueIDListType)`

SetRatePlanSchedulesIdList sets RatePlanSchedulesIdList field to given value.

### HasRatePlanSchedulesIdList

`func (o *TieredRateSchedulesCopy) HasRatePlanSchedulesIdList() bool`

HasRatePlanSchedulesIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *TieredRateSchedulesCopy) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TieredRateSchedulesCopy) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TieredRateSchedulesCopy) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TieredRateSchedulesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


