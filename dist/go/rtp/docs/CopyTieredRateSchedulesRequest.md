# CopyTieredRateSchedulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdultOffset** | Pointer to [**RateOffsetType**](RateOffsetType.md) |  | [optional] 
**ChildOffset** | Pointer to [**RateOffsetType**](RateOffsetType.md) |  | [optional] 
**CopyFromTierId** | Pointer to **int32** |  | [optional] 
**CopyToTierId** | Pointer to **int32** |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanSchedulesIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyTieredRateSchedulesRequest

`func NewCopyTieredRateSchedulesRequest() *CopyTieredRateSchedulesRequest`

NewCopyTieredRateSchedulesRequest instantiates a new CopyTieredRateSchedulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTieredRateSchedulesRequestWithDefaults

`func NewCopyTieredRateSchedulesRequestWithDefaults() *CopyTieredRateSchedulesRequest`

NewCopyTieredRateSchedulesRequestWithDefaults instantiates a new CopyTieredRateSchedulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdultOffset

`func (o *CopyTieredRateSchedulesRequest) GetAdultOffset() RateOffsetType`

GetAdultOffset returns the AdultOffset field if non-nil, zero value otherwise.

### GetAdultOffsetOk

`func (o *CopyTieredRateSchedulesRequest) GetAdultOffsetOk() (*RateOffsetType, bool)`

GetAdultOffsetOk returns a tuple with the AdultOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultOffset

`func (o *CopyTieredRateSchedulesRequest) SetAdultOffset(v RateOffsetType)`

SetAdultOffset sets AdultOffset field to given value.

### HasAdultOffset

`func (o *CopyTieredRateSchedulesRequest) HasAdultOffset() bool`

HasAdultOffset returns a boolean if a field has been set.

### GetChildOffset

`func (o *CopyTieredRateSchedulesRequest) GetChildOffset() RateOffsetType`

GetChildOffset returns the ChildOffset field if non-nil, zero value otherwise.

### GetChildOffsetOk

`func (o *CopyTieredRateSchedulesRequest) GetChildOffsetOk() (*RateOffsetType, bool)`

GetChildOffsetOk returns a tuple with the ChildOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildOffset

`func (o *CopyTieredRateSchedulesRequest) SetChildOffset(v RateOffsetType)`

SetChildOffset sets ChildOffset field to given value.

### HasChildOffset

`func (o *CopyTieredRateSchedulesRequest) HasChildOffset() bool`

HasChildOffset returns a boolean if a field has been set.

### GetCopyFromTierId

`func (o *CopyTieredRateSchedulesRequest) GetCopyFromTierId() int32`

GetCopyFromTierId returns the CopyFromTierId field if non-nil, zero value otherwise.

### GetCopyFromTierIdOk

`func (o *CopyTieredRateSchedulesRequest) GetCopyFromTierIdOk() (*int32, bool)`

GetCopyFromTierIdOk returns a tuple with the CopyFromTierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyFromTierId

`func (o *CopyTieredRateSchedulesRequest) SetCopyFromTierId(v int32)`

SetCopyFromTierId sets CopyFromTierId field to given value.

### HasCopyFromTierId

`func (o *CopyTieredRateSchedulesRequest) HasCopyFromTierId() bool`

HasCopyFromTierId returns a boolean if a field has been set.

### GetCopyToTierId

`func (o *CopyTieredRateSchedulesRequest) GetCopyToTierId() int32`

GetCopyToTierId returns the CopyToTierId field if non-nil, zero value otherwise.

### GetCopyToTierIdOk

`func (o *CopyTieredRateSchedulesRequest) GetCopyToTierIdOk() (*int32, bool)`

GetCopyToTierIdOk returns a tuple with the CopyToTierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToTierId

`func (o *CopyTieredRateSchedulesRequest) SetCopyToTierId(v int32)`

SetCopyToTierId sets CopyToTierId field to given value.

### HasCopyToTierId

`func (o *CopyTieredRateSchedulesRequest) HasCopyToTierId() bool`

HasCopyToTierId returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyTieredRateSchedulesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyTieredRateSchedulesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyTieredRateSchedulesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyTieredRateSchedulesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *CopyTieredRateSchedulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTieredRateSchedulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTieredRateSchedulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTieredRateSchedulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *CopyTieredRateSchedulesRequest) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *CopyTieredRateSchedulesRequest) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *CopyTieredRateSchedulesRequest) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *CopyTieredRateSchedulesRequest) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanSchedulesIdList

`func (o *CopyTieredRateSchedulesRequest) GetRatePlanSchedulesIdList() []UniqueIDType`

GetRatePlanSchedulesIdList returns the RatePlanSchedulesIdList field if non-nil, zero value otherwise.

### GetRatePlanSchedulesIdListOk

`func (o *CopyTieredRateSchedulesRequest) GetRatePlanSchedulesIdListOk() (*[]UniqueIDType, bool)`

GetRatePlanSchedulesIdListOk returns a tuple with the RatePlanSchedulesIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanSchedulesIdList

`func (o *CopyTieredRateSchedulesRequest) SetRatePlanSchedulesIdList(v []UniqueIDType)`

SetRatePlanSchedulesIdList sets RatePlanSchedulesIdList field to given value.

### HasRatePlanSchedulesIdList

`func (o *CopyTieredRateSchedulesRequest) HasRatePlanSchedulesIdList() bool`

HasRatePlanSchedulesIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTieredRateSchedulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTieredRateSchedulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTieredRateSchedulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTieredRateSchedulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


